import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

function FirstPage() {
    const navigate = useNavigate()
    const [isPlaying, setIsPlaying] = useState(false);
    const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });
    const [isNoButtonFlying, setIsNoButtonFlying] = useState(false);
    const [noClickCount, setNoClickCount] = useState(0);
    const audioRef = useRef(null);
    const confettiAudioRef = useRef(null);

    const playMusic = () => {
        audioRef.current?.play();
        setIsPlaying(true);
    };

    const handleYesClick = async () => {
        // Play confetti sound
        try {
            if (confettiAudioRef.current) {
                await confettiAudioRef.current.play();
            }
        } catch (error) {
            console.log('Audio play failed:', error);
        }
        // Navigate after sound starts playing
        setTimeout(() => {
            navigate('/yes', { state: { playConfettiSound: true } })
        }, 300)
    }

    const handleNoClick = () => {
        const newCount = noClickCount + 1;
        setNoClickCount(newCount);

        // After 10 clicks, navigate to the "no" page
        if (newCount >= 10) {
            navigate('/no');
            return;
        }

        // Generate random position
        const randomTop = Math.random() * 70 + 5; // 5% to 75% from top
        const randomLeft = Math.random() * 70 + 5; // 5% to 75% from left

        setNoButtonPosition({ top: randomTop, left: randomLeft });
        setIsNoButtonFlying(true);
    }


    return (
        <>
            {/* Floating Hearts Background */}
            <div className="floating-hearts">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="heart">❤️</div>
                ))}
            </div>

            <div className='flex justify-center mt-10 md:mt-20 text-lg md:text-3xl font-semibold text-center px-4'>
                <h1 className='bg-white px-6 md:px-12 py-4 md:py-6 rounded-3xl md:rounded-full shadow-lg text-rose-500 wrap-break-word max-w-full'>
                    To Meri Cutieee Sushhhuuuumitttuuuuuu❤️
                </h1>
            </div>

            <div className='text-center w-[90vw] md:w-[40vw] max-w-[800px] h-auto bg-white rounded-3xl mx-auto mt-8 md:mt-12 p-6 md:p-10 shadow-2xl flex flex-col gap-4 overflow-hidden'>
                <p className='text-base md:text-lg leading-relaxed text-gray-800 font-semibold wrap-break-word'>
                    Will You Be My Valentine Sushhhuuumitttuuuu Kaluuuu? 🥺
                </p>
                <p className='text-base md:text-lg leading-relaxed text-gray-800 wrap-break-word'>
                    I will love you sadhaiiiiii yettiii dherraaiiiiii🥺
                </p>
                <p className='text-base md:text-lg leading-relaxed text-gray-800 wrap-break-word'>
                    Talai ma kailai sad huna dinna ani sadhai taile vaneko manxu, tero harekk wishes pura garxu 🥺
                </p>
                <p className='text-base md:text-lg leading-relaxed text-gray-800 wrap-break-word'>
                    Ma talai diku ni dinxu ni😝 <br /> Yes vandey😝
                </p>

                <p className='text-base md:text-lg leading-relaxed text-gray-800 font-semibold wrap-break-word'>
                    So will you be my valentine? 🥺🥺
                </p>

                <div className='flex gap-6 justify-center mt-8'>
                    <button
                        onClick={handleYesClick}
                        className='px-8 py-3 bg-rose-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 active:bg-rose-600 cursor-pointer'
                    >
                        Yes🥺
                    </button>
                    <button
                        onClick={handleNoClick}
                        className='px-8 py-3 bg-gray-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 active:bg-gray-600 cursor-pointer'
                        style={isNoButtonFlying ? {
                            position: 'fixed',
                            top: `${noButtonPosition.top}%`,
                            left: `${noButtonPosition.left}%`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1000
                        } : {}}
                    >
                        No😾
                    </button>
                </div>
                <div className='flex justify-center mt-5'>
                    <audio ref={audioRef} src="/audios/eighteen.mp3" loop />
                    <button
                        onClick={playMusic}
                        className='px-6 py-2 bg-white border-2 border-rose-400 text-rose-500 font-semibold rounded-lg hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg active:bg-rose-500 active:text-white active:border-rose-500 active:shadow-lg'
                    >
                        Play Music 😘
                    </button>
                </div>
            </div>

            {/* Hidden confetti sound */}
            <audio ref={confettiAudioRef} src="/audios/confetti.mp3" />
        </>
    )
}

export default FirstPage