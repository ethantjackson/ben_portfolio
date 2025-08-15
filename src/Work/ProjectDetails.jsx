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
        width: { xs: 'calc(100% - 24px)', sm: '80%' },
        marginLeft: { xs: '12px', sm: '10%' },
        // paddingTop: { xs: '1rem', sm: '3rem' },
        paddingTop: '20vh',
        paddingBottom: '5rem',
      }}
    >
      <Grid
        item
        xs={12}
        sm={5}
        xl={4}
        sx={{
          textAlign: {
            xs: 'center',
            sm: 'left',
          },
        }}
      >
        <FadeInOnScroll offset={100} delay={0} translate={0}>
          <Typography
            variant='h3'
            sx={{
              fontFamily: '"Creato Display", sans-serif',
              fontWeight: 700,
              fontSize: '50px',
            }}
          >
            {projectName}
          </Typography>
        </FadeInOnScroll>
      </Grid>
      <Grid item mt={{ xs: 1, sm: 0 }} xs sx={{}}>
        <FadeInOnScroll
          offset={100}
          delay={100}
          translate={0}
          styles={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography variant='h6'>{projectDescription}</Typography>
        </FadeInOnScroll>
      </Grid>

      <ExpandInOnScroll offset={100} delay={200}>
        <Grid
          item
          mt={{ xs: 3, sm: 6 }}
          mb={{ xs: 3, sm: 6 }}
          ml={{ xs: '12px', sm: '10%' }}
          sx={{
            height: '2px',
            background: 'black',
            width: { xs: 'calc(100% - 24px)', sm: '80%' },
          }}
        />
      </ExpandInOnScroll>

      <Grid
        container
        spacing={{ xs: 1, sm: 3 }}
        alignItems='center'
        justifyContent='center'
      >
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
              <React.Fragment key={index}>
                <Grid item xs={12} sx={{ textAlign: 'center' }} mt={1}>
                  <Typography variant='h4' sx={{ fontWeight: '500' }}>
                    {content.header}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'justify' }}>
                  <Typography variant='h6'>{content.value}</Typography>
                </Grid>
              </React.Fragment>
            );
          }
          return <span key={index}></span>;
        })}

        {projectCredits && (
          <>
            <Grid item xs={12} sx={{ textAlign: 'center' }} mt={1}>
              <Typography variant='h4' sx={{ fontWeight: '500' }}>
                Credits
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              {Object.entries(projectCredits).map((val, index) => (
                <Typography variant='h6' key={index}>
                  {_.startCase(val[0])} - {val[1]}
                </Typography>
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
