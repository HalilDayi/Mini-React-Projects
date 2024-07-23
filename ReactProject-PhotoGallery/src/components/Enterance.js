import React from "react";
import { Link } from "react-router-dom";
import { motion, transform } from "framer-motion";
import "../style.css";

const headerVariants = {
    hidden: {
        y: -100
    },
    visible: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 200
        }
    },
    hover: {
        scale: 1.1
    },
    exit: {
        x: '-100vw',
        transition: {ease: 'easeInOut'}
    }
}

const contentVariants = {
    hidden: {
        x: -100
    },
    visible: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 200
        }
    },
    hover: {
        scale: 1.1
    },
    exit: {
        x: '-100vw',
        transition: {ease: 'easeInOut'}
    }
}

const buttonVariants = {
    hidden: {
        x: -100
    },
    visible: {
        x: 0
    },
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255, 255, 255)",
        boxShadow:  "0px 0px 8px rgb(255, 255, 255)",
        transition: {
            yoyo: Infinity,
            duration: 0.5
        }
    },
    exit: {
        x: '-100vw',
        transition: {ease: 'easeInOut'}
    }
}

const imageVariants = {
    hidden: {
        y: -100
    },
    visible: {
        y: 0
    },
    hover: {
        scale: 1.1,
        transition: {
            yoyo: Infinity,
            duration: 0.5
        }
    },
    exit: {
        x: '-100vw',
        transition: {ease: 'easeInOut'}
    }
}

const Enterance = ({images}) => {
    const firstFourImage = images.slice(0, 4);
    return(
        <div className="flex-enterance">
            <div className="introduction-section">
            <motion.h1 variants={headerVariants} initial="hidden" animate="visible" whileHover="hover" exit="exit">Welcome To The Animation Gallery</motion.h1>
            <motion.div variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                <motion.p variants={contentVariants} whileHover="hover">Bu projenin amacı React'ın framer motion kütüphanesi aracılığıyla bir web sayfasına animasyon katmaktır.</motion.p>
                <motion.p variants={contentVariants} whileHover="hover">Resimler <a href="https://testmuze.comu.edu.tr/"><b>https://testmuze.comu.edu.tr/</b></a> sitesinden alınmıştır.</motion.p>
            </motion.div>
            <Link to="/gallery">
                <motion.button variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover" exit="exit">Go to The Animation Gallery</motion.button>
            </Link>
            </div>
            <div className="static-image-section">
                {
                    firstFourImage.map((src, index) => (
                        <motion.img variants={imageVariants} initial="hidden" animate="visible" whileHover="hover"  exit="exit" className="flex-image" key={index} src={src} alt={`Image ${index+1}`}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Enterance;