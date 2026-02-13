import { useNavigate } from 'react-router-dom'
import '../App.css'

function NoPage() {
    const navigate = useNavigate()

    const handleYesClick = () => {
        navigate('/yes')
    }

    const handleBigYesClick = () => {
        navigate('/yes')
    }

    return (
        <div className='min-h-screen flex items-center justify-center relative overflow-hidden'>
            {/* Floating Hearts Background */}
            <div className="floating-hearts">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="heart">💔</div>
                ))}
            </div>

            <div className='w-[90vw] md:w-[50vw] max-w-[800px] h-auto bg-white rounded-3xl mx-auto p-6 md:p-10 shadow-2xl flex flex-col gap-8 relative z-10'>
                <div className='text-center'>
                    <h1 className='text-3xl md:text-5xl font-bold text-gray-700 mb-4 wrap-break-word'>
                        No vanxess Jatthi? No? 😾
                    </h1>
                    <p className='text-xl md:text-3xl text-gray-800 font-semibold mt-6 wrap-break-word'>
                        Ta jatthi le malai <del>No</del> vanni?? Malai?? 😾😾
                    </p>
                </div>

                <div className='text-center'>
                    <p className='text-lg md:text-xl text-gray-600 leading-relaxed wrap-break-word'>
                        Last choti sodhxu, Will You Be My Valentine?😾
                    </p>
                </div>

                <div className='w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent'></div>

                <div className='flex flex-col gap-6 items-center mt-4'>
                    <button
                        onClick={handleYesClick}
                        className='w-64 px-8 py-4 bg-rose-500 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-rose-600 transition-colors duration-200 cursor-pointer'
                    >
                        Yes Baby 🥺🥺
                    </button>
                    <button
                        onClick={handleBigYesClick}
                        className='w-64 px-8 py-5 bg-pink-500 text-white text-2xl font-bold rounded-lg shadow-md hover:bg-pink-600 transition-colors duration-200 cursor-pointer'
                    >
                        Thuloo wala Yessss 🥺🥺
                    </button>
                </div>

                <div className='text-center mt-6'>
                    <p className='text-gray-500'>
                        (No vannai paunnes bhai aba ta 😝)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NoPage
