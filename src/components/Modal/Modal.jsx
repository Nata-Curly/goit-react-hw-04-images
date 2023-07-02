import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, largeImageURL, alt }) => {

    
    useEffect(() => {
        const handleKeyDown = evt => {
        if (evt.code === 'Escape') {
         onClose();
            };
    };
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose]);

    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            onClose();
        }
    };
    
    return createPortal(
        <div className={css.Overlay} onClose={handleBackdropClick}>
            <div className={css.Modal}>
                <img className={css.ModalImg} src={largeImageURL} alt={alt} />
            </div>
        </div>, modalRoot
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    alt: PropTypes.string
}

export default Modal;

// class Modal extends Component {
//     componentDidMount() {
//         window.addEventListener('keydown', this.handleKeyDown)
//     };
    
//     componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown)    
//     };

//     handleKeyDown = evt => {
//         if (evt.code === 'Escape') {
//             this.props.onClose();
//         }
//     };

//     handleBackdropClick = evt => { 
//         if (evt.currentTarget === evt.target) {
//             this.props.onClose();
//         }
//     }

//     render() { 

//         const { largeImageURL, alt } = this.props;

//         return createPortal(
//     <div className={css.Overlay} onClose={this.handleBackdropClick}>
//         <div className={css.Modal}>
//             <img className={css.ModalImg} src={largeImageURL} alt={alt} />
//         </div>
//     </div>, modalRoot
//         );
//     }
// }

// Modal.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//     alt: PropTypes.string
// }

// export default Modal;