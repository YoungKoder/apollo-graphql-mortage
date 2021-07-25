import { makeStyles} from "@material-ui/core";
export const OfferListItemStyles = makeStyles((theme)=>({
    offerItemWrapper:{
        marginBottom:'2rem'
    },
    offerItemHeader:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'0 2rem'
    },
    offerItemHeaderLeft:{},
    offerItemTitleText:{
        fontSize:'2rem',
        fontWeight:'500'
    },
    offerItemHeaderRight:{
        textAlign:'center'
    },
    subTitle:{
        color:theme.palette.grey[500],
    },
    subTitleWrapper:{
        marginTop:'.7rem'
    },
    offerItemPropertiesWrapp:{
        padding:'1rem 2rem',
        display:'flex',
        justifyContent:'space-between'
    },
    propertyValueText:{
        fontWeight:'500',
        fontSize:'1.1rem'
    },
    offerItemFooter:{
        padding:'1rem 2rem',
        display:'flex',
        justifyContent:'space-between'
    },
    ctaButtonsWrapper:{
        display:'flex',
        width:'30%',
        justifyContent:'space-between'
    },
    ctaButton:{
        minWidth:'150px'
    },
    readMoreInfoBtn:{
        display:'flex',
        alignItems:'center',
        '& span':{
            marginLeft:'1rem'
        }
    }
}))