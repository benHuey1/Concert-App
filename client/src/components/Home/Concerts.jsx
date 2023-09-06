import { useEffect, useState, useRef, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { ConcertContext } from "../Modal/concert-context";

export default function Concerts() {
    const [ concerts, setConcerts] = useState([]);
    const [selectedConcert, setSelectedConcert] = useState([]);
    const  { setConcertCart } = useContext(ConcertContext);

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
                // navigate({
                //     pathname: "/home/concerts",
                //     state: { concert: concertAdded}
                // });
                setConcertCart((prevConcert) => [...prevConcert, concertAdded]);
                // setSelectedConcert([...selectedConcert, setConcert])
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
                    <div className="concerts__card" key={concert.index} id={`concert-${concert.id}`}>
                        <div className="arc-top-l"></div>
                        <div className="arc-top-r"></div>
                        <div className="concerts__card__text">
                            <div className="concerts__card__date">{formatDate(concert.date_hour)}</div>
                            <div className="concerts__card__infos">
                                <img className="plus-icon" id={`img-plus-${concert.id}`} src="/logo-plus.svg" alt="plus-icon" />
                                <div className="concerts__card__infos__artist" >{concert.artist}</div>
                                {/* <div>In the famous concert hall {concert.concert_hall}</div> */}
                                <div className="concerts__card__infos__city">{concert.city}</div>
                                {/* <div>Style : {concert.style}</div> */}
                                <div className="concerts__card__infos__ticket">{concert.ticket_cost}€</div>
                            </div>
                            <div className="concerts__card__cart"><img src="/ticket.svg" id={`button-add-${concert.id}`} onClick={handleAddConcertToCart} alt="" /></div>
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