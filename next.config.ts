import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.historinhasbiblicas.com.br" }],
        destination: "https://historinhasbiblicas.com.br/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
