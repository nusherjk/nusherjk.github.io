import {createElement} from "react";


const SkillsCard = ({title, icon, description}) => {
  return (
      <div
            className={"border-blue-300 border-2 rounded-3xl  bg-blue-300/10  hover:transition hover:delay-100 hover:scale-105"}>
      <div className="my-4">

          {/*<div className="card-body">*/}
            <h2 className="card-title">
                <div className="avatar chat-image mx-2">
                    <div className="w-10 rounded-full ">
                        {createElement(icon)}
                    </div>
                </div>
                {title}</h2>
            <p className={"mx-2"}>{description}</p>
          </div>
        {/*</div>*/}
      </div>
  )
}


export default SkillsCard