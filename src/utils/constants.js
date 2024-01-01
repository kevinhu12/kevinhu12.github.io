import autodeskLogo from '../assets/autodesk-logo.png';
import spsLogo from '../assets/sps-commerce-logo.png';
import sehLogo from '../assets/seh-logo.png';
import spotworkLogo from '../assets/spotwork-logo.png';
import iotumLogo from '../assets/iotum-logo.png';
import athletics from '../assets/athletics-soccer.jpg';
import gaming from '../assets/destiny.png';
import logo from '../assets/logo.png';

export const workExperience = [
    {
        company: 'Autodesk',
        logo: { alt: 'Autodesk', src: autodeskLogo},
        dates: 'Jan 2024 - Present',
        title: 'Software Engineer',
        description: 'My current co-op!'
    },
    {
        company: 'SPS Commerce',
        logo: { alt: 'SPS Commerce', src: spsLogo },
        dates: 'May 2023 - Aug 2023',
        title: 'Software Engineer',
        description: 'I was most recently a software engineer on the Data Pipeline team for SPS Commerce, where I used AWS services to enhance state machines while delivering new features to the backend and frontend product.'
    },
    {
        company: 'SEH Computer Systems',
        logo: { alt: 'SEH Computer Systems', src: sehLogo },
        dates: 'Sep 2022 - Dec 2022',
        title: 'Software Developer',
        description: 'I developed hierarchical class structures to store financial data, built RESTful APIs to encapsulate features for developer use, and performed code releases.'
    },
    {
        company: 'Spotwork',
        logo: { alt: 'Spotwork', src: spotworkLogo },
        dates: 'Jan 2022 - Apr 2022',
        title: 'Full-stack Developer',
        description: 'I began my first formal software development work here, adding features to Spotwork\'s web platform and developing cloud functions to manage backend actions.'
    },
    {
        company: 'Iotum Corporation',
        logo: { alt: 'Iotum Corporation', src: iotumLogo },
        dates: 'May 2021 - Aug 2021',
        title: 'QA & Technical Analyst',
        description: 'I started my career writing automated tests and performing QA testing for Iotum.'
    }
];

export const skills = [
    {
        category: 'Languages',
        items: [
            'C#',
            'JavaScript & TypeScript',
            'C++',
            'Python',
            'Java & Kotlin'
        ]
    },
    {
        category: 'Frameworks',
        items: [
            'React',
            'ASP.NET Core'
        ]
    },
    {
        category: 'Technologies',
        items: [
            'AWS',
            'SQL',
            'NoSQL'
        ]
    }
    
];

export const projects = [
    {
        name: 'SpotiLight',
        description: 'A program to change the light blinking speed of LEDs depending on the genre of song being played on a Spotify account.',
        img: { alt: 'Project 1', src: logo }
    },
    {
        name: 'Quizzler',
        description: 'A desktop application where users can automatically generate exam-style questions based on content from an uploaded file. Includes taking quizzes, auto-marking, and account persistence.',
        img: { alt: 'Project 1', src: logo }
    },
    {
        name: 'Roguelike',
        description: 'An action-adventure 2D roguelike game, drawing inspiration from elements of the Cthulhu mythos. Currently in development!',
        img: { alt: 'Project 1', src: logo }
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
        description: 'test desc',
        img: logo
    },
    {
        hobby: 'Athletics',
        description: 'I\'ve played competitive soccer for over 10 years, split between the Stouffville and Markham rep teams. These moments have become some of my most cherished memories, such as winning the Richmond Hill Challenge Cup tournament. I currently play in the Adult League at Markham Soccer Club, and I still enjoy every second of it. At a more casual level, I also play volleyball, basketball, spikeball, you name it. Lastly, I\'m a Toronto Maple Leafs fan, so I like to catch their games on TV whenever Hockey Night in Canada rolls around.',
        img: athletics
    },
    {
        hobby: 'Gaming',
        description: 'test desc',
        img: gaming
    }
];
