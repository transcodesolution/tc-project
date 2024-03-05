// import Link from 'next/link';
// import { BsLinkedin } from "react-icons/bs";
// import { FaBehanceSquare, FaInstagramSquare } from 'react-icons/fa';
// import { FaSquareFacebook } from 'react-icons/fa6';
// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             {/* Left section */}
//             <div className="navbar-left">
//                 <Link href="mailto:company@example.com">company@example.com</Link>
//             </div>

//             {/* Right section */}
//             <div className="navbar-right">
//                 <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
//                     <BsLinkedin />
//                 </Link>
//                 <Link href="company-instagram" target="_blank" rel="noopener noreferrer">
//                     <FaInstagramSquare />
//                 </Link>
//                 <Link href="company-facebook" target="_blank" rel="noopener noreferrer">
//                     <FaSquareFacebook />
//                 </Link>
//                 <Link href="company-facebook" target="_blank" rel="noopener noreferrer">
//                     <FaBehanceSquare />
//                 </Link>
//             </div>

//             {/* Links */}
//             <div className="navbar-links">
//                 <Link href="/">HOME</Link>
//                 <Link href="/about">ABOUT US</Link>
//                 <Link href="/services">SERVICES</Link>
//                 <Link href="/portfolio">PORTFOLIO</Link>
//             </div>

//             {/* Portfolio button */}
//             <button className="portfolio-button">PORTFOLIO</button>
//         </nav>
//     );
// };

// export default Navbar;

import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { FaBehanceSquare, FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
            {/* Left section */}
            <div className="flex items-center space-x-2">
                <Link href="mailto:company@example.com">
                    <span className="hover:underline">company@example.com</span>
                </Link>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-2">
                <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
                    <span className="text-xl hover:text-blue-500">
                        <BsLinkedin />
                    </span>
                </Link>
                <Link href="company-instagram" target="_blank" rel="noopener noreferrer">
                    <span className="text-xl hover:text-pink-500">
                        <FaInstagramSquare />
                    </span>
                </Link>
                <Link href="company-facebook" target="_blank" rel="noopener noreferrer">
                    <span className="text-xl hover:text-blue-500">
                        <FaFacebookSquare />
                    </span>
                </Link>
                <Link href="company-behance" target="_blank" rel="noopener noreferrer">
                    <span className="text-xl hover:text-blue-500">
                        <FaBehanceSquare />
                    </span>
                </Link>
            </div>

            {/* Links */}
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <span className="hover:underline">HOME</span>
                </Link>
                <Link href="/about">
                    <span className="hover:underline">ABOUT US</span>
                </Link>
                <Link href="/services">
                    <span className="hover:underline">SERVICES</span>
                </Link>
                <Link href="/portfolio">
                    <span className="hover:underline">PORTFOLIO</span>
                </Link>
            </div>

            {/* Portfolio button */}
            <button className="portfolio-button bg-blue-500 text-white px-4 py-2 rounded-md">
                PORTFOLIO
            </button>
        </nav>
    );
};

export default Navbar;
