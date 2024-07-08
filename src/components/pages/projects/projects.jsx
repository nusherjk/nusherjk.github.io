import SectionTitle from "../layout/SectionTitle.jsx";
import ProjectsCard from "./projectsCard.jsx";

const projectsData = [

    {
        "name":"MBL Corporate Pay",
        "time":"2022",
        "tech":"Spring MVC | JAVA | FreeMarker template",
        "desc": [
            "An Electronic Fund transfer(BEFTN, RTGS, Intra Bank Fund transfer, Customs Duty) Solution for Corporate Clients.",
            "Equipped with maker, multiple checker and authorizer factor"
        ]
    },
    {
        "name":"Sustainable Finance Reporting",
        "time":"2022-on Development",
        "tech":"Django | Python | Oracle 19",
        "desc": [
            "A reporting software of all the loans criteria." ,
            "Users will be able to categorize green and sustainable linked finance identified by Bangladesh Bank",
            "Users will be able to see various quarterly report based on those categorization."
        ]
    },
    {
        "name":"Seamese-Network-w-Normalised-Cross-Co-Relation-for-one-shot-classification",
        "time":"2020-2021",
        "tech":"Computer Vision | Object Re-Identification | Binary Classification | Normalised Cross Correlation",
        "desc": [
            "A Novel One Shot classification model for Person Re-ID using Normalised Cross Correlation.",
            "Normalized Cross Correlation is a method used in template matching which tries to match patterns of a feature and generates a result between -1 to 1. we use this in our seamese model to re-identify if the object is there or not"
        ]
    },
    {
        "name":"IINIOI-Cloud",
        "time":"2020",
        "tech":"Django | Django Rest Framework",
        "desc": [
            "AN Artificial Intelligence based cloud project where the the system collects odor data and identifies the odor through in house developed deep learning model.",
            "Developed and fixed bugs under japanese company Revorn.co.jp contracted by Asian tech"
        ]
    },
    {
        "name":"A Transfer Learning Based Approach Towards Automated Lane Change Detection.",
        "time":"2019",
        "tech":"Computer Vision | Deep Learning | Object Detection | Object Tracking",
        "desc": [
            "A transfer learning project to determine lane change automatically in realtime using YOLOv2 and modified DeepSORT tracking algorithm.",
            "Lane line segmentation is done via edge detection and contour marking." ,
            "Prepared with a standalone dataset prapared from cctv footage of different intersection of Dhaka Metropoliton City."
        ]
    },
    {
        "name":"Student Course pre-advising predictor",
        "time":"2018-2019",
        "tech":"Django | mySQL | Expert System | knowledge Based AI",
        "desc": [
            "A web app to predict students course selection dilemma.",
            "It has a knowledge Based AI which advises student about their upcoming academic decisions such as retakes, courses plan, full graduation path.",
            "This also have features such as lost and found section and student evaluation capabilities."
        ]
    },
]



const Projects = () => {


    const dataparser = projectsData.map(({name, time, tech, desc}, key) => {
        return (
            <ProjectsCard  name={name} time={time} tech={tech} desc={desc} key={key}/>
        )
    })
    return (
        <div id={'projects'} className={" flex flex-col p-10"}>

            <SectionTitle>Notable <span className={'text-primary font-bold'}>Projects</span> </SectionTitle>
            <div className="grid grid-cols-1 text-center">
                <ul className={"steps  steps-vertical px-10  mb-4"}>
                    {dataparser}
                </ul>


                <button className={'btn btn-base-200'}>More Projects</button>
            </div>

        </div>
    )
}

export default Projects











