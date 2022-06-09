import ArtistSection from "../components/ArtistSection";
import ArtistSongs from "../data/ArtistSongs";

function Artist() {
    return(
        <div className="">
          <ArtistSection
          title="Sanatçılar"
          items={ArtistSongs}
          />
        </div>
    )
}

export default Artist