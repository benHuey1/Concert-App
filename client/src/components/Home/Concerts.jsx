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

    return(
        <>
        <h2>It's place Concert !</h2>
        <div className="concerts">
            {concerts.map((concert) => {
                return (
                    <div className="concerts_card" key={concert.id} id={concert.id}>
                        <div>A concert of {concert.artist}</div>
                        <div>In the famous concert hall {concert.concert_hall}</div>
                        <div>Save the date : {concert.date_hour}</div>
                        <div>In {concert.city}</div>
                        <div>Style : {concert.style}</div>
                        <div>A moderate cost of {concert.ticket_cost}€</div>
                    </div>
                )
            })}
        </div>
        </>
    )
}