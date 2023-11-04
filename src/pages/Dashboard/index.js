import Navigation from "../../../components/Navigation/navigation";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="flex">
        <aside className="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
          <div className="flex items-center mb-4 space-x-1">
            {/* Logo and company name */}
          </div>
        </aside>
        <Navigation />

        <main className="flex-grow p-4">{/* Content goes here */}</main>
      </div>
    </div>
  );
}
