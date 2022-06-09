import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from "../views/Home";
import Collection from "../views/Collection";
import Search from "../views/Search";
import Podcasts from '../views/Podcasts';
import Albums from '../views/Albums';
import Artist from '../views/Artist';
import Download from '../views/Download';

function Content() {
    return(
     <main className="flex-auto overflow-auto scrollbar">   
        <Navbar />
        <div className='h-full sm:px-4 sm:pt-6 md:px-4 md:pt-6 lg:px-8 lg:py-5 xl:py-5 2xl:py-5 xl:px-8 2xl:px-8'>
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/Search' element={<Search/>} />
         <Route path='/Collection' element={<Collection/>} />
         <Route path='/Podcasts' element={<Podcasts/>} />
         <Route path='/Artist' element={<Artist/>} />
         <Route path='/Albums' element={<Albums/>} />
         <Route path='/Download' element={<Download/>} />
         </Routes>
         
        </div>
     </main>
    )
}

export default Content