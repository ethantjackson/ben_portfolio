import { Grid, Typography } from '@mui/material';
import React from 'react';
import { CONTENT_TYPE } from '../BEN_UPDATE_INFO_HERE/ProjectsInfo';
import _ from 'lodash';
import ExpandInOnScroll from '../Transitions/ExpandInOnScroll';
import FadeInOnScroll from '../Transitions/FadeInOnScroll';
import VimeoPlayer from '../Vimeo/VimeoPlayer';

const ProjectDetails = ({
  projectName,
  projectDescription,
  detailsContent,
  projectCredits,
}) => {
  return (
    <Grid
      container
      justifyContent='center'
      sx={{
        width: '80%',
        marginLeft: '10%',
        paddingTop: '3rem',
        paddingBottom: '5rem',
      }}
    >
      <Grid item xs={4} sx={{ textAlign: 'left' }}>
        <FadeInOnScroll offset={100} delay={0} translate={0}>
          <Typography variant='h3'>{projectName}</Typography>
        </FadeInOnScroll>
      </Grid>
      <Grid item xs={8} sx={{ textAlign: 'justify' }}>
        <FadeInOnScroll offset={100} delay={100} translate={0}>
          <Typography variant='h6'>{projectDescription}</Typography>
        </FadeInOnScroll>
      </Grid>

      <ExpandInOnScroll offset={100} delay={200}>
        <Grid
          item
          mt={6}
          mb={6}
          ml={'10%'}
          sx={{
            height: '2px',
            background: 'black',
            width: '80%',
          }}
        />
      </ExpandInOnScroll>

      <Grid container spacing={3} alignItems='center' justifyContent='center'>
        {detailsContent.map((content, index) => {
          if (content.contentType === CONTENT_TYPE.VIDEO_EMBED) {
            return (
              <Grid item xs={content.width} key={index}>
                <VimeoPlayer vimeoID={content.vimeoID} />
              </Grid>
            );
          }
          if (content.contentType === CONTENT_TYPE.STYLEFRAME) {
            return (
              <Grid item xs={content.width} key={index}>
                <img width='100%' alt='ProjectImage' src={content.url} />
              </Grid>
            );
          }
          if (content.contentType === CONTENT_TYPE.TEXT) {
            return (
              <span key={index}>
                <Grid item xs={12} sx={{ textAlign: 'center' }} mt={1}>
                  <Typography variant='h4' sx={{ fontWeight: '500' }}>
                    {content.header}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'justify' }} mt={-2}>
                  <Typography variant='h6'>{content.value}</Typography>
                </Grid>
              </span>
            );
          }
          return <span key={index}></span>;
        })}

        <Grid item xs={12} sx={{ textAlign: 'center' }} mt={1}>
          <Typography variant='h4' sx={{ fontWeight: '500' }}>
            Credits
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }} mt={-2}>
          {Object.entries(projectCredits).map((val, index) => (
            <Typography variant='h6' key={index}>
              {_.startCase(val[0])} - {val[1]}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
