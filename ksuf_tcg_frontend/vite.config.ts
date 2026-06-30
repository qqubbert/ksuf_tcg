import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@processes": path.resolve(__dirname, "src/processes"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@features": path.resolve(__dirname, "src/features"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@data": path.resolve(__dirname, "src/shared/data"),
      "@utils": path.resolve(__dirname, "src/shared/utils"),
      "@components": path.resolve(__dirname, "src/shared/components"),
      "@shaders": path.resolve(__dirname, "src/shared/shaders"),
      "@hooks": path.resolve(__dirname, "src/shared/hooks"),
      "@types": path.resolve(__dirname, "src/shared/types"),
    },
  },
});
