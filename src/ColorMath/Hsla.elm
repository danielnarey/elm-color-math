module ColorMath.Hsla exposing
  ( getHue, setHue
  , getSaturation, setSaturation
  , getLightness, setLightness
  , getAlpha, setAlpha
  , toColor
  )

{-|

# Getting and Setting HSLA Components

## Hue
@docs getHue, setHue

## Saturation
@docs getSaturation, setSaturation

## Lightness
@docs getLightness, setLightness

## Alpha
@docs getAlpha, setAlpha

# Converting HSLA Components to a `Color`
@docs toColor

-}


import Color exposing (Color)
import ColorMath

import Toolkit.Function


-- HELPER

checkForNaN : Float -> Float
checkForNaN value =
  case (value |> isNaN) of
    True ->
      0

    False ->
      value



-- HSL COMPONENTS

{-| Given a `Color`, returns its hue as a decimal value between 0 and 360,
representing degrees on a color wheel

- Note that the standard Elm representation of hue in the `Color` module is in
radians rather than degrees. Degrees are used in this package for compatibility
with CSS and for the sake of human readability.

-}
getHue : Color -> Float
getHue =
  Color.toHsl
    >> .hue
    >> checkForNaN
    >> (*) (180/pi)


{-| Given a decimal value between 0 and 360 (representing degrees on a color
wheel) and a `Color`, returns an updated `Color` with the hue set to the input
value

-}
setHue : Float -> Color -> Color
setHue value =
  let
    updateHue h hsla =
      { hsla
      | hue = h
      }

  in
    Color.toHsl
      >> updateHue (value |> clamp 0 360 |> degrees)
      >> toColor




{-| Given a `Color`, returns its saturation as a decimal value between 0 and 1
-}
getSaturation : Color -> Float
getSaturation =
  Color.toHsl
    >> .saturation
    >> checkForNaN


{-| Given a decimal value between 0 and 1 and a `Color`, returns an updated
`Color` with the saturation set to the input value
-}
setSaturation : Float -> Color -> Color
setSaturation value =
  let
    updateSaturation s hsla =
      { hsla
      | saturation = s
      }

  in
    Color.toHsl
      >> updateSaturation (value |> clamp 0 1)
      >> toColor


{-| Given a `Color`, returns its lightness as a decimal value between 0 and 1
-}
getLightness : Color -> Float
getLightness =
  Color.toHsl
    >> .lightness


{-| Given a decimal value between 0 and 1 and a `Color`, returns an updated
`Color` with the lightness set to the input value
-}
setLightness : Float -> Color -> Color
setLightness value =
  let
    updateLightness l hsla =
      { hsla
      | lightness = l
      }

  in
    Color.toHsl
      >> updateLightness (value |> clamp 0 1)
      >> toColor


{-| Given a `Color`, returns its alpha channel as a decimal value between 0 and
1
-}
getAlpha : Color -> Float
getAlpha =
  Color.toHsl
    >> .alpha


{-| Given a decimal value between 0 and 1 and a `Color`, returns an updated
`Color` with the alpha channel set to the input value
-}
setAlpha : Float -> Color -> Color
setAlpha value =
  let
    updateAlpha a hsla =
      { hsla
      | alpha = a
      }

  in
    Color.toHsl
      >> updateAlpha (value |> clamp 0 1)
      >> toColor


{-| Converts a record containing HSLA components to a
[`Color`](http://package.elm-lang.org/packages/elm-lang/core/latest/Color#Color).
-}
toColor : ColorMath.Hsla -> Color
toColor =
  Toolkit.Function.apply4
    ( .hue
      >> checkForNaN
      >> clamp (degrees 0) (degrees 360)

    , .saturation
      >> checkForNaN
      >> clamp 0 1

    , .lightness
      >> clamp 0 1

    , .alpha
      >> clamp 0 1

    )

    >> Toolkit.Function.uncurry4
      Color.hsla
