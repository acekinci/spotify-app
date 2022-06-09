import {Icon} from "../../Icons";

function Search(){
    return(
       <div className="mr-auto ml-4 relative">
          <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
          <Icon size={24} name="search" />
          </label>
            <input autoFocus={true}  id="search-input" className="h-10 pl-12 w-[22.75rem] font-medium max-w-full bg-white rounded-3xl placeholder-black/70 outline-none text-black text-sm" type="text" placeholder="Sanatçılar, şarkılar veya podcast'ler" />
        </div>
    )
}

export default Search