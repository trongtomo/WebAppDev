"use client";
import { Link } from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Dashboard from "@/pages/Dashboard";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
const IndexPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <Header />
        Welcome {user.name}!<a href="/api/auth/logout">Logout</a>
        <Dashboard />
        <Footer />
      </div>
    );
  }
  return <a href="/api/auth/login">Login</a>;
};
export default IndexPage;
