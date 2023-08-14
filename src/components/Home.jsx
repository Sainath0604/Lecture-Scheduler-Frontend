import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-grow text-white dark:text-black bg-customDark1-500 dark:bg-gray-200">
        <div className="flex flex-col justify-center items-center gap-4 lg:mt-16 p-8">
          <h1 className="font-bold text-4xl lg:text-6xl text-center">
            Welcome to Our Online Lecture Platform
          </h1>
          <p className="text-lg text-center">
            Establish an administrator account to initiate the seamless
            scheduling of online lectures for your students. Our platform
            ensures effortless access to the lecture timetable, offering a
            user-friendly interface for streamlined scheduling. Experience the
            convenience of managing and viewing your student&apos;s schedules
            with ease.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <Link to="/courses">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full">
                Explore Courses
              </button>
            </Link>
            <Link to="/aboutUs">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full">
                About us
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
