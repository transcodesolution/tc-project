import HeroSection from "@/app/components/HeroSection";
import style from "../styles.module.scss"
import consultingAdvisory from "../../../../public/Assets/consultingAdvisory.png"

const services2 = () => {

    return (
        <div
            className={style.heroBgImage}

        >
            <HeroSection image={consultingAdvisory} />
        </div>
    );
};

export default services2;