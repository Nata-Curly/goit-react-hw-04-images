import { useState } from "react";
import Modal from "components/Modal/Modal";
import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

const GalleryItem = ({ webformatURL, largeImageURL, tags }) => {
    
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(( showModal ) => !showModal);
    };
    
    return (
        <li
            className={css.ImageGalleryItem}
            onClick={toggleModal}>
            <img className={css.ImageGalleryItemImage}
                src={webformatURL}
                alt={tags}
            />
            {showModal && <Modal onClose={toggleModal} largeImageURL={largeImageURL} alt={tags} />}
        </li>
    );
};
 
GalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
 
};

export default GalleryItem;

// class GalleryItem extends Component {
//     state = {
//         showModal: false,
//     };

//     toggleModal = () => {
//         this.setState(({ showModal }) => ({ showModal: !showModal }));
//     };

//         render() {
//             const { showModal } = this.state;
//             const{ webformatURL, largeImageURL, tags} = this.props;
//             return (
//                 <li
//                     className={css.ImageGalleryItem}
//                     onClick={this.toggleModal}>
//                     <img className={css.ImageGalleryItemImage}
//                         src={webformatURL}
//                         alt={tags}
//                     />
//                     {showModal && <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} alt={tags} />}
//                 </li>
//             );
//         };
//     }
 
// GalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string,
 
// };

// export default GalleryItem;

