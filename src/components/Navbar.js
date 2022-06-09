import Navigation from "./navbar/Navigation";
import Auth from "./navbar/Auth";
import Search from "./navbar/Search";
import CollectionHeader from "./navbar/CollectionHeader";
import { Routes, Route } from 'react-router-dom';

function Navbar() {


    return(
     <nav  className="h-[64px] flex items-center justify-between sticky top-0 bg-black z-50 sm:pr-0 sm:pl-4 md:pl-4 md:pr-0 lg:px-8 xl:px-8 2xl:px-8">
         <Navigation />
         
         <Routes>
         <Route path='/Search' element={<Search/>} />
         </Routes>
         
         <Routes>
         <Route path='/Collection' element={<CollectionHeader/>} />
         </Routes>

         <Routes>
         <Route path='/Podcasts' element={<CollectionHeader/>} />
         </Routes>

         <Routes>
         <Route path='/Artist' element={<CollectionHeader/>} />
         </Routes>

         <Routes>
         <Route path='/Albums' element={<CollectionHeader/>} />
         </Routes>

         <Auth />
     </nav>
    )
}

export default Navbar