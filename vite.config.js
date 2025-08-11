import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // <-- burayı değiştiriyoruz, alt klasör değil root
  plugins: [react()],
});
