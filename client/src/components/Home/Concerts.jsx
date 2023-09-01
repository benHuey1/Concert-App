import { useEffect, useState, useRef } from "react"
import "./Concerts.css"
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();
    const handleAddConcertToCart = (e) => {
        console.log(e.target.id);
        const concertId = e.target.id;
        const ID = concertId.split('-').pop();
        const concertAdded = concerts.find((concert) => concert.id == ID);
            if (concertAdded){
                console.log("ID is the same, you can use it");
                console.log(concertAdded);
                navigate({
                    pathname: "/home/concerts",
                    state: { concert: concertAdded}
                });
            } else {                
                return console.log("There is nothing");
            }
    }
    return(
        <>
        <h2>It's the place for concerts :</h2>
        <div className="concerts">
            {concerts.map((concert) => {
                return (
                    <>
                    <div className="concerts_card" key={concert.index} id={`concert-${concert.id}`}>
                        <div className="arc-top-l"></div>
                        <div className="arc-top-r"></div>
                        <div className="concerts_card_text">
                            <div className="concerts_card_date">{formatDate(concert.date_hour)}</div>
                            <div className="concerts_card_infos">
                                <img className="concerts_card_infos_plus_icon" id={`img-plus-${concert.id}`} src="/logo-plus.svg" alt="plus-icon" />
                                <div className="concerts_card_infos_artist" >{concert.artist}</div>
                                {/* <div>In the famous concert hall {concert.concert_hall}</div> */}
                                <div className="concerts_card_infos_city">{concert.city}</div>
                                {/* <div>Style : {concert.style}</div> */}
                                <div className="concerts_card_infos_ticket">{concert.ticket_cost}€</div>
                            </div>
                            <div className="concerts_card_cart"><img src="/ticket.svg" id={`button-add-${concert.id}`} onClick={handleAddConcertToCart} alt="" /></div>
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