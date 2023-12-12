type SantaListProtector<T> = {
  readonly [K in keyof T]: T[K] extends Function | string | number ? T[K] : T[K] extends object ? SantaListProtector<T[K]> : T[K]
};