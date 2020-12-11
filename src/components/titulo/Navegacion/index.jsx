import './index.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link } from "react-router-dom";

function Navegacion() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button onClick={handleClick}>
        <img src="menu.png" alt="menu" class="men"/> 
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <Link className="link" to="/principal">
          <MenuItem onClick={handleClose} class="meu">Principal</MenuItem>
          </Link>
          <Link className="link" to="/Sobreyo">
          <MenuItem onClick={handleClose} class="meu">Sobre mí</MenuItem>
          </Link>
        </Menu>
      </div>
    );
}

export default Navegacion;