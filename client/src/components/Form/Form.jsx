import { useState } from "react";
import Button from "../Button/Button";
// import Checkbox from './Checkbox';

export default function Form() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setmail] = useState('');

    return (
        <>
        <form className="form" action="" method="post">
            <label htmlFor="">
                Name: 
                <input type="text" value={name} id="" onChange={e => setName(e.target.value)} />
            </label>
            <label htmlFor="">
                Password: 
                <input type="mail" value={mail} id="" onChange={e => setmail(e.target.value)} />
            </label>
            <label htmlFor="">
                Password: 
                <input type="password" value={password} id="" onChange={e => setPassword(e.target.value)} />
            </label>
            <div className="radio">
                <label>
                    <input type="radio" value="artist" />
                    I'm an Artist
                </label>
                <label>
                    <input type="radio" value="public" />
                    I'm a Public
                </label>
            </div>
            <Button content="ok"/>
            {name !== '' &&
                <p>Your name is {name}.</p>
            }
            {password !== '' &&
                <p>Your password is {password}.</p>
            }
            {mail !== '' &&
                <p>Your mail is {mail}.</p>
            }
        </form>
        </>
    )
}