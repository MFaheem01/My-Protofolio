declare module "gsap-trial/ScrollSmoother" {
  interface ScrollSmoother {
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean;
    scrollTo(target: string | number | Element, smooth?: boolean, position?: string): void;
    refresh(): void;
  }

  const ScrollSmoother: {
    create(config?: object): ScrollSmoother;
    get(): ScrollSmoother | undefined;
    refresh(): void;
  };

  export default ScrollSmoother;
}

declare module "gsap-trial/SplitText" {
  class SplitText {
    constructor(target: string | Element | Element[], vars?: object);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
  export default SplitText;
}