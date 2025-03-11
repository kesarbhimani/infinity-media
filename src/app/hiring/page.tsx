import React from 'react';
import styles from './HiringPage.module.css';
import { Card } from '../components/ui/card';

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
            <h1 className={styles.title}>We are Hiring...</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {positions.map((position, index) => (
                    <Card key={index} className={`${styles.position} overflow-hidden group`}>
                        <div className="p-4">
                            <h2 className={`${styles.positionTitle} font-playfair text-xl mb-2`}>{position.title}</h2>
                            <p className={`${styles.positionDescription} text-muted-foreground mb-4`}>{position.description}</p>
                            <h3 className={`${styles.requirementsTitle} font-bold mb-2`}>Requirements:</h3>
                            <ul className={`${styles.requirementsList} list-disc list-inside`}>
                                {position.requirements.map((req, idx) => (
                                    <li key={idx}>{req}</li>
                                ))}
                            </ul>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default HiringPage;