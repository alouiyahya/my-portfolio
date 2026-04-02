import {
     ReactIcon,TsIcon, NextIcon, MysqlIcon, MongoIcon, PhpIcon, TailwindIcon
} from "../assets/Icons"
import LaravelIcon from "../assets/Icons/laravel.svg"

import {
     ClimateMockup
} from "../assets/Mockup"

// Commented out the problematic imports
// import IbratoursShot from "../assets/Shots/ibratoursShot.webp";
// import SeaPearlShot from "../assets/Shots/SeaPearlShot.webp"; 
// --- FIX END ---

import {
    ClimateLogo
} from "../assets/Logos"

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

const TechInfo = {
    Laravel: {
        title: "Laravel",
        description: "A PHP framework for Web Artisans, providing a robust structure for building modern web applications.",
        icon: PhpIcon 
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

const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines."
    }
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "IbraTours",
        ShortDesc: "A professional tourism platform for managing bus tours.",
        Desc: "IbraTours is a comprehensive web solution for a tourism agency.",
        Logo: ClimateLogo, 
        Shot: ClimateMockup, // Temporary fix
        Mockup: ClimateMockup,
        Theme: "#2563eb",
        Status: "completed",
        Link: "https://ibratour.vercel.app/",
        Source: "https://ibratour.vercel.app/",
        Tech: [TechInfo.NextJS, TechInfo.Laravel, TechInfo.TailwindCSS, TechInfo.MySQL, TechInfo.PHP],
        features: [FeatureList.Responsive, FeatureList.SEO],
        hideProject: false,
        LogoSize: 60,
        versions: []
    },
    {
        Name: "Sea Pearl Hotel",
        ShortDesc: "A luxury hotel booking and management website.",
        Desc: "Sea Pearl Hotel is a premium hospitality platform.",
        Logo: ClimateLogo, 
        Shot: ClimateMockup, // Temporary fix
        Mockup: ClimateMockup, 
        Theme: "#0ea5e9",
        Status: "completed",
        Link: "https://sea-pearl-hotel.vercel.app",
        Source: "https://sea-pearl-hotel.vercel.app",
        Tech: [TechInfo.React, TechInfo.TailwindCSS],
        features: [FeatureList.Responsive, FeatureList.SEO],
        hideProject: false,
        LogoSize: 60,
        versions: []
    },
]