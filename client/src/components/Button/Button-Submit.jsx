import PropTypes from 'prop-types';
import "./Button.css";

export default function ButtonSubmit({content, onclick, id}) {
    return (
        <input className="button_submit" id={id} type="submit" value={content} onClick={onclick}/>
    );
}

ButtonSubmit.propTypes = {
    content: PropTypes.string.isRequired,
    onclick: PropTypes.string,
    id: PropTypes.string,
  };