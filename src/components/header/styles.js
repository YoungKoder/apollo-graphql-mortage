import {
    makeStyles,
  } from "@material-ui/core";

export const headerStyles = makeStyles((theme) => ({
    header: {
      background: theme.palette.success.light,
      padding: ".7rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "#fff",
    },
    headerRighSide: {
      display: "flex",
      width: "20%",
    },
    headerLogo: {
      fontWeight: "500",
      cursor:'pointer'
    },
    headerBtn: {
      borderColor: "#fff",
      color: "#fff",
    },
    lengPickerWrapper: {
      display: "flex",
      alignItems: "center",
      marginLeft: "2rem",
    },
    languageMenu: {
      color: "#fff",
    },
    currentLeng: {
      marginLeft: "10px",
    },
  }));