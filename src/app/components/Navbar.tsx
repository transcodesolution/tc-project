import Link from "next/link"
import { BsLinkedin } from "react-icons/bs"
import { FaBehanceSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
const Navbar = () => {
    return (
        <nav>
            <div className="flex text-white p-4 items-center justify-between bg-blue">
                <div className="container mx-auto text-white py-0.5 flex items-center justify-between ">
                    <div className="text-white">
                        <Link href="mailto:company@example.com">
                            <span className="hover:underline">company@example123.com</span>
                        </Link>
                    </div>
                    <div className="flex space-x-4">
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
                </div>
            </div>
            <div className="flex">
                <div className="container mx-auto flex justify-end space-x-4 p-4 items-center">
                    <Link href="/">
                        <span className="hover:underline hover:text-blue">HOME</span>
                    </Link>
                    <Link href="/about">
                        <span className="hover:underline hover:text-blue">ABOUT US</span>
                    </Link>
                    <Link href="/services">
                        <span className="hover:underline hover:text-blue">SERVICES</span>
                    </Link>
                    <Link href="/portfolio">
                        <span className="hover:underline hover:text-blue">PORTFOLIO</span>
                    </Link>
                    <Link href="/contactus">
                        <span className="hover:underline hover:text-blue">CONTACT US</span>
                    </Link>
                    <button className="bg-blue px-4 py-2 rounded-md text-white">
                        LET’S TALK
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
