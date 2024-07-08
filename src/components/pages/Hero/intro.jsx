

import { BiLogoGithub,
    BiLogoLinkedin,
    BiCodeAlt,
    BiLogoBlogger
} from 'react-icons/bi';
const Intro = () => {
    return (
       <div className={"bg-transparent "}>
           <div className={" flex flex-col justify-center items-left m-20 "}>
               <div className={"text-[30px]"}>Hello, I'm </div>
               <h1 className="text-[80px] "> <span className={"font-bold "}>Nusher Jamil Kazi</span></h1>
               <div className={"text-[30px]"}>Full Stack Software Developer <span className={"font-bold text-accent"}>|</span> Software Engineer</div>
               <div className={"text-[18px]"}>Strong in design and integration with intuitive problem-solving skills. <br/>
                   Proficient in PYTHON and DJANGO.
                   Passionate about implementing and launching new projects.</div>

               <a className="btn btn-accent my-5"  href={'/resume'}>
                   Get CV
               </a>

               <div className="flex justify-evenly my-5">

                   <div className="hover:tooltip    hover:tooltip-bottom" data-tip="My Github">
                       <a href="https://www.github.com/nusherjk"> <BiLogoGithub size={28}/></a>
                   </div>

                   <div className="hover:tooltip    hover:tooltip-bottom" data-tip="My LinkedIn">
                       <a href="https://linkedin.com/in/nusher-jamil-kazi-76322a118/"> <BiLogoLinkedin size={28}/></a>
                   </div>

                   <div className="hover:tooltip    hover:tooltip-bottom" data-tip="My LeetCode Profile ;]">
                       <a href="https://www.leetcode.com/nusherjk"> <BiCodeAlt size={28}/></a>
                   </div>

                   <div className="hover:tooltip   hover:tooltip-bottom" data-tip="My Failed Blog!">
                       <a href="https://daftsheet.blogspot.com/"> <BiLogoBlogger size={28}/></a>
                   </div>


                   {/*<a href="https://www.github.com/nusherjk"> <BiLogoGithub size={28} /></a>*/}
               </div>
           </div>
       </div>
    )
}


export default Intro