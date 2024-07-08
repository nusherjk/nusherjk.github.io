import SectionTitle from "./SectionTitle.jsx";

const Section =({title, children}) =>{
    return (
        <div className="hero Transparent">
          <div className="hero-content flex-col lg:flex-row">
            {/*<img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />*/}
            <div>
                <SectionTitle>{title}</SectionTitle>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              {/*<button className="btn btn-primary">Get Started</button>*/}
            </div>
          </div>
        </div>
    )
}

export default Section