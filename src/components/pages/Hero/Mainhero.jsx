import Intro from "./intro.jsx";
import profile from '../../../assets/profile-img.jpg'
// display: flex;
// padding: 42px 24px;
// justify-content: center;
// align-items: center;
// align-content: center;
// gap: 42px 68px;
// align-self: stretch;
// flex-wrap: wrap;
const MainHero = () => {
    return (
        // <>
        //     <div className={"  justify-center items-center  flex   font-sans"}>
        //
        //             <Intro/>
        //
        //
        //
        //     </div>
        //
        // </>


        <div className="hero  " >
          <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">


              <div className="w-md  rounded-lg shadow-2xl mask mask-squircle bg-accent">
                    <img src={profile} className="max-w-sm border-5 rounded-lg shadow-2xl mask mask-squircle " />
              </div>
            <div>
              {/*<h1 className="text-5xl font-bold">Box Office News!</h1>*/}
              {/*<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>*/}
            <Intro/>
            </div>
          </div>
        </div>
    )


}


export default MainHero