import React , { Component } from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'

class Library extends Component {
  // filter books
  filterBooks = (books, shelf) => {
   		return books.filter(book => book.shelf === shelf);
  }
  
  getBooks = (books, firstShelf, secondShelf, thirdShelf) => {
    return [ this.filterBooks(books, firstShelf), this.filterBooks(books, secondShelf), this.filterBooks(books, thirdShelf) ];
  } 
  
  render() {
     	const {books, updateBooks} = this.props;
    	const [currentlyReading, wantToRead, read] =  this.getBooks(books,'currentlyReading', 'wantToRead', 'read');
    
        return (
                <div className="list-books-content">
                  <div>
                    <Shelf booksOfShelf={currentlyReading} header='Currently Reading' updateBooks={updateBooks} />
                    <Shelf booksOfShelf={wantToRead} header='Want to Read' updateBooks={updateBooks} />
                    <Shelf booksOfShelf={read} header='Read' updateBooks={updateBooks} />
                  </div>
                </div>
          );
   }

}
Library.propTypes = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired,
}

export default Library