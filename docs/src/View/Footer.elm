module View.Footer exposing
  ( component )

-- Frameworks
import Ui
import Ui.Modifier
import Component.Layout
-- Helpers
import Toolkit.List.Operators exposing ( (.|>), (:|>) )
-- Core
import Char


component : Ui.Element msg
component =
  let
    footerText =
      [ 169
        |> Char.fromCode
        |> String.fromChar

      , " 2018 Daniel C. Narey"

      ]
        |> String.concat
        |> Ui.textWrapper "p"

  in
    footerText
     :|> Ui.container "div"
      |> Ui.Modifier.addList
        [ "content"
        , "has-text-centered"
        , "has-text-light"
        ]

      |> Component.Layout.footer
