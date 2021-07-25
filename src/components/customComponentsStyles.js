import {
    Card,
    withStyles,
    Select,
    Slider,
    OutlinedInput
} from "@material-ui/core";

const MyCard = withStyles((theme) => ({
    root: {
      width: "100%",
    },
}))(Card);
  
const CustomSelect = withStyles((theme) => ({
    root: {
      padding: "10.5px 14px",
    },
}))(Select);

const StyledSlider = withStyles((theme) => ({
    root: {
        height: "6px",
        color:theme.palette.success.light,
    },
    track: {
        height: "6px",
        background: theme.palette.success.light,
        borderRadius: ".3rem",
    },
    rail: {
        height: "6px",
        background: theme.palette.grey[500],
        borderRadius: ".3rem",
    },
    thumb:{
        width:'5px',
        height:'6px',
        background:theme.palette.success.light,
        borderRadius:'20%',
        borderTop:'10px solid #fff',
        borderBottom:'10px solid #fff',
        borderLeft:'4px solid #fff',
        borderRight:'4px solid #fff',
        boxSizing:'content-box',
        boxShadow:'-2px -1px 17px 0px rgba(50, 50, 50, 0.43)',
        marginTop: '-10px'
    },
    mark: {
        height: 0,
        width: 0,
    },
    marked:{
        marginBottom:0
    }

}))(Slider);

const CustomTextField = withStyles((theme)=>({
    root:{
        '& .MuiOutlinedInput-input':{
            padding:'10.5px 14px',
        }
    }
}))(OutlinedInput)

export const CustomMaterialUi = {
    CustomSelect,
    MyCard,
    StyledSlider,
    CustomTextField
}