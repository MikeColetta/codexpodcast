import React from "react";
import './style.css';
import ResponsivePlayer from '../ResponsivePlayer'

function CustomJumbotron() {
    return (
        <div
        className="p-5 text-center bg-image customJumbotron"
      >
        <ResponsivePlayer/>
      </div>
    )
}

export default CustomJumbotron;