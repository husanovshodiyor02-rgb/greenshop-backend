// import { Link, useLocation } from 'react-router-dom';
// import Logo from "../../assets/img/logo.svg";
// import Shop from "../../assets/img/shop.png";
// import { Search, Bell } from "lucide-react";

// const Header = () => {
//     const {pathname}=useLocation();
//     console.log(pathname);
//   return (
//     <header className="">
//       <div className="container1 border-b border-[#00800043] flex items-center justify-between">
//         <div>
//           <a href="/">
//             <img className="py-5" src={Logo} alt="logotip" />
//           </a>
//         </div>
//         <nav className="flex items-center gap-5">
//           <Link
//             to={"/"}
//             className={`${pathname === "/" ? "text-nav" : ""} font-semibold`}
//           >
//             Home
//           </Link>
//           <Link
//             to={"/blog"}
//             className={`${
//               pathname === "/blog" ? "text-nav" : ""
//             } font-semibold`}
//           >
//             Blog
//           </Link>
//         </nav>
//              <div className='flex items-center gap-5'>
//              <Search className='text-[#3d3d3d]'/>
//              <Bell className='text-[#3d3d3d]'/>
//              <img src={Shop} alt="" />

//              <button className='bg-nav rounded-lg font-medium text-white p-[7px_25px] cursor-pointer'>Login</button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import Shop from "../../assets/img/shop.png";
import { Search, Bell, X, Menu } from "lucide-react";

const Header = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm sticky top-0 z-50 bg-white">
      <div className="container1 border-b border-[#00800043] flex items-center justify-between py-4 px-4 md:px-8 lg:px-16">
        <div>
          <Link to="/">
            <img className="py-1 h-10 md:h-12" src={Logo} alt="logotip" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-5">
          <Link
            to="/"
            className={`${
              pathname === "/" ? "text-[#46a358]" : "text-[#3d3d3d]"
            } font-semibold`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`${
              pathname === "/blog" ? "text-[#46a358]" : "text-[#3d3d3d]"
            } font-semibold`}
          >
            Blog
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <Search className="text-[#3d3d3d]" />
          <Bell className="text-[#3d3d3d]" />
          <img src={Shop} alt="shop" className="h-6 w-6" />
          <button className="bg-[#46a358] rounded-lg font-medium text-white py-1 px-4 cursor-pointer">
            Login
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#00800043] w-full shadow-md">
          <nav className="flex flex-col gap-3 p-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className={`${
                pathname === "/" ? "text-[#46a358]" : "text-[#3d3d3d]"
              } font-semibold`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className={`${
                pathname === "/blog" ? "text-[#46a358]" : "text-[#3d3d3d]"
              } font-semibold`}
            >
              Blog
            </Link>
            <div className="flex items-center gap-3 mt-3">
              <Search className="text-[#3d3d3d]" />
              <Bell className="text-[#3d3d3d]" />
              <img src={Shop} alt="shop" className="h-6 w-6" />
              <button className="bg-[#46a358] rounded-lg font-medium text-white py-1 px-4 cursor-pointer">
                Login
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
