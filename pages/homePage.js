import Head from 'next/head';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Table from '../components/Table';

const Home = () => {
  return (
    <div className="flex">
      <aside className="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
        <div className="flex items-center mb-4 space-x-1">
          {/* Logo and company name */}
        </div>
        <Navigation /> {/* Include the Navigation component */}
      </aside>
      <main className="flex-grow p-4">
        <Header /> {/* Include the Header component */}
        <Table /> {/* Include the Table component */}
      </main>
    </div>
  );
};

export default Home;
