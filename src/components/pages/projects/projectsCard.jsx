import {createElement} from "react";
import {BookmarkSlashIcon, RectangleGroupIcon} from "@heroicons/react/24/outline/index.js";

// const ProjectsCard = ({name,time,tech, desc}) => {
//   return (
//       <div className="card m-4  shadow">
//
//           <div className="card-body">
//               <p className={"italic mx-2"}> {time}</p>
//             <h2 className="card-title">
//                 <div className="avatar chat-image mx-2">
//                     <div className="w-10 rounded-full btn-ghost">
//                         <RectangleGroupIcon/>
//                     </div>
//                 </div>
//                 {name}</h2>
//
//                   <p className={"font-bold"}>{tech}</p>
//                     <ul className={"list-disc mx-2"}>
//                       {desc.map((item, key)=>{
//                           return(
//
//                               <li key={key}>{item}</li>
//                           )
//                       })}
//                     </ul>
//           </div>
//         </div>
//   )
// }



const ProjectsCard = ({name, time, tech, desc}) => {
    return (
        <div
            className={"hover:border-blue-300 hover:border-2 hover:rounded-3xl  hover:bg-blue-300/10 hover:step-success hover:transition hover:delay-100 hover:scale-105"}>
            <li className="ml-5 my-4   ">
                <div className="text-left ">
                    <p className={"italic "}> {time}</p>
                    <h1 className="card-title uppercase">
                        {/*<div className="avatar chat-image mx-2">*/}
                        {/*    <div className="w-10 rounded-full btn-ghost">*/}
                        {/*        <RectangleGroupIcon/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {name}</h1>

                    <p className={"font-bold"}>{tech}</p>
                    <ul className={"list-disc mx-2"}>
                        {desc.map((item, key) => {
                            return (

                                <li key={key}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </li>
        </div>

    )
}


export default ProjectsCard