import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
// import logo from '../../assets/logo.png'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-black/70 fixed z-50 py-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-black/70 rounded-box w-52 text-slate-300 uppercase font-bold"
          >
            <li className="mr-7">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-7">
              <Link to="/allToys">All Product</Link>
            </li>
            <li className="mr-7">
              <Link to="/myToys">My Product</Link>
            </li>
            <li className="mr-7">
              <Link to="/addProject"> Add Product</Link>
            </li>
            <li>
              {user ? (
                <div className="flex items-center">
                  <p
                    className="cursor-pointer ml-7 border-2 rounded py-2 px-3"
                    onClick={handleLogout}
                  >
                    logout
                  </p>
                </div>
              ) : (
                <div>
                  <Link to="/login" className="mr-7">
                    Login
                  </Link>
                  <Link to="/register" className="">
                    Register
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-slate-300">MAC Cosmetics</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm uppercase text-slate-300 font-bold items-center">
          {user ? (
            <>
              <li className="mr-7">
                <Link to="/">Home</Link>
              </li>
              <li className="mr-7">
                <Link to="/myProduct">My Product</Link>
              </li>
              <li className="mr-7">
                <Link to="/allProduct">All Product</Link>
              </li>
              <li className="mr-7">
                <Link to="/addProduct"> Add Product</Link>
              </li>
              <li className="flex items-center">
                <p
                  className="cursor-pointer ml-7 border-2 rounded py-2 px-3"
                  onClick={handleLogout}
                >
                  logout
                </p>
              </li>
            </>
          ) : (
            <>
              <li className="mr-7">
                <Link to="/">Home</Link>
              </li>
              <li className="mr-7">
                <Link to="/allToys">All Product</Link>
              </li>
              <li className="mr-7">
                <Link to="/addProject"> Add Product</Link>
              </li>
              <li className="mr-7">
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register" className="">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
