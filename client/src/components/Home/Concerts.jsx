import { useEffect, useState } from "react"
import "./Concerts.css"

export default function Concerts() {
    const [ concerts, setConcerts] = useState([]);
    const [selectedConcert, setSelectedConcert] = useState(null);

    useEffect (() => {
        fetch("http://localhost:3001/concerts")
        .then((response) => response.json())
        .then((data) => {
            setConcerts(data);
            // console.log(data);
        })
    })
   
    const formatDate = (dateString) => {
        const options = { day: "2-digit", month: "short" };
        const date = new Date(dateString);
        return `${date.toLocaleDateString("En-US", options)}`;
    };
    const currentDate = formatDate(new Date());

    const handleAddConcertToCart = (concert) => {
        if (selectedConcert && selectedConcert.id === concert.id) {
            setSelectedConcert(null);
        } else {
            setSelectedConcert(concert);
        }
    }

    // const getConcert = (concert) => {
    //     if (selectedConcert && selectedConcert.id === concert.id) {
    //         return (
    //             <p>{concert.id} + {concert.artist} + {concert.city} + {formatDate(concert.date_hour)}</p>
    //         )
    //     } else {
    //         return(console.log("Nothing to add"))
    //     }
    // }
    
    return(
        <>
        <h2>It's the place for concerts :</h2>
        <div className="concerts">
            {concerts.map((concert) => {
                return (
                    <>
                    {/* <div onChange={getConcert(concert)}></div> */}
                    <div className="concerts_card" key={concert.index} id={`concert-${concert.id}`}>
                        <div className="arc-top-l"></div>
                        <div className="arc-top-r"></div>
                        <div className="concerts_card_text">
                            <div className="concerts_card_date">{formatDate(concert.date_hour)}</div>
                            <div className="concerts_card_infos">
                                <img className="concerts_card_infos_plus_icon" id={`img-plus-${concert.id}`} src="/logo-plus.svg" alt="plus-icon" />
                                <div className="cconcerts_card_infos_artist" >{concert.artist}</div>
                                {/* <div>In the famous concert hall {concert.concert_hall}</div> */}
                                <div className="concerts_card_infos_city">{concert.city}</div>
                                {/* <div>Style : {concert.style}</div> */}
                                <div className="concerts_card_infos_ticket">{concert.ticket_cost}€</div>
                            </div>
                            <div className="concerts_card_cart"><img src="/ticket.svg" id={`button-add-${concert.id}`} /*onClick={handleAddConcertToCart(concert)}*/ alt="" /></div>
                        </div>
                        <div className="arc-bottom-l"></div>
                        <div className="arc-bottom-r"></div>
                    </div>
                    </>
                )
            })}
        </div>
        </>
    )
}