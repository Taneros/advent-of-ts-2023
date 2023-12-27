type DecipherNaughtyList<L> = L extends `${infer First}/${infer Rest}`
  ? First | DecipherNaughtyList<Rest>
  : L;