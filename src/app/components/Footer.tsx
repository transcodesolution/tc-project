import Link from "next/link";
import { FaFacebookSquare, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from 'next/image';
import logo from "../../../public/Assets/logo.png"
import { MdLocationPin } from "react-icons/md";
const Footer = () => {
    return (
        <div className="bg-blue">
            <div className="container mx-auto text-white pt-8">
                <div className="flex">                   
                    <div className="flex-1">
                        <Image
                            src={logo} 
                            height={94} 
                            width={116.51} 
                            alt="Your Name"
                            className="pb-4"
                        />
                        <span>                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pulvinar....
                        </span>
                        <div className="flex gap-5 mt-4">                            
                            <div className="flex">
                                <Link href="company-linkedin" target="_blank" rel="noopener noreferrer">
                                    <span className="text-xl hover:text-blue-500">
                                        <FaFacebookSquare className="w-6 h-6 rounded-md" />
                                    </span>
                                </Link>
                            </div>
                            <div className="flex">
                                <Link href="company-instagram" target="_blank" rel="noopener noreferrer">
                                    <span className="text-xl hover:text-pink-500">
                                        <FaTwitter className="w-6 h-6 rounded-md" />
                                    </span>
                                </Link>
                            </div>
                            <div className="flex">
                                <Link href="company-facebook" target="_blank" rel="noopener noreferrer">
                                    <span className="text-xl hover:text-blue-500">
                                        <FaYoutube className="w-6 h-6 rounded-md" />
                                    </span>
                                </Link>
                            </div>
                            <div className="flex">
                                <Link href="company-behance" target="_blank" rel="noopener noreferrer">
                                    <span className="text-xl hover:text-blue-500">
                                        <FaPinterest className="w-6 h-6 rounded-md" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>                   
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">Headquarter</h1>
                        <div className="w-24 h-0.5 bg-white mb-2"></div>   
                        <div className="flex gap-4">
                            <Link href="company-facebook" target="_blank" rel="noopener noreferrer">
                                <span className="text-xl hover:text-blue-500">
                                    <MdLocationPin className="w-8 h-9 rounded-md"/> 
                                </span>
                            </Link>
                            <p>
                                301, Ambika Pinnacle, beside Lajamni Chowk, Maruti Dham Society, Mota Varachha, Surat, Gujarat 394101
                            </p>
                        </div>                    
                    </div>                   
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">Project Inquiry</h1>
                        <div className="w-28 h-0.5 bg-white mb-2"></div>
                        <p>Call: +1 4758123694</p>
                        <p>Email: info@transcodesolution.com</p>
                    </div>                  
                    <div className="flex-1">
                        <h1 className="text-xl font-bold">Career Inquiry</h1>
                        <div className="w-28 h-0.5 bg-white mb-2"></div>
                        <p>Call: +1 4758123694</p>
                        <p>Email: info@transcodesolution.com</p>
                    </div>
                </div>
                <hr className="border-t border-white my-6" />
                <div className="pb-7 text-center text-sm">
                    © 2024 All Rights Reserved - transcodesolution.com
                </div>
            </div>
        </div>  
    );
};

export default Footer;
