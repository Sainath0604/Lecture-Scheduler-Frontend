import Navbar from "./Navbar";

function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-grow bg-white dark:bg-gray-800">
        <div className="flex flex-col justify-center items-center gap-6 p-8 text-black ">
          <h1 className="text-3xl font-semibold text-center mb-4">
            Welcome to Our Online Lecture Platform
          </h1>
          <p className="text-lg text-center mb-6">
            Experience efficient online lecture scheduling for administrators
            and students alike. Our user-friendly interface empowers you to
            manage scheduling tasks seamlessly.
          </p>
          <h2 className="text-xl font-semibold mb-2">
            Admin Account Creation:
          </h2>
          <ol className="list-decimal pl-6 mb-6">
            <li>Visit our official platform website.</li>
            <li>
              Navigate to the registration page and select &quot;Admin
              Account&quot;.
            </li>
            <li>
              Provide your details, including name, email, and secure password.
            </li>
            <li>Verify your email to activate the admin account.</li>
          </ol>
          <h2 className="text-xl font-semibold mb-2">
            Streamlined Scheduling Process:
          </h2>
          <ol className="list-decimal pl-6 mb-6">
            <li>Log in to your admin account.</li>
            <li>Access the intuitive dashboard tailored for administrators.</li>
            <li>
              Choose &quot;Schedule Lecture&quot; and set date, time, and
              subject.
            </li>
            <li>
              Specify attending students or groups, and save the schedule.
            </li>
          </ol>
          {/* ... (Similar styling for other sections) */}
          <p className="text-center text-gray-600 mt-8">
            Join us today to elevate education scheduling. Reach out to our
            dedicated support team for assistance.
          </p>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
