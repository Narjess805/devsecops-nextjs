import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autoriser les requêtes cross-origin en développement
  allowedDevOrigins: ['192.168.56.101', 'localhost'],
};

export default nextConfig;
