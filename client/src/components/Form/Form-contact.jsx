import { useState } from "react";
import Button from "../Button/Button";

export default function FormContact() {
    const [name, setName] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');

    return (
        <>
        <form className="form" action="" method="post">
            <label htmlFor="">
                Name: 
                <input type="text" value={name} id="" onChange={e => setName(e.target.value)} />
            </label>
            <label htmlFor="">
                Object of the message: 
                <input type="text" value={object} id="" onChange={e => setObject(e.target.value)} />
            </label>
            <label htmlFor="">
                Message: 
                <textarea type="text" value={message} id="" onChange={e => setMessage(e.target.value)} cols="30" rows="10" />
            </label>
            <Button content="Submit"/>
            {name !== '' &&
                <p>Your name is {name}.</p>
            }
            {object !== '' &&
                <p>The object of the message is {object}.</p>
            }
            {message !== '' &&
                <p>Your message is {message}.</p>
            }
        </form>
        </>
    )
}