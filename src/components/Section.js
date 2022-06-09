import SongItem from "./SongItem"
import Title from "./Title"

function Section({ title, more = false, items }){


    return(
        <section>
        <Title title={title} more={more} />
         <div className="grid grid-cols-8 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
          {items.map(item =><SongItem item={item} key={item.id} /> )}  
         </div>
        </section>
    )
}

export default Section