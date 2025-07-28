import { Box, Container, Grid, Typography } from '@mui/material';
import { Instagram, LinkedIn } from '@mui/icons-material';
import { ReactComponent as BehanceIcon } from '../Icons/Behance.svg';
import React from 'react';

const Contact = () => {
  return (
    <Box id='#CONTACT' sx={{ backgroundColor: '#fff', paddingBottom: '8vh' }}>
      <Container sx={{ maxWidth: 'calc(100% - 200px) !important' }}>
        <Grid container justifyContent='center'>
          <Grid item xs={3} sx={{ textAlign: 'left' }}>
            <Typography
              variant='h3'
              sx={
                {
                  // opacity: titleOpacity,
                  // transition: 'opacity 0.7s ease-in-out',
                }
              }
            >
              CONTACT
            </Typography>
          </Grid>
          <Grid item xs sx={{ textAlign: 'justify' }}>
            <Typography
              variant='h5'
              mb={5}
              sx={
                {
                  // opacity: descriptionOpacity,
                  // transition: 'opacity 0.7s ease-in-out',
                }
              }
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              illo perspiciatis repellat delectus tenetur eum in neque rem Lorem
              eligendi inventore ut earum?
            </Typography>
            <Typography
              variant='h5'
              mb={5}
              sx={
                {
                  // opacity: descriptionOpacity,
                  // transition: 'opacity 0.7s ease-in-out',
                }
              }
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              illo perspiciatis repellat delectus tenetur eum in neque rem Lorem
              eligendi inventore ut earum?
            </Typography>
            <Typography
              variant='h5'
              sx={
                {
                  // opacity: descriptionOpacity,
                  // transition: 'opacity 0.7s ease-in-out',
                }
              }
            >
              Get in touch!
            </Typography>
          </Grid>
          <Grid
            item
            mt={6}
            mb={8}
            sx={{
              // transform: `scaleX(${dividerWidth})`,
              // transition: 'transform 0.6s ease-in-out',
              height: '2px',
              background: 'black',
              width: '80%',
            }}
          />

          <Grid item xs={3} sx={{ textAlign: 'left' }}>
            <Typography
              variant='h3'
              sx={
                {
                  // opacity: titleOpacity,
                  // transition: 'opacity 0.7s ease-in-out',
                }
              }
            >
              LINKS
            </Typography>
          </Grid>
          <Grid item xs sx={{ textAlign: 'justify' }}>
            <Typography
              variant='h5'
              mb={5}
              sx={
                {
                  // opacity: descriptionOpacity,
                  // transition: 'opacity 0.7s ease-in-out',
                }
              }
            >
              Email: bcpeters100@gmail.com
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
                columnGap: '25pt',
              }}
            >
              <Instagram
                sx={{
                  fontSize: '50pt',
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              />
              <LinkedIn
                sx={{
                  fontSize: '52pt',
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              />
              <Box
                sx={{
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                  display: 'inline-flex',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              >
                <BehanceIcon
                  style={{
                    height: '50pt',
                    width: '50pt',
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
