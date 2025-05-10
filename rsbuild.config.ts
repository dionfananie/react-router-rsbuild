import { defineConfig } from "@rsbuild/core";
import { pluginReactRouter } from "rsbuild-plugin-react-router";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [
    pluginReactRouter({
      // Optional: Enable custom server mode
      customServer: false,
      // Optional: Specify server output format
      serverOutput: "commonjs",
      //Optional: enable experimental support for module federation
      federation: false,
    }),
    ,
    pluginReact(),
  ],
});
