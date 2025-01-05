import React, { useState } from 'react';
import styles from '../styles/BirthdayStyles.module.css';

const BirthdayPage: React.FC = () => {
        const [showPage, setShowPage] = useState<boolean>(true);
    const [buttonValue, setButtonValue] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const handleNextPrompt = () => {
        setShowPage(true);
    };

    const handleButtonClick = () => {
    if (buttonValue.toLowerCase() === 'tobbe') {
        setResult('Congratulations! 🎉 You’ve unlocked the secret card reading!');
    } else {
        setResult('AWW Wrong answer! you got unlimited tries :)');
    }
};

    if (showPage) {
        return (
            <div>
                <header className={styles.header1}>
                    <h1>Happy 40th Birthday, Tobi!</h1>
                </header>
                <div className={styles.gallery}>
                    <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/IMG_0777-KKNYz3bKXQN5xGNUrE1hfLKJ8cdlTo.jpeg" alt="Tobi's celebration" />
                    <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/IMG_0805-OItmUzAJjCvLlrK6t699WYM2GFl8Ez.jpeg" alt="Tobi's celebration" />
                    <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/IMG_0779-VOFZhqUk0vTI6qW48ayX4gL0DEDVnU.jpeg" alt="Tobi's celebration" />
                </div>

                <div className={styles.content}>
                    <div className={styles.message} id="secret-card">
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
                        <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/astro_w2at_tobias.54305.3388135-quvKWxFYiJ5VlItUxf0xY1TnkGskpk.png" style={{ maxWidth: '40vw', height: 'auto' }} />
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.message}>
                        <h3>Here’s a detailed explanation of Tobi’s birth chart ✨</h3>
                        <p><b>Sun in Capricorn (1st House):</b> Practical, disciplined, and highly ambitious, with a strong presence and self-confidence.</p>
                        <p><b>Moon in Taurus (4th House):</b> Stable, grounded emotional nature, with a deep connection to home and family.</p>
                        <p><b>Ascendant in Capricorn:</b> Presents as serious, responsible, and determined, coming across as mature and reliable.</p>
                        <p><b>Mercury in Sagittarius (12th House):</b> Open-minded and philosophical in communication, with a reflective, introspective side.</p>
                        <p><b>Venus in Aquarius (2nd House):</b> Independent and open-minded in love, valuing freedom and individuality.</p>
                        <p><b>Mars in Pisces (2nd House):</b> Gentle, creative drive, channeling energy into financial matters or creative pursuits.</p>
                        <p><b>Jupiter in Capricorn (1st House):</b> Growth and luck through disciplined effort, enhancing self-confidence and leadership.</p>
                        <p><b>Saturn in Scorpio (10th House):</b> Strong drive to achieve mastery in career, facing challenges but leading to great success.</p>
                        <p><b>Uranus in Sagittarius (12th House):</b> Brings sudden insights, spiritual awakenings, and a love for breaking free from tradition.</p>
                        <p><b>Neptune in Capricorn (1st House):</b> Blends practicality with imagination, aiming to build something lasting and significant.</p>
                        <p><b>Pluto in Scorpio (10th House):</b> Points to powerful transformations in career and public life, leading to deep personal growth.</p>
                        <p><b>Key Strengths:</b> Ambitious, emotionally stable, open-minded, and a deep thinker.</p>
                        <p><b>Potential Challenges:</b> Emotional expression, balancing independence with connection, and career pressure.</p>
                    </div>
                </div>

                <header className={styles.header1}>
                    <h1>🃜🃚I Read your Taro Cards 😁 🔮 🃜🃚</h1>
                    <p>  I shuffled the cards and took a picture 👇</p>
                </header>
                <div className={styles.gallery}>
                    <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/IMG_1501-v30c9qzGzRBfytkofpUfa5rwb9jZDZ.jpeg" alt="Tobi's celebration" style={{ maxWidth: '45vw', height: 'auto' }} />
                    <img src="https://t3ekfrqhoc8vlytq.public.blob.vercel-storage.com/IMG_1507-bv48G6jPvgaQkru1wooBCtbcClnUU8.jpeg" alt="Tobi's celebration" style={{ maxWidth: '40vw', height: 'auto' }} />
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
                            {result && (
    <p>{result}</p>
)}
{result === 'Congratulations! 🎉 You’ve unlocked the secret card reading!' && (
    <div className={styles.revealedSection}>
       
        <div className={styles.message}>
                                    <h3>Card 1: The Hierophant (Major Arcana)</h3>
                                    <p><b>Theme:</b> Tradition, learning, mentorship, spiritual growth, and structure.</p>
                                    <p>The Hierophant suggests that this year may bring themes of tradition, learning, or adherence to established systems. It could indicate that Tobi will seek or receive guidance from a mentor or become a teacher or guide for others. This resonates strongly with his Capricorn Sun and Saturn in Scorpio (10th house), as both placements emphasize the importance of structure, discipline, and mastery in life and career.</p>
                                    <p><b>Life Area:</b> This card likely relates to his career or spiritual development. He may find himself in situations where he is required to conform to rules or learn from established systems, which will ultimately lead to growth.</p>
                                    <p><b>Advice:</b> Embrace traditional wisdom, seek guidance when needed, and focus on building something meaningful.</p>
                                    <h3>Card 2: Eight of Wands (Minor Arcana)</h3>
                                    <p><b>Theme:</b> Rapid movement, progress, communication, travel, and momentum.</p>
                                    <p>The Eight of Wands signals a year of quick developments and forward motion. It often represents swift communication, travel, or sudden progress in personal or professional life. This is particularly relevant given Tobi’s Mars in Pisces (creative drive) and Mercury in Sagittarius (love for exploration and new ideas), suggesting he may experience rapid growth in areas related to travel, learning, or creative endeavors.</p>
                                    <p><b>Life Area:</b> This card could point to sudden changes or progress in his personal life or career. Opportunities may come unexpectedly, and he’ll need to act quickly to make the most of them.</p>
                                    <p><b>Advice:</b> Stay flexible, be ready to adapt, and embrace new opportunities as they arise.</p>
                                    <h3>Combined Interpretation</h3>
                                    <p>This combination of cards suggests that Tobi’s year ahead will involve balancing tradition with progress. The Hierophant indicates a need for grounding in established values or systems, while the Eight of Wands suggests fast-paced changes and opportunities that will push him forward.</p>
                                    <p><b>Career & Learning:</b> He may take on a leadership or mentorship role while also experiencing sudden advancements or shifts in his professional life.</p>
                                    <p><b>Personal Growth:</b> It’s a year of spiritual and intellectual development, where he might blend traditional wisdom with new, exciting experiences.</p>
                                    <p><b>Action & Adaptability:</b> While he will rely on structure and discipline, he should remain open to quick changes and unexpected opportunities.</p>
                                </div>
    </div>
) }
                            
                        </div>
                    </div>
                </div>

                
            </div>
        );
    }

    return null;
};

export default BirthdayPage;
