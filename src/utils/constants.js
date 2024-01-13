import autodeskLogo from '../assets/autodesk-logo.png';
import spsLogo from '../assets/sps-commerce-logo.png';
import sehLogo from '../assets/seh-logo.png';
import spotworkLogo from '../assets/spotwork-logo.png';
import iotumLogo from '../assets/iotum-logo.png';

import quizzler from '../assets/quizzler.jpg';

import athletics from '../assets/athletics-soccer.jpg';
import gaming from '../assets/destiny.png';
import logo from '../assets/logo.png';

export const workExperience = [
    {
        company: 'Autodesk',
        logo: { alt: 'Autodesk', src: autodeskLogo},
        dates: 'Jan 2024 - Present',
        title: 'Software Engineer',
        description: 'My current co-op!',
        skills: ['GraphQL', 'Java', 'AWS']
    },
    {
        company: 'SPS Commerce',
        logo: { alt: 'SPS Commerce', src: spsLogo },
        dates: 'May 2023 - Aug 2023',
        title: 'Software Engineer',
        description: 'I was most recently a software engineer on the Data Pipeline team for SPS Commerce, where I used AWS services to enhance state machines while delivering new features to the backend and frontend product.',
        skills: ['AWS', 'C#', 'TypeScript', 'SQL']
    },
    {
        company: 'SEH Computer Systems',
        logo: { alt: 'SEH Computer Systems', src: sehLogo },
        dates: 'Sep 2022 - Dec 2022',
        title: 'Software Developer',
        description: 'I developed hierarchical class structures to store financial data, built RESTful APIs to encapsulate features for developer use, and performed code releases.',
        skills: ['C#',  'ASP.NET Core', 'SQL']
    },
    {
        company: 'Spotwork',
        logo: { alt: 'Spotwork', src: spotworkLogo },
        dates: 'Jan 2022 - Apr 2022',
        title: 'Full-stack Developer',
        description: 'I began my first formal software development work here, adding features to Spotwork\'s web platform and developing cloud functions to manage backend actions.',
        skills: ['React', 'JavaScript', 'Firebase']
    },
    {
        company: 'Iotum Corporation',
        logo: { alt: 'Iotum Corporation', src: iotumLogo },
        dates: 'May 2021 - Aug 2021',
        title: 'QA & Technical Analyst',
        description: 'I started my career writing automated tests and performing QA testing for Iotum.',
        skills: ['JavaScript', 'Selenium']
    }
];

export const projects = [
    {
        name: 'SpotiLight',
        description: 'A program to change the light blinking speed of LEDs depending on the genre of song being played on a Spotify account.',
        img: { alt: 'SpotiLight', src: logo },
        skills: ['Python', 'Spotify API', 'Arduino API']
    },
    {
        name: 'Quizzler',
        description: 'A desktop application where users can automatically generate exam-style questions based on content from an uploaded file. Includes taking quizzes, auto-marking, and account persistence.',
        img: { alt: 'Quizzler', src: quizzler },
        skills: ['Kotlin', 'OpenAI API']
    },
    {
        name: 'Roguelike',
        description: 'An action-adventure 2D roguelike game, drawing inspiration from elements of the Cthulhu mythos. Currently in development!',
        img: { alt: 'Roguelike', src: logo },
        skills: ['Unity', 'C#']
    }
];

export const contactInfo = [
    {
        name: 'kevinhu12',
        link: 'https://github.com/kevinhu12'
    },
    {
        name: 'k57hu@uwaterloo.ca',
        link: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=k57hu@uwaterloo.ca'
    },
    {
        name: 'kevinhu12',
        link: 'https://www.linkedin.com/in/kevinhu12/'
    }
];

export const letters = Array.from('I\'m Kevin');

export const aboutMe = [
    'My name is Kevin Hu, and I\'m a fourth-year Computer Science student studying at the University of Waterloo.',
    'I\'m a fast learner who\'s passionate about writing good code, strengthening my programming arsenal, and working with new technologies.',
    'Currently, I\'m seeking an internship for Fall 2024!'
];

export const hobbies = [
    {
        hobby: 'Hackathons',
        description: 'The perfect environment for pushing my programming skills to the next level. One of the hackathons that I enjoyed the most was Hack the North. Our group created a program to change LED light blinking speed depending on the genre of song being played. You can view our demo here! Other competitions that I\'ve participated in are ClimaTech and the Digital Inclusion Challenge.',
        img: logo
    },
    {
        hobby: 'Athletics',
        description: 'I\'ve played competitive soccer for over 10 years, split between the Stouffville and Markham rep teams. These moments have become some of my most cherished memories. I currently play in the Adult League at Markham Soccer Club, and I still enjoy every second of it. I\'m also an avid fan of my hometown teams—the Toronto Maple Leafs and Toronto Raptors—and I like to catch their games whenever they\'re on TV.',
        img: athletics
    },
    {
        hobby: 'Gaming',
        description: 'My go-to pastime for cooling down at the end of the day. Destiny 2 has been my favourite ever since I picked it up, but some other games I have enjoyed are Apex Legends, Hollow Knight, and Project Zomboid. I\'m also currently on my first playthrough of Cyberpunk 2077! These games were what inspired me to learn game development in my free time.',
        img: gaming
    }
];
