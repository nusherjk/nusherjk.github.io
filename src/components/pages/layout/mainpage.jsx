import Header from "../../partials/header.jsx";
import HeroContent from "../../partials/Hero.jsx";
import MainHero from "../Hero/Mainhero.jsx";
import Section from "./section.jsx";
import {
        AcademicCapIcon,
        BriefcaseIcon,
        CodeBracketSquareIcon,
        FireIcon, IdentificationIcon, PhoneIcon,
        UserIcon
} from "@heroicons/react/24/outline/index.js";
import Academic from "../academic/academic.jsx";
import About from "../about/about.jsx";
import Skills from "../skils/skills.jsx";
import Projects from "../projects/projects.jsx";
import Professional from "../professional/professional.jsx";
import {useSpring, animated} from "react-spring";
import Contact from "../contact/Contact.jsx";


const MainActivitiy = () =>{

    const springs = useSpring( {
        from: { y: 1000,
        opacity: .1,},
        to: { y: 0,
        opacity:1},
      },)
    return(
        // should be ml-16
        <div className={" flex flex-col max-w-full lg:ml-16"}>
            <Header/>
            <animated.div style={{...springs}}><MainHero /></animated.div>
            <animated.div style={{...springs}}>
                <div className="divider"></div>
            </animated.div>

            <animated.div style={{...springs}}><About/></animated.div>
            <animated.div style={{...springs}}><Skills/></animated.div>
            <animated.div style={{...springs}}><Professional/></animated.div>
            <animated.div style={{...springs}}><Academic/></animated.div>
            <animated.div style={{...springs}}><Projects/></animated.div>
            <animated.div style={{...springs}}><Contact/></animated.div>
            {/*<animated.div style={{...springs}}></animated.div>*/}












        </div>
    )
}

export default MainActivitiy