import React from 'react'
import PropTypes from 'prop-types'

const ShelfHeader = (props) => {
    	return (
          <h2 id={props.header} className="bookshelf-title"  >{props.header}</h2>
        );
}

ShelfHeader.propTypes = {
  header: PropTypes.string.isRequired,
}

export default ShelfHeader