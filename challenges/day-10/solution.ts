type StreetSuffixTester<S extends string, T extends string>
  = S extends `${infer _} ${infer Rest}` ? StreetSuffixTester<Rest, T> : S extends T ? true : false;