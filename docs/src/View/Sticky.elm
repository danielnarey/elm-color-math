module View.Sticky exposing
  ( oneColumn, twoColumns )


-- Project
import Model
-- Frameworks
import Ui
import Ui.Modifier
import Ui.Style
import Component.Grid
-- Helpers
import Toolkit.List.Operators exposing ( (:|>), (.|>) )


oneColumn : Model.Output -> Ui.Element msg
oneColumn output =
  [ Ui.leaf "div"
    |> Ui.Style.add ("height", "48px")
    |> Ui.Style.backgroundColor output.baseColor

  , Ui.leaf "div"
    |> Ui.Style.add ("height", "48px")
    |> Ui.Style.backgroundColor output.resultColor

  ]
   .|> Component.Grid.column
   .|> Ui.Modifier.add "is-half"
    |> Component.Grid.columns
    |> Ui.Modifier.addList
      [ "is-mobile"
      , "is-paddingless"
      , "panel-block"
      ]

    |> Component.Grid.singleColumn
    |> Ui.Modifier.addList
      [ "is-mobile"
      , "is-marginless"
      , "is-centered"
      , "is-fixed-top"
      ]


twoColumns : Model.Output -> Ui.Element msg
twoColumns output =
  [ Ui.leaf "div"
    |> Ui.Style.add ("height", "48px")
    |> Ui.Style.backgroundColor output.baseColor

  , Ui.leaf "div"
    |> Ui.Style.add ("height", "48px")
    |> Ui.Style.backgroundColor output.resultColor

  ]
   .|> Component.Grid.column
   .|> Ui.Modifier.addList
      [ "is-half"
      , "panel-block"
      ]
   .|> Ui.Style.add ("margin", "0 0.25rem")
    |> Component.Grid.columns
    |> Ui.Modifier.add "is-centered"
   :|> Ui.container "div"
    |> Ui.Modifier.add "is-fixed-top"
