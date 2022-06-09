function Catagory({catagory}) {
  return(
      
      <div 
      style={{'background': catagory.color}}
      className="relative rounded-md before:pt-[100%] before:block"
      >
          <div className='absolute inset-0 overflow-hidden'>
          <h3 className='p-4 text-2xl tracking-tighter font-semibold'>
          {catagory.title}
          </h3>
          <img  src={catagory.cover} alt='' className='shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0'/>
          </div>
      </div>
  )
}

export default Catagory