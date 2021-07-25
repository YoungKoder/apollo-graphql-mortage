import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  makeStyles,
} from "@material-ui/core";

const dashBtnStyles = makeStyles((theme) => ({
  btnWithDash: {
    boxShadow: "none",
    position: "relative",
    backgroundColor: "transparent",
    minWidth:'3.3rem',
    borderRadius: 0,
    "&.active": {
      color: theme.palette.success.light,
      borderBottom: "2px",
      borderBottomStyle: "solid",
      borderBottomColor: theme.palette.success.light,
    },
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
  },
}));

export const DashBtn = ({ value, isActive, handleClick }) => {
  const classes = dashBtnStyles();
  return (
    <Button
      variant="contained"
      name="currency"
      onClick={() =>
        handleClick({ target: { name: "currency", value: value } })
      }
      className={`${classes.btnWithDash} ${isActive? "active":""}`}
    >
      {value}
    </Button>
  );
};

DashBtn.propTypes = {
  value: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
