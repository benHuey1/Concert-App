import PropTypes from 'prop-types';
import "./Button.css";

export default function ButtonSTD({content, onclick, backImage}) {
    return (
        <button className="button" type="button" value={content} onClick={onclick} src={backImage}/>
    );
}

ButtonSTD.propTypes = {
    content: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    backImage: PropTypes.string,
  };