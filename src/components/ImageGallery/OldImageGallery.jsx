// import { Component } from "react";
// import getImages from '../services/getImages';
// import Loader from '../Loader/Loader';
// import LoadMore from "components/Button/Button";
// import GalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
// import css from './ImageGallary.module.css';
// import { Notify } from "notiflix";
// import PropTypes from 'prop-types';

// const STATUS = {
//     IDLE: "idle",
//     PENDING: "pending",
//     REJECTED: "rejected",
//     RESOLVED: "resolved",
// }

// class ImageGallery extends Component {
//     state = {
//         images: [],
//         status: STATUS.IDLE,
//         page: 1,
//         totalHits: 1,
//     };
    
//     componentDidUpdate(prevProps, PrevState) {
//         if (this.props.searchText !== prevProps.searchText || this.state.page !== PrevState.page ) { 
//             this.findImages();  
//       }
//     };
    
//     findImages = async () => {
//           const { page, images } = this.state;
//           const {searchText} = this.props;
//     try {
//       this.setState({ status: STATUS.PENDING });
//       const { totalHits, hits } = await getImages(searchText, page);

//       if (!totalHits) {
//         this.setState({ status: STATUS.IDLE });
//         Notify.failure('Ooops, there are no such images. Please try again.');
//         return;
//         };

//       this.setState ({
//         images: [...images, ...hits],
//         status: STATUS.RESOLVED,
//         // totalHits,
//       });
//     } catch (error) {
//       this.setState({ status: STATUS.REJECTED });
//     }
//     };
    
//     onNextPage = () => {
//         this.setState(({page}) => ({ page: page + 1 }));
//     };
    
    
//     render() { 
//         const { images, status, totalHits } = this.state;

//         const showButton = status === STATUS.RESOLVED && images.length !== totalHits;

//         if (status === STATUS.PENDING) {
//             return (<Loader/>)
//         }
//         else if (status === STATUS.RESOLVED) {
//             return (
//                 <>
//                 <ul className={css.ImageGallery}>
//                     {images.map(({id, webformatURL, largeImageURL, tags}) =>                        
//                         (<GalleryItem
//                             key={id}
//                             webformatURL={webformatURL}
//                             alt={tags}
//                             largeImageURL={largeImageURL}

//                         />)
//                     )}
//                 </ul>
//                     {showButton && <LoadMore onClick={this.onNextPage}/>}
//                 </>
//             )
//         }
//     }
// }

// ImageGallery.propTypes = {
//     images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     })
//   ),
//   onClick: PropTypes.func,
// };

// export default ImageGallery;

// // class ImageGallery extends Component {
//     //     state = {
//         //         images: null,
//         //         loading: false
// //     } 
    
// //     componentDidUpdate(prevProps, PrevState) {
// //         // console.log('this.props :>> ', this.props);
// //         if (prevProps.searchText !== this.props.searchText) { 
// //         this.setState({ loading: true });
// //             getImages(this.props.searchText)
// //                 .then(resp => resp.json())
// //                 .then((images) => 
// //                 this.setState({ images: images.hits }))
// //                 .catch((error) => (console.log('error :>> ', error)))
// //                 .finally(() => this.setState({ loading: false }));
            
// //       }
// //     };
    
// //     render() { 
// //         const { images, loading} = this.state;
// //         return (
// //             <ul className={css.ImageGallery}>
// //                 { loading && <h1>loading...</h1>}
// //                 {images && images.map((image) => {
// //                     return <li className={css.ImageGalleryItem} key={image.id}>
// //                         <img className={css.ImageGalleryItemImage} src={image.webformatURL} alt={this.state.searchText} />
// //                     </li>
// //                 })}
// //             </ul>
// //         );
// //     }
// // } 


//         // else if (this.state.status === STATUS.REJECTED) {
//         //     return (
//         //         Notify.failure('Sorry, there are no such images. Please try again.')
//         //     )
//         //  }