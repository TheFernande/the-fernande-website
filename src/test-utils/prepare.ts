// Mock window properties
// eslint-disable-next-line @typescript-eslint/no-empty-function
window.scrollTo = () => {};
window.location = { reload: jest.fn() } as unknown as Location;

Object.defineProperty(HTMLElement.prototype, "offsetParent", {
  get() {
    return this.parentNode;
  }
});

// Handle console warnings and errors
const consoleWarnOriginal = console.warn.bind(console);

const errorMessagesToExclude = [
  "React state updates should be wrapped into act",
  "UNSAFE_componentWillMount",
  ":first-child"
];

console.error = message => {
  if (
    typeof message === "string" &&
    errorMessagesToExclude.find(m => message.includes(m))
  ) {
    // Ignore errors in errorMessagesToExclude
    // This is to not cluster logs with warnings and errors that are not relevant to the test
  }
};

const messagesToExclude = [
  "Unexpected loaded state. Did you call `load` twice?",
  "postcss.plugin was deprecated. Migration guide:"
];

console.warn = message => {
  if (
    typeof message !== "string" ||
    !messagesToExclude.find(m => message.includes(m))
  ) {
    consoleWarnOriginal(message);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {};
