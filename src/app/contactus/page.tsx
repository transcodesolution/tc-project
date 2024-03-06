import HeroSection from "../components/HeroSection";
import contact from "../../../public/Assets/contact.png";

const ContactUs = () => {
    return (
        <div className="flex items-center justify-center">
            <HeroSection                
                image={contact}
            />
        </div>
    );
};

export default ContactUs;
