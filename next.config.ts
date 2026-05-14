import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/greece",
        destination: "/destinations/greece",
        permanent: true,
      },
      {
        source: "/turkey",
        destination: "/destinations/turkey",
        permanent: true,
      },
      {
        source: "/italy",
        destination: "/destinations/italy",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
