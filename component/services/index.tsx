import React from 'react'
import Image from 'next/image'
import {Box, Paper, Typography, Grid} from '../mui'

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
        img: '/pictures/2.png',
        desc: 'We design software with consumers in mind, using principles that make it simple to adjust needs.'
    },
    {
        title: 'IT Consultancy',
        img: '/pictures/3.png',
        desc: 'We can supply you with the greatest service and infrastructure to match global standards thanks to our team of specialists.'
    }
]
export default function Services() {
    return (
        <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}>
           
                {card.map((items, index) => {
            <Paper key={index} elevation={1}>
                    
                   <Box >
                <Typography>{items.title}</Typography>
                </Box>
                <Box width={'308px'} height={'154px'} bgcolor={'primary.main'}>
                  <Image width={500} height={500} src={items.img} alt={`${index}`}/>  
                </Box>
                <Box>
                    <Typography>{items.desc}</Typography>
                </Box> 
                </Paper>
                })}
               
         
        </Box>
    )
}
