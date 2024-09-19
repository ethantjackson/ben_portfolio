import { Grid, Typography } from '@mui/material';
import React from 'react';
import { CONTENT_TYPE } from '../ProjectsInfo';
import _ from 'lodash';

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
        width: '70%',
        marginLeft: '15%',
        paddingTop: '3rem',
        paddingBottom: '5rem',
      }}
    >
      <Grid item xs={4} sx={{ textAlign: 'left' }}>
        <Typography variant='h3'>{projectName}</Typography>
      </Grid>
      <Grid item xs={8} sx={{ textAlign: 'justify' }}>
        <Typography variant='h6'>{projectDescription}</Typography>
      </Grid>

      <Grid
        container
        spacing={3}
        alignItems='center'
        justifyContent='center'
        mt={1}
      >
        {detailsContent.map((content) => {
          if (content.contentType === CONTENT_TYPE.STYLEFRAME) {
            return (
              <Grid item xs={content.width}>
                <img width='100%' alt='ProjectImage' src={content.url} />
              </Grid>
            );
          }
          if (content.contentType === CONTENT_TYPE.TEXT) {
            return (
              <>
                <Grid item xs={12} sx={{ textAlign: 'center' }} mt={1}>
                  <Typography variant='h4' sx={{ fontWeight: '500' }}>
                    {content.header}
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: 'justify' }} mt={-2}>
                  <Typography variant='h6'>{content.value}</Typography>
                </Grid>
              </>
            );
          }
          return <></>;
        })}

        <Grid item xs={12} sx={{ textAlign: 'center' }} mt={1}>
          <Typography variant='h4' sx={{ fontWeight: '500' }}>
            Credits
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }} mt={-2}>
          {Object.entries(projectCredits).map((val) => (
            <Typography variant='h6'>
              {_.startCase(val[0])} - {val[1]}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
