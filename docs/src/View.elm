module View exposing
  ( view )


-- Project
import Model
import Msg
import View.Sticky
import View.Header
import View.Panels
import View.Footer
-- Framework
import Ui
import Ui.Modifier
import Ui.Action
import Ui.Style
import Component.Grid
import Responsive
import Dom.Lazy
-- Helpers
import Toolkit.Function.Operators exposing ( (|>.) )
-- Core
import VirtualDom


view : Model.Output -> VirtualDom.Node Msg.Msg
view output =
  let
    setVisibility =
      case output.isScrolled of
        False ->
          Ui.Modifier.add "is-invisible"

        True ->
          identity

    responsiveLayout =
      case
        ( output.windowSize
          |> Responsive.pixelWidthCustom
            { portrait = (769, 1154)
            , landscape = (960, 1440)
            }
        )

      of
        Responsive.Small ->
          [ View.Sticky.oneColumn
            >> setVisibility

          , View.Header.component
            |> always

          , View.Panels.oneColumn

          , View.Footer.component
            |> always

          ]

        _ ->
          [ View.Sticky.twoColumns
            >> setVisibility

          , View.Header.component
            |> always

          , View.Panels.twoColumns

          , View.Footer.component
            |> always

          ]

  in
    output
      |>. responsiveLayout
      |> Dom.Lazy.container "div"
      |> Ui.Style.addList
        [ ("max-height", "100vh")
        , ("overflow-y", "scroll")
        , ("overflow-x", "hidden")
        ]

      |> Ui.Action.add ("scroll", Msg.GetScrollPosition)
      |> Ui.setId "main-container"
      |> Ui.render
