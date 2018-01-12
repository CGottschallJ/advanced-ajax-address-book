import React from 'react';
import {setSearchText} from "../actions";
import {connect} from "react-redux";

function SearchBox (props){
    return (
     <input onChange={
        (e) => {
            props.setSearchText(e.target.value)
        }
      } />
    );
}

export default SearchBox;
