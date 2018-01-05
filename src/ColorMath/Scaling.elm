module ColorMath.Scaling exposing
  ( lighten, darken
  , saturate, desaturate
  , moreOpaque, moreTransparent
  , rotateHue, scaleToRed, scaleToAqua
  )


{-|

# Relative Color Scaling

## Lightness
@docs lighten, darken

## Saturation
@docs saturate, desaturate

## Alpha
@docs moreOpaque, moreTransparent

## Hue
@docs rotateHue, scaleToRed, scaleToAqua

-}


import Color exposing (Color)
import ColorMath.Hsla


{-| Given a decimal value *x* between 0 and 1 and a `Color`, returns an updated
`Color` with the lightness *L* increased proportionally by the formula:

    L + ( x * (1 - L) )

-}
lighten : Float -> Color -> Color
lighten amount =
  let
    scaleFunction amount hsl =
      { hsl
      | lightness =
          (1 - hsl.lightness)
            |> (*) amount
            |> (+) hsl.lightness
      }

  in
    Color.toHsl
      >> scaleFunction (amount |> clamp 0 1)
      >> ColorMath.Hsla.toColor


{-| Given a decimal value *x* between 0 and 1 and a `Color`, returns an updated
`Color` with the lightness *L* decreased proportionally by the formula:

    L - (x * L)

-}
darken : Float -> Color -> Color
darken amount =
  let
    scaleFunction amount hsl =
      { hsl
      | lightness =
          hsl.lightness
            |> (*) amount
            |> (-) hsl.lightness
      }

  in
    Color.toHsl
      >> scaleFunction (amount |> clamp 0 1)
      >> ColorMath.Hsla.toColor


{-| Given a decimal value *x* between 0 and 1 and a `Color`, returns an updated
`Color` with the saturation *S* increased proportionally by the formula:

    S + ( x * (1 - S) )

-}
saturate : Float -> Color -> Color
saturate amount =
  let
    scaleFunction amount hsl =
      { hsl
      | saturation =
          (1 - hsl.saturation)
            |> (*) amount
            |> (+) hsl.saturation
      }

  in
    Color.toHsl
      >> scaleFunction (amount |> clamp 0 1)
      >> ColorMath.Hsla.toColor


{-| Given a decimal value *x* between 0 and 1 and a `Color`, returns an updated
`Color` with the saturation *S* decreased proportionally by the formula:

    S - (x * S)

-}
desaturate : Float -> Color -> Color
desaturate amount =
  let
    scaleFunction amount hsl =
      { hsl
      | saturation =
          hsl.saturation
            |> (*) amount
            |> (-) hsl.saturation
      }

  in
    Color.toHsl
      >> scaleFunction (amount |> clamp 0 1)
      >> ColorMath.Hsla.toColor


{-| Given a decimal value *x* between 0 and 1 and a `Color`, returns an updated
`Color` with the alpha *A* increased proportionally by the formula:

    A + ( x * (1 - A) )
-}
moreOpaque : Float -> Color -> Color
moreOpaque amount =
  let
    scaleFunction amount hsl =
      { hsl
      | alpha =
          (1 - hsl.alpha)
            |> (*) amount
            |> (+) hsl.alpha
      }

  in
    Color.toHsl
      >> scaleFunction (amount |> clamp 0 1)
      >> ColorMath.Hsla.toColor


{-| Given a decimal value *x* between 0 and 1 and a `Color`, returns an updated
`Color` with the alpha *A* decreased proportionally by the formula:

    A - (x * A)

-}
moreTransparent : Float -> Color -> Color
moreTransparent amount =
  let
    scaleFunction amount hsl =
      { hsl
      | alpha =
          hsl.alpha
            |> (*) amount
            |> (-) hsl.alpha
      }

  in
    Color.toHsl
      >> scaleFunction (amount |> clamp 0 1)
      >> ColorMath.Hsla.toColor


{-| Given a decimal value *x* between -1 and 1 and a `Color`, returns an updated
`Color` with the hue rotated by _(x * 360)_ degrees, as represented on a color
wheel

-}
rotateHue : Float -> Color -> Color
rotateHue amount =
  let
    shiftHue amount hsl =
      { hsl
      | hue =
          if (hsl.hue + amount) < 0 then
            (hsl.hue + amount)
              |> (+) (degrees 360)

          else if (hsl.hue + amount) > degrees 360 then
            (hsl.hue + amount)
              |> flip (-) (degrees 360)

          else
            (hsl.hue + amount)
      }

  in
    Color.toHsl
      >> shiftHue (amount |> clamp -1 1 |> turns)
      >> ColorMath.Hsla.toColor


{-| Given a decimal value *x* between 0 and 1 and a `Color`, returns an updated
`Color` with the hue *H* scaled proportionally toward red by the formula:

    if H >= 180 then
      H + ( x * (360 - H) )
    else
      H - (x * H)

-}
scaleToRed : Float -> Color -> Color
scaleToRed amount =
  let
    scaleFunction amount hsl =
      { hsl
      | hue =
          if hsl.hue >= degrees 180 then
            (degrees 360 - hsl.hue)
              |> (*) amount
              |> (+) hsl.hue

          else
            hsl.hue
              |> (*) amount
              |> (-) hsl.hue
      }

  in
    Color.toHsl
      >> scaleFunction (amount |> clamp 0 1)
      >> ColorMath.Hsla.toColor


{-| Given a decimal value *x* between 0 and 1 and a `Color`, returns an updated
`Color` with the hue *H* scaled proportionally toward aqua by the formula:

    if H <= 180 then
      H + ( x * (180 - H) )
    else
      H - ( x * (H - 180) )

-}
scaleToAqua : Float -> Color -> Color
scaleToAqua amount =
  let
    scaleFunction amount hsl =
      { hsl
      | hue =
          if hsl.hue <= degrees 180 then
            (degrees 180 - hsl.hue)
              |> (*) amount
              |> (+) hsl.hue

          else
            (hsl.hue - degrees 180)
              |> (*) amount
              |> (-) hsl.hue
      }
  in
    Color.toHsl
      >> scaleFunction (amount |> clamp 0 1)
      >> ColorMath.Hsla.toColor
