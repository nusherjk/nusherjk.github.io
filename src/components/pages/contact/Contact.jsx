import SectionTitle from "../layout/SectionTitle.jsx";
import Aboutcontent from "../about/aboutcontent.jsx";
import {EnvelopeIcon, MapPinIcon, PhoneIcon, RectangleGroupIcon} from "@heroicons/react/24/outline/index.js";

const Contact = () => {
  return(
      <div  id={'contact'} className={" flex flex-col bg-transparent rounded-2xl  m-5"}>

            <SectionTitle > Contact <span className={'text-primary font-bold'}>Me</span>  </SectionTitle>
            {/*<p className="text-center py-6">*/}
            {/*    Academic Degrees with their brief description*/}
            {/*</p>*/}


          <div className="grid grid-cols-2">
              <div className="card m-4  shadow">
          <div className="card-body">
            <h5 className="card-title">
                <div className="avatar chat-image mx-2">
                    <div className="w-10 rounded-full btn-ghost">
                        <PhoneIcon/>
                    </div>
                </div>
                01937148058</h5>
          </div>
        </div>

          <div className="card m-4  shadow">
          <div className="card-body">
            <h5 className="card-title">
                <div className="avatar chat-image mx-2">
                    <div className="w-10 rounded-full btn-ghost">
                        <EnvelopeIcon/>
                    </div>
                </div>
                Nusherjk@gmail.com</h5>
          </div>
        </div>
              <div className="card m-4  shadow">
          <div className="card-body">
            <h5 className="card-title">
                <div className="avatar chat-image mx-2">
                    <div className="w-10 rounded-full btn-ghost">
                        <MapPinIcon/>
                    </div>
                </div>
                 Uttara, Secotr-10 , Dhaka 1230</h5>
          </div>
        </div>


          </div>












        </div>
  )
}


export default Contact