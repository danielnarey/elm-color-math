module Model exposing
  ( Output
  , initial
  , updateWindowSize, toggleIsScrolled, toggleVisibleTab
  , updateBaseColor, setAdjustment, recalculateResult, resetAdjustments
  )


-- Project
import Tab
import Control
-- Helpers
import ColorMath.Hsla
import ColorMath.Rgba
import ColorMath.Hex
import ColorMath.Hex8
import ColorMath.Scaling
-- Core
import Window
import Color


type alias Output =
  { windowSize : Window.Size
  , isScrolled : Bool
  , visibleTab : Tab.Tab
  , baseColor : Color.Color
  , resultColor : Color.Color
  , adjustments : Adjustments
  }


type alias Adjustments =
  { lighten : Float
  , darken : Float
  , saturate : Float
  , desaturate : Float
  , moreOpaque : Float
  , moreTransparent : Float
  , rotateHue : Float
  , scaleToRed : Float
  , scaleToAqua : Float
  }


initial : Color.Color -> Output
initial color =
  { windowSize = { width = 320, height = 568 }
  , isScrolled = False
  , visibleTab = Tab.BaseColor
  , baseColor = color
  , resultColor = color
  , adjustments =
    { rotateHue = 0
    , scaleToRed = 0
    , scaleToAqua = 0
    , saturate = 0
    , desaturate = 0
    , lighten = 0
    , darken = 0
    , moreOpaque = 0
    , moreTransparent = 0
    }
  }


updateWindowSize : Window.Size -> Output -> Output
updateWindowSize size current =
  { current
  | windowSize = size
  }


toggleIsScrolled : Output -> Output
toggleIsScrolled current =
  { current
  | isScrolled =
      current.isScrolled
        |> Basics.not
  }


toggleVisibleTab : Output -> Output
toggleVisibleTab current =
  { current
  | visibleTab =
      current.visibleTab
        |> Tab.toggle
  }


updateBaseColor : Control.BaseColor -> Output -> Output
updateBaseColor input current =
  let
    tryUpdate transform maybeValue =
      case maybeValue of
        Just value ->
          { current
          | baseColor =
              current.baseColor
                |> transform value
          }

        Nothing ->
          current

  in
    case input of
      Control.Hue maybeFloat ->
        maybeFloat
          |> tryUpdate ColorMath.Hsla.setHue

      Control.Saturation maybeFloat ->
        maybeFloat
          |> tryUpdate ColorMath.Hsla.setSaturation

      Control.Lightness maybeFloat ->
        maybeFloat
          |> tryUpdate ColorMath.Hsla.setLightness

      Control.HslAlpha maybeFloat ->
        maybeFloat
          |> tryUpdate ColorMath.Hsla.setAlpha

      Control.Red maybeInt ->
        maybeInt
          |> tryUpdate ColorMath.Rgba.setRed

      Control.Green maybeInt ->
        maybeInt
          |> tryUpdate ColorMath.Rgba.setGreen

      Control.Blue maybeInt ->
        maybeInt
          |> tryUpdate ColorMath.Rgba.setBlue

      Control.RgbAlpha maybeFloat ->
        maybeFloat
          |> tryUpdate ColorMath.Rgba.setAlpha

      Control.Hex6 maybeColor ->
        maybeColor
          |> tryUpdate always

      Control.Hex8 maybeColor ->
        maybeColor
          |> tryUpdate always

      Control.Html5 string ->
        string
          |> ColorMath.Hex.toColor
          |> Result.toMaybe
          |> tryUpdate always


setAdjustment : Control.Adjustment -> Output -> Output
setAdjustment input current =
  let
    tryUpdate adjustments =
      case input of
        Control.Lighten value ->
          { adjustments
          | lighten = value
          }

        Control.Darken value ->
          { adjustments
          | darken = value
          }

        Control.Saturate value ->
          { adjustments
          | saturate = value
          }

        Control.Desaturate value ->
          { adjustments
          | desaturate = value
          }

        Control.MoreOpaque value ->
          { adjustments
          | moreOpaque = value
          }

        Control.MoreTransparent value ->
          { adjustments
          | moreTransparent = value
          }

        Control.RotateHue value ->
          { adjustments
          | rotateHue = value
          }

        Control.ScaleToRed value ->
          { adjustments
          | scaleToRed = value
          }

        Control.ScaleToAqua value ->
          { adjustments
          | scaleToAqua = value
          }

  in
    { current
    | adjustments =
        current.adjustments
          |> tryUpdate
    }


recalculateResult : Output -> Output
recalculateResult current =
  let
    batchProcess adjustments =
      ColorMath.Scaling.rotateHue adjustments.rotateHue
        >> ColorMath.Scaling.scaleToRed adjustments.scaleToRed
        >> ColorMath.Scaling.scaleToAqua adjustments.scaleToAqua
        >> ColorMath.Scaling.saturate adjustments.saturate
        >> ColorMath.Scaling.desaturate adjustments.desaturate
        >> ColorMath.Scaling.lighten adjustments.lighten
        >> ColorMath.Scaling.darken adjustments.darken
        >> ColorMath.Scaling.moreTransparent adjustments.moreTransparent
        >> ColorMath.Scaling.moreOpaque adjustments.moreOpaque

  in
    { current
    | resultColor =
        current.baseColor
          |> batchProcess current.adjustments
    }


resetAdjustments : Output -> Output
resetAdjustments output =
  { output
  | adjustments =
    { rotateHue = 0
    , scaleToRed = 0
    , scaleToAqua = 0
    , saturate = 0
    , desaturate = 0
    , lighten = 0
    , darken = 0
    , moreOpaque = 0
    , moreTransparent = 0
    }
  }
