import HeroSection from "@/app/components/HeroSection";
import style from "../styles.module.scss"
import qualityTesting from "../../../../public/Assets/qualityTesting.png"

const services6 = () => {

    return (
        <div
            className={style.heroBgImage}

        >
            <HeroSection image={qualityTesting} />
        </div>
    );
};

export default services6;