import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../Button/Button-Submit";
import axios from "axios";
import "../../App.scss"

export default function FormContact() {
    const [name, setName] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');
    const [mail, setMail] = useState('');
    
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      status: "world"
    },
    mode: "onChange"
  });
  const onSubmit = async () => {
    try {
        const response = await axios.post("http://localhost:3001/contact", {
            name,
            mail,
            object,
            message,
        });
        console.log(response.data);
        location.reload();
    } catch (error) {
        console.log(error);
    }
  }
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
                    })} onChange={(e) =>setName(e.target.value)}
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
                {errors.name && (
                    // eslint-disable-next-line react/no-unescaped-entities
                  <p>Name must be between 2 and 20 characters long, no bumbers, '_' accepted</p>
                )}
                <label>Mail:</label>
                <input type="mail" 
                    {...register("mail", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })} onChange={(e) =>setMail(e.target.value)}
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
                {errors.mail && (
                    // eslint-disable-next-line react/no-unescaped-entities
                  <p>Insert an email adress valid</p>
                )}
                <label>Object:</label>
                <input type="text"
                    {...register("object", {
                    required: true,
                    minLength: 2,
                    maxLength: 50,
                    pattern: /^[A-Z\s]+$/i
                    })} onChange={(e) =>setObject(e.target.value)}
                />
                {errors?.object?.type === "required" && 
                    <p>This field is required</p>
                }
                {errors?.object?.type === "minLength" && (
                    <p>Object cannot subceed 2 characters</p>
                )}
                {errors?.object?.type === "maxLength" && (
                    <p>Object cannot exceed 50 characters</p>
                )}
                {errors?.object?.type === "pattern" && (
                    // eslint-disable-next-line react/no-unescaped-entities
                    <p>Alphabetical characters only</p>
                )}
                {errors.object && (
                    // eslint-disable-next-line react/no-unescaped-entities
                  <p>Object must be between 2 and 50 characters long, no numbers, no special characters</p>
                )}
                <label>Message:</label>
                <textarea type="textarea" placeholder="Describe your needs" 
                    {...register("message", { 
                        required: true,
                        minLength: 2,
                        maxLength: 200,
                        pattern: /^[A-Za-z0-9\s:()',.!?]+$/i
                    })} onChange={(e) =>setMessage(e.target.value)} />
                {errors?.message?.type === "required" && 
                    <p>This field is required</p>
                }
                {errors?.message?.type === "minLength" && (
                    <p>First name cannot subceed 2 characters</p>
                )}
                {errors?.message?.type === "maxLength" && (
                    <p>First name cannot exceed 200 characters</p>
                )}
                {errors?.message?.type === "pattern" && (
                    // eslint-disable-next-line react/no-unescaped-entities
                    <p>Only alphanumeric characters, spaces and ":()" are allowed</p>
                )}
                {errors.message && (
                    // eslint-disable-next-line react/no-unescaped-entities
                    <p>Text must be between 2 and 200 characters long, spaces and ':()' are allowed</p>
                )}
                <ButtonSubmit content="Submit"/>
            </form> 
        </>
    )
}