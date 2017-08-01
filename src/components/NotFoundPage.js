import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="jumbotron">
      <h4>
        404 Page Not Found
      </h4>
      <br/>
      <hr/>
      <Link to="/"> Go back to homepage </Link>
    </div>
  );
};

export default NotFoundPage;
