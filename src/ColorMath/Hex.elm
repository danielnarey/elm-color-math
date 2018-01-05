module ColorMath.Hex exposing
  ( fromInt, fromColor, toColor )

{-|

# Converting To and From Hexadecimal Color Codes
- Hex codes are widely used in CSS, but are not currently supported by the
*elm-lang/core* `Color` module
- This module provides a convenient way to convert hex codes (e.g., for
additional color processing within an Elm program), or to output color
identifiers in a compact format (e.g., when creating a color tool that would
allow users to cut and paste color codes). 

@docs fromInt, fromColor, toColor

-}

import Toolkit.Function
import Toolkit.Tuple
import Toolkit.Tuple3
import Toolkit.List
import Toolkit.Maybe
import Toolkit.Result

import Color exposing (Color)
import Array
import Char


{-| Given an integer between 0 and 255, returns its equivalent in base-16
notation

  - Negative input returns "00"
  - Input greater than 255 returns "FF"

-}
fromInt : Int -> String
fromInt int =
  let
    toBase16 int =
      [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
      , "A", "B", "C", "D", "E", "F"
      ]
        |> Array.fromList
        |> Array.get int
        |> Maybe.withDefault "!"

    clamped =
      int
        |> clamp 0 255

  in
    ( clamped // 16
    , rem clamped 16
    )
      |> Toolkit.Tuple.map toBase16
      |> uncurry String.append


{-| Given a `Color`, returns its equivalent hexademimal color code as a
6-character string, with the alpha channel ignored
-}
fromColor : Color -> String
fromColor =
  Color.toRgb
    >> Toolkit.Function.applyList
      [ .red
      , .green
      , .blue
      ]
    >> List.map fromInt
    >> String.concat


{-| Converts a string containing a 3- or 6-digit hexadecimal color code
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
        3 ->
          charList
            |> List.map (\c -> [c, c])
            |> List.concat
            |> Just

        6 ->
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
      Toolkit.Function.apply3
        ( Toolkit.List.take2Tuple

        , List.drop 2
          >> Toolkit.List.take2Tuple

        , List.drop 4
          >> Toolkit.List.take2Tuple

        )

        >> Toolkit.Maybe.zip3

    hexToInt =
      Tuple.mapFirst ((*) 16)
        >> uncurry (+)

    errorMsg =
      "'"
        ++ hexCode
        ++ "' is not a valid 3- or 6-digit hexadecimal color code"

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
        ( Toolkit.Tuple3.map hexToInt
          >> Toolkit.Function.uncurry3 Color.rgb
        )
      |> Result.fromMaybe errorMsg
