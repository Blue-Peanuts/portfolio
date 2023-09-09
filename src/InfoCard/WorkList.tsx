function WorkList() {
    return <div>
        <div className=' text-xs'>
            I make...
        </div>
            <WorkButton text='Video Games' />
    </div>
}

function WorkButton(props: { text: string }) {

    return <div className=' font-bold text-sm bg-red-500 w-fit rounded-tl-full rounded-br-full'>
        <div className=' ml-5 mr-10'>
            {props.text}
        </div>
    </div>
}

export default WorkList;