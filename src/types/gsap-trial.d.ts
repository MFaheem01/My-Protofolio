declare module 'gsap-trial/SplitText' {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];
    constructor(target: any, vars?: any);
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars?: any): any;
    static get(): any;
  }
}

declare module 'gsap-trial/*' {
  const value: any;
  export default value;
  export = value;
}