import React from "react";
import FormSignup from "../Form/Form-signup";
import "../../sass/Layout/_forms.scss"

export default function Signup() {
    return (
        <>
        <div className="container-form signup">
            <div className="container-form__content">
                <h2>Signup</h2>
                <FormSignup />
            </div>
        </div>
        </>
    )
}