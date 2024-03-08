
import HeroSection from "@/app/components/HeroSection";
import style from "../styles.module.scss"
import softwareDevelopment from "../../../../public/Assets/softwareDevelopment.png"

const services1 = () => {

    return (
        <div
            className={style.heroBgImage}

        >
            <HeroSection image={softwareDevelopment} />
        </div>
    );
};

export default services1;