// ProjectCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard as StyledProjectCard } from '../styles/stylesheet';
import { ProjectProps } from './Projects';

interface ProjectCardProps {
    project: ProjectProps;
    children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    return (
        <StyledProjectCard
            layout
            layoutId={`project-card-${project.title}`}
            onClick={toggleExpand}
            style={{
                position: isExpanded ? 'fixed' : 'relative',
                top: isExpanded ? 0 : 'auto',
                left: isExpanded ? 0 : 'auto',
                zIndex: isExpanded ? 1000 : 1,
                width: isExpanded ? '100vw' : '20rem', // Adjust as per your styles
                height: isExpanded ? '100vh' : '15rem', // Adjust as per your styles
                borderRadius: isExpanded ? '0px' : '15px',
                overflowY: isExpanded ? 'scroll' : 'hidden',
                // Add any additional styles for expanded state
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.5 }}
        >
            <motion.h1>{project.title}</motion.h1>
            <motion.p>{project.description}</motion.p>

            {isExpanded && (
                <motion.button onClick={toggleExpand} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    Close
                </motion.button>
            )}
        </StyledProjectCard>
    );
};

export default ProjectCard;
