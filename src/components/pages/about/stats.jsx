const Stats = () => {
    const revorn = 5
    const  mbl = 25
    const totaljobexp = (revorn+mbl)/12
  return (
      <div className="stats shadow py-2 mb-3">

  <div className="stat">
    <div className="stat-figure text-primary">
      {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>*/}
    </div>

    <div className="stat-value text-primary">{totaljobexp}+</div>
    <div className="stat-desc italic">Years of</div>
    <div className="stat-title">Professional Experience</div>
  </div>

  {/*<div className="stat">*/}
  {/*  <div className="stat-figure text-secondary">*/}
  {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>*/}
  {/*  </div>*/}
  {/*  <div className="stat-title">Page Views</div>*/}
  {/*  <div className="stat-value text-secondary">2.6M</div>*/}
  {/*  <div className="stat-desc">21% more than last month</div>*/}
  {/*</div>*/}

  <div className="stat">
    <div className="stat-figure text-secondary">

    </div>
    <div className="stat-value">35+</div>
    <div className="stat-title">Projects done</div>
    <div className="stat-desc text-secondary">both Academic & Professional</div>
  </div>

</div>
  )
}


export default Stats