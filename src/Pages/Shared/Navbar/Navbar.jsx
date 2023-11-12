import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)

    const logoutButton  = () => {
        logOut()
        .then()
        .catch()
    }
    const NavbarLink = <>
    <li><NavLink className="py-3 px-4 text-fuchsia-700 rounded-xl hover:text-white font-bold hover:bg-fuchsia-700" to="/">Home</NavLink></li>
    <li><NavLink className="py-3 px-4 text-fuchsia-700 rounded-xl hover:text-white font-bold hover:bg-fuchsia-700" to="/allJobs">All Jobs</NavLink></li>
    <li><NavLink className="py-3 px-4 text-fuchsia-700 rounded-xl hover:text-white font-bold hover:bg-fuchsia-700" to="/appliedJobs">Applied Jobs</NavLink></li>
    <li><NavLink className="py-3 px-4 text-fuchsia-700 rounded-xl hover:text-white font-bold hover:bg-fuchsia-700" to="/addJob">Add A Job</NavLink></li>
    <li><NavLink className="py-3 px-4 text-fuchsia-700 rounded-xl hover:text-white font-bold hover:bg-fuchsia-700" to="/myJobs">My Jobs</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  rounded-box w-52">
      {NavbarLink}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">
        <img className="w-10" src="https://images.squarespace-cdn.com/content/v1/5941dba2b3db2bab435fa5a7/c47baec4-8fde-4e41-a2f8-7bb6fe0ac913/hiring+icon.png" alt="" />
        <p>Empowering Futures</p>
    </a>
  </div>
  <div className="navbar-center hidden  lg:flex">
    <ul className="flex gap-x-3 px-1">
    {NavbarLink}
    </ul>
  </div>
  <div className="navbar-end">

   
 {
    user?.email ?
    <>
    <img className="w-10 rounded-full mr-3" src={user?.photoURL} alt="" />
    <h2 className="mr-2">{user?.displayName}</h2>
    <button onClick={logoutButton} className="btn py-2 px-5 mr-2 bg-fuchsia-400">Log Out</button>
    </>
    :
    <>
    
    <Link to="/login" className=" text-white bg-fuchsia-700 py-2 px-4 rounded-lg mr-2">Login</Link>
    <Link to="/register" className=" text-white bg-fuchsia-700 py-2 px-4 rounded-lg">Register</Link></>
    
 }
  </div>
</div>
        </div>
    );
};

export default Navbar;  