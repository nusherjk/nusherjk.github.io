import ToggleButton from "./toggleButton.jsx";

const Header = () => {
     return (
         <div className="lg:hidden navbar bg-base-200 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Introduction</a></li>
                  <li>
                  <a>Parent</a>
                  <ul className="p-2">

                      <li><a>Skills</a></li>
                    <li><a>Academic Qualification</a></li>
                    <li><a>Professional Experience</a></li>

                  </ul>
                </li>
                  <li><a>Projects</a></li>

                  <li><a>Contact</a></li>
              </ul>
            </div>
              {/*<a className="btn btn-ghost text-xl">NusherJK</a>*/}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a>About</a></li>
              <li>
                <details>
                  <summary>Resume</summary>
                  <ul className="p-2">

                    <li><a>Introduction</a></li>
                      <li><a>Skills</a></li>
                    <li><a>Academic Qualification</a></li>
                    <li><a>Professional Experience</a></li>

                  </ul>
                </details>
              </li>
              <li><a>Projects</a></li>

              <li><a>Contact</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            {/*<ToggleButton/>*/}
            {/*<a className="btn">Button</a>*/}
          </div>
        </div>
     )
}


export default Header