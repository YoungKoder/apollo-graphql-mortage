import { Button, withStyles } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const StyledAppButton = withStyles((theme)=>({
    root:{
        width:'100%',
        fontWeight:500
    },
    contained:{
        color:"#fff",
        backgroundColor:theme.palette.success.main,
        '&:hover':{
            backgroundColor:theme.palette.success.main
        }
    },
    outlined:{
        color:theme.palette.success.main,
        borderWidth:'2px',
        borderColor:theme.palette.success.main
    }

}))(Button)
export const AppButton = ({content,variant,onClick})=>{
    return(
        <StyledAppButton variant={variant} onClick={onClick}>
            {content}
        </StyledAppButton>
    )
}

AppButton.propTypes= {
    content:PropTypes.string.isRequired,
    variant:PropTypes.oneOf(["outlined","contained"]),
    onClick:PropTypes.func
}