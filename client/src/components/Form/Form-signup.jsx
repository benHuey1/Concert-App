import { useState } from "react";
import ButtonSubmit from "../Button/Button-Submit";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Checkbox from './Checkbox';

export default function FormSignup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');
    const [status, setStatus] = useState('');
    

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
  defaultValues: {
    status: "world"
  },
  mode: "onChange"
});
    // const onSubmit = (data) => { alert(JSON.stringify(data)); };
    console.log(watch("status")); // you can watch individual input by pass the name of the input

    // const form = useForm({
    //     defaultValues: {
    //         status: "world"
    //     },
    //     mode: "onChange"
    // });
    // const { register } = form;
    // const [values, setValues] = useState({
    //     name: '',
    //     mail: '',
    //     password: '',
    //     status: ''
    // })
    const navigate = useNavigate();
    // const handleInput = (event) => {
    //     setValues(prev =>({...prev, [event.target.name] : [event.target.value]}))
    // }
    
    
    // useEffect (() => {
    //     fetch("http://localhost:3001/concerts")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setConcerts(data);
    //         // console.log(data);
    //     })
    // })
   

    const onSubmit = async () =>{
            try {
                const response = await axios.post("http://localhost:3001/signup", {
                    name,
                    mail,
                    password,
                    status,
                });
                console.log(response.data);
                navigate('/login');
            } catch (error) {
                console.log(error);
            }
        // event.preventDefaut();
        // axios.post("http://localhost:3001/signup", values)
        // .then(res => 
        //     {
        //         console.log(res);                
        //         setValues(res);
        //         navigate('/login');
        //     }
        //     )
        // .catch(err => console.log(err))
    };

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <input type="text"
                {...register("name", {
                required: true,
                minLength: 2,
                maxLength: 20,
                pattern: /^[A-Z_]+$/i
                })} onChange={(e) => setName(e.target.value)}
            />
            {errors?.name?.type === "required" && 
                <p>This field is required</p>
            }
            {errors?.name?.type === "minLength" && (
                <p>First name cannot subceed 2 characters</p>
            )}
            {errors?.name?.type === "maxLength" && (
                <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.name?.type === "pattern" && (
                // eslint-disable-next-line react/no-unescaped-entities
                <p>'_' & Alphabetical characters only</p>
            )}
            <label>Mail:</label>
            <input type="mail" 
                {...register("mail", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })} onChange={(e) => setMail(e.target.value)}
            />
            {errors?.mail?.type === "mail" && (
                <p>Invalid email address</p>
            )}
            {errors?.mail?.type === "required" && 
                <p>This field is required</p>
            }                
            {errors?.mail?.type === "pattern" && (
                // eslint-disable-next-line react/no-unescaped-entities
                <p>Valid email address only</p>
            )}
            <label>Password:</label>
            <input type="password"
                {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 200,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

                })} onChange={(e) => setPassword(e.target.value)}
            />
            {errors?.password?.type === "required" && 
                <p>This field is required</p>
            }
            {errors?.password?.type === "minLength" && (
                <p>Password cannot subceed 8 characters</p>
            )}
            {errors?.password?.type === "maxLength" && (
                <p>Password is too long</p>
            )}
            {errors?.password?.type === "pattern" && (
                // eslint-disable-next-line react/no-unescaped-entities
                <p>Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.</p>
            )}
            <label>
                <div>
                    <input type="radio" value="artist" {...register("status")} onChange={(e) => setStatus(e.target.value)} />
                    I'm an Artist
                </div>
            </label>
            <label>
                <div>
                    <input type="radio" value="public" {...register("status")} onChange={(e) => setStatus(e.target.value)} />
                    I'm a Public
                </div>
            </label>
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
            <ButtonSubmit content="Sign-Up"/>
            <div>Already registered ? <a href="/login">Log-in</a></div>
        </form>
        </>
    )
}