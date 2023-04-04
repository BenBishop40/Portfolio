import { useEffect } from 'react';
import './_popup.scss'


function Popup(props) {
    
    // disable scroll when popup is open
    useEffect(() => {
        if (props.trigger) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [props.trigger]);


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner" >
                <button className="close-btn lightdark-btn" onClick={props.closePopup}>close</button>
                { props.children }
                <button className="close-btn lightdark-btn" onClick={props.closePopup}>close</button>
            </div>
        </div>
    ) : "";
}

export default Popup