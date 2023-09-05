import React from "react";
import { useRouteError } from "react-router-dom";
import "../../App.scss"

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div>
            <h2>Oops, seems there is an Error</h2>
            <i>{error.statusText || error.message}</i>
            <p>Contact our service client !</p>
        </div>
    );
}
