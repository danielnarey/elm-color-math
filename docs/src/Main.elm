
-- Project
import Model
import Msg
import Update
import View
-- Frameworks
import Dom.Program
-- Core
import Window
import Task
import Color


main : Program Never Model.Output Msg.Msg
main =
  ( Color.rgb 128 217 38 )
    |> Model.initial
    |> Dom.Program.setup View.view
    |> Dom.Program.updateWithCmds Update.update
    |> Dom.Program.onLoad
      [ Window.size
        |> Task.perform Msg.UpdateWindowSize

      ]

    |> Dom.Program.subscribe
      [ Window.resizes Msg.UpdateWindowSize ]

    |> Dom.Program.run
