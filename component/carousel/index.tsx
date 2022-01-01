import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import {Box, Typography, Button} from '../mui'


export default function CarouselComponent():JSX.Element {
    return (
        <Box my={5}>
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
           <Box display='flex' justifyContent='center' alignContent='center'>
              
               <Box textAlign='left' mt={3}>
                <Typography color='primary.main' fontSize={30}  fontWeight='bold'>Deploying software to</Typography>
                <Typography color='primary.main' fontSize={30}  fontWeight='bold'>Promote your business</Typography>
                <Typography color='primary.main' fontSize={30} fontWeight='bold'>growth.</Typography>
                <Typography mt={2}  color='#1A1E17' fontSize={13}>General Branding   Software Development   IT Consultants</Typography>
                <Box mt={3}>
                    <Button style={{fontSize: 15.9}} variant="contained" >Contact us now</Button>
                </Box>
                
               </Box>
               <Box mt={2}>
                  <Image src='/pictures/Group1.png' alt='first'/> 
               </Box>
           </Box>
           <Box display='flex' justifyContent='center' alignContent='center'>
              
              <Box textAlign='left' mt={3}>
               <Typography color='primary.main' fontSize={30}  fontWeight='bold'>Creative Brand that</Typography>
               <Typography color='primary.main' fontSize={30}  fontWeight='bold'>Promote your business</Typography>
               <Typography color='primary.main' fontSize={30} fontWeight='bold'>growth.</Typography>
               <Typography mt={2}  color='#1A1E17' fontSize={13}>General Branding   Software Development   IT Consultants</Typography>
               <Box mt={3}>
                   <Button style={{fontSize: 15.9}} variant="contained" >Contact us now</Button>
               </Box>
               
              </Box>
              <Box mt={2}>
                 <Image src='/pictures/Group2.png'  alt='second'/> 
              </Box>
          </Box>
          <Box display='flex' justifyContent='center' alignContent='center'>
              
              <Box textAlign='left' mt={3}>
               <Typography color='primary.main' fontSize={30}  fontWeight='bold'>Technical Consult that</Typography>
               <Typography color='primary.main' fontSize={30}  fontWeight='bold'>Promote your business</Typography>
               <Typography color='primary.main' fontSize={30} fontWeight='bold'>growth.</Typography>
               <Typography mt={2}  color='#1A1E17' fontSize={13}>General Branding   Software Development   IT Consultants</Typography>
               <Box mt={3}>
                   <Button style={{fontSize: 15.9}} variant="contained" >Contact us now</Button>
               </Box>
               
              </Box>
              <Box mt={2}>
                 <Image src='/pictures/Group3.png' alt='second'/> 
              </Box>
          </Box>
           
        </Carousel>
        <Box>
            <Box width={220}>
                <Typography>Our <Box bgcolor='primary.main'>Mission</Box> </Typography>
            </Box>
            </Box>
        </Box>
    )
}
