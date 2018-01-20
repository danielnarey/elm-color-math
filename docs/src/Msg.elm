module Msg exposing
  ( Msg(..) )


-- Project
import Control
-- Core
import Window


type Msg
  = UpdateWindowSize Window.Size
  | GetScrollPosition
  | UpdateIsScrolled Bool
  | ToggleVisibleTab
  | UpdateBaseColor Control.BaseColor
  | SetAdjustment Control.Adjustment
  | RecalculateResult
  | ResetAdjustments
