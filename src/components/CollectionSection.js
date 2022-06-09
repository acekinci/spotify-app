import CollectionSongItem from "./CollectionSongItem"
import CollectionTitle from "./CollectionTitle"
import LikedSongs from "./LikedSongs"

function CollectionSection({ title, more = false, items }){


    return(
        <section className="">
        <CollectionTitle title={title} more={more} />
         <div className="grid grid-cols-8 gap-[24px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
         <LikedSongs/>
          {items.map(item =><CollectionSongItem item={item} key={item.id} /> )}  
         </div>
        </section>
    )
}

export default CollectionSection