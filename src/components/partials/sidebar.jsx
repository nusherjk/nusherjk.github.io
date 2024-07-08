import ToggleButton from "./toggleButton.jsx";
import {
    AcademicCapIcon,
    BriefcaseIcon, CodeBracketSquareIcon,
    FireIcon,
    IdentificationIcon, PhoneIcon,
    UserIcon
} from "@heroicons/react/24/outline/index.js";
import SidebarItem from "./sidebarItems.jsx";
import {createElement} from "react";

const sidebarData = [
    {
        'id':'#about',
        'title': "About",
        'icon': UserIcon
    },
    {
        'id':'#skills',
        'title': "Skills",
        'icon': FireIcon
    },
    {
        'id':'#profesh',
        'title': "Professional Experience",
        'icon': BriefcaseIcon
    },
    {
        'id':'#Academ',
        'title': "Academic Qualification",
        'icon': AcademicCapIcon
    },

    {
        'id':'#projects',
        'title': "Projects",
        'icon': CodeBracketSquareIcon
    },

    {
        'id':'#contact',
        'title': "Contact",
        'icon': PhoneIcon
    },
    {
        'id':'/resume',
        'title': 'Resume',
        'icon': IdentificationIcon
    }
]


const SiderBar = () =>{
    return(
        <div className={"hidden lg:flex lg:flex-col lg:fixed  bg-base-200  h-screen shadow-2xl rounded-l-3xl justify-between z-100"}>
            <div className={'flex flex-col justify-evenly'}>

                {sidebarData.map(
                        ({title, icon, id}, key)=> {
                            return(
                                <SidebarItem key={key} title= {title} icon={icon} id={id}/>
                                )
                        }
                    )}



            </div>

            <button className="btn btn-square m-3 self-end">
                <ToggleButton/>
            </button>
        </div>
    )
}

export default SiderBar