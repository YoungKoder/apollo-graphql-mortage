import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  MenuItem
} from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { DashBtn } from "../../../components/shared/dashBtn";
import { LoanPropertySelector } from "./loanPropertySelector";
import { LoanCalculatorResults } from "./loanResultsBlock";
import {CalculateLoanStyles} from "./styles";
import {CustomMaterialUi} from "../../../components/customComponentsStyles";
import {AppButton} from "../../../components/shared/appButton";
import { useHistory } from "react-router";

const {MyCard, CustomSelect} = CustomMaterialUi;
const LoanTypes = ["Standart", "Type1", "Type2"];
export const CalculateLoan = () => {
  const history = useHistory();
  const classes = CalculateLoanStyles();
  const [state, setState] = useState({
    loanType: LoanTypes[0],
    currency: "USD",
    homePrice: 100000,
    downPayment:20000,
    monthDuration:36
  });
  const handleChange = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeSlider = (name) => (event, newWalue) => {
    setState((state) => ({
      ...state,
      [name]: newWalue,
    }));
  };

  return (
    <MyCard className={classes.calculateBlockWrapper}>
      <Grid xs={8}>
        <MyCard className={classes.calculateLoanLeft}>
          <Box className={classes.calculateLoanHeader}>
            <div className={classes.iconWrap}>
              <PhoneAndroidIcon />
            </div>
            <Typography className={classes.calcLoanTitle}>
              New Loan Application
            </Typography>
          </Box>
          <Typography className={classes.loanTypeSelectLabel}>
            Type of Loan
          </Typography>
          <Box className={classes.calculateLoanSelectorRow}>
            <div className={classes.loanTypeSelectWrapper}>
              <CustomSelect
                value={state.loanType}
                name="loanType"
                variant="outlined"
                IconComponent={KeyboardArrowDownIcon}
                onChange={handleChange}
              >
                {LoanTypes.map((item,i) => (
                  <MenuItem value={item} key={i}>{item}</MenuItem>
                ))}
              </CustomSelect>
            </div>
            <div className={classes.currenciesWrapper}>
              <DashBtn
                value={"USD"}
                isActive={state.currency === "USD" ? true : false}
                handleClick={handleChange}
              />
              <DashBtn
                value={"EUR"}
                isActive={state.currency === "EUR" ? true : false}
                handleClick={handleChange}
              />
              <DashBtn
                value={"GBR"}
                isActive={state.currency === "GBR" ? true : false}
                handleClick={handleChange}
              />
            </div>
          </Box>
          <Box className={classes.loanPropertyWrapper}>
            <LoanPropertySelector
                title={'Home Price'}
              handleChange={handleChangeSlider("homePrice")}
              value={state.homePrice}
              max={500000}
              min={50000}
              adornment={state.currency==="USD"?"$":state.currency}
              marks={[
                { value: 50000, label: "$ 50.000" },
                { value: 250000, label: "$ 250.000" },
                { value: 500000, label: "$ 500.000" },
              ]}
            />
          </Box>
          <Box className={classes.loanPropertyWrapper}>
            <LoanPropertySelector
                title={`Down Payment (20%)`}
              handleChange={handleChangeSlider("downPayment")}
              value={state.downPayment}
              max={100000}
              min={10000}
              adornment={state.currency==="USD"?"$":state.currency}
              marks={[
                { value: 10000, label: "10.000" },
                { value: 50000, label: "50.000" },
                { value: 100000, label: "100.000" },
              ]}
            />
          </Box>
          <Box className={classes.loanPropertyWrapper}>
            <LoanPropertySelector
                title={'Duration in Months'}
              handleChange={handleChangeSlider("monthDuration")}
              value={state.monthDuration}
              max={240}
              min={20}
              adornment="months"
              marks={[
                { value: 20, label: "20 months" },
                { value: 120, label: "120 months" },
                { value: 240, label: "240 months" },
              ]}
            />
          </Box>
          <Box className={classes.calculateLoanFooter}>
            <AppButton variant="contained" content={"Get real morgage offer"} onClick={()=>history.push('/offers')}/>
            <div className={classes.footerSubText}>
                <Typography>Not looking for a loan? You're a service provider?</Typography>
                <Typography>(bank, notary, appraiser, loan officer, etc) <span className={classes.signUpLink} onClick={()=>history.push('/signUp')}> sign up here </span></Typography>
            </div>
          </Box>
        </MyCard>
      </Grid>
      <Grid xs={4}>
        <Box className={classes.calculateLoanRight}>
          <LoanCalculatorResults loanAmount={state.homePrice} downPayment={state.downPayment} loanTerm={state.monthDuration} propertyTax={1.2} currency={state.currency==="USD"?"$":state.currency}/>
        </Box>
      </Grid>
    </MyCard>
  );
};
