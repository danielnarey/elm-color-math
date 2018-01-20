module Tab exposing
  ( Tab(..), toggle )

type Tab
  = BaseColor
  | Adjustments


toggle : Tab -> Tab
toggle current =
  case current of
    BaseColor ->
      Adjustments

    Adjustments ->
      BaseColor
