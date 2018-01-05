module ColorMath.Rgba exposing
  ( getRed, setRed
  , getGreen, setGreen
  , getBlue, setBlue
  , getAlpha, setAlpha
  , toColor
  )

{-|

# Getting and Setting RGBA Components

## Red
@docs getRed, setRed

## Green
@docs getGreen, setGreen

## Blue
@docs getBlue, setBlue

## Alpha
@docs getAlpha, setAlpha

# Converting RGBA Components to a `Color`
@docs toColor

-}


import Color exposing (Color)
import ColorMath

import Toolkit.Function


{-| Given a `Color`, returns the value of its red channel
-}
getRed : Color -> Int
getRed =
  Color.toRgb
    >> .red


{-| Given an integer value from 0 to 255 and a `Color`, returns an
updated `Color` with the red channel set to the input value
-}
setRed : Int -> Color -> Color
setRed value =
  let
    updateRed r rgba =
      { rgba
      | red = r
      }

  in
    Color.toRgb
      >> updateRed (value |> clamp 0 255)
      >> toColor


{-| Given a `Color`, returns the value of its green channel
-}
getGreen : Color -> Int
getGreen =
  Color.toRgb
    >> .green


{-| Given an integer value from 0 to 255 and a `Color`, returns an
updated `Color` with the green channel set to the input value
-}
setGreen : Int -> Color -> Color
setGreen value =
  let
    updateGreen g rgba =
      { rgba
      | green = g
      }

  in
    Color.toRgb
      >> updateGreen (value |> clamp 0 255)
      >> toColor


{-| Given a `Color`, returns the value of its blue channel
-}
getBlue : Color -> Int
getBlue =
  Color.toRgb
    >> .blue


{-| Given an integer value from 0 to 255 and a `Color`, returns an
updated `Color` with the blue channel set to the input value
-}
setBlue : Int -> Color -> Color
setBlue value =
  let
    updateBlue b rgba =
      { rgba
      | blue = b
      }

  in
    Color.toRgb
      >> updateBlue (value |> clamp 0 255)
      >> toColor


{-| Given a `Color`, returns its alpha channel as a decimal value between 0 and
1
-}
getAlpha : Color -> Float
getAlpha =
  Color.toRgb
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
    Color.toRgb
      >> updateAlpha (value |> clamp 0 1)
      >> toColor


{-| Converts a record containing RGBA components to a
[`Color`](http://package.elm-lang.org/packages/elm-lang/core/latest/Color#Color).
-}
toColor : ColorMath.Rgba -> Color
toColor =
  Toolkit.Function.apply4
    ( .red
      >> clamp 0 255

    , .green
      >> clamp 0 255

    , .blue
      >> clamp 0 255

    , .alpha
      >> clamp 0 1

    )

    >> Toolkit.Function.uncurry4
      Color.rgba
