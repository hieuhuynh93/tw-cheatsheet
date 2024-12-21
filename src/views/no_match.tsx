import React from 'react';
import { Link } from "react-router-dom";

const NoMatch = () => (
    <div>
        <h1>Error 404</h1>
        <Link className="text-purple-700" to="https://tw.hieuhc.io.vn/">Go to home</Link>
    </div>
);

export default NoMatch;
