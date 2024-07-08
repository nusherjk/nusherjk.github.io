
import { HomeModernIcon } from "@heroicons/react/24/outline/index.js";

const ProfessionalCard = ({name, position, time, location, works}) => {
  return (
      <div className="card m-4  shadow">

          <div className="card-body">
              <p className={"italic mx-2"}> {time}</p>
            <h2 className="card-title">
                <div className="avatar chat-image mx-2">
                    <div className="w-10 rounded-full btn-ghost">
                        <HomeModernIcon/>
                    </div>
                </div>
                {name}  </h2>

                  <p className={"font-bold"}>{position}</p>
                    <ul className={"list-disc mx-2"}>
                      {works.map((item, key)=>{
                          return(

                              <li key={key}>{item}</li>
                          )
                      })}
                    </ul>
          </div>
        </div>
  )
}






export default ProfessionalCard