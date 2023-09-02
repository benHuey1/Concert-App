import { useEffect, useState } from "react";
import axios from "axios";
import "./My-Account.css"
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "../Button/Button-Submit";

export default function MyAccount() {
    const [name, setName] = useState('')
    const navigate = useNavigate('')
    
    axios.defaults.withCredentials = true;
    
// --------------------------------------------TEST----------------------------------------------------
    const [colonne1, setColonne1] = useState("");
    const [colonne2, setColonne2] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:3001/api/insert", {
          colonne1,
          colonne2,
        });
        console.log(response.data);
        // Handle success, e.g., display success message
      } catch (error) {
        console.log(error);
        // Handle error, e.g., display error message
      }
    };
// ------------------------------------------------------------------------------------------------


    useEffect(()=>{
        axios.get("http://localhost:3001/my-account")
        .then( res => {
            console.log(res);
            if (res.data.valid) {
                setName(res.data.name)
            } else {
                navigate('/login')
            }
        })
        .catch( err => console.log(err))
    })

    return (
        <>
        <section>
            <h2>Hello {name}, it's your place !</h2>
            <div className="My-account">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={colonne1}
                    onChange={(e) => setColonne1(e.target.value)}
                />
                <input
                    type="text"
                    value={colonne2}
                    onChange={(e) => setColonne2(e.target.value)}
                />
                <ButtonSubmit content="Submit"/>
            </form>
            </div>
        </section>
        </>
    )
}