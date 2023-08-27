import { useState } from "react";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";

export default function FormContact() {
    // const [name, setName] = useState('');
    // const [object, setObject] = useState('');
    // const [message, setMessage] = useState('');
    // const [mail, setMail] = useState('');
    
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => { alert(JSON.stringify(data)); };
  console.log(watch("example")); // you can watch individual input by pass the name of the input

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
                    })}
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
                    })} 
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
                    pattern: /^[A-Z]+$/i
                    })}
                />
                {errors?.object?.type === "required" && 
                    <p>This field is required</p>
                }
                {errors?.object?.type === "minLength" && (
                    <p>First name cannot subceed 2 characters</p>
                )}
                {errors?.object?.type === "maxLength" && (
                    <p>First name cannot exceed 20 characters</p>
                )}
                {errors?.object?.type === "pattern" && (
                    // eslint-disable-next-line react/no-unescaped-entities
                    <p>Alphabetical characters only</p>
                )}
                {errors.object && (
                    // eslint-disable-next-line react/no-unescaped-entities
                  <p>Object must be between 2 and 20 characters long, no numbers</p>
                )}
                <label>Message:</label>
                <textarea type="textarea" placeholder="Describe your needs" 
                    {...register("textarea", { 
                        required: true,
                        minLength: 2,
                        maxLength: 200,
                        pattern: /^[A-Za-z0-9\s:()]+$/i
                    })} />
                {errors?.textarea?.type === "required" && 
                    <p>This field is required</p>
                }
                {errors?.textarea?.type === "minLength" && (
                    <p>First name cannot subceed 2 characters</p>
                )}
                {errors?.textarea?.type === "maxLength" && (
                    <p>First name cannot exceed 200 characters</p>
                )}
                {errors?.textarea?.type === "pattern" && (
                    // eslint-disable-next-line react/no-unescaped-entities
                    <p>Only alphanumeric characters, spaces and ":()" are allowed</p>
                )}
                {errors.textarea && (
                    // eslint-disable-next-line react/no-unescaped-entities
                    <p>Text must be between 2 and 200 characters long, spaces and ':()' are allowed</p>
                )}
                <Button content="Submit"/>
            </form>
        {/* <form className="form" action="" method="post">
            <label htmlFor="">
                Name: 
                <input type="mail" value={name} id="" onChange={e => setMail(e.target.value)} />
            </label>
            <label htmlFor="">
                Mail: 
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
            {mail !== '' &&
                <p>Your name is {mail}.</p>
            }
            {object !== '' &&
                <p>The object of the message is {object}.</p>
            }
            {message !== '' &&
                <p>Your message is {message}.</p>
            }
        </form> */}
        </>
    )
}