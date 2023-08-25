import PropTypes from 'prop-types';
import "./Button.css";

export default function ButtonSTD({content, onclick}) {
    return (
        <input className="button" type="button" value={content} onClick={onclick}/>
    );
}

ButtonSTD.propTypes = {
    content: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
  };