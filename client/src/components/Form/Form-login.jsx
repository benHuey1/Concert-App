import { useState } from "react";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";


// import Checkbox from './Checkbox';

export default function FormLogin() {
    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    // const [mail, setmail] = useState('');

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => { alert(JSON.stringify(data)); };
    console.log(watch("example")); // you can watch individual input by pass the name of the input

    const [values, setValues] = useState({
        name: '',
        mail: '',
        password: '',
        status: ''
    })
    const handleInput = (event) => {
        setValues(prev =>({...prev, [event.target.name] : [event.target.value]}))
    }

    return (
        <>            
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Mail:</label>
            <input type="mail" 
                {...register("mail", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })} onChange={handleInput}
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
                maxLength: 20,
                pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

                })} onChange={handleInput}
            />
            {errors?.password?.type === "required" && 
                <p>This field is required</p>
            }
            {errors?.password?.type === "minLength" && (
                <p>Password cannot subceed 8 characters</p>
            )}
            {errors?.password?.type === "maxLength" && (
                <p>Password cannot exceed 20 characters</p>
            )}
            {errors?.password?.type === "pattern" && (
                // eslint-disable-next-line react/no-unescaped-entities
                <p>Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.</p>
            )}
            {/* {errors.password && (
                // eslint-disable-next-line react/no-unescaped-entities
              <p>Password is required and must be at least 8 characters long.</p>
            )} */}
            <Button content="Log-In"/>
            <div>Not yet registered ? <a href="/signup">Sign-up</a></div>
        </form>
        </>
    )
}