import SectionTitle from "../layout/SectionTitle.jsx";
import Aboutcontent from "./aboutcontent.jsx";
import {useSpring, animated} from "react-spring";

const About = () =>{



    return (
        <div  id={'about'} className={" flex flex-col bg-transparent rounded-2xl  m-5"}>

            <SectionTitle >  <span className={'text-primary font-bold'}>About</span>  </SectionTitle>
            {/*<p className="text-center py-6">*/}
            {/*    Academic Degrees with their brief description*/}
            {/*</p>*/}

            <Aboutcontent/>


        </div>
    )
}

export default About