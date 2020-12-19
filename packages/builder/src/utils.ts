export function createFactory<T, P extends any[]>(
  Create: new (...args: P) => T
) {
  return (...args: P) => new Create(...args);
}
