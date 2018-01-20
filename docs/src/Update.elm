module Update exposing
  ( update )


-- Project
import Model
import Msg
-- Frameworks
import Effect.Scroll
-- Core
import Task


update : Msg.Msg -> Model.Output -> (Model.Output, Cmd Msg.Msg)
update msg current =
  case msg of
    Msg.UpdateWindowSize size ->
      ( current
        |> Model.updateWindowSize size

      , Cmd.none

      )

    Msg.GetScrollPosition ->
      ( current

      , Effect.Scroll.getY "main-container"
        |> Task.attempt
          ( Result.withDefault 0
            >> (<=) 213
            >> Msg.UpdateIsScrolled
          )

      )

    Msg.UpdateIsScrolled condition ->
      ( case current.isScrolled == condition of
        True ->
          current

        False ->
          current
            |> Model.toggleIsScrolled

      , Cmd.none

      )

    Msg.ToggleVisibleTab ->
      ( current
        |> Model.toggleVisibleTab

      , Cmd.none

      )

    Msg.UpdateBaseColor input ->
      ( current
        |> Model.updateBaseColor input

      , Msg.RecalculateResult
        |> Task.succeed
        |> Task.perform identity

      )

    Msg.SetAdjustment input ->
      ( current
        |> Model.setAdjustment input

      , Msg.RecalculateResult
        |> Task.succeed
        |> Task.perform identity

      )

    Msg.RecalculateResult ->
      ( current
        |> Model.recalculateResult

      , Cmd.none

      )

    Msg.ResetAdjustments ->
      ( current
        |> Model.resetAdjustments

      , Msg.RecalculateResult
        |> Task.succeed
        |> Task.perform identity

      )
