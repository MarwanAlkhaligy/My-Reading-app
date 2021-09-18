import React from 'react';

const Author = (props) => {
  
    const authors = props.authors;
   
  	if (!authors || authors.length === 0) {
      return <p>No author</p>;
    }
  	return (  
      <div className="book-authors">
          {
          	// display the authors
          }
          {
      		authors.map(author => (
                      <p key={author}> {author} </p>
          ))}
      </div>
  	);
}

export default Author;