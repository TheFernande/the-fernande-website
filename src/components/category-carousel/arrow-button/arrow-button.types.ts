interface ArrowButtonI {
  direction: "previous" | "next";
  onClick: () => void;
  disabled: boolean;
}

export type { ArrowButtonI };
