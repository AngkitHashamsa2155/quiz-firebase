import { NavLink, Link } from "react-router-dom";
import { navBArData } from "../constants/navbarData";
import { getToken } from "../constants/localStorage";
import { useAuthProvider } from "../Context/authContext";
const Navbar = () => {
  let token = getToken();
  const { handleLogOut, isLoading } = useAuthProvider();
  return (
    <nav className="h-20 bg-gray-800 flex items-center justify-between text-gray-300 py-5">
      <div className="section-center sm:flex sm:justify-between ">
        <section className="flex items-center justify-between">
          <h2 className="rounded-3xl border-2 border-gray-500 px-4 py-2 hover:cursor-pointer">
            <Link to="/">Quiz</Link>
          </h2>
          <button className="sm:hidden">bar</button>
        </section>
        <ul className="hidden sm:flex">
          {token ? (
            <li>
              <button
                className="px-3 py-2 border-2 border-gray-500 rounded-lg"
                onClick={handleLogOut}
              >
                {isLoading ? (
                  <span
                    className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-green-500"
                    role="status"
                  ></span>
                ) : (
                  "Log Out"
                )}
              </button>
            </li>
          ) : (
            navBArData.map((item) => {
              return (
                <li
                  key={item.id}
                  className="ml-3 px-3 py-2 border-2 border-gray-500 rounded-lg"
                >
                  <NavLink to={item.path}>{item.pathName}</NavLink>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
