// import { useEffect, useRef } from 'react';
import './_legal-notice.scss'


function Popup(props) {

    // const popupRef = useRef(null);

    // const handleClickOutsideRef = (event) => {
    //     if(popupRef.current && !popupRef.current.contains(event.target)) {
    //         props.closePopup();
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('click', handleClickOutsideRef);
    //     return () => {
    //         window.removeEventListener('click', handleClickOutsideRef)
    //     };
    // });


    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner" >
                <h3>wallah c est bien ici</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ipsam deserunt recusandae necessitatibus quam sint hic sed minima tempore, ipsum cum adipisci, enim ea temporibus quod molestiae quia ex maxime odio. Reprehenderit, facilis dignissimos! Quaerat, hic tempore placeat error reprehenderit doloribus sit, delectus quibusdam accusantium modi corrupti quod labore ullam.
                </p>
                <button className="close-btn" onClick={props.closePopup}>close</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup