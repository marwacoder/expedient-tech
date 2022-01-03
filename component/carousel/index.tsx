import React from 'react';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';



import { Box,Container, Typography, Button, Grid, Paper, useMediaQuery, styled } from '../mui';


interface CardDetails {
  title1: string,
  title2: string,
  title3: string,
  img: string,
  sub: string
}

interface bodyDetails {
  heading: string,
  subhead: string,
  img: string,

}
const slide: Array<CardDetails> = [
  {
    title1: 'Deploying software to',
    title2: 'Promote your business',
    title3: 'growth.',
    img: '/pictures/Group1.png',
    sub: 'General Branding Software Development IT Consultants'
  },
  {
    title1: 'Creative Brand that',
    title2: 'Promote your business',
    title3: 'growth',
    img: '/pictures/Group2.png',
    sub: 'General Branding Software Development IT Consultants'
  },
  {
    title1: 'Technical Consult that  ',
    title2: 'Promote your business',
    title3: 'growth',
    img: '/pictures/Group3.png',
    sub: 'General Branding Software Development IT Consultants'
  }
]



const bodyCard: Array<bodyDetails> = [
  { heading: 'Why us', subhead: 'We are a diversified group of minds that are dedicated to resolving all of your technological business challenges.', img: '/logos/v1.png' },
  { heading: 'What we do', subhead: 'Our service offerings range from consultancy to software development / customization and General Branding.', img: '/logos/v2.png' }
]

 const CarouselComponent:React.FC =()=> {


  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.only('md'));
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    
  }));

  function FormRow() {
    return (
      <React.Fragment>
        
        <Grid item xs={12} sm={12} md={6}>
          <Box alignItems={'center'}>
          <Item elevation={0}>
          <Typography
                mb={2}
                lineHeight={'54px'}
                fontSize={xs ? '24px' : sm ? '26px' : md ? '36px' : '40px'}
                fontWeight="bold"
              >
                Our{' '}
                <Box component="span" color="white" bgcolor="primary.main">
                  Mission
                </Box>{' '}
              </Typography>
              <Typography
                height={'120px'}
                width={'413px'}
                lineHeight={'23.85px'}
                fontWeight={300}
                fontSize={xs ? '14px' : sm ? '15px' : md ? '15.9px' : '20px'}
              >
                To deliver creative and strategic IT services targeted at
                providing entire IT solutions to our clients in order to help
                them accomplish their business goals and obtain a competitive
                advantage in today's business climate.
              </Typography>
          </Item>
          </Box>
        </Grid>
        
        <Grid item  xs={12} sm={12} md={6} >
    
          {bodyCard.map((items, index) => (
            <Box my={2}>
              <Item key={index} elevation={0}>
                <Box>
                  <Box
                    mb={-8}
                    ml={3}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={'73px'}
                    height={'85px'}
                    bgcolor="primary.main"
                  >
                    <Image
                      src={items.img}
                      alt="v1"
                      width={'44px'}
                      height={'35px'}
                    />
                  </Box>
                  <Box  height="213px" bgcolor={'#0D4F6A14'}>
                    <Box
                      display={'flex'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <Typography
                        mt={2}
                        textAlign={'center'}
                        width="149px"
                        height="45px"
                        fontWeight={600}
                        fontSize={xs ? '18px' : sm ? '18px' : md ? '20px' : '24px'}
                      >
                        {items.heading}
                      </Typography>
                    </Box>
                    <Typography
                      mx={2}
                      my={5}
                      lineHeight={'23.85px'}
                      width="368px"
                      height={'72px'}
                      fontSize={xs ? '14px' : sm ? '15px' : md ? '15.9px' : '20px'}
                    >
                      {items.subhead}
                    </Typography>
                  </Box>
                </Box>
              </Item>
              </Box>
            ))}
        </Grid>
       
      </React.Fragment>
    );
  }
  

  return (
    <Container >
      <Carousel
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
      >
        {slide.map((items, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={12} sm={6}>
              <Box textAlign="left" mt={3}>
                <Typography
                  color="primary.main"
                  fontSize={xs ? '18px' : sm ? '22px' : md ? '30px' : '34px'}
                  fontWeight="bold"
                >
                  {items.title1}
                </Typography>
                <Typography
                  color="primary.main"
                  fontSize={xs ? '18px' : sm ? '22px' : md ? '30px' : '34px'}
                  fontWeight="bold"
                >
                  {items.title2}
                </Typography>
                <Typography
                  color="primary.main"
                  fontSize={xs ? '18px' : sm ? '22px' : md ? '30px' : '34px'}
                  fontWeight="bold"
                >
                  {items.title3}
                </Typography>
                <Typography mt={2} color="#1A1E17" fontSize={'13px'}>
                  {items.sub}
                </Typography>
                <Box mt={3}>
                  <Button style={{ fontSize: '15.9px' }} variant="contained">
                    Contact us now
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box mt={2}>
                <Image src={items.img}
                  width={xs ? 200 : sm ? 300 : md ? 300 : 400} height={xs ? 200 : sm ? 300 : md ? 300 : 400}
                  alt="first" />
              </Box>
            </Grid>
          </Grid>
        ))}

      </Carousel>
      <Box mt={'5%'}>
        <Grid
          container
         alignItems={'center'}
         
        >
          
          <FormRow />
 
         
        </Grid>
      </Box>
    </Container>
  );
}


export default CarouselComponent;