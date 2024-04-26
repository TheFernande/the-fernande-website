import "@testing-library/jest-dom";

global.IntersectionObserver = class IntersectionObserver {
  root = null;
  rootMargin = "";
  thresholds = [0];
  takeRecords = () => [];

  constructor(callback: IntersectionObserverCallback) {
    this.observe = (target: Element) => {
      const entry: IntersectionObserverEntry = {
        boundingClientRect: target.getBoundingClientRect(),
        intersectionRatio: 0,
        intersectionRect: target.getBoundingClientRect(),
        isIntersecting: false,
        rootBounds: null,
        target,
        time: 0
      };
      callback([entry], this);
    };
    this.unobserve = () => null;
    this.disconnect = () => null;
  }

  observe: (target: Element) => void;
  unobserve: (target: Element) => void;
  disconnect: () => void;
};

global.ResizeObserver = class ResizeObserver {
  observe: (target: Element) => void;
  unobserve: (target: Element) => void;
  disconnect: () => void;

  constructor(callback: ResizeObserverCallback) {
    this.observe = (target: Element) => {
      const entry: ResizeObserverEntry = {
        target,
        contentRect: target.getBoundingClientRect(),
        borderBoxSize: [{ inlineSize: 0, blockSize: 0 }],
        contentBoxSize: [{ inlineSize: 0, blockSize: 0 }],
        devicePixelContentBoxSize: [{ inlineSize: 0, blockSize: 0 }]
      };
      callback([entry], this);
    };
    this.unobserve = () => null;
    this.disconnect = () => null;
  }
};
