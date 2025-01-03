
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
                <div data-clagit="true" data-ss-name="example">
    {<div clagit ssName={styles.gallery}>
                        <img src="/photo1.jpg" alt="Tobi's celebration" />
                        <img src="/photo2.jpg" alt="Tobi's celebration" />
                        <img src="/photo3.jpg" alt="Tobi's celebration" />
                        <img src="/photo4.jpg" alt="Tobi's celebration" />
                    </div>}
</div>
                    

                    <div className={styles.message}>
                    <p>Heyy Tobii check </p>
                        <p>

Happy 40th! 🎉 Today’s all about celebrating you—the warm, kind, and downright awesome person who somehow manages to make everyone feel seen and supported. Whether it’s helping people grow at work, giving the best hugs, or just being your approachable, cuddly self, you’ve got this way of making life better for everyone around you.

Now, since it’s your big 4-0, I’ve got a fun little mission for you. Ready? Your challenge is to conquer the mighty ghayn! Next time you’re in Arabic country, casually slip the word “gharyb” (it means “strange” in Arabic) into a conversation with a server. Imagine this: you raise an eyebrow, scan the menu, and say, “Hmm, this dish sounds kinda gharyb, don’t you think?” Whether they laugh or just look confused, it’s guaranteed to be a memorable moment. You’ll totally nail it!

But seriously, how about starting something new this year? You’ve got all these ideas and so much talent—why not dive into an exciting engineering project for fun? And don’t forget to take some time to travel more. Go somewhere new, explore, and soak up what the world has to offer. You’ve done so much for everyone else—it’s time to do more of what makes you happy!

Here’s to making your forties full of adventures, laughter, and moments that make life a little more fun (and maybe a little gharyb too). I can’t wait to see where this next chapter takes you—you’re gonna crush it!
hhhhhhhhh</p>
                        <p>Happy 40th Birthday!</p>
                        <p>Big hugs and a loud ghhh,</p>
                        <p>Nadia</p>
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
