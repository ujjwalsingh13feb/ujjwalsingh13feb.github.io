//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiTwitter,
  FiDownload
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/OLX.png';
import Project2 from './assets/img/projects/LOOSI IT.png';
import Project3 from './assets/img/projects/PHARMEASY.png';
import Project4 from './assets/img/projects/TATA.png';
import Project5 from './assets/img/projects/MOVIE.png';
import Project from './assets/img/projects/TATABODY.png';



// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/redux.png';
import SkillImg9 from './assets/img/skills/postman.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/MEHFOOZ.jpg';
import TestiImage2 from './assets/img/testimonials/SATYAM.jpg';
import TestiImage3 from './assets/img/testimonials/TANUJ.jpg';

import resume from "./assets/img/Ujjwal-Singh-Resume.pdf"

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  
  {
    name: 'skills/portfolio',
    href: 'portfolio',
  },
  // {
  //   name: 'services',
  //   href: 'services',
  // },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
  {
    name: <a href={resume} onClick download="Ujjwal-Singh-Resume">Resume</a>,
    href: 'Resume',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: `https://www.linkedin.com/in/ujjwalsingh13feb/`,
  },
  {
    icon: <FiTwitter />,
    href: 'https://twitter.com/home',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/ujjwalsingh13feb',
  },
  {
    icon: <FiDribbble />,
    href: 'https://medium.com/@ujjwalsingh13feb',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'OLX',
    category:'Solo Project',
    // category: 'UI/UX design',
    discription: 'Olx-Clone is the potential classified advertisement website that categorizes objects in a user-friendly manner & displayed as an advertisement.., Classifieds can be posted that involve selling, buying, exchanging.',
    stack:" React || CSS || JS || API || JSON || firebase",
    git:"https://github.com/ujjwalsingh13feb/OLX",
    link: "https://resplendent-khapse-8eb3a8.netlify.app/",
  },
  {
    id: '4',
    image: Project2,
    name: 'FITNESS CLUB',
    category:'Team Project',
    discription: "Fitness club is an e-commerce website which provides diet plans as well. In this project we have cloned some important features of the website from sign-up to creating diet plan for yourself with decent UI.",
    stack:"reactjs || CSS || API || JSON  || chkra-ui || expressjs || mongodb",
    git:"https://github.com/ujjwalsingh13feb/productive-frog-3801",
    link:"https://fitness-club3801.netlify.app/",
    // category: 'UI/UX design',
  },
  {
    id: '2',
    image: Project3,
    name: 'PharmEasy',
    category:'Team Project',
    discription: 'The Clone of Pharmeasy Website , which is one of India most trusted online pharmacy & medical store offering Pharmaceutical and healthcare products.',
    stack:"redux || nodejs || mongodb || reactjs || expressjs || redux-thunk || firebase-auth || chakra-ui",
    git:"https://github.com/actuallyakshay/skinny-leg-3425",
    link:"https://pharaeasyyy.netlify.app/",
    // category: 'web development',
  },
  {
    id: '2',
    image: Project4,
    name: 'TATA1mg',
    category:'Team Project',
    discription: 'This is the clone of TATA 1mg website. A web application to buy medicines and health products that is Ecommerce Website. It was built by 4 members including me from start to finish within a span of a week.',
    stack:"HTML || CSS || JS || API || JSON ",
    git:"https://github.com/Aditi101049/1mg-clone",
    link:"https://serene-fudge-84a1ce.netlify.app/",
    // category: 'web development',
  },
  {
    id: '3',
    image: Project5,
    name: 'MOVIE APP',
    category:'Solo Project',
    discription: "It's a movie app where we can search movie lists and full information about the movie like IMDB rating, cast, and description. Time duration of this project is only one (1) day and it is also my first solo project.",
    stack:"HTML || CSS || JS",
    git:"https://github.com/ujjwalsingh13feb/Movie_App",
    link:"https://sparkling-rabanadas-322e3e.netlify.app/",
    // category: 'UI/UX design',
  },
 
  // {
  //   id: '4',
  //   image: Project4,
  //   name: 'TATA1mg',
  //   category: 'branding',
  // },
  // {
  //   id: '5',
  //   image: Project5,
  //   name: 'MOVIE_APP',
  //   category: 'web development',
  // },
  // {
  //   id: '6',
  //   image: Project6,
  //   name: 'MOVIE_APP',
  //   category: 'web development',
  // },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  
  {
    image: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
  },

  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  // {
  //   image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  // },
  {
    image: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
  },
  {
    image: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
  },
  // {
  //     image: "https://www.coffeeclass.io/logos/chakra-ui.png",
  // },
  
  
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Ujjwal has done a fantastic job overall. Not only the site is to design, the code is very clean and slick. Love the way he achieved the translations portion of the site..',
    authorName: 'Mehfooz Khan',
    authorPosition: 'Full Stack Developer',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Ujjwal is smart-working and motivated person who always have a zeal to learn about new technology. If any task is given to Ujjwal then you can be sure that it will be completed in due time. Punctual team player and helpful.',
    authorName: 'Satyam Yadav',
    authorPosition: 'Backend Developer',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'It has been a real pleasure working with Ujjwal. He has been very professional and very clear in all communications, which I appreciate..',
    authorName: 'Tanuj Pant',
    authorPosition: 'Backend Developer',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    Mobile: 'Number:8743917324',
    description: 'Mail:ujjwalsingh13feb@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Noida, India',
    // description: 'Serving clients worldwide',
  },
];
