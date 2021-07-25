import React from "react";
import {
  Box,
  Button,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { Languages } from "./HeaderContainer";
import LanguageIcon from "@material-ui/icons/Language";
import PropTypes from "prop-types";
import {headerStyles} from "./styles";
import { useHistory } from "react-router";


const Header = ({ language, swapLanguage }) => {
  const classes = headerStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChooseItem = (event) => {
    swapLanguage(event.target.innerText);
    setAnchorEl(null);
  };

  return (
    <Box className={classes.header}>
      <Box onClick={()=>history.push('/')}>
        <Typography className={classes.headerLogo}>LoanAid.AI</Typography>
      </Box>
      <Box className={classes.headerRighSide}>
        <Button className={classes.headerBtn} variant="outlined" size="small">
          Login
        </Button>
        <Box className={classes.lengPickerWrapper}>
            <Button
              aria-controls="languages-menu"
              size="small"
              className={classes.languageMenu}
              onClick={handleClickMenu}
            >
              <LanguageIcon />
              <Typography className={classes.currentLeng}>
                {language}
              </Typography>
            </Button>
            <Menu
              id="languages-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              {Languages.map((el, i) => (
                <MenuItem key={i} onClick={handleChooseItem} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Menu>
        </Box>
      </Box>
    </Box>
  );
};

Header.propTypes = {
  language: PropTypes.string.isRequired,
  swapLanguage: PropTypes.func.isRequired,
};

export default Header;
