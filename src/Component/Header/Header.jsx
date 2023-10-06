import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const Header = () => {

    return (
        <div className="bg-fuchsia-700 py-2 flex justify-between text-white font-bold items-center px-14">
            <div>
                <img src={logo} alt="" />
            </div>
            <ul className="flex">
                <li className="mr-7"><Link to="/">Home</Link></li>
                <li className="mr-7"><Link to="/allToys">All-Product</Link></li>
                <li className="mr-7"><Link to="/myToys">My-Product</Link></li>
                <li className="mr-7"><Link to="/addProject"> Add-Product</Link></li>
                <li className="mr-7"><Link to="/login"> Login</Link></li>
                <li><Link to="/register"> Register</Link></li>
            </ul>
        </div>
    );
};

export default Header;