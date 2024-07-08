
import SectionTitle from "../layout/SectionTitle.jsx";
import ProfessionalCard from "./ProfessionalCard.jsx";


const profeshData = [

    {
        'name':'Mercantile Bank PLC.',
        'location': 'Dhanmondi, Dhaka',
        'time': '2021 - Present',
        'position': 'Management Trainee Officer (IT)',
        'works': [
            'Developed code for various auxiliary software supporting the institution\'s general needs.',
            'Created comprehensive documentation for the developed code, including technical specifications and user guides (i.e.: ISO 27001:2013 standard).' ,
            'Collaborated with cross-functional teams, including data scientists and project managers, to understand project requirements and deliver high-quality solutions.',
            'Stayed updated with the latest advancements in Banking Technologies and Industry Standards.'
        ],
    },
    {
        'name':'Revorn (Asian Tech.)',
        'location': 'Tokyo, Japan',
        'time': 'Jul 2020 - Dec 2020',
        'position': 'IT ENGINEER',
        'works': [
            'Developed code for various Artificial Intelligence-based projects of Revorn.co.jp using Django, Django Rest Framework, and Python.' ,
            'Created comprehensive documentation for the developed code, including technical specifications and user guides.' ,
            'Collaborated with cross-functional teams, including data scientists and project managers, to understand project requirements and deliver high-quality solutions.' ,
            'Participated in code reviews and provided constructive feedback to improve code quality and maintain best practices.' ,
            'Stayed updated with the latest advancements in Artificial Intelligence and related technologies to continuously enhance the projects’ capabilities.'
        ],
    },
]








const Professionals = () => {


    const dataparser = profeshData.map(({name, position, time, location, works}, key)=> {
        return(
                <ProfessionalCard name={name} location={location} position={position} time={time} works={works} key={key}/>
        )
    })
    return (
            <div id={'profesh'} className={" flex flex-col    rounded-tl-3xl rounded-br-3xl p-10"}>

                <SectionTitle > Professional  <span className={'text-primary font-bold'}>Experience</span>  </SectionTitle>
                <div className="grid grid-cols-1" >
                    {dataparser}
                </div>

            </div>
    )
}

export default Professionals



