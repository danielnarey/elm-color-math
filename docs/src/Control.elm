module Control exposing
  ( BaseColor(..), Adjustment(..) )

-- Core
import Color exposing (Color)


type BaseColor
  = Hue (Maybe Float)
  | Saturation (Maybe Float)
  | Lightness (Maybe Float)
  | HslAlpha (Maybe Float)
  | Red (Maybe Int)
  | Green (Maybe Int)
  | Blue (Maybe Int)
  | RgbAlpha (Maybe Float)
  | Hex6 (Maybe Color)
  | Hex8 (Maybe Color)
  | Html5 String

type Adjustment
  = Lighten Float
  | Darken Float
  | Saturate Float
  | Desaturate Float
  | MoreOpaque Float
  | MoreTransparent Float
  | RotateHue Float
  | ScaleToRed Float
  | ScaleToAqua Float
