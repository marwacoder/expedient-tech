import React from 'react';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


import { Box, Typography, Button, Grid, Container, useMediaQuery } from '../mui';


export default function CarouselComponent(): JSX.Element {


  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.only('md'));
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));



  return (
    <Container maxWidth='md'>
      <Carousel
        
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showThumbs={false}
        showStatus={false}
        dynamicHeight={false}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box textAlign="left" mt={3}>
              <Typography
                color="primary.main"
                fontSize={xs ? '18px' : sm ? '22px': md ? '30px' : '34px'}
                fontWeight="bold"
              >
                Deploying software to
              </Typography>
              <Typography
                color="primary.main"
                fontSize={xs ? '18px' : sm ? '22px': md ? '30px' : '34px'}
                fontWeight="bold"
              >
                Promote your business
              </Typography>
              <Typography
                color="primary.main"
                fontSize={xs ? '18px' : sm ? '22px': md ? '30px' : '34px'}
                fontWeight="bold"
              >
                growth.
              </Typography>
              <Typography mt={2} color="#1A1E17" fontSize={'13px'}>
                General Branding Software Development IT Consultants
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
              <Image src='/pictures/Group1.png' 
              width={xs ? 200 : sm ? 300: md ? 400 : 500} height={xs ? 200 : sm ? 300: md ? 400 : 500}
               alt="first" />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box textAlign="left" mt={3}>
              <Typography
                color="primary.main"
                fontSize={xs ? '18px' : sm ? '22px': md ? '30px' : '34px'}
                fontWeight="bold"
              >
                Creative Brand that
              </Typography>
              <Typography
                color="primary.main"
                fontSize={xs ? '18px' : sm ? '22px': md ? '30px' : '34px'}
                fontWeight="bold"
              >
                Promote your business
              </Typography>
              <Typography
                color="primary.main"
                fontSize={xs ? '18px' : sm ? '22px': md ? '30px' : '34px'}
                fontWeight="bold"
              >
                growth.
              </Typography>
              <Typography mt={2} color="#1A1E17" fontSize={'13px'}>
                General Branding Software Development IT Consultants
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
              <Image src='/pictures/Group2.png' 
              width={xs ? 200 : sm ? 300: md ? 400 : 500} height={xs ? 200 : sm ? 300: md ? 400 : 500}
               alt="second" />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box textAlign="left" mt={3}>
              <Typography
                color="primary.main"
                fontSize={xs ? '18px' : sm ? '22px': md ? '30px' : '34px'}
                fontWeight="bold"
              >
                Technical Consult that
              </Typography>
              <Typography
                color="primary.main"
                fontSize={xs ? '18px' : sm ? '22px': md ? '30px' : '34px'}
                fontWeight="bold"
              >
                Promote your business
              </Typography>
              <Typography
                color="primary.main"
                fontSize={xs ? '18px' : sm ? '22px': md ? '30px' : '34px'}
                fontWeight="bold"
              >
                growth.
              </Typography>
              <Typography mt={2} color="#1A1E17" fontSize={'13px'}>
                General Branding Software Development IT Consultants
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
              <Image src='/pictures/Group3.png' 
              width={xs ? 200 : sm ? 300: md ? 400 : 500} height={xs ? 200 : sm ? 300: md ? 400 : 500}
               alt="third" />
            </Box>
          </Grid>
        </Grid>
      </Carousel>
      <Box mt={'15%'}>
        <Grid
          container
          spacing={2}
          alignItems={'center'}
          columnSpacing={{ xs: 1, sm: 2 }}
        >
          <Grid item sm={12} xs={12} md={6}>
            <Box>
              <Typography
                lineHeight={'54px'}
                fontSize={xs ? '24px' : sm ? '26px': md ? '36px' : '40px'}
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
                fontSize={xs ? '12px' : sm ? '26px': md ? '15.9px' : '20px'}
              >
                To deliver creative and strategic IT services targeted at
                providing entire IT solutions to our clients in order to help
                them accomplish their business goals and obtain a competitive
                advantage in today's business climate.
              </Typography>
            </Box>
          </Grid>
          <Grid item container sm={12} xs={12} md={6} spacing={2}>
            <Grid item>
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
                    src="/logos/v1.png"
                    alt="v1"
                    width={'44px'}
                    height={'35px'}
                  />
                </Box>
                <Box width={'404px'} height="213px" bgcolor={'#0D4F6A14'}>
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
                      fontSize={xs ? '18px' : sm ? '18px': md ? '20px' : '24px'}
                    >
                      Why us
                    </Typography>
                  </Box>
                  <Typography
                    mx={2}
                    my={5}
                    lineHeight={'23.85px'}
                    width="368px"
                    height={'72px'}
                    fontSize={xs ? '12px' : sm ? '26px': md ? '15.9px' : '20px'}
                  >
                    We are a diversified group of minds that are dedicated to
                    resolving all of your technological business challenges.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item>
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
                    src="/logos/v2.png"
                    alt="v1"
                    width={'44px'}
                    height={'35px'}
                  />
                </Box>
                <Box width={'404px'} height="213px" bgcolor={'#0D4F6A14'}>
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
                      fontSize={xs ? '18px' : sm ? '18px': md ? '20px' : '24px'}
                    >
                      What we do
                    </Typography>
                  </Box>
                  <Typography
                    mx={2}
                    my={5}
                    lineHeight={'23.85px'}
                    width="368px"
                    height={'72px'}
                    fontSize={xs ? '12px' : sm ? '26px': md ? '15.9px' : '20px'}
                  >
                    Our service offerings range from consultancy to software
                    development / customization and General Branding.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
