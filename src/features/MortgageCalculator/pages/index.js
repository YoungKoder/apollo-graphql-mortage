import { Box, makeStyles, Typography, Grid,Card} from "@material-ui/core";
import React, { useEffect } from "react";
import { CalculateLoan } from "../components/calculateLoanBlock";
import {MyContext} from "../../../App";

export const mortgagePageStyles = makeStyles((theme) => ({
  mortgageCalculatePage: {
    padding: "3rem 2rem",
    "& h1 ": {
      textAlign: "center",
      fontSize: "2rem",
    },
  },
  subTitle:{
      marginTop:'1rem'
  },
  calculateBlockWrapper:{
    marginTop:'3rem'
  }
}));

export const MortgageCalculatePageInner = ({setIsLoading}) => {
  const classes = mortgagePageStyles();
  useEffect(()=>{
    setIsLoading(false);
  },[])
  return (
    <Box className={classes.mortgageCalculatePage}>
      <Grid container direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h1">Calculate and Compare Your Loans</Typography>
            <Grid xs={7} className={classes.subTitle}><Typography align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco
            </Typography></Grid>
            <Grid xs={9} container>
              <CalculateLoan/>
            </Grid>
      </Grid>
    </Box>
  );
};
export const MortgageCalculatePage = ()=>(
  <MyContext.Consumer>
      {value=><MortgageCalculatePageInner setIsLoading={value.handleSetLoading}/>}
  </MyContext.Consumer>
)