import { React, useState } from "react";
import ButtonSTD from "../Button/Button-std";
import "./Modal.css"

export default function Modal ({content}) {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
        console.log("SHOWN");
    }
    const hideModal = () => {
        setShow(false);
        console.log("HIDE");
    }
    const showHideStyle = show ? 'modal show' : 'modal hide';
    return (
        <>
            <ButtonSTD content="CART" onclick={showModal}/>
            <div className={showHideStyle} /*{{(show) ? 'modal show' : 'modal hide'}}*/>
                <ButtonSTD content="->" backImage={"/logo-plus"} onclick={hideModal}/>
                <div className="modal_content" >{content}</div>
            </div>
        </>
    )
}