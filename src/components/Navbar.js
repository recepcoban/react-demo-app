import React from "react";
import PropTypes from "prop-types";

function Navbar(props) {
    return (
        <div className="mt-5">
            <h3>{props.name}</h3>
        </div>
    )
}
Navbar.propTypes = {
    name : PropTypes.string.isRequired
}
export default Navbar;