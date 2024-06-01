interface ControlsI {
  handleNext: () => void; // ? This means that handleNext is a function that takes no arguments and returns void -> nothing
  handlePrev: () => void;
  canScrollPrevious: boolean;
  canScrollNext: boolean;
}

export type { ControlsI };
