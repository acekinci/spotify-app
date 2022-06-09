import Section from "../components/Section";
import Songs from "../data/Songs";

function Home () {

    return(
        <div className="grid gap-y-8">
          <Section 
          title="Recently played"
          more="/blabla"
          items={Songs}
          />
          <Section 
          title="Motive ile benzer diğer müzikler"
          more="/blabla"
          items={Songs}
          />
          <Section 
          title="Ahmet Can Ekinci İçin Derlendi"
          more="/blabla"
          items={Songs}
          />
          <Section 
          title="Recently played"
          more="/blabla"
          items={Songs}
          />
          <Section 
          title="Motive ile benzer diğer müzikler"
          more="/blabla"
          items={Songs}
          />
          <Section 
          title="Ahmet Can Ekinci İçin Derlendi"
          more="/blabla"
          items={Songs}
          />
          <Section 
          title="Recently played"
          more="/blabla"
          items={Songs}
          />
          <Section 
          title="Motive ile benzer diğer müzikler"
          more="/blabla"
          items={Songs}
          />
          <Section 
          title="Ahmet Can Ekinci İçin Derlendi"
          more="/blabla"
          items={Songs}
          />
          <Section 
          title="Recently played"
          more="/blabla"
          items={Songs}
          />
          <Section 
          title="Motive ile benzer diğer müzikler"
          more="/blabla"
          items={Songs}
          />
          <Section 
          title="Ahmet Can Ekinci İçin Derlendi"
          more="/blabla"
          items={Songs}
          />
        </div>
    )
}

export default Home