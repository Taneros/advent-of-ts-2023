type FindSanta<T, U extends number[] = [], Santa extends string = '🎅🏼'> =
  T extends [infer First, ...infer Rest]
  ? First extends Santa
  ? U['length']
  : FindSanta<Rest, [...U, U['length']]>
  : never;