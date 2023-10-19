import Head from "next/head";

import Navigation from "../../../components/Navigation/navigation";
import Header from "../../../components/Header/header";
import Table from "../../../components/Tables/table";
const Home = () => {
  return (
    <div className="flex">
      <aside className="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
        <div className="flex items-center mb-4 space-x-1">
          {/* Logo and company name */}
        </div>
        <Navigation />
      </aside>
      <main className="flex-grow p-4">
        <Header />
        <Table />
      </main>
    </div>
  );
};

export default Home;
