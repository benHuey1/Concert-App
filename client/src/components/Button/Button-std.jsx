import PropTypes from 'prop-types';
import "../../App.scss";

export default function ButtonSTD({content, onclick, backImage}) {
    return (
        <button className="button_std" type="button" value={content} onClick={onclick} src={backImage}/>
    );
}

ButtonSTD.propTypes = {
    content: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    backImage: PropTypes.string,
  };