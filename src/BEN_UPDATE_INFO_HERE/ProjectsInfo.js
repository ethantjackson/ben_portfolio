export const CONTENT_TYPE = Object.freeze({
  STYLEFRAME: 'STYLEFRAME',
  VIDEO_EMBED: 'VIDEO_EMBED',
  TEXT: 'TEXT',
});

export const PROJECTS_INFO = [
  // 2025 Reel
  {
    title: '2025 Reel',
    thumbnailTimeSeconds: 1,
    thumbnailURL:
      'https://res.cloudinary.com/du0rugjrg/video/upload/v1755226891/2025Reel2_ThumbnailVideo_ypde3b.mp4',
    description:
      'Some highlights from my work over the past couple of years, including 2D, 3D and hand-painted animation. For more specific information on roles, see below.',
    credits: {

    },
    detailsContent: [
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1104531613',
        width: 12, // accepts values from 1 to 12
      },
      
    ],
  },

  // Kinetic Type
  {
    title: 'Madness/Genius',
    thumbnailTimeSeconds: 3,
    thumbnailURL:
      'https://res.cloudinary.com/du0rugjrg/video/upload/v1754585965/RideTheLine_ThumbnailVideo_zarmdc.mp4',
    description:
      'As a part of Bubba\'s LA\'s rebrand, I designed and animated a kinetic type treatment of the studio\'s catchphrase "Riding the line between madness and genius."',
    credits: {
      studio: 'Bubbas LA',
      creativeDirector: 'Ian Nelson',
      DesignAndAnimation: 'Ben Peterson'
      
    },
    detailsContent: [
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106770278',
        width: 12, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: '',
        value:
          '',
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: 'The Process',
        value:
          'Below are some exploratory styleframes I designed while concepting the project (including my mispelling of "genious" which made it further into the creative process than I\d like to admit).',
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: '',
        value:
          '',
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/du0rugjrg/image/upload/v1754066448/KineticTypography_2.1_hklzs3.png',
        width: 4, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/du0rugjrg/image/upload/v1754066444/KineticTypography_1.2_xv1kn5.png',
        width: 4,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/du0rugjrg/image/upload/v1754066443/KineticTypography_1.1_vqrjyh.png',
        width: 4,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/du0rugjrg/image/upload/v1754066441/KineticTypography_4_vubcbt.png',
        width: 6,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/du0rugjrg/image/upload/v1754066434/KineticTypography_3.1_vxztpv.png',
        width: 6,
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: '',
        value:
          'More WIP styleframes and unused concepts that got left on the cutting room floor',
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: '',
        value:
          '',
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/du0rugjrg/image/upload/v1754066423/styleframe_Madness3_udlsvm.png',
        width: 6,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/du0rugjrg/image/upload/v1754066421/styleframe_Madness2_esqpxf.png',
        width: 6,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/du0rugjrg/image/upload/v1754066415/styleframe_Between2_eeafle.png',
        width: 12,
      },
      

    ],
  },
  // Pebbles
  {
    title: 'Pebbles',
    thumbnailTimeSeconds: .5,
    thumbnailURL:
      'https://res.cloudinary.com/du0rugjrg/video/upload/v1754585964/PebbleSim_ThumbnailVideo_a4bc1n.mp4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
    credits: {
      studio: 'Bing Chilling Labs',
      director: 'Ben Peterson',
      creativeDirection: 'Ethan Jackson',
    },
    detailsContent: [
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534625/instaStill1_wa0f4y.png',
        width: 4, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106766274',
        width: 8, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534553/poster_z77luw.png',
        width: 3,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534623/still2_ypknws.png',
        width: 12,
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: 'The Process',
        value:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
      },
    ],
  },
  // NIIICE SHOT
  {
    title: 'NIIICE SHOT',
    thumbnailURL:
      'https://res.cloudinary.com/workoutcloud/video/upload/v1722488890/NiiiceShot_TitleSequence_MAINVideo_m6djde.mp4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
    credits: {
      studio: 'Bing Chilling Labs',
      director: 'Ben Peterson',
      creativeDirection: 'Ethan Jackson',
    },
    detailsContent: [
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534625/instaStill1_wa0f4y.png',
        width: 8, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534553/poster_z77luw.png',
        width: 3,
      },
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106766274',
        width: 10, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534623/still2_ypknws.png',
        width: 12,
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: 'The Process',
        value:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
      },
    ],
  },
  // NIIICE SHOT
  {
    title: 'NIIICE SHOT 2',
    thumbnailTimeSeconds: 1,
    thumbnailURL:
      'https://res.cloudinary.com/workoutcloud/video/upload/v1722488890/NiiiceShot_TitleSequence_MAINVideo_m6djde.mp4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
    credits: {
      studio: 'Bing Chilling Labs',
      director: 'Ben Peterson',
      creativeDirection: 'Ethan Jackson',
    },
    detailsContent: [
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106766274',
        width: 10, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534625/instaStill1_wa0f4y.png',
        width: 8, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534553/poster_z77luw.png',
        width: 3,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534623/still2_ypknws.png',
        width: 12,
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: 'The Process',
        value:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
      },
    ],
  },
  // NIIICE SHOT
  {
    title: 'IIICE SHOT',
    thumbnailTimeSeconds: 1,
    thumbnailURL:
      'https://res.cloudinary.com/workoutcloud/video/upload/v1722488890/NiiiceShot_TitleSequence_MAINVideo_m6djde.mp4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
    credits: {
      studio: 'Bing Chilling Labs',
      director: 'Ben Peterson',
      creativeDirection: 'Ethan Jackson',
    },
    detailsContent: [
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106766274',
        width: 10, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534625/instaStill1_wa0f4y.png',
        width: 8, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534553/poster_z77luw.png',
        width: 3,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534623/still2_ypknws.png',
        width: 12,
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: 'The Process',
        value:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
      },
    ],
  },
  // NIIICE SHOT
  {
    title: 'NIIICE SHOT 3',
    thumbnailTimeSeconds: 1,
    thumbnailURL:
      'https://res.cloudinary.com/workoutcloud/video/upload/v1722488890/NiiiceShot_TitleSequence_MAINVideo_m6djde.mp4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
    credits: {
      studio: 'Bing Chilling Labs',
      director: 'Ben Peterson',
      creativeDirection: 'Ethan Jackson',
    },
    detailsContent: [
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106766274',
        width: 10, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534625/instaStill1_wa0f4y.png',
        width: 8, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534553/poster_z77luw.png',
        width: 3,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534623/still2_ypknws.png',
        width: 12,
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: 'The Process',
        value:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
      },
    ],
  },
  // NIIICE SHOT
  {
    title: 'NIIICE SHOT 4',
    thumbnailTimeSeconds: 1,
    thumbnailURL:
      'https://res.cloudinary.com/workoutcloud/video/upload/v1722488890/NiiiceShot_TitleSequence_MAINVideo_m6djde.mp4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
    credits: {
      studio: 'Bing Chilling Labs',
      director: 'Ben Peterson',
      creativeDirection: 'Ethan Jackson',
    },
    detailsContent: [
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106766274',
        width: 10, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534625/instaStill1_wa0f4y.png',
        width: 8, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534553/poster_z77luw.png',
        width: 3,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534623/still2_ypknws.png',
        width: 12,
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: 'The Process',
        value:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
      },
    ],
  },
  // NIIICE SHOT
  {
    title: 'NIIICE SHOT 5',
    thumbnailTimeSeconds: 1,
    thumbnailURL:
      'https://res.cloudinary.com/workoutcloud/video/upload/v1722488890/NiiiceShot_TitleSequence_MAINVideo_m6djde.mp4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
    credits: {
      studio: 'Bing Chilling Labs',
      director: 'Ben Peterson',
      creativeDirection: 'Ethan Jackson',
    },
    detailsContent: [
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106766274',
        width: 10, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534625/instaStill1_wa0f4y.png',
        width: 8, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534553/poster_z77luw.png',
        width: 3,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534623/still2_ypknws.png',
        width: 12,
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: 'The Process',
        value:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
      },
    ],
  },
  // NIIICE SHOT
  {
    title: 'NIIICE SHOT 6',
    thumbnailTimeSeconds: 1,
    thumbnailURL:
      'https://res.cloudinary.com/workoutcloud/video/upload/v1722488890/NiiiceShot_TitleSequence_MAINVideo_m6djde.mp4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
    credits: {
      studio: 'Bing Chilling Labs',
      director: 'Ben Peterson',
      creativeDirection: 'Ethan Jackson',
    },
    detailsContent: [
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106766274',
        width: 10, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534625/instaStill1_wa0f4y.png',
        width: 8, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534553/poster_z77luw.png',
        width: 3,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534623/still2_ypknws.png',
        width: 12,
      },
      {
        contentType: CONTENT_TYPE.TEXT,
        header: 'The Process',
        value:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
      },
    ],
  },
];
