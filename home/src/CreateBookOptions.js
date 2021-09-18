import React from 'react'

class CreateBookOptions extends React.Component {
  
	state = {
     	shelf:'',
    }
    // set state 
	componentDidMount() {
     this.setState({shelf: this.props.book.shelf});
    }
  	// update the book
	updateShelf( shelf) {
    	this.setState({shelf: shelf});
    }
    
  	update(book, shelf, updateBooks) {
      	 book.shelf = shelf;
    	 this.updateShelf( shelf);
         updateBooks(book, shelf);
    }
  
	render() {
  	const {book, updateBooks} = this.props;
    
    return (
        <div className="book-shelf-changer">
          	<select value={this.state.shelf}  onChange={(e) => this.update(book, e.target.value, updateBooks)}>
                 <option value="move" disabled>Move to...</option>
                 <option value="currentlyReading">Currently Reading</option>
                 <option value="wantToRead">Want to Read</option>
                 <option value="read">Read</option>
                 <option value="none">None</option>
            </select>
         </div>
    );   
  
  }
}

export default CreateBookOptions