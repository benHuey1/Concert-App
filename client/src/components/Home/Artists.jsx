import { useEffect, useState } from "react";
import "./Artists.css"

export default function Artists() {
    const [artists, setArtists] = useState([]);
    const [filteredArtists,setFilteredArtists] = useState([]);


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
    
    return(
        <>
        <section>
        <h2>It's place Artists !</h2>
        <div className="artists_book">
            <div>
                <label htmlFor="">Search: </label>
                <input type="text" onChange={handleSearch} />
            </div>
            <div className="artists"></div>
            {filteredArtists.map((artist) => {
                
                return (
                    <>
                        <div className="artists_card" key={artist.id} id={`${artist.name}-${artist.id}`}>
                            <h2>{artist.name}</h2>
                            <img className="artists_picture" src={artist.picture} alt={artist.name} />
                            <img className="plus_icon" src="../../../public/plus.svg" alt="plus-icon" />
                            <ul>
                                <p>{artist.style_id}</p>
                                <p>{artist.contact}</p>
                                <p>{(artist.on_tour == 1)? "On Tour" : "Not currently on tour"}</p>
                                <p>{artist.description}</p>
                            </ul>
                        </div>                   
                    </>
                );
            })}
        </div>
        </section>
        </>
    )
}