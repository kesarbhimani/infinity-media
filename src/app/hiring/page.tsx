import React from 'react';
import styles from './HiringPage.module.css';

interface Position {
    title: string;
    description: string;
    requirements: string[];
    icon: string;
}

const positions: Position[] = [
    {
        title: 'Video Editor',
        description: 'Join our creative team and craft cinematic wedding stories that capture moments to last a lifetime.',
        requirements: [
            'Proficiency in video editing software such as Adobe Premiere Pro, Final Cut Pro.',
            'Strong attention to detail and creativity.',
            'Ability to work under tight deadlines.'
        ],
        icon: '🎬'
    },
    {
        title: 'Motion Graphics Designer',
        description: 'Create elegant and emotional motion graphics that enhance our wedding cinematography.',
        requirements: [
            'Experience with After Effects and Cinema 4D.',
            'Strong portfolio showcasing motion graphics work.',
            'Ability to collaborate with the video production team.'
        ],
        icon: '✨'
    }
];

export default function HiringPage() {
    return (
        <div className={styles.container}>
            {/* Decorative elements */}
            <div className={styles.decorCircle1}></div>
            <div className={styles.decorCircle2}></div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto text-center py-16">
                <h1 className={styles.title}>
                    Join Our <span style={{ color: '#FF7F50' }}>Creative</span> Team
                </h1>
                <p className={styles.subtitle}>
                    Help us capture timeless moments and create cinematic wedding stories that couples will cherish forever.
                </p>
            </div>

            {/* Positions Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {positions.map((position, index) => (
                        <div key={index} className={styles.position}>
                            <div className={styles.positionHighlight}></div>
                            <div className="p-8">
                                <div className={styles.icon}>
                                    <span className="text-3xl">{position.icon}</span>
                                </div>
                                <h2 className={styles.positionTitle}>{position.title}</h2>
                                <p className={styles.positionDescription}>{position.description}</p>
                                
                                <h3 className={styles.requirementsTitle}>What we're looking for:</h3>
                                <ul className={styles.requirementsList}>
                                    {position.requirements.map((req, idx) => (
                                        <li key={idx}>{req}</li>
                                    ))}
                                </ul>
                                
                                <button className={styles.button}>
                                    Apply Now
                                    <span className={styles.buttonIcon}>→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team Culture Section */}
                <div className={styles.culture}>
                    <h2 className={styles.cultureTitle}>Our Team Culture</h2>
                    <p className={styles.cultureDescription}>
                        We're a passionate team of creatives dedicated to capturing love stories through the art of cinematography. 
                        We value creativity, collaboration, and the ability to see beauty in every moment.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Creative Freedom</h3>
                            <p className={styles.valueDescription}>Space to explore your artistic vision and bring your unique perspective to our work.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Collaborative Spirit</h3>
                            <p className={styles.valueDescription}>Work alongside talented professionals who are passionate about wedding cinematography.</p>
                        </div>
                        <div className={styles.valueCard}>
                            <h3 className={styles.valueTitle}>Growth Opportunities</h3>
                            <p className={styles.valueDescription}>Develop your skills, expand your portfolio, and grow your career with us.</p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className={styles.ctaSection}>
                    <h2 className={styles.ctaTitle}>Ready to Create Beautiful Wedding Stories?</h2>
                    <p className={styles.ctaDescription}>
                        Send your portfolio and resume to <span className={styles.email}>careers@yourweddingcinema.com</span>
                    </p>
                    <button className={styles.button} style={{ maxWidth: '200px' }}>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}