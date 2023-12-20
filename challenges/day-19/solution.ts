type Presents = [
  '🛹',
  '🚲',
  '🛴',
  '🏄'
]

type Flaten<A extends unknown[], Acc extends string[] = []> =
  A extends [infer First, ...infer Rest]
  ? First extends string[]
  ? Flaten<Rest, [...Acc, ...First]>
  : Acc
  : Acc

type CheckPresentIndexBiggerThanLength<PresentIndex extends number> =
  Presents[PresentIndex] extends undefined
  ? 0
  : PresentIndex

type MyIterator<ListCount extends number, PresentIndex extends number, U extends unknown[] = []> =
  U['length'] extends ListCount
  ? U
  : MyIterator<ListCount, PresentIndex, [...U, Presents[PresentIndex]]>


type Rebuild<L extends number[], PresentIndex extends unknown[] = [], PresentsArray extends unknown[] = []> =
  L extends [infer First extends number, ...infer Rest extends number[]]
  ? Rebuild<Rest,
    CheckPresentIndexBiggerThanLength<PresentIndex['length']> extends PresentIndex['length'] ? [...PresentIndex, PresentIndex] : [[]], [...PresentsArray, MyIterator<First, CheckPresentIndexBiggerThanLength<PresentIndex['length']>>]>
  : Flaten<PresentsArray>;

// checks
type X = MyIterator<2, 3>
type Y = CheckPresentIndexBiggerThanLength<4>
type Z = Flaten<[['sdf'], ['fff']]>
// keep track of current present
// keep track of array with converted presents