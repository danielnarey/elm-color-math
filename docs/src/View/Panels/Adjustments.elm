module View.Panels.Adjustments exposing
  ( hue, saturation, lightness, alpha, reset )


-- Project
import Control
import Model
import Msg
-- Frameworks
import Ui
import Ui.Attribute
import Ui.Modifier
import Ui.Style
import Ui.Button
import Ui.Input
import Component.Form
import Component.Grid
import Dom.Attribute
-- Helpers
import Toolkit.List.Operators exposing ( (.|>), (:|>) )


--- INTERNAL ---

controlWidget : (String, Ui.Element msg, a) -> Ui.Element msg
controlWidget (label, input, value) =
  let
    controlLabel =
      label
        |> Ui.textWrapper "label"
        |> Ui.Attribute.add
          ( "for", Dom.Attribute.string input.id )

        |> Ui.Modifier.addList
          [ "button"
          , "has-text-weight-semibold"
          , "is-uppercase"
          , "is-size-7"
          , "slider-label"
          ]

        |> Component.Form.control

    controlSlider =
      input
        |> Component.Form.control
        |> Ui.Modifier.add "is-expanded"

    controlValue =
      value
        |> Basics.toString
        |> Ui.textWrapper "p"
        |> Ui.Modifier.addList
          [ "button"
          , "has-text-weight-semibold"
          , "is-size-6"
          , "slider-value"
          ]

        |> Component.Form.control

  in
    { id = -1
    , label = ""
    , controls =
      [ controlLabel
      , controlSlider
      , controlValue
      ]

    }
      |> Component.Form.fieldAddons


singleColumnWrapper : List (Ui.Element msg) -> Ui.Element msg
singleColumnWrapper =
  Ui.container "div"
    >> Component.Grid.column
    >> List.singleton
    >> Component.Grid.columns
    >> Ui.Modifier.addList
      [ "is-gapless"
      , "is-marginless"
      ]


--- EXPOSED ---

hue : Model.Output -> Ui.Element Msg.Msg
hue output =
  let
    rotate =
      ( "Rotate Hue"

      , { id = 12
        , value = output.adjustments.rotateHue
        , minMaxStep = (-1, 1, 0.01)
        }
          |> Ui.Input.floatSlider
            ( Control.RotateHue
              >> Msg.SetAdjustment
            )

      , output.adjustments.rotateHue

      )

    scaleToRed =
      ( "Scale to Red"

      , { id = 13
        , value = output.adjustments.scaleToRed
        , minMaxStep = (0, 1, 0.01)
        }
          |> Ui.Input.floatSlider
            ( Control.ScaleToRed
              >> Msg.SetAdjustment
            )

      , output.adjustments.scaleToRed

      )

    scaleToAqua =
      ( "Scale to Aqua"

      , { id = 14
        , value = output.adjustments.scaleToAqua
        , minMaxStep = (0, 1, 0.01)
        }
          |> Ui.Input.floatSlider
            ( Control.ScaleToAqua
              >> Msg.SetAdjustment
            )

      , output.adjustments.scaleToAqua

      )

  in
    [ rotate
    , scaleToRed
    , scaleToAqua
    ]
     .|> controlWidget
      |> singleColumnWrapper


saturation : Model.Output -> Ui.Element Msg.Msg
saturation output =
  let
    saturate =
      ( "Saturate"

      , { id = 15
        , value = output.adjustments.saturate
        , minMaxStep = (0, 1, 0.01)
        }
          |> Ui.Input.floatSlider
            ( Control.Saturate
              >> Msg.SetAdjustment
            )

      , output.adjustments.saturate

      )

    desaturate =
      ( "Desaturate"

      , { id = 16
        , value = output.adjustments.desaturate
        , minMaxStep = (0, 1, 0.01)
        }
          |> Ui.Input.floatSlider
            ( Control.Desaturate
              >> Msg.SetAdjustment
            )

      , output.adjustments.desaturate

      )

  in
    [ saturate
    , desaturate
    ]
     .|> controlWidget
      |> singleColumnWrapper


lightness : Model.Output -> Ui.Element Msg.Msg
lightness output =
  let
    lighten =
      ( "Lighten"

      , { id = 17
        , value = output.adjustments.lighten
        , minMaxStep = (0, 1, 0.01)
        }
          |> Ui.Input.floatSlider
            ( Control.Lighten
              >> Msg.SetAdjustment
            )

      , output.adjustments.lighten

      )

    darken =
      ( "Darken"

      , { id = 18
        , value = output.adjustments.darken
        , minMaxStep = (0, 1, 0.01)
        }
          |> Ui.Input.floatSlider
            ( Control.Darken
              >> Msg.SetAdjustment
            )

      , output.adjustments.darken

      )

  in
    [ lighten
    , darken
    ]
     .|> controlWidget
      |> singleColumnWrapper


alpha : Model.Output -> Ui.Element Msg.Msg
alpha output =
  let
    moreTransparent =
      ( "More Transparent"

      , { id = 19
        , value = output.adjustments.moreTransparent
        , minMaxStep = (0, 1, 0.01)
        }
          |> Ui.Input.floatSlider
            ( Control.MoreTransparent
              >> Msg.SetAdjustment
            )

      , output.adjustments.moreTransparent

      )

    moreOpaque =
      ( "More Opaque"

      , { id = 20
        , value = output.adjustments.moreOpaque
        , minMaxStep = (0, 1, 0.01)
        }
          |> Ui.Input.floatSlider
            ( Control.MoreOpaque
              >> Msg.SetAdjustment
            )

      , output.adjustments.moreOpaque
      
      )


  in
    [ moreTransparent
    , moreOpaque
    ]
     .|> controlWidget
      |> singleColumnWrapper


reset : Ui.Element Msg.Msg
reset =
  [ "Reset Adjustments"
    |> Ui.Button.action Msg.ResetAdjustments
    |> Ui.Modifier.add "has-text-weight-semibold"

  ]
    |> Ui.container "div"
    |> Ui.Modifier.add "panel-button"
