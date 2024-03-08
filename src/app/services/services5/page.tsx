import HeroSection from "@/app/components/HeroSection";
import style from "../styles.module.scss"
import trainingEducation from "../../../../public/Assets/trainingEducation.png"

const services5 = () => {

    return (
        <div
            className={style.heroBgImage}

        >
            <HeroSection image={trainingEducation} />
        </div>
    );
};

export default services5;