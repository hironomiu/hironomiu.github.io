import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'hironomiu',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'hello!',
  paragraphTwo: 'hello!',
  paragraphThree: 'hello!',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'hello!world!',
    info:
      'つれづれなるままに、ひくらし、すずりにむかいて、こころにうつりゆくよしなしごとを、そこはかとなくかきつくれば、あやしうこそものぐるほしけれ',
    info2:
      '吾輩わがはいは猫である。名前はまだ無い。どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。この書生というのは時々我々を捕つかまえて煮にて食うという話である。',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'こんにちは！世界！',
    info: 'There is nothing either good or bad, but thinking makes it so.',
    info2: '物事によいも悪いもない。考え方によって良くも悪くもなる。',
    url: '',
    repo: 'https://github.com/hironomiu', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/hironomiu',
    },
    {
      id: nanoid(),
      name: 'slideshare',
      url: 'https://www.slideshare.net/hironorimiura',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hironomiu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
