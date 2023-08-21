import { useEffect, useState } from "react"
import "./Concerts.css"

export default function Concerts() {
    const [ concerts, setConcerts] = useState([]);

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
    
    return(
        <>
        <h2>It's place Concert !</h2>
        <div className="concerts">
            {concerts.map((concert) => {
                return (
                    <>
                    <div className="concerts_card" key={concert.id} id={concert.id}>
                        <div className="arc-top-l"></div>
                        <div className="arc-top-r"></div>
                        <div className="concerts_card_text">
                            <div className="concerts_card_date">{formatDate(concert.date_hour)}</div>
                            <div className="concerts_card_infos">
                                <img className="concerts_card_infos_plus_icon" src="/logo-plus.svg" alt="plus-icon" />
                                <div className="cconcerts_card_infos_artist" >{concert.artist}</div>
                                {/* <div>In the famous concert hall {concert.concert_hall}</div> */}
                                <div className="concerts_card_infos_city">{concert.city}</div>
                                {/* <div>Style : {concert.style}</div> */}
                                <div className="concerts_card_infos_ticket">{concert.ticket_cost}€</div>
                            </div>
                            <div className="concerts_card_cart"><img src="/ticket.svg" alt="" /></div>
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