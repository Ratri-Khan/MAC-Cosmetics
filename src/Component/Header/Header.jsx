import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../assets/logo.png";

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
            className="menu menu-sm dropdown-content mt-3 z-[1]   bg-black/70 rounded-box w-52 text-slate-300 uppercase font-bold"
          >
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
                <li>
                <img
                  src={user.photoURL}
                  alt=""
                  className="h-14 w-14 rounded-full p-0 m-0"
                />
                </li>
                <li>
                  <p
                    className="cursor-pointer text-center border rounded "
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
                  <Link to="/allProduct">All Product</Link>
                </li>
                <li className="mr-7">
                  <Link to="/addProduct"> Add Product</Link>
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
        <a className="btn btn-ghost text-xl text-slate-300">
          <img src={logo} alt="" />
        </a>
        {/* <a className="btn btn-ghost text-xl text-slate-300">MAC Cosmetics</a> */}
      </div>
      <div className="navbar-center hidden lg:flex py-0 my-0">
        <ul className="menu menu-horizontal py-0 my-0 text-sm uppercase text-slate-300 font-bold items-center">
          {user ? (
            <>
              <li className="mr-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mr-2">
                <Link to="/myProduct">My Product</Link>
              </li>
              <li className="mr-2">
                <Link to="/allProduct">All Product</Link>
              </li>
              <li className="mr-7">
                <Link to="/addProduct"> Add Product</Link>
              </li>
              <li className="mr-3">
                <img
                  src={user.photoURL}
                  alt=""
                  className="h-14 w-14 rounded-full p-0 m-0"
                />
              </li>
              <li>
                <p
                  className="cursor-pointer border rounded px-3"
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
                <Link to="/allProduct">All Product</Link>
              </li>
              <li className="mr-7">
                <Link to="/addProduct"> Add Product</Link>
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
