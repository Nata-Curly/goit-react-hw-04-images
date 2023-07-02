import { useState } from 'react';
import css from './SearchBar.module.css';
import { FcSearch } from 'react-icons/fc';


const SearchBar = ({handleSearch}) => {

    const [value, setValue] = useState('')

    
    const handleChange = (evt) => {
        setValue( evt.target.value );
    };
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleSearch(value);
        setValue('');
    };
 
    return (
    <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={handleSubmit}>
    <button className={css.SearchFormBtn} type="submit">
        <FcSearch size='20px'/>
    </button>
<label htmlFor="" className={css.SearchFormBtnLabel}>
    </label>
    <input className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange}
      value={value}
    />
  </form>
</header>
        );
    };

 

export default SearchBar;

// class SearchBar extends Component {
//     state = {
//         value: '',
//     }
    
//     handleChange = ({ target: {value} }) => {
//         this.setState({ value });
//     };
    
//     handleSubmit = (evt) => {
//         evt.preventDefault();
//         this.props.handleSearch(this.state.value);
//         this.setState({ value: '' });
//      }
//     render() { 
//         return (
//     <header className={css.Searchbar}>
//   <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//     <button className={css.SearchFormBtn} type="submit">
//         <FcSearch size='20px'/>
//     </button>
// <label htmlFor="" className={css.SearchFormBtnLabel}>
//     </label>
//     <input className={css.SearchFormInput}
//       type="text"
//       autoComplete="off"
//       autoFocus
//       placeholder="Search images and photos"
//       onChange={this.handleChange}
//       value={this.state.value}
//     />
//   </form>
// </header>
//         );
//     };
// }
 

// export default SearchBar;

