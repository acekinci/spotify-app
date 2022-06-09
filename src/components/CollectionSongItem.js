import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {Icon} from "../Icons";
import { setCurrent } from "../stores/Player";

function CollectionSongItem({ item }) {
    
    const dispatch = useDispatch()
    const {current, playing, controls} = useSelector(state => state.player)
    const imageStyle = item => {
        switch(item.type){
            case 'artist':
            return 'rounded-full'
            
            case 'podcast':
                return 'rounded-xl'

            default:
                return 'rounded'
        }
    }

    const updateCurrent = () => {
        if(current.id === item.id) {
          if(playing) {
            controls.pause()
          } else{
              controls.play()
          }
        } else {
        dispatch(setCurrent(item))
        }
    }
   
    const isCurrentItem = (current?.id === item.id && playing)

    return(
        <NavLink 
        key={item.id}
         to="/collection"
         className={"bg-footer p-4 rounded hover:bg-active group "}
         >
         <div className="pt-[100%] relative mb-4">
         <img alt="" src={item.image} className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`} />
         <button 
         onClick={updateCurrent}
         className={`w-12 h-12 rounded-full bg-primary absolute bottom-2 right-2 items-center justify-center ${!isCurrentItem ? 'hidden' : 'flex'} group-hover:flex group-focus:block text-black`}>
             <Icon name={isCurrentItem ? 'pause' : 'play'} size={24} />
         </button>
         </div>
         <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
         {item.title}
         </h6>
         <p className="line-clamp-1 text-link text-sm mt-1">{item.description}</p>
       </NavLink>
    )
}

export default CollectionSongItem