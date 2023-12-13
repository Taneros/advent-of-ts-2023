type Reverse<S extends string, Result extends string[] = []> =
  S extends `${infer First}${infer Rest}`
  ? Reverse<Rest, [First, ...Result]>
  : Result extends []
  ? ''
  : Result extends [infer FFirst extends string, ...infer Rrest extends string[]]
  ? `${FFirst}${Reverse<'', Rrest>}`
  : never