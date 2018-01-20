module View.Panels exposing
  ( oneColumn, twoColumns )

-- Project
import Tab
import Model
import Msg
import View.Panels.BaseColor
import View.Panels.Adjustments
import View.Panels.Output
-- Frameworks
import Ui
import Ui.Modifier
import Ui.Action
import Ui.Style
import Component.Panel
import Component.Grid
import Component.Layout
-- Helpers
import Toolkit.Function.Operators exposing ( (|>.) )
import Toolkit.List.Operators exposing ( (:|>), (.|>) )
-- Core
import Color


---INTERNAL---

controlGroupLabel : String -> Ui.Element msg
controlGroupLabel =
  Ui.textWrapper "p"
    >> List.singleton
    >> Ui.container "div"
    >> Ui.Modifier.add "panel-label"


---EXPOSED---

oneColumn : Model.Output -> Ui.Element Msg.Msg
oneColumn output =
  let
    displayedControls =
      output
        |>.
          ( case output.visibleTab of
            Tab.BaseColor ->
              [ "HSLA Input"
                |> controlGroupLabel
                |> always

              , View.Panels.BaseColor.hsla

              , "RGBA Input"
                |> controlGroupLabel
                |> always

              , View.Panels.BaseColor.rgba

              , "Hex Code Input"
                |> controlGroupLabel
                |> always

              , View.Panels.BaseColor.hex

              , "HTML5 Color Picker"
                |> controlGroupLabel
                |> always

              , View.Panels.BaseColor.html5

              ]

            Tab.Adjustments ->
              [ "HSLA Output"
                |> controlGroupLabel
                |> always

              , View.Panels.Output.resultHsla

              , "Adjust Hue"
                |> controlGroupLabel
                |> always

              , View.Panels.Adjustments.hue

              , "Adjust Saturation"
                |> controlGroupLabel
                |> always

              , View.Panels.Adjustments.saturation

              , "Adjust Lightness"
                |> controlGroupLabel
                |> always

              , View.Panels.Adjustments.lightness

              , "Adjust Alpha"
                |> controlGroupLabel
                |> always

              , View.Panels.Adjustments.alpha

              , View.Panels.Adjustments.reset
                |> always

              ]

          )

    panel =
      { heading = "Demo"

      , tabs =
        [ "Base Color"
          |> Ui.textWrapper "a"
          |> Ui.Modifier.conditional
            ( "is-active", output.visibleTab == Tab.BaseColor )
          |> Ui.Action.onClick Msg.ToggleVisibleTab


        , "Adjustments"
          |> Ui.textWrapper "a"
          |> Ui.Modifier.conditional
            ( "is-active", output.visibleTab == Tab.Adjustments )
          |> Ui.Action.onClick Msg.ToggleVisibleTab

        ]

      , blocks = displayedControls

      }
        |> Component.Panel.container
        |> Component.Panel.insertBlocks 1
          [ output
            |> View.Panels.Output.splitColor

          ]

  in
    panel
      |> Component.Grid.singleColumn
      |> Ui.Modifier.addList
        [ "is-mobile"
        , "is-centered"
        ]


twoColumns : Model.Output -> Ui.Element Msg.Msg
twoColumns output =
  let
    panelLeft =
      { heading =
          "Base Color"

      , tabs =
          []

      , blocks =
          output
            |>.
              [ View.Panels.Output.baseColor

              , "HSLA Input"
                |> controlGroupLabel
                |> always

              , View.Panels.BaseColor.hsla

              , "RGBA Input"
                |> controlGroupLabel
                |> always

              , View.Panels.BaseColor.rgba

              , "Hex Code Input"
                |> controlGroupLabel
                |> always

              , View.Panels.BaseColor.hex

              , "HTML5 Color Picker"
                |> controlGroupLabel
                |> always

              , View.Panels.BaseColor.html5

              ]

      }
        |> Component.Panel.container

    panelRight =
      { heading =
          "Adjustments"

      , tabs =
          []

      , blocks =
          output
            |>.
              [ View.Panels.Output.resultColor

              , "HSLA Output"
                |> controlGroupLabel
                |> always

              , View.Panels.Output.resultHsla

              , "Adjust Hue"
                |> controlGroupLabel
                |> always

              , View.Panels.Adjustments.hue

              , "Adjust Saturation"
                |> controlGroupLabel
                |> always

              , View.Panels.Adjustments.saturation

              , "Adjust Lightness"
                |> controlGroupLabel
                |> always

              , View.Panels.Adjustments.lightness

              , "Adjust Alpha"
                |> controlGroupLabel
                |> always

              , View.Panels.Adjustments.alpha

              , View.Panels.Adjustments.reset
                |> always

              ]

      }
        |> Component.Panel.container

  in
    [ panelLeft
    , panelRight
    ]
     .|> Component.Grid.column
     .|> Ui.Modifier.add "is-half"
      |> Component.Grid.columns
      |> Ui.Modifier.add "is-centered"
