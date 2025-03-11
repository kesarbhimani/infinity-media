import React from 'react';
import styles from './HiringPage.module.css';

interface Position {
    title: string;
    description: string;
    requirements: string[];
}

const positions: Position[] = [
    {
        title: 'Video Editor',
        description: 'Responsible for editing video content for our platform.',
        requirements: [
            'Proficiency in video editing software such as Adobe Premiere Pro, Final Cut Pro.',
            'Strong attention to detail and creativity.',
            'Ability to work under tight deadlines.'
        ]
    },
    {
        title: 'Motion Graphics Designer',
        description: 'Create engaging motion graphics for video content.',
        requirements: [
            'Experience with After Effects and Cinema 4D.',
            'Strong portfolio showcasing motion graphics work.',
            'Ability to collaborate with the video production team.'
        ]
    }
];

const HiringPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Open Positions</h1>
            <div className={styles.content}>
                {positions.map((position, index) => (
                    <div key={index} className={styles.position}>
                        <h2 className={styles.positionTitle}>{position.title}</h2>
                        <p className={styles.positionDescription}>{position.description}</p>
                        <h3 className={styles.requirementsTitle}>Requirements:</h3>
                        <ul className={styles.requirementsList}>
                            {position.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HiringPage;