import React, { useState } from 'react';
import BannerComponent from '../BannerComponent/BannerComponent';
import Logo from '../../assets/images/katha-logo.png';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '../../assets/images/MenuIcon.png';
import downarrow from '../../assets/images/downarrow.png';
import Grid from "@material-ui/core/Grid";
import kathautsav from "../../assets/kathautsav.png"
import HeroImg from '../../assets/images/hero-bg.png';
import Button from '@material-ui/core/Button';


function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    menu: {
        backgroundColor: "#FECB05",
        color: "white",

        borderRadius: "0"
    },
    menuRegistration: {
        backgroundColor: "#fff",
        color: "#98248D",

    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    },
    toolbar: {
        ...theme.mixins.toolbar,
        marginBottom: "2rem",
        [theme.breakpoints.down('md')]: {
            marginBottom: "1.5rem",
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "1rem",
        },
    },
    selectedItem: {
        fontFamily: "Poppins-Medium",
        fontWeight: 700,
        fontSize: "1rem",
        textTransform: "none",
        opacity: 1
    },
    menuItem: {
        fontFamily: "Poppins-Medium",
        fontWeight: 700,
        fontSize: "1rem",
        textTransform: "none",
        opacity: 1,
        color: "#212832",
        "&:hover": {
            opacity: 0.85
        }
    },
    drawerIconContainer: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    headerContainerMobile: {
        backgroundColor: "#FECB05",
        padding: 0,
        width: "100%",

    },
    bannerText: {
        marginTop: "2rem",
        color: "#98248D",
        fontSize: "2.9rem",
        fontFamily: 'Fredoka One'
    },
    storyText: {
        color: '#000000',
        fontFamily: 'Fredoka One',
        fontSize: '24px',
        marginTop: "0.5rem"
    },
    bannerImage: {
        textAlign: "center",
        marginLeft: "1rem"
    },
    styleFormat: {
        color: "#66645E",
        fontFamily: "Poppins-Regular",
        fontSize: "1rem",
        marginLeft: "1rem",
    },
    buttonArrow: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: "1em",
        marginBottom: "2em",
        color: "#98248D",
        fontFamily: 'Fredoka One',

    },
    contactUs: {
        fontFamily: 'Fredoka One',
        color: "#98248D",
        fontWeight: "normal",
        fontSize: "18px"
    }


}));

const HeaderComponent = () => {

    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);


    const tabProperties = [
        { name: "Why Katha", url: "/" },
        { name: "Process", url: "/" },
        { name: "About Katha21", url: "/" },
        { name: "Schedule", url: "/" },
        { name: "Gallery", url: "/" },
        { name: "Mentors", url: "/" },

    ]
    const handleClick = (event) => {
        event.persist();
        setAnchorEl(event.currentTarget);

        setOpenMenu(true);
    };

    const handleClose = () => {
        console.log('left');
        setOpenMenu(false);
        setAnchorEl(null);
    };

    const menuServiceProperties = [
        'Individual Registration',
        'School Registration',
    ];

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabs = (
        <React.Fragment>
            <div className='header-container'>
                <div className='container'>
                    <header>
                        <div className='header-wrap'>
                            <div className='logo'><img src={Logo} alt="logo" /></div>
                            <div className='menus'>
                                <ul>
                                    <li><a href="#">Why Katha?</a></li>
                                    <li><a href="#">Process</a></li>
                                    <li><a href="#">About Katha21</a></li>
                                    <li><a href="#">Schedule</a></li>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">Mentors</a></li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    <BannerComponent />
                </div>
            </div>
        </React.Fragment>
    );

    const RegisterNow = (
        <Button className={classes.buttonArrow}  aria-haspopup={anchorEl ? "true" : undefined} aria-owns={anchorEl ? "simple-menu" : undefined} variant="contained" onClick={handleClick}>Register Now <img src={downarrow} alt="down arrow" /> </Button>
        
    );

    const ContactUs = (
        <Typography gutterBottom variant="subtitle1" className={classes.contactUs}>Contact us</Typography>
    )


    const drawer = (
        <React.Fragment>

            <SwipeableDrawer classes={{ paper: classes.menu }} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
                <List disablePadding>
                    {
                        tabProperties.map((option, index) => (
                            <ListItem key={option.name} selected={value === index}
                                onClick={(e) => { handleChange(e, index); setOpenDrawer(false) }} divider button>
                                <ListItemText classes={{ root: value !== index ? classes.menuItem : classes.selectedItem }} disableTypography>{option.name}</ListItemText>
                            </ListItem>
                        ))
                    }
                </List>

            </SwipeableDrawer>

            <Grid container direction="column" className={classes.headerContainerMobile}>
                <Grid item container className={classes.headerContainerMobile} direction="row" justifyContent="flex-start" alignItems="center">
                    <Grid item>
                        <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
                            <img src={MenuIcon} alt="menu Icon" />
                        </IconButton>
                    </Grid>

                    <Grid item style={{ margin: "0 auto" }}>
                        <img alt src={kathautsav} alt="title" width="168" height="90" />
                    </Grid>



                </Grid>

                <Grid item>
                    <Typography gutterBottom variant="h1" className={classes.bannerText}>Katha Utsav 2021</Typography>
                </Grid>

                <Grid item>
                    <Typography gutterBottom variant="h4" className={classes.storyText}>Celebrating Story!</Typography>
                </Grid>
                <Grid item container alignItems="center" direction="column">
                    <Grid item>
                        <img src={HeroImg} width="250" height="200" alt="heroimg" className={classes.bannerImage} />
                    </Grid>
                </Grid>

                <Grid item>
                    <Typography gutterBottom variant="body2" className={classes.styleFormat}>Search for Excellence in Creative <br /> Writing is here...</Typography>
                </Grid>

                <Grid item container alignItems="center" direction="column">
                    <Grid item>
                    {RegisterNow}
                    </Grid>
                    <Grid item>
                        {ContactUs}
                    </Grid>
                </Grid>
            </Grid>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={openMenu}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  getContentAnchorEl={null}

                classes={{ paper: classes.menuRegistration }}
                MenuListProps={{
                    onMouseLeave: handleClose,
                }}
                elevation={0}

            >
                {
                    menuServiceProperties.map((option, index) => {
                        return <MenuItem key={option+index}>{option}</MenuItem>
                    })
                }
            </Menu>
        </React.Fragment>

    );




    return (
        <React.Fragment>
            <ElevationScroll>

                {matchesXS ? drawer : tabs}
            </ElevationScroll>

        </React.Fragment>
    )
}

export default HeaderComponent;


