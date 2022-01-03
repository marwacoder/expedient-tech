import React from 'react'
import Image from 'next/image'
import { Box, Paper, Typography, Grid, styled, Container, useMediaQuery } from '../mui'
import { useTheme } from '@mui/material/styles';

interface CardDetails {
    title: string,
    img: string,
    desc: string
}
const card: Array<CardDetails> = [
    {
        title: 'General Branding',
        img: '/pictures/offer1.png',
        desc: 'We provide the finest linking brand with excellent creative to keep you on track throughout the whole business cycle.'
    },
    {
        title: 'Software Development',
        img: '/pictures/offer2.png',
        desc: 'We design software with consumers in mind, using principles that make it simple to adjust needs.'
    },
    {
        title: 'IT Consultancy',
        img: '/pictures/offer3.png',
        desc: 'We can supply you with greatest services and infrastructure to match global standards thanks to our team of specialists.'
    }
]
 const Services: React.FC =()=> {
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
                    <Grid item xs={12} sm={12} md={4} >
                <Item>
                     <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <Typography color='primary.main' m={2} fontWeight={600}  fontSize={xs ? '18px' : sm ? '20px' : md ? '23px' : '24px'}>{items.title}</Typography>
                                </Box>
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'auto'} height={'154px'} bgcolor={'primary.main'}>
                                    <Image width={120} height={120} src={items.img} alt={`${index}`} />
                                </Box>
                                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                    <Typography fontSize={xs ? '14px' : sm ? '15px' : md ? '15.9px' : '20px'} fontWeight={300} m={2}>{items.desc}</Typography>
                                </Box>
                </Item>
                </Grid>
                ))}
             
            
            
          </React.Fragment>
        );
      }

    return (
        <Container  >
        <Typography fontWeight={600} fontSize={'30px'} textAlign={'center'} color={'primary.main'}>What we offer</Typography>
            <Grid container  spacing={2} my={10}>
            <FormRow />
            </Grid>
        </Container>
    )
}

export default Services;