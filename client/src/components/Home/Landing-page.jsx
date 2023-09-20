import { useEffect, useState } from "react";
import "../../App.scss"

export default function LandingPage() {
    const [ concerts, setConcerts] = useState([]);
    const [reveals, setReveals] = useState([]);
    useEffect (() => {
        fetch("http://localhost:3001/concerts")
        .then((response) => response.json())
        .then((data) => {
            setConcerts(data);
            // console.log(data);
            setReveals(document.querySelectorAll(".reveal"));
        })
    })
    const styleIntroDiapo = `
    @keyframes fondu {
      0% { background-image: url("${concerts[0]?.artist_picture}"); }
      33.33% { background-image: url("${concerts[1]?.artist_picture}"); }
      66.67% { background-image: url("${concerts[2]?.artist_picture}"); }
      100% { background-image: url("${concerts[3]?.artist_picture}"); }
    }
  `;
    const aFewConcerts = concerts.slice(0,5);
  
    const handleReveal = () => {
      const windowHeight = window.innerHeight;
      for (let i = 0; i < reveals.length; i++) {
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
  
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };
  
    window.addEventListener("scroll", handleReveal);
    
    const formatDate = (dateString) => {
        const options = { day: "2-digit", month: "long", year: "numeric" };
        const date = new Date(dateString);
        return `${date.toLocaleDateString("En-US", options)}`;
    };

    return (
        <>
            <div className="landing-page">
                <section className="landing-page__introduction"style={{
                        animationName: "fondu",
                        animationDuration: "15s",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                    }}>
                    <div className="landing-page__introduction__text">
                        <h2>VIBZ</h2>
                        <p>VIBZ is a global ticketing platform that enables fans to buy tickets for concerts. With a focus on putting on accessibility first. We strive to improve the overall experience of attending live concerts.</p>
                        <p>Enjoy the visit !</p>
                    </div>
                    <style>{styleIntroDiapo}</style>
                </section>
                <section className="landing-page__concerts">
                    <div><img src="/drop-down.png"/><h2>Upcoming Concerts !</h2><img src="/drop-down.png"/></div>
                    { aFewConcerts.map((concert) => {
                        return(
                            <>
                                <div className="landing-page__concerts__content reveal" >
                                    <div className="landing-page__concerts__content__artist-picture" style={{
                                        background: `url(${concert.artist_picture})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover"
                                    }}></div>
                                    <div className="landing-page__concerts__content__concert-hall-picture" style={{
                                        background: `url(${concert.concert_hall_picture})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover"
                                    }}></div>
                                    <div className="landing-page__concerts__content__text">
                                        <h3>{concert.artist}</h3>
                                        <ul>
                                            <li>{concert.city}</li>
                                            <li>{concert.concert_hall}</li>
                                            <li>{formatDate(concert.date_hour)}</li>
                                            <li>{concert.style}</li>
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </section>
                <section>PART 3</section>
                <section>PART 4</section>
            </div>
        </>
    )

}