import Section from "../Section"
import GameCard from "./GameCard"

function GamesSection() {

    return <Section bgColor='bg-red-500' textColor='text-red-500' borderColor='border-red-500' name='VIDEO GAMES'>
        <div className='h-fit  gap-10 justify-center items-start pt-10 pb-10 flex flex-row flex-wrap'>
            <GameCard
                name='Gold Gobblers'
                img='https://img.itch.zone/aW1nLzEyODM2MzQ1LnBuZw==/180x143%23c/AZ1sD8.png'
                animateOrder={0}
                lines={[
                    'Real-time party-based parrying game.',
                    'Ranked #528 on The GMTK Jam 2023.',
                    'Worked on design, programming, music, sound effects, particle effects.']} />

            <GameCard
                name='Bibo'
                img='https://img.itch.zone/aW1nLzk3OTA1MjIucG5n/315x250%23c/rGPfBG.png'
                animateOrder={0}
                lines={[
                    'Roguelike hack-and-slash with a robot companion.',
                    'Ranked #3rd in visuals and #10th in fun, (out of 996 entries), in Wowie Jam 4.0.',
                    'Worked on design, programming, music, sound effectts, particle effects.']} />
            <GameCard
                name='Bibo'
                img='https://img.itch.zone/aW1nLzk3OTA1MjIucG5n/315x250%23c/rGPfBG.png'
                animateOrder={0}
                lines={[
                    'Roguelike hack-and-slash with a robot companion.',
                    'Ranked #3rd in visuals and #10th in fun, (out of 996 entries), in Wowie Jam 4.0.',
                    'Worked on design, programming, music, sound effectts, particle effects.']} />
            <GameCard
                name='Bibo'
                img='https://img.itch.zone/aW1nLzk3OTA1MjIucG5n/315x250%23c/rGPfBG.png'
                animateOrder={0}
                lines={[
                    'Roguelike hack-and-slash with a robot companion.',
                    'Ranked #3rd in visuals and #10th in fun, (out of 996 entries), in Wowie Jam 4.0.',
                    'Worked on design, programming, music, sound effectts, particle effects.']} />


        </div>
        {/*
    <div className='
            pt-12 pb-12
            pl-0
            sm:pl-[10vw]
            xl:pl-0
            flex flex-row flex-wrap justify-between'>
        <GameCard name='Gold Gobblers' img='https://img.itch.zone/aW1nLzEyODM2MzQ1LnBuZw==/180x143%23c/AZ1sD8.png' animateOrder={0}
            lines={['Real-time party-based parrying game.', 'Ranked #528 on The GMTK Jam 2023.', 'Worked on design, programming, music, sound effectts, particle effects.']} />
        <GameCard name='Gold Gobblers' img='https://img.itch.zone/aW1nLzEyODM2MzQ1LnBuZw==/180x143%23c/AZ1sD8.png' animateOrder={1}
            lines={['Real-time party-based parrying game.', 'The GMTK Jam 2023 submission.', 'Collaborated with an artist.']} />
        <GameCard name='Gold Gobblers' img='https://img.itch.zone/aW1nLzEyODM2MzQ1LnBuZw==/180x143%23c/AZ1sD8.png' animateOrder={2}
            lines={['Real-time party-based parrying game.', 'The GMTK Jam 2023 submission.', 'Collaborated with an artist.']} />
    </div>*/}
    </Section>
}

export default GamesSection;