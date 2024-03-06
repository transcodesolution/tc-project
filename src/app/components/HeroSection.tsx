import Image, { ImageProps } from "next/image";

interface HeroSectionProps {
    image?: ImageProps['src']; // Use ImageProps['src'] as the type
    // image?: String;
}

const HeroSection: React.FC<HeroSectionProps> = ({ image }) => {
    return (
        <div className="flex items-center justify-center">
            {image && (
                <Image
                    src={image}                    
                    alt="Your Name"
                    // className="bg-[#F2F2F2]"
                    className="bg-gray"
                />
            )}
        </div>
    );
};

export default HeroSection;



