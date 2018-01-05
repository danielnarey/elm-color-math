module ColorMath.Hex exposing
  ( fromInt, fromColor, toColor )

{-|
@docs fromInt, fromColor, toColor

-}

import Array

{-|

-}
fromInt : Int -> String
fromInt int =
  let
    base16Digits =
      [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
      , "A", "B", "C", "D", "E", "F"
      ]
        |> Array.fromList

    clamped =
      int
        |> clamp 0 255

  in
    ( base16Digits
      |> Array.get (clamped // 16)
      |> Maybe.withDefault "!"

    , base16Digits
      |> Array.get (rem clamped 16)
      |> Maybe.withDefault "!"

    )
      |> uncurry String.append


{-| Given a `Color`, returns the equivalent hexademimal color code as a
6-character string, with the alpha channel ignored
-}
fromColor : Color -> String
fromColor =
  Color.rgb
    >> Toolkit.Function.applyList
      [ .red
      , .green
      , .blue
      ]
    >> List.map fromInt
    >> String.concat




-- -- CONVERTING HEXADECIMAL CODES TO `Color` VALUES
--
-- {-| Converts a string containing a 3-, 4-, 6-, or 8-digit hexadecimal color code
-- to a `Color`. Returns an error message if the string argument is not a valid
-- hexadecimal code. The hex code may be given with or without a leading "#".
-- -}
-- hexToColor : String -> Result String Color
-- hexToColor hexCode =
--   let
--     dropFirstChar charList =
--       if (charList |> List.head) == Just '#' then
--         charList
--           |> List.drop 1
--
--       else
--         charList
--
--     checkDigits charList =
--       case charList |> List.length of
--         3 ->
--           charList
--            .|> (\c -> [c, c])
--             |> List.concat
--             |> List.map charToNum
--             |> Helpers.resultList errorMsg
--            !+> separateRgb
--            !|> Helpers.map3Tuple hexToInt
--            !|> (Color.rgb |> Helpers.uncurry3)
--
--         4 ->
--           charList
--            .|> (\c -> [c, c])
--             |> List.concat
--             |> List.map charToNum
--             |> Helpers.resultList errorMsg
--             !+> separateRgba
--             !|> Helpers.map4Tuple hexToInt
--             !|> normalizeAlpha
--             !|> (Color.rgba |> Helpers.uncurry4)
--
--         6 ->
--           charList
--             |> List.map charToNum
--             |> Helpers.resultList errorMsg
--             !+> separateRgb
--             !|> Helpers.map3Tuple hexToInt
--             !|> (Color.rgb |> Helpers.uncurry3)
--
--         8 ->
--           charList
--             |> List.map charToNum
--             |> Helpers.resultList errorMsg
--            !+> separateRgba
--            !|> Helpers.map4Tuple hexToInt
--            !|> normalizeAlpha
--            !|> (Color.rgba |> Helpers.uncurry4)
--
--         _ ->
--           errorMsg
--             |> Err
--
--     charToNum char =
--       if char |> Char.isDigit then
--         char
--           |> String.fromChar
--           |> String.toInt
--
--       else
--         [ ('A', 10)
--         , ('B', 11)
--         , ('C', 12)
--         , ('D', 13)
--         , ('E', 14)
--         , ('F', 15)
--         ]
--           |> Dict.fromList
--           |> Dict.get char
--           |> Result.fromMaybe errorMsg
--
--     separateRgb numList =
--       numList
--         |> Helpers.apply3
--           ( Helpers.take2Tuple
--           , List.drop 2 >> Helpers.take2Tuple
--           , List.drop 4 >> Helpers.take2Tuple
--           )
--         |> Helpers.maybe3Tuple
--         |> Result.fromMaybe errorMsg
--
--     separateRgba numList =
--       numList
--         |> Helpers.apply4
--           ( Helpers.take2Tuple
--           , List.drop 2 >> Helpers.take2Tuple
--           , List.drop 4 >> Helpers.take2Tuple
--           , List.drop 6 >> Helpers.take2Tuple
--           )
--         |> Helpers.maybe4Tuple
--         |> Result.fromMaybe errorMsg
--
--     hexToInt (firstDigit, secondDigit) =
--       firstDigit
--         |> (*) 16
--         |> (+) secondDigit
--
--     normalizeAlpha (r, g, b, a) =
--       (r, g, b, toFloat a / 255)
--
--     errorMsg =
--       "Argument is not a valid hexadecimal color code"
--
--   in
--     hexCode
--       |> String.toUpper
--       |> String.toList
--       |> dropFirstChar
--       |> checkDigits
--
--
