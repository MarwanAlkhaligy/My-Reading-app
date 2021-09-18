import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import Library from './Library'
import SearchPageAnchor from './SearchPageAnchor'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    Books: [],
  }
  
  async componentDidMount() {
    const Books = await BooksAPI.getAll();
     if (Array.isArray(Books)) {
          	this.setState({ Books });
     }
      
  }
 
 updateBooks = (changedBook, shelf) => {
    	const Books = this.state.Books;
    	const newBooks = Books.includes(changedBook) ? Books.map((book) => {book.id === changedBook.id? book.shelf= shelf : book.shelf; return book;}) : [...Books, changedBook];
 
    	this.setState({ Books: newBooks });
    	BooksAPI.update(changedBook, shelf);
  }
  
  render() {
    return (<div className="app"> 
            	<Route  exact path='/' 
					   render={ () => (
                                      <div className="list-books">
                                          <div className="list-books-title">
                                          <h1>MyReads</h1>
                                          </div>
                                          <Library  books={this.state.Books}  updateBooks={this.updateBooks}/>
                                          <SearchPageAnchor />
                                      </div>
									 )
					  } 
				 />
            	<Route path='/search' render={() =>(<SearchPage books={this.state.Books} updateBooks={this.updateBooks}/>)}/>
          </div>);  
  }
}
export default BooksApp