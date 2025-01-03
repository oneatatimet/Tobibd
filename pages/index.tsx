
import React, { useState } from 'react';
import styles from '../styles/BirthdayStyles.module.css';


const BirthdayPage: React.FC = () => {
    const [currentPrompt, setCurrentPrompt] = useState<number>(1);
    const [showPage, setShowPage] = useState<boolean>(false);

    const handleNextPrompt = () => {
        if (currentPrompt < 3) {
            setCurrentPrompt(currentPrompt + 1);
        } else {
            setShowPage(true);
        }
    };

    if (showPage) {
        return (
            <div>
                <header>
                    <h1>Happy 40th Birthday, Tobi!</h1>
                </header>

                <div className={styles.content}>
                    <div className={styles.gallery}>
                        <img src="/photo1.jpg" alt="Tobi's celebration" />
                        <img src="/photo2.jpg" alt="Memories with Tobi" />
                        <img src="/photo3.jpg" alt="Birthday cake" />
                        <img src="/photo4.jpg" alt="Family and friends" />
                    </div>

                    <div className={styles.message}>
                        <p>Dear Tobi,</p>
                        <p>Today, I celebrate you and the incredible 40 years of joy, love, and laughter you have brought into my life. You are truly one of a kind, and I feel so lucky to share this journey with you.</p>
                        <p>Happy 40th Birthday!</p>
                        <p>With all my love,</p>
                        <p>Nada</p>
                    </div>
                </div>

                <footer>
                    <p>&copy; 2025 Tobi's Birthday Page</p>
                </footer>
            </div>
        );
    }

    return (
        <div className={styles.promptOverlay}>
            {currentPrompt === 1 && (
                <div>
                    <p>Are you good with cuddles and can pull off a sexy look with glasses?</p>
                    <button onClick={handleNextPrompt}>Yes</button>
                </div>
            )}
            {currentPrompt === 2 && (
                <div>
                    <p>Have you survived 40 wonderful years on earth?</p>
                    <button onClick={handleNextPrompt}>Yes</button>
                </div>
            )}
            {currentPrompt === 3 && (
                <div>
                    <p>Welcome to Tobi's 40th Birthday Page!</p>
                    <button onClick={handleNextPrompt}>OK</button>
                </div>
            )}
        </div>
    );
};

export default BirthdayPage;
