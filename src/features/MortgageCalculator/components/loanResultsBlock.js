import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { CustomHooks } from "../../../helpers/hooks";
import { LoanCalculatorResultsStyles, CalcResultRowStyles } from "./styles";

export const LoanCalculatorResults = ({
  loanAmount,
  downPayment,
  loanTerm,
  propertyTax,
  currency,
}) => {
  const classes = LoanCalculatorResultsStyles();
  const { result } = CustomHooks.useCalculations(
    loanAmount,
    downPayment,
    loanTerm,
    propertyTax
  );
  return (
    <Box className={classes.calculatesWrap}>
      <div className={classes.calculatesResValue}>
        <Typography className={classes.calcVariableTitle}>
          Estimated Payment
        </Typography>
        <Typography>
          <span className={classes.calcRes}>{`${currency} ${result}`}</span>
          <span>/month</span>
        </Typography>
      </div>
      <div className={classes.calculationVars}>
        <ResField title={"Loan amount"} value={`${currency} ${loanAmount}`} />
        <ResField title={"Down payment"} value={`${currency} ${downPayment}`} />
        <ResField
          title={"Loan term"}
          value={`${Math.floor(loanTerm / 12)} years ${loanTerm % 12} month`}
        />
        <ResField title={"Property tax"} value={`${propertyTax}%/year`} />
      </div>
    </Box>
  );
};
const ResField = ({ title, value }) => {
  const classes = CalcResultRowStyles();
  return (
    <div className={classes.calcResField}>
      <Typography className={classes.calcVariableTitle}>{title}</Typography>
      <Typography className={classes.calcVariableValue}>{value}</Typography>
      <Divider />
    </div>
  );
};
ResField.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
LoanCalculatorResults.propTypes = {
  loanAmount: PropTypes.number.isRequired,
  downPayment: PropTypes.number.isRequired,
  loanTerm: PropTypes.number.isRequired,
  propertyTax: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
