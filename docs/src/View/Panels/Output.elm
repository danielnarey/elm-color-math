module View.Panels.Output exposing
  ( baseColor, resultColor, splitColor, resultHsla )


-- Project
import Model
-- Frameworks
import Ui
import Ui.Modifier
import Ui.Style
import Component.Grid
-- Helpers
import Toolkit.Float
import Toolkit.List.Operators exposing ( (.|>), (:|>) )
import Toolkit.Function.Operators exposing ( (|>.) )
import ColorMath.Hsla


baseColor : Model.Output -> Ui.Element msg
baseColor output =
  Ui.leaf "div"
    |> Ui.Style.add ("height", "48px")
    |> Ui.Style.backgroundColor output.baseColor


resultColor : Model.Output -> Ui.Element msg
resultColor output =
  Ui.leaf "div"
    |> Ui.Style.add ("height", "48px")
    |> Ui.Style.backgroundColor output.resultColor


splitColor : Model.Output -> Ui.Element msg
splitColor output =
  output
    |>.
      [ baseColor
      , resultColor
      ]

   .|> Component.Grid.column
   .|> Ui.Modifier.add "is-half"
    |> Component.Grid.columns
    |> Ui.Modifier.addList
      [ "is-mobile"
      , "is-paddingless"
      , "is-marginless"
      ]


resultHsla : Model.Output -> Ui.Element msg
resultHsla output =
  let
    numericOutput (label, value) =
      [ label
        |> Ui.textWrapper "label"
        |> Ui.Modifier.addList
          [ "is-block"
          , "has-text-weight-semibold"
          , "is-uppercase"
          , "is-size-7"
          ]
      |> Ui.Style.add ("margin", "6px")

      , value
        |> toString
        |> Ui.textWrapper "p"
        |> Ui.Modifier.add "is-size-5"

      ]
        |> Ui.container "div"
        |> Ui.Modifier.add "has-text-centered"

  in
    [ ( "Hue"
      , output.resultColor
        |> ColorMath.Hsla.getHue
        |> Toolkit.Float.roundTo 0

      )

    , ( "Saturation"
      , output.resultColor
        |> ColorMath.Hsla.getSaturation
        |> Toolkit.Float.roundTo 2

      )

    , ( "Lightness"
      , output.resultColor
        |> ColorMath.Hsla.getLightness
        |> Toolkit.Float.roundTo 2

      )

    , ( "Alpha"
      , output.resultColor
        |> ColorMath.Hsla.getAlpha
        |> Toolkit.Float.roundTo 2

      )

    ]
     .|> numericOutput
     .|> Component.Grid.column
      |> Component.Grid.columns
      |> Ui.Modifier.addList
        [ "is-mobile"
        , "is-centered"
        , "is-gapless"
        , "is-marginless"
        ]
