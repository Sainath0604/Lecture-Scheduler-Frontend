import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import {
  AdminIcon,
  CrossIcon,
  EyeIcon,
  HamburgerIcon,
  LogOutIcon,
} from "../Icons/Icons";

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
      <div className="hidden md:block h-screen w-1/5 border-r">
        <div className="flex flex-col text-black ">
          <div className="flex justify-center items-center border-b h-20 text-2xl">
            <div className="font-semibold cursor-pointer">
              <Link to="/">Test</Link>
            </div>
          </div>

          <div className="flex flex-col gap-2 px-2 mt-2">
            <ul className="flex flex-col">
              <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                <span className="text-xl text-gray-400/75">
                  <EyeIcon />
                </span>
                <span className="">Support</span>
              </li>
              <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                <span className="text-xl text-gray-400/75">
                  <EyeIcon />
                </span>
                <span className="">Inbox</span>
              </li>
              <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                <span className="text-xl text-gray-400/75">
                  <EyeIcon />
                </span>
                <span className="">File Manager</span>
              </li>
              <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                <span className="text-xl text-gray-400/75">
                  <EyeIcon />
                </span>
                <span className="">Data List</span>
              </li>
            </ul>
            <ul className="flex flex-col lg:mt-4">
              <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                <span className="text-xl text-gray-400/75">
                  <EyeIcon />
                </span>
                <span className="">Settings</span>
              </li>
              <li className="flex hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                <button onClick={logOut} className="flex gap-2 items-center">
                  <span className="text-xl text-gray-400/75">
                    <LogOutIcon />
                  </span>
                  <span>Log Out</span>
                </button>
              </li>
            </ul>
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
