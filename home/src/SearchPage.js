import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchPage extends Component {
   // search states 
   state = {
    query: '',
    searchBooks: [],
   }
  // update query and get books related to the query
   updateQuery = (query) => {
      this.setState(() => ({
        query: query
      }));
      this.searchPage(query.toLowerCase());
   }
  // update searchBooks state 
  updateSearchBooks = (searchBooks) => {
      this.setState(() => ({
        searchBooks: searchBooks
      }));
  }
  // clear searchBooks
  clearSearchBooks = () =>{
  	this.updateSearchBooks([]);
  }
  // get books related to the query
  searchPage = (query) =>{
  	BooksAPI.search(query)
    .then((reterivedBooks) => {
    	 if (reterivedBooks!== undefined && reterivedBooks.length > 0) {
       		   const newBooks = reterivedBooks.map((reterivedBook) => {
                 	reterivedBook.shelf = 'none';
                    const book = this.props.books.filter(b => reterivedBook.id === b.id );
                 return book.length > 0 ? book[0] : reterivedBook;
               });
               this.updateSearchBooks(newBooks);
         } else {
           	 console.log('no books to return');
         	 this.clearSearchBooks();
         } 
    })
  }
  render() {
     	const query = this.state.query;
    	const searchBooks = query === ''? [] : this.state.searchBooks;
    
    	return (<div className="search-books">
            <div className="search-books-bar">
              <Link className='close-search' to='/'>Close</Link> 
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.*/
                }
                <input type="text" 
					   placeholder="Search by title or author" 	 
					   value={query}
					   onChange={(event) => this.updateQuery(event.target.value)}
				/>
				
              </div>
            </div>
            <div className="search-books-results">
            	<ol className="books-grid">
					  {
                        (searchBooks !== [] && searchBooks.length > 0) && (
                          searchBooks.map((book) => (
                         <Book key={book.id} book={book}  updateBooks={this.props.updateBooks} shelf={book.shelf}/>
                       )))
                     } 
				</ol>
            </div>
          </div>);
    }
	
}
SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  updateBooks: PropTypes.func.isRequired,
}
export default SearchPage