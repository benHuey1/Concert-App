import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ButtonSubmit from "../Button/Button-Submit";
import "../../App.scss"

export default function FormLogin() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
        status: "world"
         },
        mode: "onChange"
    });
    console.log(watch("example")); // you can watch individual input by pass the name of the input

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
   
    useEffect(()=>{
        axios.get("http://localhost:3001/my-account")
        .then( res => {
            console.log(res);
            if (res.data.valid) {
                navigate('/');
                // location.reload();
            } else {
                navigate('/login')
            }
        })
        .catch( err => console.log(err))
    }, [])

    const onSubmit = /*async*/ () =>{
        /*try {*/
            /*const response = await*/ axios.post("http://localhost:3001/login", {
                mail,
                password,
            })
            .then( res => {
                if (res.data.login) {
                    console.log(res.data);
                    console.log("Welcome, " + res.data.name);
                    navigate('/');
                } else {
                    console.log(res.data.message);
                    alert(res.data.message);
                }})
                .catch(err => {
                    console.log(err);
                })
        /*} catch (error) {
            console.log(error);
        }*/
};

    return (
        <>            
        <form onSubmit={handleSubmit(onSubmit)}>
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
            {/* {errors.mail && (
                // eslint-disable-next-line react/no-unescaped-entities
                <p>Insert an email adress valid</p>
            )} */}
            <label>Password:</label>
            <input type="password"
                {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 51,
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
                <p>Password cannot exceed 51 characters</p>
            )}
            {errors?.password?.type === "pattern" && (
                // eslint-disable-next-line react/no-unescaped-entities
                <p>Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.</p>
            )}
            <ButtonSubmit content="Log-In"/>
            <div>Not yet registered ? <a href="/signup">Sign-up</a></div>
        </form>
        </>
    )
}