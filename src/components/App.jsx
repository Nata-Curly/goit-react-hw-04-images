import { useState, useEffect} from 'react';
import { Notify } from 'notiflix';
import css from './App.module.css';
import getImages from './services/getImages';
import SearchBar from './Searchbar/Searchbar';

import LoadMore from './Button/Button';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';

const STATUS = {
    IDLE: "idle",
    PENDING: "pending",
    REJECTED: "rejected",
    RESOLVED: "resolved",
}
const App = () => {

  const [searchText, setSearchText] = useState('');
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(1);


  
  useEffect((prevSearchtext, prevPage) => {

    if (!searchText) {
      return;
    }

    const findImages = async () => {
      
      try {
        setStatus(STATUS.PENDING);
        const { totalHits, hits } = await getImages(searchText, page);

        if (!totalHits) {
          setStatus(STATUS.IDLE);
          Notify.failure('Ooops, there are no such images. Please try again.');
          return;
        };
       
        setImages(prevImages => [...prevImages, ...hits]);
        setStatus(STATUS.RESOLVED);
        setTotalHits(totalHits);
      } catch (error) {
        setStatus(STATUS.REJECTED);
      };
    };
    if (searchText !== prevSearchtext || page !== prevPage) {
      findImages();
    }
  }, [page, searchText])
    
  const onNextPage = () => {
    setPage(prevPage => (prevPage + 1));
  };

  const handleSearch = (searchText) => {
    if (!searchText) {
      Notify.failure('Field is empty');
      return;
    }
    setSearchText(searchText);
    setImages([]);
    setPage(1);
    setTotalHits(0);
  };

  const showButton = status === STATUS.RESOLVED && images.length !== totalHits;
    
  return (
    <div className={css.App}>
      <SearchBar handleSearch={handleSearch} />
        
      {images.length > 0 && <ImageGallery images={images} />}
      {status === STATUS.PENDING && <Loader />}
      {showButton && <LoadMore onClick={onNextPage} />}
    </div>
  );
};

 
export default App;


// const STATUS = {
//     IDLE: "idle",
//     PENDING: "pending",
//     REJECTED: "rejected",
//     RESOLVED: "resolved",
// }
// class App extends Component {
//   state = {
//     searchText: '',
//     images: [],
//     status: STATUS.IDLE,
//     page: 1,
//     totalHits: 1,
//   };

//   componentDidUpdate(prevProps, PrevState) {
//         if (this.state.searchText !== PrevState.searchText || this.state.page !== PrevState.page ) { 
//             this.findImages();  
//       }
//     };
    
//   findImages = async () => {
//           const { page, images, searchText } = this.state;
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
//         totalHits,
//       });
//     } catch (error) {
//       this.setState({ status: STATUS.REJECTED });
//     }
//     };
    
//   onNextPage = () => {
//         this.setState(({page}) => ({ page: page + 1 }));
//     };

//   handleSearch = (searchText) => {
//     if (!searchText) {
//       Notify.failure('Field is empty');
//       return;
//     }
//     this.setState({ searchText, images: [], page: 1, totalHits: 0 })
//   };

//   render() {
//     const { images, status, totalHits } = this.state;

//     const showButton = status === STATUS.RESOLVED && images.length !== totalHits;
    
//     return (
//       <div className={css.App}>
//         <SearchBar handleSearch={this.handleSearch} />
        
//         {images.length > 0 && <ImageGallery images={images} />}
//         {status === STATUS.PENDING && <Loader />}
//         {showButton && <LoadMore onClick={this.onNextPage} />}
//       </div>
//     );
//   }
// }
 
// export default App;
