import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import {
  AdminIcon,
  CrossIcon,
  DatabaseIcon,
  EyeIcon,
  HamburgerIcon,
  LogOutIcon,
  UploadIcon,
} from "../components/Icons";

function AdminNav() {
  const navigate = useNavigate();

  const logOut = () => {
    window.localStorage.clear();
    navigate("/signIn");
  };

  const navigation = [
    { name: "View User", to: "/viewUser" },
    { name: "Upload Products", to: "/uploadProduct" },
    { name: "View Products", to: "/viewProduct" },
    { name: "New button", to: "#" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="hidden md:block h-screen w-1/5  bg-[#241B35] ">
        <div className="flex flex-col text-white ">
          <div className="flex flex-col justify-between items-center border-b border-gray-500 h-[19vh] p-4 text-3xl">
            <div className="">
              <Link to="/">
                <img className="w-28" src="" alt="Logo" />
              </Link>
            </div>
            <div className="font-bold pb-4 cursor-pointer">
              <Link to="/signIn">Admin Panel</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[79vh] px-8 ">
            <div className="mt-5 ">
              <div className="text-sm lg:text-lg ">
                <Link to="/viewUser">
                  <div className=" hover:bg-gray-700 text-white lg:font-base py-1 pl-1 rounded-md mb-2 flex items-center">
                    <span className="mr-3 lg:text-xl">
                      <EyeIcon />
                    </span>
                    <span>View Users</span>
                  </div>
                </Link>
                <Link to="/uploadProduct">
                  <div className=" hover:bg-gray-700 text-white lg:font-base py-1 pl-1 rounded-md mb-2 flex items-center">
                    <span className="mr-3 lg:text-xl">
                      <UploadIcon />
                    </span>
                    <span>Upload Products</span>
                  </div>
                </Link>
                <Link to="/viewProduct">
                  <div className=" hover:bg-gray-700 text-white lg:font-base py-1 pl-1 rounded-md mb-2 flex items-center">
                    <span className="mr-3 lg:text-xl">
                      <DatabaseIcon />
                    </span>
                    <span>View Products</span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="pl-1 pb-3">
              <span className="text-3xl cursor-pointer" onClick={logOut}>
                <LogOutIcon />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* For mobile screen */}

      <Disclosure as="nav" className="bg-gray-800 block md:hidden h-1/5">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <div className="block h-6 w-6">
                        <CrossIcon />
                      </div>
                    ) : (
                      <div className="block h-6 w-6">
                        <HamburgerIcon />
                      </div>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src=""
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link to="/signIn">
                    <button
                      type="button"
                      className="rounded-full mr-2 lg:mr-6 bg-gray-800 p-1 text-gray-400 hover:text-white "
                    >
                      <span className="sr-only">Admin Panel</span>
                      <span className="h-6 w-6">
                        <AdminIcon />
                      </span>
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white "
                  >
                    <span className="sr-only">Logout</span>
                    <span className="h-6 w-6" onClick={logOut}>
                      <LogOutIcon />
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.to}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default AdminNav;
