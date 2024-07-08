import {useEffect, useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import HeroContent from "./components/partials/Hero.jsx";
import Mainhero from "./components/pages/Hero/Mainhero.jsx";
import Header from "./components/partials/header.jsx";
import SectionTitle from "./components/pages/layout/SectionTitle.jsx";
import Section from "./components/pages/layout/section.jsx";
import Sidebar from "./components/partials/sidebar.jsx";
import MainActivitiy from "./components/pages/layout/mainpage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
    {
        path:'/',
        element:<>

                <Sidebar/>


            <MainActivitiy/>
        </>

    },
    {
        path:'/resume',
        element: <div> Working on it </div>
    }
])
function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Set the initial state based on user preference
        setIsDarkMode(prefersDarkMode);

        localStorage.setItem("isDarkMode", isDarkMode)
    }, []);

  return (
    <div className={"bg-transparent "}>
        {/*<Header/>*/}
        <div className={"flex  "}>



            <RouterProvider router={router}/>
                {/*<MainActivitiy/>*/}

            {/*<MainActivitiy/>*/}



        </div>





      {/*<HeroContent/>*/}
    </div>
  )
}

export default App
