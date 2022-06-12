import { NavLink } from "react-router-dom"

function CollectionTitle({more= false, title, items}){
    return(
        <header className="flex items-center justify-between mb-4">
         <NavLink to={more ?? '#'}>
         <h3 className="text-2xl text-white font-semibold tracking-tight">{title}</h3>
         </NavLink>
         {more && (
            <NavLink className={"text-xs font-semibold uppercase text-link hover:underline tracking-wider"} to={more}>
            HEPSİNİ GÖR
            </NavLink>     
         )}
         </header>
    )
}
export default CollectionTitle