enum ControlsPosition {
  Top = "top",
  Right = "right",
  Bottom = "bottom",
  Left = "left"
}

interface CarouselI {
  children: React.ReactNode;
  controlsPosition?: ControlsPosition;
}

interface useCarouselI {
  children: React.ReactNode;
}

export { ControlsPosition, type CarouselI, type useCarouselI };
