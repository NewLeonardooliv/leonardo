type TitleProps = {
    title: string;
}

export function SecondTitle({ title }: TitleProps) {
    return (<h2 className='text-white font-medium text-2xl my-4'>{title}</h2>);
}