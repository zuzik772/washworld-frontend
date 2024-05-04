declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.webp" {
  const value: any;
  export = value;
}

declare module "*.jpeg" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  import React = require("react");
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
