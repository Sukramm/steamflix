import React from "react";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="terms">
      <button>
        <Link to={"/"}>back</Link>
      </button>
      <p>
        By accepting these terms you have accepted the terms. No actual money is
        counted in this page <br /> pls don't sue
      </p>
    </div>
  );
}

export default Terms;
