import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    assetsInclude: /\.(png|jpe?g|gif|svg)$/i,
    plugins: [react()],
})
