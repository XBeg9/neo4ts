/**
 * Factory method returns a function that accepts Class constructor methods
 * while invoking will create a instance of the class with specified arguments
 *
 * @template T - Class that will be returned
 * @template P - Arguments to be accepted in the function
 * @param Create - provide class to be factored
 * @returns
 * @internal
 */
export function createFactory<T, P extends any[]>(
  Create: new (...args: P) => T
) {
  return (...args: P) => new Create(...args);
}

export const intersperse = <T, B>(
  arr: T[],
  separator: (idx: number) => B
): Array<T | B> =>
  arr.reduce<Array<T | B>>((acc, currentElement, currentIndex) => {
    const isLast = currentIndex === arr.length - 1;
    return [
      ...acc,
      currentElement,
      ...(isLast ? [] : [separator(currentIndex)])
    ];
  }, []);
