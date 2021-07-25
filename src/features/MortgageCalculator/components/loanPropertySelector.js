import React from "react";
import {
  Box,
  makeStyles,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { CustomMaterialUi } from "../../../components/customComponentsStyles";

const { StyledSlider, CustomTextField } = CustomMaterialUi;

const loanPropertySelectorStyles = makeStyles((theme) => ({
  loanPropertySlider: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  thumbComponet: {
    width: "4px",
    height: "12px",
    borderRadius: "30%",
    background: theme.palette.success.light,
  },
  loanPropertyTitle: {
    marginBottom: ".5rem",
  },
  sliderWrapper: {
    width: "100%",
    marginRight: "3rem",
  },
}));

export const LoanPropertySelector = ({
  min,
  max,
  marks,
  value,
  handleChange,
  title,
  adornment,
}) => {
  const classes = loanPropertySelectorStyles();
  const onBlurTextField = (event) => {
    if (+event.target.value <= max && +event.target.value >= min) {
      handleChange(event, event.target.value);
      return;
    }

    if (+event.target.value > max) {
      handleChange(event, max);
    }
    if (+event.target.value < min) {
      handleChange(event, min);
    }
  };
  return (
    <Box>
      <Typography className={classes.loanPropertyTitle}>{title}</Typography>
      <Box className={classes.loanPropertySlider}>
        <div className={classes.sliderWrapper}>
          <StyledSlider
            value={value}
            min={min}
            max={max}
            marks={marks}
            onChange={handleChange}
          />
        </div>
        <CustomTextField
          variant="outlined"
          value={value + ""}
          onBlur={onBlurTextField}
          endAdornment={
            <InputAdornment position="end">{adornment}</InputAdornment>
          }
        />
      </Box>
    </Box>
  );
};

LoanPropertySelector.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  marks: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string,
    })
  ),
  handleChange: PropTypes.func.isRequired,
  adornment: PropTypes.string.isRequired,
};
