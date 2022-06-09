function Playlists() {
    return(
      <div className="ml-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto scrollbar">
          <ul>
              {new Array(25).fill(<li>
                  <a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
                      Çalma Listem
                  </a>
              </li>)}
          </ul>
      </div>
    )
}

export default Playlists