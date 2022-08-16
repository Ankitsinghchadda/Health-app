import React, { useEffect } from "react";
import "./PopularPakages.css";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getSelectedTestList,
  selectTest,
  removeTest,
} from "../store/AuthSlice";

export interface State extends SnackbarOrigin {
  open: boolean;
}

const PopularPakages = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const NoOfTest = useSelector(getSelectedTestList);
  console.log(NoOfTest);

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    if (NoOfTest.length <= 0) {
      setState({ ...state, open: false });
    }
  };

  const action = (
    <button
      className="checkoutButton"
      onClick={() => {
        navigate("/selectLab");
      }}
    >
      Show Labs
    </button>
  );
  useEffect(() => {
    if (NoOfTest.length > 0) {
      setState({ ...state, open: true });
    }
  }, [NoOfTest]);

  const handleBooking = (e: any) => {
    if (e.target.innerHTML === "Book Now") {
      e.target.classList.remove("BookNowButton");
      e.target.classList.add("RemoveNowButton");
      e.target.innerHTML = "Remove";
      setState({ ...state, open: true });
      dispatch(selectTest(props));
    } else {
      e.target.innerHTML = "Book Now";
      e.target.classList.remove("RemoveNowButton");

      e.target.classList.add("BookNowButton");
      dispatch(removeTest(props));

      setState({ ...state, open: false });
    }
  };

  return (
    <div>
      <div className="pakage_box">
        <div className="card_offer ">Extra {props.offPercentage}% off</div>
        <div className="pakage_details">
          <h3 className="pakagesName">{props.Name}</h3>
          <p style={{ color: "red", fontSize: "80%", marginTop: "0.5rem " }}>
            REQUIRED FASTING
          </p>
          <p className="IPara">Includes : 91 Parameters</p>
          <div className="pakage_about">
            <p>Blood Glucose Fasting</p>
            <p>Complete Hemogram</p>
            <p>CRP (C Reactive Protein)</p>
            <button>(Know more)</button>
          </div>
        </div>
        <div className="pakage_price">
          <span style={{ textDecoration: "line-through", color: "red" }}>
            ₹{props.previousPrice}
          </span>{" "}
          <span style={{ color: "purple" }}>₹{props.currentPrice}/-</span>
        </div>
        <button className="BookNowButton" onClick={handleBooking}>
          Book Now
        </button>
      </div>
      <Snackbar
        sx={{ marginBottom: "5rem" }}
        className="snackbar"
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={`${NoOfTest.length} test selected`}
        action={action}
        key={vertical + horizontal}
      />
    </div>
  );
};

export default PopularPakages;
