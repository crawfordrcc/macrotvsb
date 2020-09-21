import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
//import Grid from '@material-ui/core/Grid';
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
    align: 'center',
    justify: 'center',
    alignItems: 'center',
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
    width: 4,
    height: 3
  },
  {
    src: 'p2.png',
    width: 4,
    height: 3
  },
  {
    src: 'p3.png',
    width: 4,
    height: 3
  },
  {
    src: 'p4.png',
    width: 4,
    height: 3
  },
  {
    src: 'p5.png',
    width: 4,
    height: 3
  },
  {
    src: 'p6.png',
    width: 4,
    height: 3
  },
  {
    src: 'p7.png',
    width: 4,
    height: 3
  },
  {
    src: 'p8.png',
    width: 4,
    height: 3
  },
  {
    src: 'p9.png',
    width: 4,
    height: 3
  },
  {
    src: 'p10.png',
    width: 4,
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
      src: 'IMG_0018[1].jpg',
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
      src: 'afghanistan 039 (Medium).jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'Billede 094 (Medium).jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'HELIPAD 8-0-2011 001.jpg',
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
      src: 'Chinook 1.jpg',
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
      src: 'Cougar Football Project Walkway...jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'IMG_0320.jpg',
      width: 4,
      height: 3,
    },
    {
      src: 'Tank toys 1.jpg',
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
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={12} className={classes.item}>
                <Typography variant="h4" color="primary" className={classes.head}>
                  Rapid Man-Depoloyable Matting
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
              <Grid item xs={3} sm={3} lg={3} className={classes.item}>
              </Grid>
              <Grid item xs={6} sm={6} lg={6} className={classes.item}>
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
              <Grid item xs={3} sm={3} lg={3} className={classes.item}>
              </Grid>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <img alt="complex" src="i-trac-pic.png" width="300" height="250" />
              </Grid>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <img alt="complex" src="supa-trac-pic.png" width="300" height="250" />
              </Grid>
              <Grid item xs={4} sm={4} lg={4} className={classes.item}>
                <img alt="complex" src="supa-trac-x-press-pic.png" width="300" height="250" />
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
                    <Link href="https://www.macrotrac.com/wp-content/uploads/2017/11/I-Trac-Sales-Sheet-Nov-2017-sales.pdf" target=" blank">
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
                    <Link href="https://www.macrotrac.com/wp-content/uploads/2016/12/Supa-Trac-Sales-Sheet.pdf" target=" blank">
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
                    <Link href="https://www.macrotrac.com/wp-content/uploads/2016/12/Supa-Trac-X-Press-Product-Sheet.pdf" target=" blank">
                      Full Specification Sheet
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </ThemeProvider>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabpanel}>
          <Gallery photos={presentation} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
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
                  }}
                />
              </Modal>
            ) : null}
          </ModalGateway>
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
            <Grid item xs={10} sm={10} lg={10} align="center" justify="center" className={classes.item}>
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
              <Grid item xs={8} sm={8} lg={8} className={classes.item}>
                <Box width="640px" height="360px">
                  <ReactPlayer url="https://www.youtube.com/watch?v=k3vadKDTG3Q" width='100%' height='100%' controls={true}/>
                </Box>
              </Grid>
            </Grid>
          </ThemeProvider>
        </TabPanel>
        <TabPanel value={value} index={6} className={classes.tabpanel}>
          Coming Soon
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
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                      I-Trac AM1 – (I-TRAC Airfield Matting 1) Light weight,
                      Man-deployable, Heavy Duty Ruggedized Airfield Matting System
                    </Typography>
                    <Typography variant="body2" component="p">
                      I-Trac AM1 is the first of the 4 Next Generation I-Trac mats.
                      It is designed for making temporary airfield parking aprons,
                      taxiways and in hangars that will sustain a C17 Globemaster
                      aircraft carrying maximum payload. I-Trac AM1 is produced from
                      the same mold the I-Trac is produced from. New technology
                      material is mixed with the polypropylene to enhance the strength
                      and durability of the matting panels. Preliminary first article
                      in-house tests indicate panels are reaching a compression strength
                      of 3,000 PSI, which is 2,400 PSI more than the standard Polypropylene
                      I-Trac panel. When suspended at the ends, the panels failed at
                      5,500 lbs. where they snapped in half. In static pressure tests,
                      they held at 14,000 lbs. and failed at 15,500 lbs. Macro is currently
                      running tests with a C17 aircraft wheel to determine the amount
                      of tire surface that has direct contact with the mat while under
                      35,000 pounds of pressure. They hope to have testing and evaluation
                      completed by the end of this year using the C17 Globemaster aircraft
                      at maximum payload weight as our targeted load specification to
                      achieve. The I-Trac AM1 matting system will be the light weight,
                       rapid deploy solution for temporary conus airfield Taxiways,
                       Parking Aprons and Hangars.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={12} lg={12} className={classes.item}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" component="h4" color="primary" gutterBottom>
                      I-Trac AM2 – (I-TRAC Airfield Matting 2) Light weight Man-deployable, Heavy Duty Ruggedized THIN Airfield Matting System
                    </Typography>
                    <Typography variant="body2" component="p">
                      I-Trac AM2 Thin Mat is the second of the 4 Next Generation I-Trac
                      mats. Based upon conversations with Navy and Air Force Air
                      Operations leadership, the I-Trac AM1 design is an impressive
                      solution for taxiways, parking aprons and hangars. However, the
                      2.1-inch thickness of the mat takes up too much of a logistical
                      footprint, resulting in the use of more aircraft assets to deploy
                      it. The matting needs to be no more than 1.25 inches thick,
                      utilize maximum space on a 463L pallet in a standard type II
                      TRICON, and sustain a C17 Globemaster aircraft carrying maximum
                      payload. Macro’s engineering team is currently in the process of
                      designing and testing the I-Trac AM2 Thin Mat using polypropylene
                      mixed with new technology materials for enhanced strength and
                      durability. The prototype mold was ordered several weeks ago and
                      is expected to arrive at the end of August 2020. Preliminary design
                      and prototype testing is expected to be complete by November of
                      this year. The I-Trac AM2 thin matting system will be the light
                      weight, rapid deploy solution for temporary forward-deployed
                      airfield Taxiways, Parking Aprons and Hangars.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
        </ThemeProvider>
        </TabPanel>
        <TabPanel value={value} index={8} className={classes.tabpanel}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={12} className={classes.item}>
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
