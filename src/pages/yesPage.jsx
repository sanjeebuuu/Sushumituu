import { useState, useEffect, useRef } from 'react'
import Confetti from 'react-confetti'
import '../App.css'

function YesPage() {
    const [showConfetti, setShowConfetti] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const audioRef = useRef(null);

    useEffect(() => {
        // Play confetti sound when page loads
        const playMusic = () => {
        audioRef.current?.play();
        setIsPlaying(true);
    };
    playMusic()

        const confettiAudio = new Audio('/audios/confetti.mp3')
        confettiAudio.play().catch(err => console.log('Audio play failed:', err))

        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)


        const timer = setTimeout(() => {
            setShowConfetti(false)
        }, 10000)

        return () => {
            window.removeEventListener('resize', handleResize)
            clearTimeout(timer)
        }
    }, [])

    return (
        <div className='min-h-screen flex items-center justify-center relative overflow-hidden'>

            {showConfetti && (
                <Confetti
                    width={windowDimensions.width}
                    height={windowDimensions.height}
                    numberOfPieces={800}
                    recycle={false}
                    gravity={0.3}
                    initialVelocityY={30}
                    initialVelocityX={15}
                    colors={['#FF69B4', '#FF1493', '#FFB6C1', '#FFC0CB', '#FF6B9D', '#E91E63', '#FF85A2', '#FFD1DC']}
                    tweenDuration={100}
                />
            )}


            <div className="floating-hearts">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="heart">💕</div>
                ))}
            </div>


            <div className='w-[90vw] md:w-[50vw] max-w-[900px] h-auto bg-white rounded-3xl mx-auto p-6 md:p-10 shadow-2xl flex flex-col gap-6 relative z-10'>

                <div className='text-center'>
                    <h1 className='text-3xl md:text-5xl font-bold text-rose-500 mb-4 wrap-break-word'>
                        Awwwwww Thank Youuu 🥺❤️
                    </h1>
                    <p className='text-xl md:text-2xl text-gray-700 font-semibold wrap-break-word'>
                        Yes vaneki meri cutie le 🥺❤️
                    </p>
                </div>


                <div className='w-full h-px bg-linear-to-r from-transparent via-rose-300 to-transparent'></div>


                <div className='text-center space-y-6 py-6'>
                    <p className='text-xl text-gray-800 leading-relaxed'>
                        Happppiessttttt Valentines Dayyy Babbbyyyyyy😭💋❤️
                    </p>

                    <p className='text-lg text-gray-700 leading-relaxed'>
                        I lovee youuu soooo muchhhhh babbyyyyy ani ma talai saddhhaaiiii yestaiiii maya garirahanxuuuu kailai talai sad huna dinnaaa ani we will always celebrate valentines day for next 100 years too, aaile ta aba ma yeta, ta uta so this was all I could do for you 😭, I hope talai man parxa hola 😭 Tyo agadi ko page ma Play Button ta press garis ni? 😾 I lovee youuu sabbaiii vanda dheraai, I know we will be together forever my cutieee sushhuuuu😭❤️ Aaile banairaxu so tero message ko reply dehaina, surprise banairaxuu 🙈 Aailappuuuuu suushhuuu babyyyyyy Yestai jhagada gardai ek arka lai fakaudai, maya gardai, risaudai, we will spend our whole lifee together 💋
                    </p>

                    <div className='bg-pink-50 p-6 rounded-lg border-2 border-rose-200'>
                        <p className='text-lg text-gray-800'>
                            You will be my valentine for next 100 barsa and also for 100 barsa paxi ko next 7 janma, hehehehehehehe, taile aafai Yes press garihosss her, fasis ta aba ma sanga for next 700 years😝❤️
                        </p>
                    </div>

                    <p className='text-lg text-gray-700 wrap-break-word'>
                        We will grow old together 😭❤️
                        <br />
                        Sanjeeb Lovess Youu Sooooo Soooooo Sooooooo Muchhhh Meri Sushuuu😭💋❤️
                    </p>
                    <audio ref={audioRef} src="/audios/eighteen.mp3" loop />
                </div>
            </div>
        </div>
    )
}

export default YesPage
