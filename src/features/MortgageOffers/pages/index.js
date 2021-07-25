import { Grid, Typography,makeStyles, Box, Container, Card} from "@material-ui/core";
import React from "react";
import { OffersContainer } from "../containers/offersContainer";

const MorgageOffersPageStyle = makeStyles(theme=>({
    offersPageWrapper:{
        "& h1 ": {
            textAlign: "left",
            fontSize: "2rem",
            fontWeight:500
        },   
    },
    offersPageContainer:{
        paddingTop:'4rem',
    },
    offersPageContentBlock:{
        background:theme.palette.grey[100],
        padding:'2rem'
    }
}))
export const MortgageOffersPage = ()=>{
    const classes = MorgageOffersPageStyle();
    return(
        <Box className={classes.offersPageWrapper}>
            <Container className={classes.offersPageContainer}>
                <Card className={classes.offersPageContentBlock}>
                    <Typography variant="h1">Compare our best morgage rates and deals</Typography>
                    <OffersContainer/>
                </Card>
            </Container>
        </Box>
    )
}