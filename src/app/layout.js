import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = {
  title: "E-Parking",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider
        loginUrl="http://localhost:3000/api/auth/login"
        profileUrl="http://localhost:3000/api/auth/me"
      >
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
