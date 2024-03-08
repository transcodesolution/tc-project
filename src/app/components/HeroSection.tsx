import Image, { ImageProps } from "next/image";

interface HeroSectionProps {
    image?: ImageProps['src']; // Use ImageProps['src'] as the type   
}

const HeroSection: React.FC<HeroSectionProps> = ({ image }) => {
    return (
        <>
            <div className="grid lg:grid-flow-col md:grid-flow-col grid-flow-row lg:grid-cols-1 gap-4">
                <div className="my-auto mr-44 md:mr-0"> <h1 className="text-blue xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-extrabold text-right">Contact Us</h1></div>
                <div className="">{image && (
                    <Image
                        src={image}
                        alt="Your Name"
                        // className="bg-[#F2F2F2]"
                        className="object-contain"
                    />
                )}</div>
            </div>
            {/* <div className="mr-auto ">
                <h1 className="text-blue text-5xl font-extrabold text-center flex">Contact Us</h1>
            <div className="	  pr-5">
                {image && (
                    <Image
                        src={image}                    
                        alt="Your Name"
                        className=""
                    />
                )}
            </div>
        </div> */}
        </>
    );
};

export default HeroSection;





