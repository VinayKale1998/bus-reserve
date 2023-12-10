/// <reference types="vite/client" />

declare interface ImportMeta {
  readonly env: {
    readonly VITE_GOOGLE_API_KEY: string;
  };
}

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}
