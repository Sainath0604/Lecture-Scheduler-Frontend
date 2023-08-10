import Navbar from "./Navbar";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-grow text-white dark:text-black bg-customDark1-500 dark:bg-gray-200">
        <div className="flex justify-center items-center flex-col gap-2 lg:mt-10">
          <h1 className="font-bold text-3xl">Welcome to our website,</h1>
          <h1 className="font-bold text-3xl">
            Here you can schedule online lectures
          </h1>
        </div>
      </main>
    </div>
  );
}

export default Home;
