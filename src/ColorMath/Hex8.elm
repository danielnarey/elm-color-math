module ColorMath.Hex8 exposing
  ( fromColor, toColor )

{-|

# Converting To and From 8-Digit Hexadecimal Color Codes
- 8-digit color codes include a hexadecimal encoding of the alpha channel
- Just like typical color codes, they can be abbreviated to 4 digits so that
"#FFFFFFFF" becomes "#FFFF"
- 8-digit codes are supported in Firefox and Chrome > 52
- Read about pros and cons [here](https://css-tricks.com/8-digit-hex-codes/)

@docs fromColor, toColor

-}

import ColorMath.Hex

import Toolkit.Function
import Toolkit.Tuple
import Toolkit.Tuple4
import Toolkit.List
import Toolkit.Maybe
import Toolkit.Result

import Color exposing (Color)
import Array
import Char


{-| Given a `Color`, returns the equivalent hexademimal color code as an
8-character string, with the alpha channel represented by the last two
characters
-}
fromColor : Color -> String
fromColor =
  Color.toRgb
    >> Toolkit.Function.applyList
      [ .red
      , .green
      , .blue
      , .alpha
        >> (*) 255
        >> round

      ]

    >> List.map ColorMath.Hex.fromInt
    >> String.concat


{-| Converts a string containing a 4- or 8-digit hexadecimal color code
to a `Color`

- Returns an error message if the string argument is not valid
hexadecimal notation, or contains an incorrect number of digits.
- The hex code may be given with or without a leading "#".

-}
toColor : String -> Result String Color
toColor hexCode =
    let
      dropFirstChar charList =
        case (charList |> List.head) of
          Just '#' ->
            charList
              |> List.drop 1

          _ ->
            charList

      checkDigits charList =
        case (charList |> List.length) of
          4 ->
            charList
              |> List.map (\c -> [c, c])
              |> List.concat
              |> Just

          8 ->
            Just charList

          _ ->
            Nothing

      fromBase16 keyCode =
        [ 10, 11, 12, 13, 14, 15 ]
          |> Array.fromList
          |> Array.get (keyCode - 65)

      charToInt char =
        case (char |> Char.isDigit) of
          True ->
            char
              |> String.fromChar
              |> String.toInt
              |> Result.toMaybe

          False ->
            char
              |> Char.toCode
              |> fromBase16

      separateRgb =
        Toolkit.Function.apply4
          ( Toolkit.List.take2Tuple

          , List.drop 2
            >> Toolkit.List.take2Tuple

          , List.drop 4
            >> Toolkit.List.take2Tuple

          , List.drop 6
            >> Toolkit.List.take2Tuple

          )

          >> Toolkit.Maybe.zip4

      hexToInt =
        Tuple.mapFirst ((*) 16)
          >> uncurry (+)

      normalizeAlpha (r, g, b, a) =
        ( r
        , g
        , b
        , a
          |> toFloat
          |> flip (/) 255

        )

      errorMsg =
        "'"
          ++ hexCode
          ++ "' is not a valid 4- or 8-digit hexadecimal color code"

    in
      hexCode
        |> String.toUpper
        |> String.toList
        |> dropFirstChar
        |> checkDigits
        |> Maybe.andThen
          ( List.map charToInt
            >> Toolkit.Maybe.zipList
          )
        |> Maybe.andThen separateRgb
        |> Maybe.map
          ( Toolkit.Tuple4.map hexToInt
            >> normalizeAlpha
            >> Toolkit.Function.uncurry4 Color.rgba
          )
        |> Result.fromMaybe errorMsg
