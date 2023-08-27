import { useEffect, useState } from "react";
import "./Concert-halls.css"

export default function ConcertHalls() {
    const [concertHalls, setConcertHalls] = useState([]);
    const [filteredConcertHalls,setFilteredConcertHalls] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3001/concert-halls")
        .then((response) => response.json())
        .then((data) => {
            // console.log(artists)
            setConcertHalls(data);
            setFilteredConcertHalls(data);
        });

    },[])

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        console.log(value);
        let result = concertHalls.filter((concertHall) => {
            return concertHall.name.toLowerCase().search(value) !== -1;
        });
        setFilteredConcertHalls(result);
    }
    
    return(
        <>
        <section>
        <h2>It's place Concert Halls :</h2>
        <div className="concerthalls-book">
            <div className="searchbar">
                <label htmlFor="">Search: </label>
                <input type="text" onChange={handleSearch} />
            </div>
            <div className="concertHalls">
            {filteredConcertHalls.map((concertHall) => {
                
                return (
                    <>
                        <div className="concertHalls_card" key={concertHall.id} id={`${concertHall.name}-${concertHall.id}`}>
                            <h2>{concertHall.name} - {concertHall.city}</h2>
                            <img className="concertHalls_picture" src={concertHall.picture_outside} alt={concertHall.name} />
                            <div className="concertHalls_details">
                                <p>{concertHall.city}</p>
                                <p>{concertHall.description}</p>
                            <img className="concertHall_picture" src={concertHall.picture_inside} alt={concertHall.name} />
                            </div>
                        </div>                   
                    </>
                );
            })}
            </div>
        </div>
        </section>
        </>
    )
}