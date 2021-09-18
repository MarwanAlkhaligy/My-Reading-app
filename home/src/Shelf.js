import React , { Component } from 'react'
import Book from './Book'
import ShelfHeader from './ShelfHeader'
import PropTypes from 'prop-types'

class Shelf extends Component {

	render() {
      const { booksOfShelf, header, updateBooks} = this.props;
        return (
  		  <div className="bookshelf">
                  <ShelfHeader header={header}/>
				  <div className="bookshelf-books">
						 <ol className="books-grid">
						{
                         booksOfShelf.map((book) => (
                         <Book key={book.id} book={book}  updateBooks={updateBooks} shelf={book.shelf}/>
                          ))}
						 </ol>
				  </div>
				  
          </div>); 

    }
}
Shelf.propTypes = {
  booksOfShelf: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired,
  updateBooks: PropTypes.func.isRequired,
}
export default Shelf