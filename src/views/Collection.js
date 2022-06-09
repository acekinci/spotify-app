import CollectionSection from "../components/CollectionSection";
import SongsCollection from "../data/SongsCollection";

function Collection() {
    return(
        <div className="">
          <CollectionSection
          title="Çalma Listeleri"
          items={SongsCollection}
          />
        </div>
    )
}

export default Collection