type Count<T extends readonly unknown[], Elem, C extends unknown[] = []> =
  T extends [infer First, ...infer Rest]
  ? First extends Elem
  ? Count<Rest, Elem, [...C, C['length']]>
  : Count<Rest, Elem, [...C]>
  : C['length']