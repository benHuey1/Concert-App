import PropTypes from 'prop-types';
import "./Button.css";

export default function Button({content}) {
    return (
        <input className="button-submit" type="submit" value={content}/>
    );
}

Button.propTypes = {
    content: PropTypes.string.isRequired,
  };