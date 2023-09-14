import Section from './Section.tsx'
import './App.css'
import InfoCard from './InfoCard/InfoCard.tsx'
import Background from './Background/Background.tsx'

function App() {

    return (
        <>
            <Background />
            <div className=' pt-0 xl:pt-16 2xl:pt-24'></div>
            <div className=' text-white scale-75 sm:scale-100'>
                <InfoCard />
            </div>
            <div className=' h-[110vh]'></div>
            <Section />
        </>
    )
}

export default App
