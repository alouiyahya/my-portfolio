import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon, ReactQueryIcon, EdgeStoreIcon
} from "../assets/Icons"
import LaravelIcon from "../assets/Icons/laravel.svg"
import IbratoursShot from "../assets/Shots/ibratoursshot.webp";
import SeaPearlShot from "../assets/Shots/SeaPearlShot.webp"; // T-akkdi men smiya dyal l-image f l-folder

import {
    NextmartLogo, ArmsLogo, ArmsPhpLogo, ClimateLogo, CovidtraxLogo, DaysbeyondLogo, FilmstackLogo, PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo, VortexaLogo
} from "../assets/Logos"

import {
    NextmartShots, Armsv1Shots, Armsv2Shots , CovidTraxShots, DaysbeyondShots, FilmstackShots, PikturesShots, SrinivasShots, XreconShots, YoatubeShots, VortexaShots, Armsv3Shots
} from "../assets/Shots"

import {
    ARMSv1Mockup, ARMSv2Mockup, ARMSv3Mockup, ClimateMockup, DaysbeyondMockup, SrinivasMockup, VortexaMockup, XreconMockup, YoatubeMockup
} from "../assets/Mockup"


type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

// -- PROJECTS TEMPLATE --
// {
//     Name: "TITLE",
//     ShortDesc: "SHORT_DESCRIPTION",
//     Desc: "DESCRIPTION",
//     Logo: LOGO_URL,
//     Shot: SCREENSHOT_URL,
//     Mockup: MOCKUP_URL,
//     Theme: "PROJECT_THEME_COLOR_HEX",
//     Status: "completed OR development",
//     Link: "PROJECT_URL",
//     Source: "GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     Tech: [TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     hideProject: false,
//     LogoSize: 50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },

const TechInfo = {
    Laravel: {
        title: "Laravel",
        description: "A PHP framework for Web Artisans, providing a robust structure for building modern web applications.",
        icon: LaravelIcon // Hit ma-3ndekch LaravelIcon f l-import, n-khdmou b PHP icon temporairement
    },
    React: {
        title: "React",
        description: "JavaScript library for building user interfaces with reusable components and efficient state management.",
        icon: ReactIcon
    },
    NextJS: {
        title: "Next.js",
        description: "A powerful React framework for server-side rendering and high-performance web applications.",
        icon: NextIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework for rapid UI development and modern styling.",
        icon: TailwindIcon
    },
    MySQL: {
        title: "MySQL",
        description: "Relational database management system for secure and structured data storage.",
        icon: MysqlIcon
    },
    MongoDB: {
        title: "MongoDB",
        description: "NoSQL database offering flexibility and scalability for modern data-driven apps.",
        icon: MongoIcon
    },
    PHP: {
        title: "PHP",
        description: "Server-side scripting language designed for web development and robust back-end logic.",
        icon: PhpIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: "A superset of JavaScript adding static typing for better maintainability and scale.",
        icon: TsIcon
    }
};

// Common Features List
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "IbraTours",
        ShortDesc: "A professional tourism platform for managing bus tours and travel bookings, developed in collaboration with IKER.",
        Desc: "IbraTours is a comprehensive web solution for a tourism agency specializing in bus tours and travel services. Developed as part of the IKER development team, the platform features a high-performance front-end built with Next.js for SEO and speed, backed by a robust Laravel API. It manages fleet scheduling, tour bookings, and real-time availability for travelers.",
        Logo: "", // Hna t-qdri t-diri l-logo dyal IbraTours ila zdtih f Assets
        Shot: IbratoursShot, // Hna t-qdri t-7etti screenshot dyal l-site
        Mockup: ClimateMockup,
        Theme: "#2563eb", // Loun blue dyal tourism/professional
        Status: "completed",
        Link: "https://ibratour.vercel.app/", // Ila kan live, 7etti l-link hna
        Source: "https://ibratour.vercel.app/", // GitHub link
        Tech: [
            TechInfo.NextJS, 
            TechInfo.Laravel, 
            TechInfo.TailwindCSS, 
            TechInfo.MySQL,
            TechInfo.PHP
        ],
        features: [
            {
                title: "Bus Tour Management",
                description: "Centralized system to manage bus fleets, routes, and daily tour schedules."
            },
            {
                title: "Online Bookings",
                description: "Seamless booking experience for customers with automated confirmation and ticket generation."
            },
            {
                title: "Collaborative Development",
                description: "Built within the IKER development team, following professional coding standards and agile methodologies."
            },
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 60,
        versions: []
    },
    {
        Name: "Sea Pearl Hotel",
        ShortDesc: "A luxury hotel booking and management website featuring a modern UI and seamless user experience.",
        Desc: "Sea Pearl Hotel is a premium hospitality platform designed to showcase luxury accommodations. Built with React for a dynamic interface and Tailwind CSS for a sleek, responsive design, it allows users to explore rooms, check amenities, and provides a professional digital presence for the hotel.",
        Logo: ClimateLogo, // 7etti l-logo dyal l-hotel hna ila 3ndek
        Shot: SeaPearlShot, // Hada houwa l-import li derna l-fouq
        Mockup: ClimateMockup, 
        Theme: "#0ea5e9", // Loun s-mawi (Cyan/Blue) m-nasbeq m3a l-b7ar w l-hotel
        Status: "completed",
        Link: "https://sea-pearl-hotel.vercel.app", // L-link dyal l-site
        Source: "https://sea-pearl-hotel.vercel.app", // GitHub link
        Tech: [
            TechInfo.React,
            TechInfo.TailwindCSS,
            
        ],
        features: [
            {
                title: "Room Showcase",
                description: "Interactive gallery and detailed descriptions of luxury suites and amenities."
            },
            {
                title: "Responsive Booking UI",
                description: "Modern and clean interface optimized for all devices using Tailwind CSS."
            },
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 60,
        versions: []
    },
]