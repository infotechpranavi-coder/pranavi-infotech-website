import path from 'node:path'
import { fileURLToPath } from 'node:url'

/** Same folder as this config file — fixes Turbopack when a parent directory has another lockfile. */
const projectRoot = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: projectRoot,
  },
}

export default nextConfig
