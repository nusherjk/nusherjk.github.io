import {UserIcon} from "@heroicons/react/24/outline/index.js";
import {createElement} from "react";


const SidebarItem = ({id,title, icon}) =>{
    return(


        <a href={id} className="hover:tooltip hover:tooltip-right" data-tip={title}>
                    <button className="btn btn-square  m-3 " >
                        {createElement(icon, {
                            className: "w-6 h-6 "
                        })}


                    </button>
                </a>
    )
}

export default SidebarItem