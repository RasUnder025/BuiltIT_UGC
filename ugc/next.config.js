/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "yunwkhddaxrdlksmxpbk.supabase.co",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
