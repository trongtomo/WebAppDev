/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GRAPHQL_ENDPOINT:
      "https://smart-parking-server-dev.azurewebsites.net/graphql",
    SERVER_ENDPOINT: "https://smart-parking-server-dev.azurewebsites.net",
    AUTH0_SECRET:"bb1f7f2244d30e18abd0ac55fa262e462f1fee8bea4185fe5544ec93653f4d26",
    AUTH0_BASE_URL:'http://localhost:3000',
    AUTH0_ISSUER_BASE_URL:'https://dev-3rzb80xuqjui347f.us.auth0.com',
    AUTH0_CLIENT_ID:'li9hW6FiTIl5Z7qv6YDqVmSiWPU5Rq88',
    AUTH0_CLIENT_SECRET:'RI8AuRra84UACywvPOTamyTsDCCzhe0kl7Zf09y1GDdB8OrZGY_BCxwUx-4QRs9H'
  },
};

module.exports = nextConfig;
