import { useEffect, useState } from "react";
import "../../App.scss"

export default function LandingPage() {
    const [ concerts, setConcerts] = useState([]);
    useEffect (() => {
        fetch("http://localhost:3001/concerts")
        .then((response) => response.json())
        .then((data) => {
            setConcerts(data);
            // console.log(data);
        })
    })
    // const styleIntroDiapo = (concerts) => {
    //     return{
    //     animation: "fondu 15s ease-in-out infinite both",
        
    //    "@keyframes fondu": {
    //         "0%": {backgroundImage: `url("${concerts[0].artist_picture}")`},
    //         "33.33%": {backgroundImage: `url("${concerts[1].artist_picture}")`},
    //         "66.67%": {backgroundImage: `url("${concerts[2].artist_picture}")`},
    //         "100%": {backgroundImage: `url("${concerts[3].artist_picture}")`}
    //     }}

    // }
    const styleIntroDiapo = `
    @keyframes fondu {
      0% { background-image: url("${concerts[0]?.artist_picture}"); }
      33.33% { background-image: url("${concerts[1]?.artist_picture}"); }
      66.67% { background-image: url("${concerts[2]?.artist_picture}"); }
      100% { background-image: url("${concerts[3]?.artist_picture}"); }
    }
  `;
    const aFewConcerts = concerts.slice(0,3);
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
                    {/* <div className="landing-page__introduction__background" style={{
                        animationName: "fondu",
                        animationDuration: "15s",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                    }}>
                    </div> */}
                </section>
                <section className="landing-page__concerts">
                    { aFewConcerts.map((concert) => {
                        return(
                            <>
                            <div className="landing-page__concerts__content">
                                <div>{concert.artist}</div>
                                <div>{concert.city}</div>
                                <div>{concert.concert_hall}</div>
                                <div>{concert.date_hour}</div>
                                <div>{concert.style}</div>
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