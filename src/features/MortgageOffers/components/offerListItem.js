import { Card,Box, makeStyles, Typography, Divider} from "@material-ui/core";
import React from "react";
import { AppButton } from "../../../components/shared/appButton";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {OfferListItemStyles} from "./styles";

export const OfferListItem = ({offer})=>{
    const classes = OfferListItemStyles();
    return(
        <Card className={classes.offerItemWrapper}>
            <Box className={classes.offerItemHeader}>
                <div className={classes.offerItemHeaderLeft}>
                    <Typography className={classes.offerItemTitleText}>{offer.title}</Typography>
                </div>
                <div className={classes.offerItemHeaderRight}>
                    <Typography className={classes.offerItemTitleText}>{`$${offer.monthlyPayment}`}</Typography>
                    <Typography className={classes.subTitle}>Monthly payment</Typography>
                </div>
            </Box>
            <Divider/>
            <Box className={classes.offerItemPropertiesWrapp}>
                <div className={classes.propertyWrapper}>
                    <Typography className={classes.propertyValueText}>{offer.rateType}</Typography>
                    <div className={classes.subTitleWrapper}>
                        <Typography className={classes.subTitle}>Rate type</Typography>
                    </div>
                </div>
                <div className={classes.propertyWrapper}>
                    <Typography className={classes.propertyValueText}>{`$${offer.totalFees}`}</Typography>
                    <div className={classes.subTitleWrapper}>
                        <Typography className={classes.subTitle}>Total fees</Typography>
                    </div>
                </div>
                <div className={classes.propertyWrapper}>
                    <Typography className={classes.propertyValueText}>{`${offer.initialRate}%`}</Typography>
                    <div className={classes.subTitleWrapper}>
                        <Typography className={classes.subTitle}>Initial rate</Typography>
                    </div>
                </div>
                <div className={classes.propertyWrapper}>
                    <Typography className={classes.propertyValueText}>{`${offer.followOnRate}%`}</Typography>
                    <div className={classes.subTitleWrapper}>
                        <Typography className={classes.subTitle}>Follow on rate</Typography>
                    </div>
                </div>
                <div className={classes.propertyWrapper}>
                    <Typography className={classes.propertyValueText}>{`${offer.aprc}%`}</Typography>
                    <div className={classes.subTitleWrapper}>
                        <Typography className={classes.subTitle}>APRC</Typography>
                    </div>
                </div>
                <div className={classes.propertyWrapper}>
                    <Typography className={classes.propertyValueText}>{`$${offer.trueCost}`}</Typography>
                    <div className={classes.subTitleWrapper}>
                        <Typography className={classes.subTitle}>True cost</Typography>
                    </div>
                </div>
            </Box>
            <Divider/>
            <Box className={classes.offerItemFooter}>
                <div className={classes.readMoreInfoBtn}>
                    <Typography>More information </Typography>
                    <span><KeyboardArrowDownIcon/></span>
                </div>
                <div className={classes.ctaButtonsWrapper}>
                    <div className={classes.ctaButton}>
                        <AppButton variant="outlined" content="Full Morgage" />
                    </div>
                    <div className={classes.ctaButton}>
                        <AppButton variant="contained" content="Apply Now" />
                    </div>
                </div>
            </Box>
        </Card>
    )
}