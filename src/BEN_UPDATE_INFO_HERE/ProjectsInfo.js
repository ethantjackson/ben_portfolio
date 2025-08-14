export const CONTENT_TYPE = Object.freeze({
  STYLEFRAME: 'STYLEFRAME',
  VIDEO_EMBED: 'VIDEO_EMBED',
  TEXT: 'TEXT',
});

export const PROJECTS_INFO = [
  // QUINJET
  {
    title: 'Reel 2025 Benjamin Peterson',
    thumbnailTimeSeconds: 1.5,
    thumbnailURL:
      'https://res.cloudinary.com/workoutcloud/video/upload/v1722488383/YerbaMate_MainVideo_yaa37n.mp4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illo perspiciatis repellat delectus tenetur eum in neque rem Lorem eligendi inventore ut earum?',
    credits: {
      studio: 'Bing Chilling Labs',
      director: 'Ben Peterson',
      creativeDirection: 'Ethan Jackson',
      titleTest: 'test',
      lightingDirector: 'Test Person',
    },
    detailsContent: [
      {
        vimeoID: '1106771724',
        width: 4, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106766274',
        width: 6, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106771724',
        width: 4, // accepts values from 1 to 12
      },
      {
        contentType: CONTENT_TYPE.VIDEO_EMBED,
        vimeoID: '1106771724',
        width: 4, // accepts values from 1 to 12
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
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534553/poster_z77luw.png',
        width: 3,
      },
      {
        contentType: CONTENT_TYPE.STYLEFRAME,
        url: 'https://res.cloudinary.com/workoutcloud/image/upload/v1726534553/poster_z77luw.png',
        width: 3,
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
  // YERBA MATTE
  {
    title: 'YERBA MATTE',
    thumbnailTimeSeconds: 1,
    thumbnailURL:
      'https://res.cloudinary.com/workoutcloud/video/upload/v1722488383/YerbaMate_MainVideo_yaa37n.mp4',
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
  // GUILT
  {
    title: 'GUILT',
    thumbnailTimeSeconds: 6,
    thumbnailURL:
      'https://res.cloudinary.com/workoutcloud/video/upload/v1722489624/Guilt_MT_WideFormatCC_v7lxev.mp4',
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
