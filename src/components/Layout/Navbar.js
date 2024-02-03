import React, { useContext } from "react";
import { BsFillPersonFill,BsFillHandbagFill,BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  Typography,
  Toolbar,
  AppBar,
  Badge,
  IconButton,
  Container,
} from "@mui/material";
// icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// context
import { CardContext } from "../../contexts/CardContextProvider";

const Navbar = () => {
  const { state } = useContext(CardContext);
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#b7b7b7",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/products">
            <Typography variant="h6" component="div" color="text.secondary">
            <BsFillHandbagFill className="bag-icon"/>  Product Store
            </Typography>
          </Link>
          <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap : "20px",
            justifyItems : "center"
          }}
        >
          <Link to="/cart">
            <IconButton>
              <Badge badgeContent={state.itemsCounter} color="info">
                <ShoppingCartIcon color="action" sx={{ fontSize: "30px" }} />
              </Badge>
            </IconButton>
          </Link>
          <Link to="/login">
            <Typography variant="h5" component="div" color="text.secondary" sx={{
            transform: "translateY(-40%)",
            position: "absolute",
          }}>
              <BsFillPersonFill className="profile"/>
            </Typography>
          </Link>
          </Toolbar>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;