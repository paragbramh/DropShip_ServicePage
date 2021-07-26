import React from "react";
import "./customer.css";
import StarsIcon from "@material-ui/icons/Stars";
const Customer = () => {
  return (
    <div>
      <h1>Customer Review</h1>
      <div className="card">
        <div className="row">
          <div className="img-fix">
            <img src="../pics/customer.jpg" alt="" />
          </div>
          <div className="dad">
            <h2 className="card-title mt-3">
              Chaveltaylor18 <br /> <StarsIcon /> <StarsIcon /> <StarsIcon />{" "}
              <StarsIcon />
              <StarsIcon />
            </h2>
            <p>
              Thank you for this pretty design. I went over my revision limit
              (2) and he still gave me my final request. It was truly amazing
              working with this seller. Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
