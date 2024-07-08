import SectionTitle from "../layout/SectionTitle.jsx";
import AcademicTimeline from "./timeline.jsx";

const Academic = () =>{
    return (
        <div id={'Academ'} className={" flex flex-col rounded-tl-3xl rounded-br-3xl p-10"}>

            <SectionTitle > Academic <span className={'text-primary font-bold'}>Qualification</span>  </SectionTitle>
            <p className="text-center py-2">
                Academic Degrees with their brief description
            </p>
            <AcademicTimeline/>
        </div>
    )
}


export default Academic