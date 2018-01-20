module View.Header exposing
  ( component )


-- Frameworks
import Ui
import Ui.Modifier
import Component.Layout


component : Ui.Element msg
component =
  { title = "Color Math"
  , subtitle = "Relative Color Scaling for Elm"
  , head = Nothing
  , foot = Nothing
  }
    |> Component.Layout.hero
    |> Ui.Modifier.add "is-dark"
