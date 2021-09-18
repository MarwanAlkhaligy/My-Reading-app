import React from 'react'
import PropTypes from 'prop-types'
import Author from './Author'
import CreateBookOptions from './CreateBookOptions'


const Book = (props) => {
    const { book, updateBooks, shelf} = props;
    const style = { width: 128, height: 193};
    try{
    	style.backgroundImage = `url(${book.imageLinks.thumbnail})`;
    } catch (error) {
    	// error 
        // wait to load image 
        // Book with ID ${book.id}  should wait to get the image
    }
    return (
      <li key={book.id}>
          <div className="book">
              <div className="book-top">
                    <div className="book-cover" style={style}></div>
                    <CreateBookOptions book={book} updateBooks={updateBooks} shelf={shelf}/>
              </div>
              <div className="book-title">{book.title}</div>
              <Author authors={book.authors} /> 
          </div>
      </li>);
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBooks: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired,
}
export default Book
                                            