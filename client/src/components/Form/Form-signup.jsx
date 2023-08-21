import { useState } from "react";
import Button from "../Button/Button";
// import Checkbox from './Checkbox';

export default function FormSignup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');

    return (
        <>
        <form className="form" action="" method="post">
            <label htmlFor="">
                Name: 
                <input type="text" value={name} id="" onChange={e => setName(e.target.value)} />
            </label>
            <label htmlFor="">
                Mail: 
                <input type="mail" value={name} id="" onChange={e => setMail(e.target.value)} />
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
            <Button content="Sign Up"/>
            <div>Already registered ? <a href="/login">Login</a></div>
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