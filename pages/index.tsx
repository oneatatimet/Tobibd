import React, { useState } from 'react';
import styles from '../styles/BirthdayStyles.module.css';

const BirthdayPage: React.FC = () => {
    const [currentPrompt, setCurrentPrompt] = useState<number>(1);
    const [showPage, setShowPage] = useState<boolean>(false);
    const [buttonValue, setButtonValue] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleNextPrompt = () => {
        if (currentPrompt < 3) {
            setCurrentPrompt(currentPrompt + 1);
        } else {
            setShowPage(true);
        }
    };

    const handleButtonClick = () => {
        if (buttonValue !== 'correct') {
            setResult('AWW Wrong answer! you will have to look it up your self 🤷‍♀️');
        } else {
            setResult('');
        }
    };

    if (showPage) {
        return (
            <div >
                <header className={styles.header1}>
                    <h1>Happy 40th Birthday, Tobi!</h1>
                </header>
                        <div className={styles.gallery}>
                        <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/IMG_0777-KKNYz3bKXQN5xGNUrE1hfLKJ8cdlTo.jpeg" alt="Tobi's celebration" />
                            <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/IMG_0805-OItmUzAJjCvLlrK6t699WYM2GFl8Ez.jpeg" alt="Tobi's celebration" />
                            <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/IMG_0779-VOFZhqUk0vTI6qW48ayX4gL0DEDVnU.jpeg" alt="Tobi's celebration" />

                        </div>
            
                <div className={styles.content}>
                

                    <div className={styles.message}>

                        <p>Heyy Tobii 🤗</p>
                        <p>
                            Happy 40th! 🎉 Today’s all about celebrating you—the warm, kind, and downright awesome person who somehow manages to make everyone feel seen and supported. Whether it’s helping people grow at work, giving the best hugs, or just being your approachable, cuddly self (づ ˘ ᵕ ˘)づ
                        </p>
                        <p>
                            Now, since it’s your big 4-0, I’ve got a fun mission for you. Ready? Your challenge is to conquer the mighty ghayn!😏 Next time you’re in an Arabic country, casually slip the word “gharyb” (it means “strange” in Arabic) into a conversation with a server. Imagine this: you raise an eyebrow, scan the menu, and say, “Hmm, this dish sounds kinda gharyb, don’t you think?” Whether they laugh or just look confused, it’s guaranteed to be a memorable moment. You’ll totally nail it!😛
                        </p>
                        <p>
                            But seriously, how about starting something new this year? You’ve got all these ideas and so much talent—why not dive into an exciting engineering project for fun? And don’t forget to take some time to travel more. Go somewhere new, explore, and soak up what the world has to offer. You’ve done so much for everyone else—it’s time to do more of what makes you happy!
                        </p>
                        <p>
                        🍻Here’s to making your forties full of adventures, laughter, and moments that make life a little more fun (and maybe a little gharyb too) 🍻. I can’t wait to see where this next chapter takes you—you’re gonna crush it! 
                        </p>
                        <p>Happy 40th Birthday!🎉🥳</p>
                        <p>Big hugs and a loud ghhh,</p>
                       <p>(づ ˘ ᵕ ˘͈ )づ</p> 
                        <p>Nadia</p>
                    </div>

                </div>
                
               
                <header className={styles.header2}>
                    <h1>๋࣭ ⭑ ♑︎ 𓃵I looked up your birth chart 😎 ๋࣭ ⭑ ♑︎ 𓃵 </h1>
                    <p>๋࣭ here is your chart 👇 𓃵 </p>
                </header>
                <div data-clagit="true" data-ss-name={styles.gallery}>
                        <div className={styles.gallery}>
                            
                            <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/astro_2gw_tobias.66831.440529-JHoPDWUkpQBJsZXcIUmNrCSjF72oVj.png" alt="Tobi's celebration" />

                        </div>
                    </div>
                <div className={styles.content}>
               

                    <div className={styles.message}>
                        
                        <p>
                        Birth Chart Summary - January 3, 1983</p>
<b>Personal and Life Overview</b>
<p><b >Sun in Capricorn (1st House): </b></p>
<p className={styles.em}>Practical, ambitious, and disciplined. Strong leadership qualities and a responsible nature.</p>

<p><b>Moon in Virgo (9th House):</b> </p>
<p>Emotionally thoughtful and analytical, with a deep connection to travel and higher learning.</p>
<p><b>Ascendant in Sagittarius: </b></p>
<p>Outwardly optimistic, adventurous, and curious. You come across as open-minded.
</p>

<p><b>Mercury in Capricorn:</b></p>
<p>Clear and logical communication style, with a focus on practical solutions.</p>


<p><b>Venus in Aquarius:</b></p>
<p> Independent and open-minded in relationships, valuing freedom and individuality.</p>
<p><b>Mars in Libra:</b></p>
<p> Driven by fairness and diplomacy, especially in career and public life.</p>
<p><b>North Node in Gemini:</b> </p>
<p>Life purpose involves communication, adaptability, and forming partnerships.</p>

<p><b>Key Themes:</b>
Ambition, communication, balance, and inner exploration.
</p>


                    
                       
                      
                    </div>

                </div>
           

                
                
<header className={styles.header1}>
                    <h1>🃜🃚I Read your Taro Cards 😁 🔮 🃜🃚</h1>
                    <p>  I shuffled the cards and took a picture 👇</p>
                </header>
                        <div className={styles.gallery}>
                        <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/IMG_1501-v30c9qzGzRBfytkofpUfa5rwb9jZDZ.jpeg" alt="Tobi's celebration" />
                <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/IMG_1507-bv48G6jPvgaQkru1wooBCtbcClnUU8.jpeg" alt="Tobi's celebration" />

                        </div>
                        <div className={styles.content}>
                

                    <div className={styles.message}>

                        <p>Reading is locked ( ｡ •̀ ᴗ •́ ｡) enter magic word to unlock</p>
                        <div>
                        <input
                            type="enter password"
                            value={buttonValue}
                            onChange={(e) => setButtonValue(e.target.value)}
                            placeholder="Enter Magic Word (•ᴗ•,, )"
                        />
                        <button onClick={handleButtonClick}>fly</button>
                        {result && <p>{result}</p>}
                    </div>
                
            </div>
                       
                    </div>
                    <footer>
                    <p>&copy; 2025 Tobi's Birthday Card by Nadia</p>
                </footer>
                </div>

                
                
        );
        
    }

    return (
        <div className={styles.promptOverlay}>
            {currentPrompt === 1 && (
                <div>
                    <p>Are you good with cuddles? </p>
                    <p>can pull off a sexy look with glasses?  </p>
                    <p>🤓😎👌</p>
                    <button onClick={handleNextPrompt}>Yes</button>
                    <b>    </b>

                    <button onClick={handleNextPrompt}>No</button>
                </div>
            )}
            {currentPrompt === 2 && (
                <div>
                    <p>Survived 40 wonderful years on earth???</p>
                   
                    <button onClick={handleNextPrompt}>Yes</button>
                    <b>    </b>
                   
                    <button onClick={handleNextPrompt}>No</button>
                </div>
            )}
            {currentPrompt === 3 && (
                <div>
                    <p>Thats really you! </p>
                    <p>🤗 Welcome to Tobi </p>
                    <button onClick={handleNextPrompt}>get in</button>
                </div>
            )}
        </div>
    );
};

export default BirthdayPage;
