import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Group1 from '../../public/pictures/Group1.png'
import Group2 from '../../public/pictures/Group2.png'
import Group3 from '../../public/pictures/Group3.png'

import {Box, Typography, Button} from '../mui'

const carous = [
    {title: 'Deploying software to Promote your business growth.',
    sub: 'General Branding   Software Development   IT Consultants',
    txtBtn: 'Contact us now',
    img: Group1
    },
    {title: 'Creative Brand that Promote your business growth',
    sub: 'General Branding   Software Development   IT Consultants',
    txtBtn: 'Contact us now',
    img: Group3
    },
    {title: 'Technical Consult that Promote your business growth',
    sub: 'General Branding   Software Development   IT Consultants',
    txtBtn: 'Contact us now',
    img: Group2
    }
]

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
                  <Image src={Group1} alt='first'/> 
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
                 <Image src={Group2} alt='second'/> 
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
                 <Image src={Group3} alt='second'/> 
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
