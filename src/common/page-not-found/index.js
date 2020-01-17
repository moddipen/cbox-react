import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="create-main">
      <div className="container">
        <div className="decision-detail-heading">
          <h2>404 - Page Not Found</h2>
          <p>
            <Link to="/">Back to Home</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
