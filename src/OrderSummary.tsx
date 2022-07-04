import React from "react";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import "./OrderSummary.css";
import discountIcon from "./image/20.png";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const OrderSummary = () => {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const navigate = useNavigate();
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const handleClick = () => {
    setState({ ...state, open: true });
  };
  const action = (
    <button
      className="checkoutButton"
      onClick={() => {
        navigate("/onSummary");
      }}
    >
      Proceed To Pay
    </button>
  );
  return (
    <div className="Summary_main">
      <div className="OrderSummary">
        <h1>" Order Summary "</h1>
        <div className="hardcopy">
          <div className="round">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox"></label>
          </div>
          <span>I need hardcopy of my report (₹50 Charge)</span>
        </div>
        <div className="offers_div">
          <img src={discountIcon} alt="" />
          <h2>Unlock Offers Or Apply Promocodes</h2>
        </div>

        <div className="billDetails">
          <h3>Bill Details</h3>
          <div className="billCalc">
            <div className="billrow">
              <p>Test Total</p> <h5>₹250</h5>
            </div>
            <div className="billrow">
              <p>Sample Collection Charges</p>{" "}
              <h5 style={{ textDecoration: "line-through", color: "red" }}>
                ₹150{" "}
              </h5>{" "}
              <span
                style={{
                  textDecoration: "none",
                  color: "#0EB6FF",
                  fontWeight: "bold",
                }}
              >
                FREE
              </span>
            </div>
            <div className="billrow">
              <p>Applied Discount</p> <h5>₹0</h5>
            </div>
          </div>
        </div>
        <Snackbar
          sx={{ marginBottom: "5rem" }}
          anchorOrigin={{ vertical, horizontal }}
          open={true}
          onClose={handleClose}
          message="Total ₹250"
          action={action}
          key={vertical + horizontal}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
