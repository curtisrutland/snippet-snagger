import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "@reach/router";
import LightbulbFullIcon from "components/icons/LightbulbFull";
import LightbulbOutlineIcon from "components/icons/LightbulbOutline";
import { useThemeToggle } from "providers/ThemeToggleProvider";
import { ROUTES } from "pages";

const drawerWidth = 240;
const appTitle = process.env.REACT_APP_TITLE;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  title: {
    ...theme.mixins.toolbar,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-start"
  },
  listWrapper: {
    height: "100%",
    display: "flex",
    flexFlow: "column nowrap"
  },
  list: {
    flexGrow: 1,
    overflowY: "auto"
  }
}));

export default function Page({ children, title, activeRoute }) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const themeToggle = useThemeToggle();

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div className={classes.listWrapper}>
      <div className={classes.title}>
        <Typography variant="h6" component={Link} to="/" color="inherit">{appTitle}</Typography>
      </div>
      <Divider />
      <List className={classes.list}>
        {ROUTES.map(({ path, name, Icon }) => (
          <ListItem selected={name === activeRoute} button component={Link} to={path} key={path}>
            <ListItemIcon><Icon /></ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      <List>
        <Divider />
        <ListItem button onClick={themeToggle.toggleTheme}>
          <ListItemIcon>
            {themeToggle.theme === "light" ? <LightbulbFullIcon /> : <LightbulbOutlineIcon />}
          </ListItemIcon>
          <ListItemText primary={themeToggle.theme === "light" ? "Dark Theme" : "Light Theme"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>{title}</Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
