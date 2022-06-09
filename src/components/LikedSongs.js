function LikedSongs({ item }) {
    return(
        <div className="flex justify-end flex-col p-5 bg-white w-full h col-span-2 rounded-md bg-gradient-to-br from-[#450af5] to-[#8e8ee5]">
         <span className="mb-6 font-semibold line-clamp-1"><h3> çakal Riv Riv Riv - çakal Lütfen - Motive KALA KAL - Uzi Outro - Luciano Elmas - Motive Ömrüm - Lil Zey Olamam İflah </h3></span>
         <span className="font-bold text-[2rem] tracking-tight"><h1>Beğenilen Şarkılar</h1></span>
         <span className=""><h2>10 beğenilen şarkılar</h2></span>
        </div>
    )
}

export default LikedSongs