module Responsive exposing
  ( Orientation(..), AspectRatio(..), PixelWidth(..)
  , orientation, aspectRatio, pixelWidth
  , aspectRatioCustom, pixelWidthCustom
  )


{-|

# Use breakpoints to make responsive adjustments to your Elm program's view
With the
[Window](http://package.elm-lang.org/packages/elm-lang/window/latest/Window)
package, your Elm program can track the size of the user's browser window. This
package provides handlers that make it easier to use window size data for
responsive adjustments.

## Orientation
@docs Orientation, orientation

## Aspect Ratio
@docs AspectRatio, aspectRatio, aspectRatioCustom

## Pixel Width
@docs PixelWidth, pixelWidth, pixelWidthCustom

-}


import Window


{-| A window's aspect ratio may be portrait (< 1) or landscape (>= 1)
-}
type Orientation
  = Portrait
  | Landscape


{-| Relative to orientation, a window's aspect ratio may be tall or wide
-}
type AspectRatio
  = PortraitTall
  | PortraitWide
  | LandscapeTall
  | LandscapeWide


{-| Relative to orientation, the pixel width of a window may be small, medium,
or large
-}
type PixelWidth
  = Small
  | Medium
  | Large


{-| Determine whether the window orientation is `Portrait` or `Landscape`
-}
orientation : Window.Size -> Orientation
orientation window =
  let
    ratio =
      ( window.width |> toFloat
      , window.height |> toFloat
      )
        |> uncurry (/)

  in
    if ratio < 1 then
      Portrait

    else
      Landscape


{-| Determine whether the window aspect ratio is `PortraitTall`, `PortraitWide`,
`LandscapeTall`, or `LandscapeWide` using default breakpoints. The default
breakpoints are based on the dimensions of an iPad (all models) or Google Nexus
9. A fullscreen window on one of these tablets should return `PortraitWide` in
portait mode or `LandscapeTall` in landscape mode. Other tablets and mobile
devices have more rectangular aspect ratios (see metrics
[here](https://material.io/devices/))
and should return `PortraitTall` or `LandscapeWide` with a fullscreen window.

-}
aspectRatio : Window.Size -> AspectRatio
aspectRatio =
  aspectRatioCustom
    { portrait = 3/4
    , landscape = 4/3
    }


{-| Determine whether the window aspect ratio is `PortraitTall`, `PortraitWide`,
`LandscapeTall`, or `LandscapeWide` using custom breakpoints for each
orientation. An aspect ratio greater than or equal to the portrait breakpoint
(but less than 1) is `PortraitWide`. An aspect ratio less than or equal to the
landscape breakpoint (but at least 1) is `LandscapeTall`.

-}
aspectRatioCustom : { portrait : Float, landscape : Float } -> Window.Size -> AspectRatio
aspectRatioCustom args window =
  let
    ratio =
      ( window.width |> toFloat
      , window.height |> toFloat
      )
        |> uncurry (/)

  in
    if ratio < args.portrait then
      PortraitTall

    else if ratio >= args.portrait && ratio < 1 then
      PortraitWide

    else if ratio >= 1 && ratio <= args.landscape then
      LandscapeTall

    else
      LandscapeWide


{-| Determine whether the window is `Small`, `Medium`, or `Large` using
default breakpoints. The default breakpoints are based on a 16:9 aspect ratio
with minimum device dimensions of 320 x 569 pixels (iPhone 5 or Android One). A
window that is double the minimum width or less (relative to orientation)
returns `Small`. A window that is triple the minimum or less returns `Medium`.
Anything larger returns `Large`.

-}
pixelWidth : Window.Size -> PixelWidth
pixelWidth =
  pixelWidthCustom
    { portrait = (640, 960)
    , landscape = (1138, 1707)
    }


{-| Determine whether the window is `Small`, `Medium`, or `Large` using
custom breakpoints. A window that is less than or equal to the first breakpoint
(relative to orientation) returns `Small`. A window that is less than or equal
to the second breakpoint returns `Medium`. Anything larger returns `Large`.

-}
pixelWidthCustom : { portrait : (Int, Int), landscape : (Int, Int) } -> Window.Size -> PixelWidth
pixelWidthCustom args window =
  case (window |> orientation) of
    Portrait ->
      if window.width <= (args.portrait |> Tuple.first) then
        Small

      else if window.width <= (args.portrait |> Tuple.second) then
        Medium

      else
        Large

    Landscape ->
      if window.width <= (args.landscape |> Tuple.first) then
        Small

      else if window.width <= (args.landscape |> Tuple.second) then
        Medium

      else
        Large
