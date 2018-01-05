module ColorMath exposing
  ( Rgba, Hsla )

{-|

This package includes functions for getting and setting individual
[RGBA](http://package.elm-lang.org/packages/danielnarey/elm-color-math/latest/ColorMath-Rgba)
and
[HSLA](http://package.elm-lang.org/packages/danielnarey/elm-color-math/latest/ColorMath-Hsla)
color components, functions for
[relative color scaling](http://package.elm-lang.org/packages/danielnarey/elm-color-math/latest/ColorMath-Scaling)
by hue, saturation, lightness, and alpha, and functions for converting among
color representations, including
[converting hexadecimal color codes](http://package.elm-lang.org/packages/danielnarey/elm-color-math/latest/ColorMath-Hex)
to Elm `Color` values and vice versa.

# Intermediate Color Representations
@docs Rgba, Hsla

-}


{-| Represents the components of an RGBA color value. This is an alias for the
type returned when `Color.toRgb` is called.

-}
type alias Rgba =
  { red : Int
  , green : Int
  , blue : Int
  , alpha : Float
  }

{-| Represents the components of an HSLA color value. This is an alias for the
type returned when `Color.toHsl` is called.

-}
type alias Hsla =
  { hue : Float
  , saturation : Float
  , lightness : Float
  , alpha : Float
  }
