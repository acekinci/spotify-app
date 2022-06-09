import { Icon } from '../../Icons';
import { NavLink } from 'react-router-dom';

function DownloadApp() {

  const navLinkStyles = ({ isActive }) => {
    return{
        color: isActive ? 'white' : '',
    }
}
    return(
      <NavLink style={navLinkStyles} to={"/download"} className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white items-center px-6 gap-x-4">
      <span>
         <Icon name="download" size={20} />
      </span>
      Uygulamayı Yükle
    </NavLink>
    )
}

export default DownloadApp