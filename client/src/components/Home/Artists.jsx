import { useEffect, useRef, useState } from "react";

export default function Artists() {
    const [artists, setArtists] = useState([]);
    const [filteredArtists,setFilteredArtists] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState(null);


    useEffect(() => {
        fetch("http://localhost:3001/artists")
        .then((response) => response.json())
        .then((data) => {
            // console.log(artists)
            setArtists(data);
            setFilteredArtists(data);
        });

    },[])

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        console.log(value);
        let result = artists.filter((artist) => {
            return artist.name.toLowerCase().search(value) !== -1;
        });
        setFilteredArtists(result);
    }

    
  const handleArtistClick = (artist) => {
    if (selectedArtist && selectedArtist.id === artist.id) {
      setSelectedArtist(null);
    } else {
      setSelectedArtist(artist);
    }
  };

    const getArtistCardStyle = (artist) => {
      return (selectedArtist && selectedArtist.id === artist.id) ? "artists__book__card reveal-content" : "artists__book__card hide-content"
  };
    
    return(
        <>
        <section className="artists">
        <h2>It's the place for artists :</h2>
            <div className="artists__searchbar">
                <label htmlFor="">Search: </label>
                <input type="text" onChange={handleSearch} />
            </div>
            <div className="artists__book">
              {filteredArtists.map((artist) => {
                  
                  return (
                      <>
                          <div className={getArtistCardStyle(artist)} key={artist.id} id={`${artist.name}-${artist.id}`}
                  onClick={() => handleArtistClick(artist)}>
                              <h2>{artist.name} - {(artist.on_tour == 1)? "On Tour" : "Not currently on tour"}</h2>
                              <div className="artists__book__card__picture" src=""/*{artist.picture}*/ alt={artist.name} style={{
                                background: `url(${artist.picture})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "top",
                                backgroundSize: "cover"
                             }}/>
                              <img className="plus-icon" src="/logo-plus.svg" alt="plus-icon" />
                              <div  className="artists__book__card__content">
                                <ul>
                                    <li>{artist.style}</li>
                                    <li>{artist.contact}</li>
                                    <li>{(artist.on_tour == 1)? "On Tour" : "Not currently on tour"}</li>
                                </ul>
                                <p>{artist.description}</p>
                              </div>
                          </div>                   
                      </>
                  );
              })}
            </div>
        </section>
        </>
    )
}