import Navbar from "./Navbar";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-grow text-white dark:text-black bg-customDark1-500 dark:bg-gray-200">
        Home
      </main>
    </div>
  );
}

export default Home;
