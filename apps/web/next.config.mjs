/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@sst-vitals/ui"],
  env: {
    NEXT_PUBLIC_API_URL: 'https://gwze277xsa.execute-api.eu-north-1.amazonaws.com/hello',
  },
}

export default nextConfig
