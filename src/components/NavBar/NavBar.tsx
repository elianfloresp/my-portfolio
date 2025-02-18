import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(() => ({
    background: " #0a0f2b",
    display: "flex",
    justifyContent: "space-evenly",
  }));

  const StyledMenuItem = styled(MenuItem)(({theme}) => ({
    borderRadius: "7%",
    '&:hover': {
        backgroundColor: theme.palette.secondary.main,
    }
  }));


  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
        <StyledMenuItem>About</StyledMenuItem>
        <StyledMenuItem>Skills</StyledMenuItem>
        <StyledMenuItem>Projects</StyledMenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
