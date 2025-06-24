import React from "react";
import "./Projects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ReactComponent as ChatIcon } from "../../assets/icons/chatIcon.svg";
import { ReactComponent as ForkIcon } from "../../assets/icons/fork.svg";
import { ReactComponent as LikeIcon } from "../../assets/icons/likeIcon.svg";
import { ReactComponent as PearIcon } from "../../assets/icons/pearIcon.svg";
import { ReactComponent as PuzzleIcon } from "../../assets/icons/puzzleIcon.svg";
import { ReactComponent as ExpressIcon } from "../../assets/icons/expressIcon.svg";
import { ReactComponent as NodejsIcon } from "../../assets/icons/nodejsIcon.svg";
import { ReactComponent as MongoDBIcon } from "../../assets/icons/mongodbIcon.svg";
import { ReactComponent as CIcon } from "../../assets/icons/c++.svg";
import { ReactComponent as NumPyIcon } from "../../assets/icons/numpyIcon.svg";
import { ReactComponent as PandasIcon } from "../../assets/icons/pandasIcon.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/reactIcon.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/githubIcon.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/icons/javascriptIcon.svg";
import { ReactComponent as NextjsIcon } from "../../assets/icons/nextjsIcon.svg";
import { ReactComponent as SupabaseIcon } from "../../assets/icons/supabaseIcon.svg";
import { ReactComponent as TypescriptIcon } from "../../assets/icons/typescriptIcon.svg";
import { ReactComponent as TailwindcssIcon } from "../../assets/icons/tailwindcssIcon.svg";
import { ReactComponent as StripeIcon } from "../../assets/icons/stripeicon.svg";
import { ReactComponent as ReduxIcon } from "../../assets/icons/reduxicon.svg";
import { ReactComponent as KafkaIcon } from "../../assets/icons/kafkaicon.svg";
import { ReactComponent as RedshiftIcon } from "../../assets/icons/redshift.svg";
import { ReactComponent as PythonIcon } from "../../assets/icons/pythonIcon.svg";
import { ReactComponent as SQLIcon } from "../../assets/icons/sqlIcon.svg";
import { ReactComponent as PowerbiIcon } from "../../assets/icons/powerbiicon.svg";

import { ReactComponent as TodoIcon } from "../../assets/icons/todoIcon.svg";
import { ReactComponent as EventmakerIcon } from "../../assets/icons/eventmakerIcon.svg";
import { ReactComponent as ElectionIcon } from "../../assets/icons/election.svg";
import { ReactComponent as ArtIcon } from "../../assets/icons/art.svg";
import { ReactComponent as WarehouseIcon } from "../../assets/icons/warehouse.svg";
import { ReactComponent as CarIcon } from "../../assets/icons/car.svg";
import { ReactComponent as SpaIcon } from "../../assets/icons/spa.svg";

import { motion } from "framer-motion";

const Projects = () => {
  const projectIcons = [
    {
      name: "Full-stack Admin Platform",
      emblem: <SpaIcon />,
      description:
        "Full-stack platform to digitize and streamline use and storage of bookings, medical records, and customer forms",
      iconData: [
        { icon: <NextjsIcon /> },
        { icon: <SupabaseIcon /> },
        { icon: <TypescriptIcon /> },
        { icon: <TailwindcssIcon /> },
      ],
    },
    {
      name: "Uber Replica",
      emblem: <CarIcon />,
      website: "https://github.com/Najel-A/UberClone",
      description:
        "Full-stack clones of Uber Eats and Uber with microservice architecture",
      iconData: [
        { icon: <MongoDBIcon /> },
        { icon: <ReactIcon /> },
        { icon: <ReduxIcon /> },
        { icon: <KafkaIcon /> },
      ],
    },
    {
      name: "Traffic Data Warehouse ETL Pipeline",
      emblem: <WarehouseIcon />,
      description:
        "ETL pipeline for raw data from Amazon S3 to load into Redshift for efficient querying using a star schema",
      iconData: [
        { icon: <PythonIcon /> },
        { icon: <SQLIcon /> },
        { icon: <PowerbiIcon /> },
        { icon: <RedshiftIcon /> },
      ],
    },

    {
      name: "E-commerce Art Gallery",
      emblem: <ArtIcon />,
      website: "https://opentheop.vercel.app/",
      description: "Cart functionality and payment-supported art gallery",
      iconData: [
        { icon: <NextjsIcon /> },
        { icon: <SupabaseIcon /> },
        { icon: <TypescriptIcon /> },
        { icon: <TailwindcssIcon /> },
      ],
    },
    {
      name: "Mayoral Candidate Site",
      emblem: <ElectionIcon />,
      website: "https://www.keepfremontsafe.com/",
      description:
        "Automatic mailing list, donations, SEO, accessibility, mobile view in a campaign website for a local mayoral candidate.",
      iconData: [
        { icon: <NextjsIcon /> },
        { icon: <SupabaseIcon /> },
        { icon: <TypescriptIcon /> },
        { icon: <StripeIcon /> },
      ],
    },
    {
      name: "Events Planner",
      emblem: <EventmakerIcon />,
      website: "https://eventplanner-kevincakey.vercel.app",
      description:
        "View events without an account, and add/delete/edit events with an account",
      iconData: [
        { icon: <NextjsIcon /> },
        { icon: <SupabaseIcon /> },
        { icon: <TypescriptIcon /> },
        { icon: <TailwindcssIcon /> },
      ],
    },
    {
      name: "Todo List",
      emblem: <TodoIcon />,
      website: "https://todolist-kevincakeys-projects.vercel.app",
      description: "Simple todolist using Next.js, Supabase, and TypeScript",
      iconData: [
        { icon: <NextjsIcon /> },
        { icon: <SupabaseIcon /> },
        { icon: <TypescriptIcon /> },
        { icon: <TailwindcssIcon /> },
      ],
    },
    {
      name: "Messaging App",
      emblem: <ChatIcon />,
      website: "https://github.com/kevincakey/MessagingApp",
      description:
        "A messaging app built with MongoDB, Express, React, and Node.js",
      iconData: [
        { icon: <MongoDBIcon /> },
        { icon: <ExpressIcon /> },
        { icon: <ReactIcon /> },
        { icon: <NodejsIcon /> },
      ],
    },
    {
      name: "Fork",
      emblem: <ForkIcon />,
      website: "https://github.com/kevincakey/CS180-Fork",
      description:
        "Bill-splitting app made with React, Paypal API, and TesseractOCR",

      iconData: [
        /* Add custom icon data for this project */
        { icon: <JavascriptIcon /> },
        { icon: <ReactIcon /> },
        { icon: <GithubIcon /> },
      ],
    },
    {
      name: "Zoomies",
      emblem: <PearIcon />,
      website: "https://github.com/kevincakey/Zoomies",
      description: "Partner Pairing program with csv data storage",
      iconData: [
        /* Add custom icon data for this project */
        { icon: <CIcon /> },
      ],
    },
    {
      name: "Collaborative Recommender System",
      emblem: <LikeIcon />,
      website: "https://github.com/kevincakey/CollaborativeRecommenderSystem",
      description:
        "Uses Collaborative Filtering to recommend magazines to users",
      iconData: [
        /* Add custom icon data for this project */
        { icon: <NumPyIcon /> },
        { icon: <PandasIcon /> },
      ],
    },
    {
      name: "8-puzzle solver",
      emblem: <PuzzleIcon />,
      website: "https://github.com/kevincakey/EightPuzzleSearch",
      description:
        "Solving an 8-puzzle using A* misplaced tile, Euclidean, and uniform cost search",
      iconData: [
        /* Add custom icon data for this project */
        { icon: <CIcon /> },
      ],
    },
    // Add more projects with their respective icon data
  ];

  const containerVariants = {
    hidden: {
      x: "50vw",
      filter: "blur(100px)",
    },
    visible: {
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        velocity: 1000,
        duration: 0.2,
        bounce: 0.1,
      },
    },
    exit: {
      x: "-50vw",
      filter: "blur(100px)",
      transition: {
        type: "spring",
        velocity: 1000,
        duration: 0.2,
        bounce: 0.1,
      },
    },
  };

  return (
    <>
      <motion.h1
        className="title"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        Projects
      </motion.h1>
      <motion.div
        id="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {projectIcons.map((project, index) => (
          <ProjectCard
            key={index}
            emblem={project.emblem}
            website={project.website}
            name={project.name}
            icons={project.iconData}
            description={project.description}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
