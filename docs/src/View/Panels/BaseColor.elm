module View.Panels.BaseColor exposing
  ( hsla, rgba, hex, html5 )


-- Project
import Control
import Model
import Msg
-- Frameworks
import Ui
import Ui.Modifier
import Ui.Input
import Component.Grid
import Component.Form
-- Helpers
import Toolkit.Float
import ColorMath.Hsla
import ColorMath.Rgba
import ColorMath.Hex
import ColorMath.Hex8


---INTERNAL---

addLabelModifiers : Ui.Element msg -> Ui.Element msg
addLabelModifiers =
  Ui.Modifier.addList
    [ "is-block"
    , "has-text-centered"
    , "has-text-weight-semibold"
    , "is-uppercase"
    , "is-size-7"
    ]


wrapColumns : List (Ui.Element msg) -> Ui.Element msg
wrapColumns =
   List.map Component.Grid.column
    >> Component.Grid.columns
    >> Ui.Modifier.addList
      [ "is-mobile"
      , "is-centered"
      , "is-gapless"
      , "is-marginless"
      ]


---EXPOSED---

hsla : Model.Output -> Ui.Element Msg.Msg
hsla output =
  let
    hue =
      [ "Hue"
        |> Ui.Input.labelFor 1
        |> addLabelModifiers

      , { id = 1
        , placeholder = ""
        , value =
            output.baseColor
              |> ColorMath.Hsla.getHue
              |> Toolkit.Float.roundTo 0
              |> Just

        , minMaxStep = (0, 360, 1)

        }
          |> Ui.Input.float
            ( Control.Hue
              >> Msg.UpdateBaseColor
            )

      ]
        |> Ui.container "div"

    saturation =
      [ "Saturation"
        |> Ui.Input.labelFor 2
        |> addLabelModifiers

      , { id = 2
        , placeholder = ""
        , value =
            output.baseColor
              |> ColorMath.Hsla.getSaturation
              |> Toolkit.Float.roundTo 2
              |> Just

        , minMaxStep = (0, 1, 0.01)

        }
          |> Ui.Input.float
            ( Control.Saturation
              >> Msg.UpdateBaseColor
            )

      ]
        |> Ui.container "div"

    lightness =
      [ "Lightness"
        |> Ui.Input.labelFor 3
        |> addLabelModifiers

      , { id = 3
        , placeholder = ""
        , value =
            output.baseColor
              |> ColorMath.Hsla.getLightness
              |> Toolkit.Float.roundTo 2
              |> Just

        , minMaxStep = (0, 1, 0.01)

        }
          |> Ui.Input.float
            ( Control.Lightness
              >> Msg.UpdateBaseColor
            )

      ]
        |> Ui.container "div"

    alpha =
      [ "Alpha"
        |> Ui.Input.labelFor 4
        |> addLabelModifiers

      , { id = 4
        , placeholder = ""
        , value =
            output.baseColor
              |> ColorMath.Hsla.getAlpha
              |> Toolkit.Float.roundTo 2
              |> Just

        , minMaxStep = (0, 1, 0.01)

        }
          |> Ui.Input.float
            ( Control.HslAlpha
              >> Msg.UpdateBaseColor
            )

      ]
        |> Ui.container "div"

  in
    [ hue
    , saturation
    , lightness
    , alpha
    ]
      |> wrapColumns


rgba : Model.Output -> Ui.Element Msg.Msg
rgba output =
  let
    red =
      [ "Red"
        |> Ui.Input.labelFor 5
        |> addLabelModifiers

      , { id = 5
        , placeholder = ""
        , value =
            output.baseColor
              |> ColorMath.Rgba.getRed
              |> Just

        , minMaxStep = (0, 255, 1)

        }
          |> Ui.Input.int
            ( Control.Red
              >> Msg.UpdateBaseColor
            )

      ]
        |> Ui.container "div"

    green =
      [ "Green"
        |> Ui.Input.labelFor 6
        |> addLabelModifiers

      , { id = 6
        , placeholder = ""
        , value =
            output.baseColor
              |> ColorMath.Rgba.getGreen
              |> Just

        , minMaxStep = (0, 255, 1)

        }
          |> Ui.Input.int
            ( Control.Green
              >> Msg.UpdateBaseColor
            )

      ]
        |> Ui.container "div"

    blue =
      [ "Blue"
        |> Ui.Input.labelFor 7
        |> addLabelModifiers

      , { id = 7
        , placeholder = ""
        , value =
            output.baseColor
              |> ColorMath.Rgba.getBlue
              |> Just

        , minMaxStep = (0, 255, 1)

        }
          |> Ui.Input.int
            ( Control.Blue
              >> Msg.UpdateBaseColor
            )

      ]
        |> Ui.container "div"

    alpha =
      [ "Alpha"
        |> Ui.Input.labelFor 8
        |> addLabelModifiers

      , { id = 8
        , placeholder = ""
        , value =
            output.baseColor
              |> ColorMath.Rgba.getAlpha
              |> Toolkit.Float.roundTo 2
              |> Just

        , minMaxStep = (0, 1, 0.01)

        }
          |> Ui.Input.float
            ( Control.RgbAlpha
              >> Msg.UpdateBaseColor
            )

      ]
        |> Ui.container "div"

  in
    [ red
    , green
    , blue
    , alpha
    ]
      |> wrapColumns


hex : Model.Output -> Ui.Element Msg.Msg
hex output =
  let
    allowedInputLength numChars inputString =
      case
        ( inputString
          |> String.length
          |> (==) numChars
        )

      of
        True ->
          Ok inputString

        False ->
          [ "not "

          , numChars
            |> Basics.toString

          , " chars"

          ]
            |> String.concat
            |> Err

    hex6 =
      [ "Hex-6"
        |> Ui.Input.labelFor 9
        |> addLabelModifiers

      , { id = 9
        , placeholder = ""
        , value = Just output.baseColor
        , encoder =
            allowedInputLength 6
              >> Result.andThen ColorMath.Hex.toColor

        , decoder =
            ColorMath.Hex.fromColor
              >> Ok

        }
          |> Ui.Input.custom
            ( Control.Hex6
              >> Msg.UpdateBaseColor
            )

          |> Component.Form.control
          |> Component.Form.withIconLeft
            ( "#"
              |> Ui.textWrapper "span"
              |> Ui.Modifier.add "icon"

            )

      ]
        |> Ui.container "div"

    hex8 =
      [ "Hex-8"
        |> Ui.Input.labelFor 10
        |> addLabelModifiers

      , { id = 10
        , placeholder = ""
        , value = Just output.baseColor
        , encoder =
            allowedInputLength 8
              >> Result.andThen ColorMath.Hex8.toColor

        , decoder =
            ColorMath.Hex8.fromColor
              >> Ok

        }
          |> Ui.Input.custom
            ( Control.Hex8
              >> Msg.UpdateBaseColor
            )

          |> Component.Form.control
          |> Component.Form.withIconLeft
            ( "#"
              |> Ui.textWrapper "span"
              |> Ui.Modifier.add "icon"

            )

      ]
        |> Ui.container "div"

  in
    [ hex6
    , hex8
    ]
      |> wrapColumns


html5 : Model.Output -> Ui.Element Msg.Msg
html5 output =
  [ { id = 11
    , value =
        output.baseColor
          |> ColorMath.Hex.fromColor
          |> String.append "#"

    }
      |> Ui.Input.colorPicker
        ( Control.Html5
          >> Msg.UpdateBaseColor
        )

      |> Ui.Modifier.add "input"

  ]
    |> Ui.container "div"
