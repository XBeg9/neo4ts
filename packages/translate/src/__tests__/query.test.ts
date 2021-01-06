import gql from 'graphql-tag';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { Cypher } from '../translate';

describe('Cypher', () => {
  let cypher!: Cypher;
  beforeAll(() => {
    cypher = new Cypher(
      makeExecutableSchema({
        typeDefs: gql`
          enum EdgeDirection {
            IN
            OUT
          }

          directive @relation(
            name: String!
            direction: EdgeDirection!
          ) on FIELD_DEFINITION

          type Movie {
            id: ID!
            title: String!
            released: Int!
            tagline: String
            actors: [Person!]! @relation(name: "ACTED_IN", direction: IN)
            producer: Person!
            directors: [Person!]! @relation(name: "DIRECTED", direction: IN)
          }

          type Person {
            id: ID!
            born: Int!
            name: String
          }

          type Query {
            movies: [Movie!]!
          }
        `,
        resolvers: {}
      })
    );
  });

  describe('translate', () => {
    it('simple query', () => {
      const query = gql`
        query movies {
          movies {
            title
            released
          }
        }
      `;

      expect(cypher.translate(query).build()).toBe(
        `MATCH (movies:Movie) RETURN movies { .title, .released }`
      );
    });

    it('support duplicated fields', () => {
      const query = gql`
        query movies {
          movies {
            title
            title
            released
          }
        }
      `;

      expect(cypher.translate(query).build()).toBe(
        `MATCH (movies:Movie) RETURN movies { .title, .released }`
      );
    });

    it('support fragment', () => {
      const query = gql`
        fragment MovieDetails on Movie {
          title
          released
        }

        query movies {
          movies {
            ...MovieDetails
            tagline
          }
        }
      `;

      expect(cypher.translate(query).build()).toBe(
        `MATCH (movies:Movie) RETURN movies { .title, .released, .tagline }`
      );
    });

    it('support relations', () => {
      const query = gql`
        query movies {
          movies {
            title
            released
            actors {
              name
            }
          }
        }
      `;

      expect(cypher.translate(query).build()).toBe(
        `MATCH (movies:Movie) RETURN movies { .title, .released, actors: [(actors:Person)-[:ACTED_IN]->(movies:Movie) | actors.name] }`
      );
    });

    // it('multiple relations', () => {
    //   const query = gql`
    //     query movies {
    //       movies {
    //         title
    //         released
    //         actors {
    //           name
    //         }
    //         directors {
    //           born
    //         }
    //       }
    //     }
    //   `;

    //   expect(cypher.translate(query).build()).toBe(
    //     `MATCH (actors:Person)-[:ACTED_IN]->(movies:Movie), (directors:Person)-[:DIRECTED]->(movies:Movie) RETURN movies.title, movies.released, actors.name, directors.born`
    //   );
    // });
  });
});
