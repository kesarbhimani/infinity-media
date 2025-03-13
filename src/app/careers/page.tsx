import React from 'react';
import styles from './CareersPage.module.css';

interface Position {
    title: string;
    description: string;
    requirements: string[];
    icon: string;
}

const positions: Position[] = [
    {
        title: 'Freshers with Passion',
        description: 'If you are eager to learn. we will provide you with the training to enhance your skills.',
        requirements: [
            'Basic knowledge of Adobe Premiere Pro and Photoshop.',
            'Strong interest in wedding cinematography.',
            'Ability to work well in a team.'
        ],
        icon: '✨'
    },
    {
        title: 'Experienced Video Editors',
        description: 'Bring your expertise and creativity to craft high-quality, and engaging content.',
        requirements: [
            'Proficient in Adobe Premiere Pro and After Effects.',
            'Experience in color grading and audio mixing.',
            'Strong portfolio of wedding or event videos.'
        ],
        icon: '🎬'
    }
];

export default function CareersPage() {
    return (
        <div className={styles.container}>
            {/* Decorative elements */}
            <div className={styles.decorCircle1}></div>
            <div className={styles.decorCircle2}></div>

            <br />

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto text-center py-16">
                <h1 className={styles.title}>
                    Join Our <span style={{ color: '#ff5252' }}>Creative</span> Team
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
                                <a href="mailto:info@infinitymedia.com">
                                    <button className={styles.button}>
                                        Apply Now
                                        <span className={styles.buttonIcon}>→</span>
                                    </button>
                                </a>
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
                        Send your portfolio and resume to <a href="mailto:sahil.kakadiya@infinitymedia.co.in" className={styles.email}>sahil.kakadiya@infinitymedia.co.in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}