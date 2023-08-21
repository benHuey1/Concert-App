import { useState } from "react";
import Button from "../Button/Button";
// import Checkbox from './Checkbox';

export default function FormLogin() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setmail] = useState('');

    return (
        <>
        <form className="form" action="" method="post">
            <label htmlFor="">
                Mail: 
                <input type="mail" value={mail} id="" onChange={e => setmail(e.target.value)} />
            </label>
            <label htmlFor="">
                Password: 
                <input type="password" value={password} id="" onChange={e => setPassword(e.target.value)} />
            </label>
            <Button content="Log In"/>
            <div>Not yet registered ? <a href="/signup">Signup</a></div>
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