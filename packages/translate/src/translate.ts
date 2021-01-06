import * as graphql from 'graphql';
import * as n from '@neo4ts/query-builder';
import Graph from 'graphology';

export class Cypher {
  private _schema: graphql.GraphQLSchema;

  constructor(schema: graphql.GraphQLSchema) {
    this._schema = schema;
  }

  translate(query: graphql.DocumentNode): n.QueryBuilder {
    const typeInfo = new graphql.TypeInfo(this._schema);

    const debug = (
      action: 'enter' | 'leave',
      node: graphql.ASTKindToNode[keyof graphql.ASTKindToNode]
    ) =>
      console.log(
        action === 'enter' ? '\x1b[32m' : '\x1b[31m',
        node.kind,
        JSON.stringify(
          [
            'getType',
            'getParentType',
            'getInputType',
            'getFieldDef',
            'getDefaultValue',
            'getDirective',
            'getArgument',
            'getEnumValue'
          ]
            .map(v => {
              // @ts-ignore
              const info = typeInfo[v]();
              return info ? { [v]: info } : {};
            })
            .filter(t => Object.keys(t).length),
          null,
          2
        )
      );

    const graph = new Graph<{
      type?: string;
      fields?: { [key: string]: boolean };
    }>();

    const currentNode: string[] = [];

    const fragments: graphql.FragmentDefinitionNode[] = [];

    function isField(object: any): object is graphql.FieldNode {
      return object?.kind === 'Field';
    }

    function isRelationDirective(object: any): object is graphql.DirectiveNode {
      return object?.kind === 'Directive' && object?.name.value === 'relation';
    }

    function isEnumValue(object: any): object is graphql.EnumValueNode {
      return object?.kind === 'EnumValue';
    }

    const visitor: graphql.Visitor<graphql.ASTKindToNode> = {
      SelectionSet: {
        enter(node) {
          const parentType = typeInfo.getParentType();
          const fieldDef = typeInfo.getFieldDef();
          if (fieldDef && parentType && parentType.name !== 'Query') {
            graph.mergeNode(fieldDef.name, { type: parentType.name });

            if (currentNode.length) {
              const lastNode = currentNode[currentNode.length - 1];

              const relationDirective = fieldDef.astNode?.directives?.[0];
              if (isRelationDirective(relationDirective)) {
                const direction = relationDirective.arguments?.find(
                  a => a.name.value === 'direction'
                )?.value;

                if (isEnumValue(direction)) {
                  const attributes = {
                    relation: relationDirective?.arguments
                  };
                  if (direction.value === 'IN') {
                    graph.addDirectedEdge(fieldDef.name, lastNode, attributes);
                  } else {
                    graph.addDirectedEdge(lastNode, fieldDef.name, attributes);
                  }
                }
              } else {
                graph.addEdge(lastNode, fieldDef.name);
              }
            }
            currentNode.push(fieldDef.name);
          }
        },
        leave() {
          currentNode.pop();
        }
      },
      Field: {
        enter(node) {
          const parentType = typeInfo.getParentType();
          const type = typeInfo.getType();
          if (type && parentType && parentType.name !== 'Query') {
            const fieldDef = typeInfo.getFieldDef();

            const namedType = graphql.getNamedType(type);
            if (currentNode.length && graphql.isScalarType(namedType)) {
              graph.mergeNodeAttributes(currentNode[currentNode.length - 1], {
                fields: {
                  ...graph.getNodeAttributes(
                    currentNode[currentNode.length - 1]
                  ).fields,
                  [fieldDef.name]: true
                }
              });
            }
          }
        }
      },
      FragmentDefinition: {
        enter(node) {
          fragments.push(node);
        }
      },
      FragmentSpread: {
        enter(node) {
          const fragment = fragments.find(
            f => f.name.value === node.name.value
          );
          if (fragment) {
            const graphNode = currentNode[currentNode.length - 1];
            fragment.selectionSet.selections.filter(isField).forEach(field => {
              const name = field.name.value;
              if (name) {
                graph.mergeNodeAttributes(graphNode, {
                  fields: {
                    ...graph.getNodeAttributes(graphNode).fields,
                    [name]: true
                  }
                });
              }
            });
          }
        }
      }
    };

    graphql.visit(query, graphql.visitWithTypeInfo(typeInfo, visitor));

    // console.log(JSON.stringify(graph.toJSON(), null, 2));

    const cypher = n.query();
    const matcher = n.match();
    const returns = n.returns();

    let properties: string[] = [];

    for (const [node, attributes] of graph.nodeEntries()) {
      const { type, fields } = attributes;

      // if (graph.edges(node).length) {
      //   graph.forEachInEdge(
      //     node,
      //     (
      //       edge,
      //       attributes,
      //       source,
      //       target,
      //       sourceAttributes,
      //       targetAttributes
      //     ) => {
      //       matcher
      //         .node(n.node().name(source).label(sourceAttributes.type!))
      //         .related(
      //           n
      //             .nodeRelation()
      //             .in()
      //             .type(
      //               // @ts-ignore
      //               attributes.relation.find(a => a.name.value === 'name').value
      //                 .value
      //             )
      //         )
      //         .node(n.node().name(target).label(targetAttributes.type!));
      //     }
      //   );
      // }
    }

    console.log(properties);

    const mainNode = graph.nodes()[0];
    const { type, fields } = graph.getNodeAttributes(mainNode);

    properties = [...Object.keys(fields!), ...properties];

    matcher.node(n.node().name(mainNode).label(type!));
    returns.columns([n.proj().name(mainNode).properties(properties)]);

    return cypher.match(matcher).return(returns);
  }
}
