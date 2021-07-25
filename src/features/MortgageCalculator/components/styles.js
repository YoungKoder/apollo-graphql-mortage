import {
    makeStyles,
} from "@material-ui/core";

export const CalculateLoanStyles = makeStyles((theme) => ({
    calculateLoanLeft: {
      padding: "3rem 6rem 3rem 3rem",
    },
    iconWrap: {
      background: theme.palette.success.light,
      padding: ".3rem",
      borderRadius: ".3rem",
      color: "#fff",
      display: "inline-block",
    },
    calculateBlockWrapper:{
      display:'flex',
      marginTop:'3rem'
    },
    calculateLoanHeader: {
      display: "flex",
      alignItems: "center",
      marginBottom: "1.5rem",
    },
    calcLoanTitle: {
      fontWeight: 500,
      fontSize: "1.3rem",
      marginLeft: "1rem",
    },
    loanTypeSelectWrapper: {
      width: "40%",
      "& >div": {
        width: "100%",
      },
    },
    loanTypeSelectLabel: {
      fontSize: ".8rem",
      color: "rgba(0,0,0,0.4)",
      marginBottom: ".3rem",
    },
    currenciesWrapper: {
      marginLeft: "3rem",
    },
    calculateLoanSelectorRow: {
      display: "flex",
      alignItems: "center",
    },
    loanPropertyWrapper:{
      marginTop:'4rem'
    },
    calculateLoanRight:{
      backgroundColor:theme.palette.grey[100],
      height:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    calculateLoanFooter:{
        marginTop:'4rem'
    },
    footerSubText:{
        marginTop:'2rem',
        textAlign:'center'
    },
    signUpLink:{
        color:theme.palette.success.light,
        cursor:'pointer'
    }
}));

export const LoanCalculatorResultsStyles = makeStyles((theme) => ({
    calculatesWrap:{},
    calculatesResValue:{
        textAlign:'center'
    },
    calculationVars:{
        marginTop:'2rem'
    },
    calcVariableTitle:{
        fontSize:'.8rem',
        color:theme.palette.grey[400]
    },
    calcRes:{
        fontSize:'2rem',
        fontWeight:'500',
    }
}));
export const CalcResultRowStyles = makeStyles((theme)=>({
    calcResField:{
        marginBottom:'2rem',
        textAlign:'center',
        marginLeft:'-3rem',
        marginRight:'-3rem'
    },
    calcVariableTitle:{
        fontSize:'.8rem',
        color:theme.palette.grey[400]
    },
    calcVariableValue:{
        fontWeight:'500',
        fontSize:'1.2rem',
        marginBottom:'.6rem',
        marginTop:'.2rem'
    }
}))