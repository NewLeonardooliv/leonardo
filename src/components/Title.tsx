type TitleProps = {
    title: string;
}

export function Title({ title }: TitleProps) {
    return (<h1 className='font-medium text-4xl mb-6 mt-14'>
        <span className="text-pink">function </span>
        <span className="text-green">{title}</span>
        <span className="text-white">{'( )'}</span>
        <span className="text-pink">: </span>
        <span className="text-cyan">Stacks</span>
        <span className="text-white">{' {'}</span>
    </h1>);
}