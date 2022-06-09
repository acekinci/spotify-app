import AlbumsSongItem from "./AlbumsSongItem"
import CollectionTitle from "./CollectionTitle"

function AlbumsSection({ title, more = false, items }){


    return(
        <section className="">
        <CollectionTitle  title={title}/>
         <div className="grid grid-cols-8 gap-[24px] mb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
          {items.map(item =><AlbumsSongItem item={item} key={item.id} /> )}  
         </div>
        </section>
    )
}

export default AlbumsSection