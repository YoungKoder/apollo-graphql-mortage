import { makeStyles, Typography, Box} from "@material-ui/core";
import React from "react";
import { OfferListItem } from "./offerListItem";
import PropTypes from "prop-types";
const OffersListStyles = makeStyles((theme)=>({
    offersListWrapper:{
        marginTop:'2rem',
        '& h5':{
            fontSize:'1rem',
            fontWeight:600,
        }
    },
    offersListHeader:{
        display:'flex',
        justifyContent:'space-between',
        marginBottom:'2rem',
        marginTop:'.4rem'
    }
}))
export const OffersList = ({offers})=>{
    const classes = OffersListStyles();
    return(
        <Box className={classes.offersListWrapper}>
            <Typography variant="h5">Results:</Typography>
            <Box className={classes.offersListHeader}> <Typography>{`${offers && offers.length} morgages found`}</Typography> </Box>
            {offers&&offers.map((el,i)=><OfferListItem key={i} offer={el}/>)}
        </Box>
    )
}
OffersList.propTypes = {
    offers:PropTypes.array.isRequired
}