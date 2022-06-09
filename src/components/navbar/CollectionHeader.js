import { NavLink } from 'react-router-dom';

function CollectionHeader(){

    const navLinkStyles = ({ isActive }) => {
        return{
            background: isActive ? '#333' : 'none',
            color: isActive ? 'white' : '',
        }
    }

    return(
       <div className="mr-auto ml-4">
           <nav className="px-8">
          <ul className="flex gap-x-2">
              <li>
                  <NavLink style={navLinkStyles} to={"/collection"} className="h-10 p-4 flex gap-x-4 items-center text-sm font-semibold rounded">
                    Çalma Listeleri
                  </NavLink>
              </li>
              <li>
                  <NavLink style={navLinkStyles} to={"/Podcasts"} className="h-10 p-2 flex gap-x-4 items-center text-m font-semibold rounded">
                    Podcast'ler
                  </NavLink>
              </li>
              <li>
                  <NavLink style={navLinkStyles} to={"/Artist"} className="h-10 p-2 flex gap-x-4 items-center text-m font-semibold rounded">
                    Sanatçılar
                  </NavLink>
              </li>
              <li>
                  <NavLink style={navLinkStyles} to={"/Albums"} className="h-10 p-2 flex gap-x-4 items-center text-m font-semibold rounded">
                    Albümler                  
                    </NavLink>
              </li>
          </ul>
        </nav>
         </div>



    )
}

export default CollectionHeader

