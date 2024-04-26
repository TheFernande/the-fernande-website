import isPropValid from "@emotion/is-prop-valid";
import { type ComponentType } from "react";

const excludedProps = [
  "align",
  "color",
  "fontWeight",
  "fontSizeKey",
  "isActive",
  "level",
  "order",
  "styles",
  "title",
  "variant",
  "width"
];

/**
 * Props that should be excluded from the HTML element
 */
const elementPropExclusions: Record<string, string[]> = {
  p: excludedProps,
  h1: excludedProps,
  h2: excludedProps,
  h3: excludedProps,
  h4: excludedProps,
  h5: excludedProps,
  h6: excludedProps,
  span: excludedProps,
  label: excludedProps,
  a: excludedProps,
  button: excludedProps,
  div: excludedProps,
  header: excludedProps,
  ul: excludedProps,
  svg: excludedProps,
  img: excludedProps
};

interface ForwardRefComponent {
  $$typeof: symbol;
}

// Type guard to check if the target is a forwardRef component
const isForwardRefComponent = (
  target: unknown
): target is ForwardRefComponent => {
  return (
    typeof target === "object" &&
    target !== null &&
    (target as ForwardRefComponent).$$typeof === Symbol.for("react.forward_ref")
  );
};

/**
 * This implements the default behavior from styled-components v5 for props filtering.
 * We need to prevent these props from being passed to the underlying HTML element to avoid
 * React warnings about invalid DOM props.
 */
const propsFilter = (
  propName: string,
  target: string | ComponentType<unknown>
): boolean => {
  if (typeof target === "string") {
    const exclusions = elementPropExclusions[target];

    if (exclusions?.includes(propName)) return false;

    return isPropValid(propName);
  }
  if (typeof target === "function" || isForwardRefComponent(target)) {
    return isPropValid(propName);
  }

  return true;
};

export { propsFilter };
