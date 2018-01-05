module ColorMath.Hex8 exposing
  ( fromColor, toColor )


{-| Given a `Color`, returns the equivalent hexademimal color code as an
8-character string, with the alpha channel represented by the last two
characters (note that 8-digit hex codes are not yet supported by all browsers).
-}
fromColor : Color -> String
fromColor =
  Toolkit.Function.apply2
    ( ColorMath.Hex.fromColor
    , ColorMath.Rgb.getAlpha
      >> (*) 255
      >> round
      >> ColorMath.Hex.fromInt

    )
      >> uncurry String.append


toColor : String -> Result String Color
