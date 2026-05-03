import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: isDev
              ? "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;"
              : "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.gstatic.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: blob:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
