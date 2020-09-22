import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ReactPlayer from "react-player";
import { Document, Page, pdfjs } from 'react-pdf';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Link from '@material-ui/core/Link';

/*const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#098282',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});*/

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#098282',
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    minWidth: '100%',
    minHeight: '100%',
  },
  tabs: {
    //position:'absolute',
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: 'white',
    color: '#098282',
    height: "100vh",
    minWidth: "15vw",
    width: "15vw",
  },
  tab: {
    minHeight: "10vh",
  },
  tabpanel: {
  //  paddingLeft: "15vw",
  },
  item: {
    minWidth: 0,
    position: 'relative',
    align: 'center',
    justify: 'center',
    alignItems: 'center',
    objectFit: 'contain',
  },
  card: {
    backgroundColor: '#e0f2f1',
  },
  videotabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#098282',
    color: 'white',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    display: 'flex',
    padding: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    display: 'flex',
    paddingLeft: '7%',
    paddingRight: '7%',
  },
  imgWrapper:{
    display: 'inline',
    minWidth:'84%',
    minHeight:'100%',
    justifyContent: 'center',
  },
  img:{
    position:'absolute',
    width:'8%',
    height:'10%',
    right: '1%',
    bottom: '1%',
  },
  presentation:{
    border:'1px solid #098282',
  },
}));

const presentation = [
  {
    src: 'p1.png',
    width: 5,
    height: 3
  },
  {
    src: 'p2.png',
    width: 5,
    height: 3
  },
  {
    src: 'p3.png',
    width: 5,
    height: 3
  },
  {
    src: 'p4.png',
    width: 5,
    height: 3
  },
  {
    src: 'p5.png',
    width: 5,
    height: 3
  },
  {
    src: 'p6.png',
    width: 5,
    height: 3
  },
  {
    src: 'p7.png',
    width: 5,
    height: 3
  },
  {
    src: 'p8.png',
    width: 5,
    height: 3
  },
  {
    src: 'p9.png',
    width: 5,
    height: 3
  },
  {
    src: 'p10.png',
    width: 5,
    height: 3
  },
  {
    src: 'p11.png',
    width: 5,
    height: 3
  },
  {
    src: 'p12.png',
    width: 5,
    height: 3
  },
  {
    src: 'p13.png',
    width: 5,
    height: 3
  },
  {
    src: 'p14.png',
    width: 5,
    height: 3
  },
  {
    src: 'p15.png',
    width: 5,
    height: 3
  },
]

const images = [
    {
      src: 'IMG_0016.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_0018.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_0029.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_0032.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'tyndall1.png',
      width: 4,
      height: 3
    },
    {
      src: 'tyndall2.png',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_0036.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_2890.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_3023.jpeg',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_3030.jpeg',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_3032.jpeg',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_3034.jpeg',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_3036.jpeg',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_3838.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'IMG_4153.jpg',
      width: 3,
      height: 4,
    },
    {
      src: 'IMG_4160.jpg',
      width: 4,
      height: 3
    },
    {
      src: '4BY2zbOQ.jpeg',
      width: 4,
      height: 3,
    },
    {
      src: 'afghanistan039.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'Billede094.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'HELIPAD1.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'helipad.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'TARMAC.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'Chinook1.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'Chinook_Supa-Trac.jpg',
      width: 4,
      height: 3,
    },
    {
      src: '2693.jpeg',
      width: 4,
      height: 3,
    },
    {
      src: '1127.jpeg',
      width: 4,
      height: 3,
    },
    {
      src: 'Pict0118web.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'CougarFootballProjectWalkway.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'IMG_0320.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'TankToys1.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'Texas.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'antistat.PNG',
      width: 4,
      height: 3,
    },
];

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [video, setVideo] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleVideoChange = (event, newValue) => {
    setVideo(newValue);
  }

  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        indicatorColor="primary"
        className={classes.tabs}
      >
        <Tab label="Welcome" className={classes.tab} {...a11yProps(0)} />
        <Tab label="Our Products" className={classes.tab} {...a11yProps(1)} />
        <Tab label="Military Presentation" className={classes.tab} {...a11yProps(2)} />
        <Tab label="Videos" className={classes.tab} {...a11yProps(3)} />
        <Tab label="Gallery" className={classes.tab} {...a11yProps(4)} />
        <Tab label="Disaster Relief" className={classes.tab} {...a11yProps(5)} />
        <Tab label="Virtual FOB" className={classes.tab} {...a11yProps(6)} />
        <Tab label="2021 New Product Innovation" className={classes.tab} {...a11yProps(7)} />
        <Tab label="Contact Us" className={classes.tab} {...a11yProps(8)} />
      </Tabs>
      <Box className={classes.imgWrapper}>
        <TabPanel value={value} index={0} className={classes.tabpanel}>
          <img alt="complex" src="IPL_Macrotrac_TM_RGB.png" style={{
              position:"absolute",
              width:"20%",
              left:"16%",
              top:"1%",
            }}
          />
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={12} className={classes.item}>
                <Typography variant="h4" color="primary" className={classes.head}>
                  Rapid Man-Deployable Matting
                </Typography>
              </Grid>
              <Grid item xs={1} sm={1} lg={1} className={classes.item}>
              </Grid>
              <Grid item xs={10} sm={10} lg={10} className={classes.item}>
                <Box lineHeight={2} className={classes.block}>
                    IPL MacroTrac™ is the number one matting solution for the military.
                    If your mission requires; rapid deployment, easy transport, no special training or
                    tools then we have the solution for you! Made in the USA.
                </Box>
              </Grid>
              <Grid item xs={1} sm={1} lg={1} className={classes.item}>
              </Grid>
              <Grid item xs={2} sm={2} lg={2} className={classes.item}>
              </Grid>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                      Manually Deployable for Rapid Installation!
                    </Typography>
                    <Typography variant="body2" component="p">
                      Expeditionary Berthing/Personnel/Medical Shelters
                    </Typography>
                    <Typography variant="body2" component="p">
                      Expeditionary Maintenance Shelters
                    </Typography>
                    <Typography variant="body2" component="p">
                      Beach Operations
                    </Typography>
                    <Typography variant="body2" component="p">
                      Aircraft Hangars
                    </Typography>
                    <Typography variant="body2" component="p">
                      Helipads
                    </Typography>
                    <Typography variant="body2" component="p">
                      Warehousing
                    </Typography>
                    <Typography variant="body2" component="p">
                      Roadways & Walkways
                    </Typography>
                    <Typography variant="body2" component="p">
                      And More...
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6} sm={6} lg={6} className={classes.item}>
                <img alt="complex" src="IMG_3023.jpeg" width="365"/>
              </Grid>
              <Grid item xs={2} sm={2} lg={2} className={classes.item}>
              </Grid>
              <Grid item xs={2} sm={2} lg={2} className={classes.item}>
                <img alt="complex" src="i-trac-pic.png" height="200" />
              </Grid>
              <Grid item xs={1} sm={1} lg={1} className={classes.item}>
              </Grid>
              <Grid item xs={2} sm={2} lg={2} className={classes.item}>
                <img alt="complex" src="supa-trac-pic.png"  height="200" />
              </Grid>
              <Grid item xs={1} sm={1} lg={1} className={classes.item}>
              </Grid>
              <Grid item xs={2} sm={2} lg={2} className={classes.item}>
                <img alt="complex" src="supa-trac-x-press-pic.png" height="200" />
              </Grid>
              <Grid item xs={2} sm={2} lg={2} className={classes.item}>
              </Grid>
            </Grid>
          </ThemeProvider>
          <img alt="complex" src="Flag-United-States-of-America.png" className={classes.img} />
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabpanel}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <Card align="center" justify="center">
                  <CardContent>
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                      I-Trac
                    </Typography>
                    <img alt="complex" src="i-trac-pic.png" width="100%" />
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                      Specifications
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Panel Size (in): 47.5 (L) x 36.3 (W) x 2.1 (H)
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Weight Per Panel (lbs): 38
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Area Per Panel (sq ft/pc): 8.47
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Static Compression Capacity (lbs/sq ft): 86,400*
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Shipping (sq ft): Trailer 53′: 9,655.8 Flatbed 48′: 9,655.8
                    </Typography>
                    <Link href="I-TracBrochure-IPLRebrand.pdf" target=" blank">
                      Full Specification Sheet
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <Card align="center" justify="center">
                  <CardContent>
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                      Supa-Trac
                    </Typography>
                    <img alt="complex" src="supa-trac-pic.png" width="100%" />
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                      Specifications
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Panel Size (in): 38 (L) x 11 (W) x 1.4 (H)
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Weight Per Panel (lbs): 4.4
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Area Per Panel (sq ft/pc): 2.26
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Static Compression Capacity (lbs/sq ft): 36,000*
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Shipping (sq ft): Trailer 53′: 21,969 Flatbed 48′: 21,969
                    </Typography>
                    <Link href="./Supa-Trac_IPLRebrand.pdf" target=" blank">
                      Full Specification Sheet
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <Card align="center" justify="center">
                  <CardContent>
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                      Supa-Trac X-Press
                    </Typography>
                    <img alt="complex" src="supa-trac-x-press-pic.png" width="100%" />
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                      Specifications
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Panel Size (in): 39 (L) x 11.3 (W) x 1.1 (H)
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Weight Per Panel (lbs): 3.3
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Area Per Panel (sq ft/pc): 2.3
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Static Compression Capacity (lbs/sq ft): 36,000*
                    </Typography>
                    <Typography variant="body2" component="p" gutterBottom>
                      Shipping (sq ft): Trailer 53′: 27,600 Flatbed 48′: 27,600
                    </Typography>
                    <Link href="./Supa-TracX-Press_IPLRebrand.pdf" target=" blank">
                      Full Specification Sheet
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </ThemeProvider>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabpanel}>
          <Carousel
            currentIndex={currentImage}
            views={presentation}
            styles={{
              view: (base, state) => ({
                ...base,
                '& > img': {
                  maxHeight:'95vh',
                },
              }),
              navigationPrev: (base, state) => ({
                ...base,
                color:"#ffffff",
                backgroundColor:"#09828250",
              }),
              navigationNext: (base, state) => ({
                ...base,
                color:"#ffffff",
                backgroundColor:"#09828250",
              }),
            }}
          />
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tabpanel}>
          <Grid container spacing={2}>
            <Grid item xs={1} sm={1} lg={1} className={classes.item}>
            </Grid>
            <Grid item xs={10} sm={10} lg={10} className={classes.item}>
              <Tabs
                orientation="horizontal"
                value={video}
                onChange={handleVideoChange}
                aria-label="Vertical tabs example"
                indicatorColor="primary"
                centered
                className={classes.videotabs}
              >
                <Tab label="Track Dozer on I-Trac" {...a11yProps(0)} />
                <Tab label="How to Install I-Trac" {...a11yProps(1)} />
                <Tab label="Oil Rig on I-Trac" {...a11yProps(2)} />
                <Tab label="Hovercraft Pad" {...a11yProps(3)} />
                <Tab label="Construction Access Roadway" {...a11yProps(4)} />
              </Tabs>
            </Grid>
            <Grid item xs={1} sm={1} lg={1} className={classes.item}>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={1} sm={1} lg={1} className={classes.item}>
            </Grid>
            <Grid item xs={10} sm={10} lg={10} align="center" className={classes.item}>
              <TabPanel value={video} index={0}>
                <Box width="960px" height="540px">
                  <ReactPlayer url="https://www.youtube.com/watch?v=Rv6dBWfOl2g" width='100%' height='100%' controls={true}/>
                </Box>
              </TabPanel>
              <TabPanel value={video} index={1}>
                <Box width="960px" height="540px">
                  <ReactPlayer url="https://www.youtube.com/watch?v=XJ1kR1WzlfY" width='100%' height='100%' controls={true}/>
                </Box>
              </TabPanel>
              <TabPanel value={video} index={2}>
                <Box width="960px" height="540px">
                  <ReactPlayer url="https://www.youtube.com/watch?v=o2hrInbjhRs" width='100%' height='100%' controls={true}/>
                </Box>
              </TabPanel>
              <TabPanel value={video} index={3}>
                <Box width="960px" height="540px">
                  <ReactPlayer url="https://www.youtube.com/watch?v=t21Q2H7QcpA" width='100%' height='100%' controls={true}/>
                </Box>
              </TabPanel>
              <TabPanel value={video} index={4}>
                <Box width="960px" height="540px">
                  <ReactPlayer url="https://www.youtube.com/watch?v=crxIB0lkkC4" width='100%' height='100%' controls={true}/>
                </Box>
              </TabPanel>
            </Grid>
            <Grid item xs={1} sm={1} lg={1} className={classes.item}>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.tabpanel}>
          <Gallery photos={images} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={images}
                  styles={{
                    view: (base, state) => ({
                      ...base,
                      '& > img': {
                        maxHeight:'100vh',
                      },
                    }),
                  }}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </TabPanel>
        <TabPanel value={value} index={5} className={classes.tabpanel}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={12} className={classes.item}>
                <Typography variant="h4" color="primary" className={classes.head}>
                  Emergency Relief Solutions
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} lg={6} className={classes.item}>
                <Box width="640px" height="360px">
                  <ReactPlayer url="https://www.youtube.com/watch?v=k3vadKDTG3Q" width='100%' height='100%' controls={true}/>
                </Box>
              </Grid>
              <Grid item xs={5} sm={5} lg={5} className={classes.item}>
                <img alt="complex" src="IMG_0018.jpg" height="360"/>
              </Grid>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                      Ideal Quick Deployable Solutions for Emergency Relief!
                    </Typography>
                    <Typography variant="body2" component="p">
                      Medical and Stadium Shelter Flooring
                    </Typography>
                    <Typography variant="body2" component="p">
                      Roadway and Shelter Flooring for Fire Base Camps
                    </Typography>
                    <Typography variant="body2" component="p">
                      Temporary Flooring for Disaster Relief Shelters and Trailers
                    </Typography>
                    <Typography variant="body2" component="p">
                      Temporary Shelter Flooring for Security Posts and Camps
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={3} sm={3} lg={3} className={classes.item}>
                <img alt="complex" src="IMG_3838.jpg" height="220"/>
              </Grid>
              <Grid item xs={3} sm={3} lg={3} className={classes.item}>
                <img alt="complex" src="IMG_4160.jpg" height="220"/>
              </Grid>
              <Grid item xs={2} sm={2} lg={2} className={classes.item}>
              </Grid>
            </Grid>
          </ThemeProvider>
        </TabPanel>
        <TabPanel value={value} index={6} className={classes.tabpanel}>
          <Typography variant="h4" color="primary" className={classes.head}>
            Interactive Demo Coming Soon!
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={7} className={classes.tabpanel}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={12} className={classes.item}>
                <Typography variant="h4" color="primary" className={classes.head}>
                  New Product Innovation
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} lg={12} className={classes.item}>
                <Typography variant="h6" color="primary" className={classes.head}>
                  IPL MacroTrac strives to meet the end users mission by providing
                  products that truly allow for the successful completion of the task.
                  Please reach out to any of our Representatives to learn about upcoming
                  technology that will be available in 2021. If our current product and
                  service portfolio does not meet customer requirements, our experienced,
                  world-class design and service teams can work closely with the customer
                  to develop an ideal solution.
                </Typography>
              </Grid>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
              </Grid>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <img alt="complex" src="ADR.jpg" width="100%"/>
              </Grid>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
              </Grid>
            </Grid>
        </ThemeProvider>
        </TabPanel>
        <TabPanel value={value} index={8} className={classes.tabpanel}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={12} className={classes.item} align="center">
                <Typography  variant="h6" component="h4" color="primary">
                  Contact Us!
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} lg={2}/>
              <Grid item xs={8} sm={8} lg={8} className={classes.item} align="center">
                <Typography  variant="body2" component="p">
                  If you are attending a trade show we are participating in, reach out
                  and set up a meeting with us! We have representatives available to
                  answer any questions you may have and provide more information to
                  determine how our services can fit your needs.
                </Typography>
              </Grid>
              <Grid item xs={2} sm={2} lg={2}/>
              <Grid item xs={4} sm={4} lg={4}/>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <Card className={classes.card} align="center">
                  <CardContent>
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                       Joe Perrone
                    </Typography>
                    <Typography variant="strong" component="p" fontWeight="fontWeightBold">
                      Account Manager-Government and Military
                    </Typography>
                    <Typography variant="body2" component="p">
                       jperrone@macroplastics.com
                    </Typography>
                    <Typography variant="body2" component="p">
                      (228) 304-0150
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} sm={4} lg={4}/>
              <Grid item xs={4} sm={4} lg={4}/>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <Card className={classes.card} align="center">
                  <CardContent>
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                       Ryan Manz
                    </Typography>
                    <Typography variant="strong" component="p">
                       Account Manager
                    </Typography>
                    <Typography variant="body2" component="p">
                       ryan.manz@iplplastics.com
                    </Typography>
                    <Typography variant="body2" component="p">
                       (360) 296-0839
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} sm={4} lg={4}/>
              <Grid item xs={4} sm={4} lg={4}/>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <Card className={classes.card} align="center">
                  <CardContent>
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                       Rob Crawford
                    </Typography>
                    <Typography variant="strong" component="p">
                       Senior Business Development Manager
                    </Typography>
                    <Typography variant="body2" component="p">
                      rcrawford@macroplastics.com
                    </Typography>
                    <Typography variant="body2" component="p">
                      (916) 759-9653
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4} sm={4} lg={4}/>
              <Grid item xs={12} sm={12} lg={12} className={classes.item} align="center">
                <Typography>
                  To request a quote or find additional resources visit our website!
                </Typography>
                <Link href="https://www.macrotrac.com/contact/" target=" blank">
                  https://www.macrotrac.com/contact/
                </Link>
              </Grid>
            </Grid>
          </ThemeProvider>
        </TabPanel>
      </Box>
    </div>
  );
}
