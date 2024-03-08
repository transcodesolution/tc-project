// import HeroSection from "../components/HeroSection";
// // import contact from "../../../public/Assets/contact.png";
// import contact from "../../../public/Assets/contact.png"

// const ContactUs = () => {
//     return (
//         <div className="">
//             <HeroSection
//                 image={contact}
//             />
//         </div>
//     );
// };

// export default ContactUs;



import HeroSection from "../components/HeroSection";
import contact1 from "../../../public/Assets/contact1.png";
import style from "./styles.module.scss"

const ContactUs = () => {   

    return (
        <div
            className={style.heroBgImage}
           
        >
            <HeroSection image={contact1} />
        </div>
    );
};

export default ContactUs;

