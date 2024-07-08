import SectionTitle from "../layout/SectionTitle.jsx";
import AcademicTimeline from "../academic/timeline.jsx";
import SkillsCard from "./skillsCard.jsx";
import skillsCard from "./skillsCard.jsx";
import {
    BookmarkIcon,
    CircleStackIcon,
    CodeBracketIcon,
    CogIcon,
    ComputerDesktopIcon, CubeTransparentIcon, ServerIcon, WrenchScrewdriverIcon
} from "@heroicons/react/24/outline/index.js";
import {animated, useSpring} from "react-spring";

const skillsData = [

    {

        'icon': CodeBracketIcon,
        'title':'Programming',
        'content':'Python , Java , C , C++ , JavaScript, Html , css , GoLang',
    },
    {
        'icon': CircleStackIcon,
        'title':'Databases',
        'content':'Mysql , sqlite , postgresql, oracle 19g, msSQL',
    },
    {
        'icon': ComputerDesktopIcon,
        'title':'Web Development',
        'content':'Django , Django Rest Framework , Jinja2 , ReactJs, NextJS, Bootstrap',
    },
    {
        'icon': CogIcon,
        'title':'Other Frameworks',
        'content':'pytorch , tensorflow, scrapy, OpenCV2, PyKnow. , CLIPS.',
    },
    {
        'icon': BookmarkIcon,
        'title':'Interests',
        'content':'Comupter vision, Deep Learning , Machine learning, Web Development',
    },
    {
        'icon': CubeTransparentIcon,
        'title':'Design Methodologies',
        'content':'Waterfall, Agile -Scrum',
    },
    {
        'icon': ServerIcon,
        'title':'Application Servers',
        'content':'Oracle Application Server, Apache, Tomcat.',
    },
    {
        'icon': WrenchScrewdriverIcon,
        'title':'Tools',
        'content':'LATEX, Docker , VATIC , Slack , Trello , Git , Google Collab , Google Earth Engine , Adobe Illustrator , Microsoft Office.',
    },

]


const Skills = () =>{

    const dataparser = skillsData.map(({icon, title, content}, key)=> {
        return(

                <SkillsCard title={title} icon={icon} description={content} key={key}/>

        )
    })
    return (
        <div  id={'skills'} className={" flex flex-col    rounded-tl-3xl rounded-br-3xl p-10"}>

            <SectionTitle >  <span className={'text-primary font-bold'}>Skills</span>  </SectionTitle>
            <div className="inline-grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-10  steps steps-vertical" >
                {dataparser}
            </div>

        </div>
    )
}


export default Skills





















