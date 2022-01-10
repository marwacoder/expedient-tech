import React from 'react';
import Image from 'next/image';
import {
  Box,
  Paper,
  Typography,
  Grid,
  styled,
  Container,
  useMediaQuery,
  Button,
  Hidden,
  Stack
} from '../mui';
import { useTheme } from '@mui/material/styles';

interface CardDetails {
  title: string;
  img: string;
  desc: string;
}
const card: Array<CardDetails> = [
  {
    title: 'General Branding',
    img: '/pictures/offer1.png',
    desc: 'We provide the finest linking brand with excellent creative to keep you on track throughout the whole business cycle.',
  },
  {
    title: 'Software Development',
    img: '/pictures/offer2.png',
    desc: 'We design software with consumers in mind, using principles that make it simple to adjust needs.',
  },
  {
    title: 'IT Consultancy',
    img: '/pictures/offer3.png',
    desc: 'We can supply you with greatest services and infrastructure to match global standards thanks to our team of specialists.',
  },
];
const Services: React.FC = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.only('md'));
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    
    color: theme.palette.text.secondary,
  }));

  function FormRow() {
    return (
      <React.Fragment>
        {card.map((items: CardDetails, index) => (
          
          <Grid item xs={12} sm={12} md={4} key={index}>
            <Item>
              <Box
              
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Typography
                  color="primary.main"
                  m={2}
                  fontWeight={600}
                  fontSize={xs ? '14px' : sm ? '16px' : md ? '19px' : '20px'}
                >
                  {items.title}
                </Typography>
              </Box>
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'auto'}
                height={'154px'}
                bgcolor={'primary.main'}
              >
                <Image
                  width={120}
                  height={120}
                  src={items.img}
                  alt={`${index}`}
                />
              </Box>
              <Box
               
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
              >
                <Typography
                
                m={2}
                height={'120px'}
                
                lineHeight={'23.85px'}
                fontWeight={300}
                fontSize={xs ? '14px' : sm ? '15px' : md ? '15.9px' : '20px'}
              >
                  {items.desc}
                </Typography>
              </Box>
            </Item>
          </Grid>
        ))}
        
      </React.Fragment>
    );
  }

  return (
    <Container>
    
      <Typography
    
        lineHeight={'54px'}
        fontSize={xs ? '24px' : sm ? '26px' : md ? '36px' : '40px'}
        fontWeight="bold"
        textAlign={'center'}
        color={'primary.main'}
      >
        What we offer
      </Typography>
      <Box mb={5}>
      <Grid container spacing={2} my={5}>
        <FormRow />
      </Grid>
      <Box textAlign={'center'} alignItems={'center'}>
        <Button style={{ fontSize: '15.9px',backgroundColor: 'black',color: 'white' }} variant="contained">
      Check more service
        </Button>
        <Box mx={ xs ? 0 : sm ? 10 : md ? 15 :  30} display={'flex'} alignItems={'center'} justifyContent={'center'}>
          <Box>
       
              <Typography
    my={3}
    lineHeight={'54px'}
    fontSize={xs ? '14px' : sm ? '16px' : md ? '19px' : '20px'}
    fontWeight="bold"
    textAlign={'center'}
    color={'primary.main'}
  >
    Testimonials
  </Typography>
        
             
     
       
 
     <Hidden mdDown>
     <Box bgcolor={'black'} position={'absolute'} mb={-6} ml={-8} width={50} height={60}></Box>
    </Hidden> 
   
  <Typography
    
    lineHeight={'54px'}
    fontSize={xs ? '14px' : sm ? '16px' : md ? '19px' : '20px'}
    fontWeight="bold"
    textAlign={ xs ? 'center' : sm ? 'center' : 'left'}
    color={'primary.main'}
  >
   
    MicroBridge Limited
  </Typography>

  <Typography
    
     
        fontSize={xs ? '14px' : sm ? '15px' : md ? '15.9px' : '20px'}
       
        textAlign={ xs ? 'center' : sm ? 'center' : 'left'}
        
      >
        To deliver creative and strategic IT services targeted at providing entire IT solutions to our clients in order to help them accomplish their business goals and obtain a competitive advantage in today's business climate.
      </Typography>
  </Box>
      </Box>
      
      </Box>
      </Box>
    </Container>
  );
};

export default Services;
