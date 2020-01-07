import React from "react";
import "./search-box.styles.css";

export const SearchBox = (props) => {
    return (
        <div>
            <input className="search" type="search" placeholder="search monsters" onChange={props.handleSearch}/>
        </div>
    );
};