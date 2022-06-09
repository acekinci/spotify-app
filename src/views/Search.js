import favoriteCatagories from '../data/favorite-catagories';
import Catagories from '../data/Catagories';
import Title from '../components/Title';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useEffect, useState, useRef } from 'react';
import {Icon} from '../Icons';
import Catagory from '../components/CatagoryItem';
import WideCatagory from '../components/WideCatagoryItems';



function Search () {

    const favoritesRef = useRef()
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)

    useEffect(() =>{
        if (favoritesRef.current) {

            const scrollHandle = () => {
                    const isEnd = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth
                    const isBegin = favoritesRef.current.scrollLeft === 0 
                    setPrev(!isBegin)
                    setNext(!isEnd)
            }

            scrollHandle()
            favoritesRef.current.addEventListener('scroll', scrollHandle)

            return() => {
                favoritesRef?.current?.removeEventListener('scroll', scrollHandle)
            }

        }
    },[favoritesRef])

    const slideFavoritesNext = () =>{
        favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300
    }
    const slideFavoritesPrev = () =>{
        favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300
    }

    return(
        <>
      <section className='mb-8'>
      <Title title="En Çok Dinlediğin Türler" />
      <div className='relative'>
      {prev && <button className='absolute hover:scale-[1.06] -left-6 z-10 top-1/2 -translate-y-1/2  w-12 h-12 bg-white rounded-full text-black flex items-center justify-center' onClick={slideFavoritesPrev}><Icon name="prev" size={24} /></button>}
      {next && <button className='absolute hover:scale-[1.06] -right-6 z-10 top-1/2 -translate-y-1/2  w-12 h-12 bg-white rounded-full text-black flex items-center justify-center' onClick={slideFavoritesNext}><Icon name="next" size={24} /></button>}
      <ScrollContainer 
      innerRef={favoritesRef}
      className="flex overflow-x gap-x-6 scrollable">
      {favoriteCatagories.map((catagory, index) => <WideCatagory key={index} catagory={catagory} />)}
      </ScrollContainer>
      </div>
      </section>
      
      <section>
      <Title title="Hepsine Göz At" />
        <div className='grid grid-cols-7 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
          {Catagories.map((catagory, index) => <Catagory key={index} catagory={catagory} />)}
       </div>
      </section>
       </>
    )
}

export default Search