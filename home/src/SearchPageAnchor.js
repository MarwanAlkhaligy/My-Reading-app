import React from 'react'
import {Link} from 'react-router-dom'

const SearchPageAnchor = (props) => {
	return (
    	<div className="open-search">
      		 <Link className='add-book-link' to='/search'>Add a book</Link>       
        </div>
    );
}
export default SearchPageAnchor;