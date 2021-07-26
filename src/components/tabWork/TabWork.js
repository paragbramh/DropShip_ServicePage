import React from "react";
import { useState } from "react";
import "./tabWork.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";

const TabWork = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Basic Package
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Standard Package
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Premium Package
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="dabba">
              <h3>
                1 Layout + 1 person details + 300 dpi Print Ready JPG/PDF files
              </h3>
              <h2>$15</h2>
            </div>

            <h3>
              <AccessTimeIcon />3 Days Delivery
            </h3>

            <h3>What's Included</h3>
            <ul>
              <CheckIcon />
              Concept - 1
            </ul>
            <ul>
              <CheckIcon />
              Print-Ready
            </ul>
            <ul>
              <CheckIcon />
              Double-Sided
            </ul>
            <Button className="btn_green"> proceed $15 </Button>
            <Button className="btn_grey"> Contact Seller</Button>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="dabba">
              <h3>
                2 Layouts + Up to 2 persons details + 500 dpi Print Ready
                JPG/PDF files
              </h3>
              <h2>$25</h2>
            </div>

            <h3>
              <AccessTimeIcon />5 Days Delivery
            </h3>

            <h3>What's Included</h3>
            <ul>
              <CheckIcon />
              Concept - 2
            </ul>
            <ul>
              <CheckIcon />
              Print-Ready
            </ul>
            <ul>
              <CheckIcon />
              Double-Sided
            </ul>
            <Button className="btn_green"> proceed $25 </Button>
            <Button className="btn_grey"> Contact Seller</Button>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <div className="dabba">
              <h3>
                2 Layouts + Up to 3 persons details + Superior Quality 1200dpi
                PDF/PSD files + QR Code Quick Revisions
              </h3>
              <h2>$50</h2>
            </div>

            <h3>
              <AccessTimeIcon />7 Days Delivery
            </h3>

            <h3>What's Included</h3>
            <ul>
              <CheckIcon />
              Concept - 2
            </ul>
            <ul>
              <CheckIcon />
              Print-Ready
            </ul>
            <ul>
              <CheckIcon />
              Double-Sided
            </ul>
            <ul>
              <CheckIcon />
              Source File
            </ul>
            <Button className="btn_green"> proceed $50 </Button>
            <Button className="btn_grey"> Contact Seller</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabWork;
