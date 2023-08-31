import PropTypes from 'prop-types';
import "./Button.css";

export default function ButtonSubmit({content}) {
    return (
        <input className="button-submit" type="submit" value={content}/>
    );
}

ButtonSubmit.propTypes = {
    content: PropTypes.string.isRequired,
  };