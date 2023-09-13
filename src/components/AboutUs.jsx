import Navbar from "./Navbar";

function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-grow bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] dark:bg-gray-800">
        <div className="flex flex-col justify-center items-center gap-6 pt-8 text-black ">
          <div>
            <h1 className="text-3xl font-semibold text-center mb-4">
              Welcome to Our Online Lecture Platform
            </h1>
            <p className="text-lg text-center mb-6">
              Experience efficient online lecture scheduling for administrators
              and students alike. Our user-friendly interface empowers you to
              manage scheduling lectures seamlessly.
            </p>
          </div>
          <div className="flex gap-4">
            <div>
              <h2 className="text-xl font-semibold">Admin Account Creation:</h2>
              <ol className="list-decimal">
                <li>Visit our official platform website.</li>
                <li>
                  Navigate to the registration page and select &quot;Admin
                  Account&quot;.
                </li>
                <li>
                  Provide your details, including name, email, and secure
                  password.
                </li>
                <li>Verify your email to activate the admin account.</li>
              </ol>
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                Streamlined Scheduling Process:
              </h2>
              <ol className="list-decimal">
                <li>Log in to your admin account.</li>
                <li>
                  Access the intuitive dashboard tailored for administrators.
                </li>
                <li>
                  Choose &quot;Schedule Lecture&quot; and set date, time, and
                  subject.
                </li>
                <li>
                  Specify attending students or groups, and save the schedule.
                </li>
              </ol>
            </div>
          </div>
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
