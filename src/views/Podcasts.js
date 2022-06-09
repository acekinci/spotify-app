import PodcastsSection from "../components/PodcastsSection";
import PodcastsSongs from "../data/PodcastsSongs";

function Podcasts() {
    return(
        <div className="">
          <PodcastsSection
          title="En Çok Dinlenen Podcast'ler"
          items={PodcastsSongs}
          />
          <PodcastsSection
          title="Podcast'ler"
          items={PodcastsSongs}
          />
          <PodcastsSection
          title="En Çok Dinlenen"
          items={PodcastsSongs}
          />
          <PodcastsSection
          title="En Çok"
          items={PodcastsSongs}
          />
        </div>
    )
}

export default Podcasts