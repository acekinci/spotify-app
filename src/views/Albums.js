import AlbumsSection from "../components/AlbumsSection";
import AlbumsSongs from "../data/AlbumsSongs";

function Albums() {
    return(
        <div className="">
          <AlbumsSection
          title="Albümler"
          items={AlbumsSongs}
          />
        </div>
    )
}

export default Albums