import { useEffect, useState } from "react";

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
    const [revealsPlace, setRevealsPlace] = useState([]);

    useEffect(() => {
        setRevealsPlace(document.querySelectorAll(".reveal-place"));
    }, []);
  
    const handleRevealPlace = () => {
      const windowHeight = window.innerHeight;
      for (let i = 0; i < revealsPlace.length; i++) {
        const elementTop = revealsPlace[i].getBoundingClientRect().top;
        const elementVisible = 150;
  
        if (elementTop < windowHeight - elementVisible) {
            revealsPlace[i].classList.add("active");
        } else {
            revealsPlace[i].classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", handleRevealPlace);
    
    return(
        <>
        <section className="concertHalls">
            <h2>It's the place for concert halls :</h2>
            {/* <div className="concertHalls"> */}
                <div className="concertHalls__searchbar">
                    <label htmlFor="">Search: </label>
                    <input type="text" onChange={handleSearch} />
                </div>
                <div className="concertHalls__book">
                {filteredConcertHalls.map((concertHall) => {
                    
                    return (
                        <>
                            {/* <div className="concertHalls__book__card" key={concertHall.id} id={`${concertHall.name}-${concertHall.id}`}>
                                <h2>{concertHall.name} - {concertHall.city}</h2>
                                <img className="concertHalls__book__card__picture" src={concertHall.picture_outside} alt={concertHall.name} />
                                <div className="concertHalls__book__card__details">
                                    <p>{concertHall.city}</p>
                                    <p>{concertHall.description}</p>
                                <img className="concertHalls__book__card__picture" src={concertHall.picture_inside} alt={concertHall.name} />
                                </div>
                            </div>                    */}
                            <div className="concertHalls__book__content reveal-place" >
                                <div className="concertHalls__book__content__picture-outside" style={{
                                    background: `url(${concertHall.picture_outside})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                    }}>
                                </div>
                                <div className="concertHalls__book__content__picture-inside" style={{
                                    background: `url(${concertHall.picture_inside})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover"
                                 }}>                                        
                                </div>
                                <div className="concertHalls__book__content__text">
                                    <div className="concertHalls__book__content__text__introduction">
                                        <h3>{concertHall.name}</h3>
                                        <p>{"> " + concertHall.city + " <"}</p>
                                        <a href="">More infos</a>
                                    </div>
                                    <div className="concertHalls__book__content__text__description">{concertHall.description}</div>
                                </div>
                            </div>
                        </>
                    );
                })}
                </div>
            {/* </div> */}
        </section>
        </>
    )
}