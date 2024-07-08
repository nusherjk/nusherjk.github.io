import aboutimg from '../../../assets/abt.jpg'
import Stats from "./stats.jsx";
// import {animated, useSpring} from "react-spring";

const AboutContent = () => {

  return (
      <div className={'flex flex-col lg:flex-row'}>
          <div className={'mr-10'}>
              <img src={aboutimg} className="max-w-sm rounded-lg shadow-2xl mask mask-squircle " />
          </div>
          <div className={"flex flex-col"}>
              <Stats/>
              {/*<p className={'text-4xl font-black'}>Software Engineer & Full Stack Web Developer.</p>*/}
                <p className={"text-xl"}>Experienced software developer with a proven track record of two years in diverse professional environments. Proficient in web development and deep learning, demonstrating a strong aptitude for mastering new technologies and techniques. Recognized as a fast learner with the ability to swiftly adapt to dynamic challenges In pursuit of further enhanced skills and knowledge in the field.</p>

                <ul className={"grid grid-cols-2 text-xl p-5"}>
                    {/*<li className={"py-5"}><span className={'font-black '}>Birthday:</span> 27 December 1997</li>*/}
                    {/*<li className={"py-5"}><span className={'font-black '}>Degree:</span>  Bachelor in Science</li>*/}
                    <li className={'py-1'}><span className={'font-black '}>Phone:</span>  +880 1937 148058</li>
                    <li className={'py-1'}><span className={'font-black '}>Email:</span>  nusherjk@gmail.com</li>
                </ul>


          </div>
      </div>
  )
}


export default AboutContent