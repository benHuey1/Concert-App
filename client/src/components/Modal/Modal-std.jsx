import { useState } from "react";
import ButtonSTD from "../Button/Button-std";
import "../../App.scss"

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
    const showHideStyle = show ? 'modal-cart show' : 'modal-cart hide';
    return (
        <>
            <ButtonSTD content="CART" onclick={showModal}/>
            <div className={showHideStyle} /*{{(show) ? 'modal show' : 'modal hide'}}*/>
                <ButtonSTD content="-> in " backImage={"/logo-plus"} onclick={hideModal}/>
                <div className="modal-cart__content" >{content}</div>
            </div>
        </>
    )
}