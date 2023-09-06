import React from "react";
import FormContact from "../Form/Form-contact";
import "../../App.scss" 

export default function Contact() {
    return (
        <div className="container-form contact">
            <div className="container-form__content">
                <h2>Contact</h2>
                <p>Please complete this form : </p>
                <FormContact />
            </div>
        </div>
    )
}