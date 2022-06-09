import PodcastsSongItem from "./PodcastsSongItem"
import Title from "./Title"

function PodcastsSection({ title, more = false, items }){


    return(
        <section className="">
        <Title  title={title}
          more="/blabla"/>
         <div className="grid grid-cols-8 gap-[24px] mb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
          {items.map(item =><PodcastsSongItem item={item} key={item.id} /> )}  
         </div>
        </section>
    )
}

export default PodcastsSection