// import { NavLink, useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";
// import { useState } from "react";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const [showMenu, setShowMenu] = useState(false);
//   const [token, setToken] = useState(false);
//   return (
//     <div className=" flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
//       <img
//         onClick={() => navigate("/")}
//         className="w-44 cursor-pointer"
//         src="https://i.ytimg.com/vi/TkHxyR75vZE/maxresdefault.jpg"
//         alt="logo-image"
//       />
//       <ul className=" hidden md:flex items-center gap-5 font-medium">
//         <NavLink to="/">
//           <li className="py-1">HOME</li>
//           <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
//         </NavLink>
//         <NavLink to="/doctors">
//           <li className="py-1">ALL DOCTORS</li>
//           <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
//         </NavLink>
//         <NavLink to="/about">
//           <li className="py-1">ABOUT</li>
//           <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
//         </NavLink>
//         <NavLink to="/contact">
//           <li className="py-1">CONTACT</li>
//           <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
//         </NavLink>
//       </ul>
//       <div className=" flex items-center gap-4 ml-[8px] ">
//         {token ? (
//           <div className=" flex items-center gap-2 cursor-pointer group relative">
//             <img
//               className=" w-8 rounded-full"
//               src={assets.profile_pic}
//               alt="profile_picture"
//             />
//             <img
//               className=" w-2.5"
//               src={assets.dropdown_icon}
//               alt="dropdown_icon"
//             />
//             <div className=" absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
//               <div className=" min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
//                 <p
//                   onClick={() => navigate("/my-profile")}
//                   className=" cursor-pointer hover:text-black"
//                 >
//                   Profile
//                 </p>
//                 <p
//                   onClick={() => navigate("/my-appointments")}
//                   className=" cursor-pointer hover:text-black"
//                 >
//                   My appointments{" "}
//                 </p>
//                 <p
//                   onClick={() => setToken(false)}
//                   className=" cursor-pointer hover:text-black"
//                 >
//                   logout
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <button
//             onClick={() => navigate("/login")}
//             className=" bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block "
//           >
//             Create account
//           </button>
//         )}
//         <img
//           onClick={() => setShowMenu(true)}
//           className="w-6 md:hidden ml-[102px]"
//           src={assets.menu_icon}
//           alt=""
//         />

//         {/* mobile menu */}
//         <div
//           className={` ${
//             showMenu ? "fixed w-full" : "h-0 w-0"
//           }md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
//         >
//           <div className=" flex items-center justify-between px-5 py-6">
//             <img className="w-36" src={assets.logo} alt="" />
//             <img
//               className="w-7"
//               onClick={() => setShowMenu(false)}
//               src={assets.cross_icon}
//               alt=""
//             />
//           </div>
//           <ul className=" flex flex-col items-centre gap-2 mt-5 px-5 text-lg font-medium">
//             <NavLink onClick={() => setShowMenu(false)} to="/">
//               <p>Home</p>
//             </NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to="/doctors">
//               {" "}
//               <p>All Doctors</p>
//             </NavLink>

//             <NavLink onClick={() => setShowMenu(false)} to="/about">
//               <p>About</p>
//             </NavLink>

//             <NavLink onClick={() => setShowMenu(false)} to="/contact">
//               <p>Contact</p>
//             </NavLink>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { token, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  // const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("userToken");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src="https://i.ytimg.com/vi/TkHxyR75vZE/maxresdefault.jpg"
        alt="logo-image"
      />
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4 ml-[8px]">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="profile_picture"
            />
            <img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt="dropdown_icon"
            />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="cursor-pointer hover:text-black"
                >
                  Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="cursor-pointer hover:text-black"
                >
                  My appointments
                </p>
                <p
                  onClick={handleLogout}
                  className="cursor-pointer hover:text-black"
                >
                  logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
