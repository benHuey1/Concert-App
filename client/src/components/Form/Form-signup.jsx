import { useState } from "react";
import ButtonSubmit from "../Button/Button-Submit";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../App.scss"

export default function FormSignup() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [mail, setMail] = useState('');
    const [status, setStatus] = useState('');
    
    const { register, handleSubmit,  formState: { errors } } = useForm({
        defaultValues: {
            status: "world"
        },
        mode: "onChange"
    });
    const navigate = useNavigate();

    const onSubmit = async () =>{
            try {
                const response = await axios.post("http://localhost:3001/signup", {
                    name,
                    mail,
                    password,
                    status,
                });
                navigate('/login');
            } catch (error) {
                console.log(error);
            }
    };

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name:</label>
            <input type="text"
                {...register("name", {
                required: true,
                minLength: 2,
                maxLength: 30,
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
                <p>First name cannot exceed 30 characters</p>
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
                <div className="div_radio">
                    <input type="radio" value="artist" {...register("status")} onChange={(e) => setStatus(e.target.value)} />
                    <div>I'm an Artist</div>
                </div>
            </label>
            <label>
                <div className="div_radio">
                    <input type="radio" value="public" {...register("status")} onChange={(e) => setStatus(e.target.value)} />
                    <div>I'm a Public</div>
                </div>
            </label>
            <ButtonSubmit content="Sign-Up"/>
            <div>Already registered ? <a href="/login">Log-in</a></div>
        </form>
        </>
    )
}