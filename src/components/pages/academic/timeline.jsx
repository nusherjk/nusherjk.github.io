import {StarIcon} from "@heroicons/react/24/outline/index.js";

const academic = [
    {
        'name':'North South University',
        'time': 'Jan 2016 - Aug 2020',
        'degree': 'Bachelor’s degree in Computer Science & Engineering',
        'achivements' : [
            'Final CGPA: 3.54/ 4.00',
            'Graduated cum laude',
            'Capstone project: A transfer learning approach towards vehicle tracking to determine lane change'
        ]
    },

    {
        'name':'Trust College',
        'time': '2013 - 2015',
        'degree': 'Higher Secondary School Certificate',
        'achivements' : [
            'Final GPA: 4.83/5.00'
        ]
    },

    {
        'name':'Rajendrapur Cantonment Public School & College',
        'time': '2013',
        'degree': 'Secondary School Certificate',
        'achivements' : [
            'Final GPA: 4.63/5.00'
        ]
    }
]
const AcademicTimeline = () => {

    const construct_ac = academic.map(({name,
                                           time,
                                           degree,
                                           achivements},
                                       key)=>{
        return(
            <div className="card w-120  bg-base-100 text-base-content m-5 mx-10 rounded-none rounded-tl-3xl rounded-br-3xl" key={key} >
              <div className="card-body flex-none">
                  <p className={"italic "}> {time}</p>
                    <h2 className="card-title text-primary text-2xl">{name}</h2>
                  <div className={"flex justify-between"}>
                        <p className={"font-bold"}>{degree}</p>
                  </div>
                  <ul className={"list-disc pl-10 "}>
                      {achivements.map((item, key)=>{
                          return(

                              <li key={key}>{item}</li>
                          )
                      })}
                  </ul>

                {/*<div className="card-actions justify-end">*/}
                  {/*<button className="btn btn-primary">Buy Now</button>*/}
                {/*</div>*/}
              </div>
            </div>
        )
    })

    return (

        <div className={"grid grid-cols-1"}>
            {construct_ac}
        </div>
    )
}

export default AcademicTimeline