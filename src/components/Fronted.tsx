import { Card, CardProps } from "./Card";
import { Title } from "./Title";

import javascript from '../assets/icons/backend/javascript.svg'
import typescript from '../assets/icons/backend/typescript.svg'
import react from '../assets/icons/frontend/react.svg'
import selenium from '../assets/icons/frontend/selenium.svg'
import html from '../assets/icons/frontend/html.svg'
import css from '../assets/icons/frontend/css.svg'
import styledComponents from '../assets/icons/frontend/styled-components.png'
import jquery from '../assets/icons/frontend/jquery.svg'
import axios from '../assets/icons/frontend/axios.svg'
import tailwindcss from '../assets/icons/frontend/tailwindcss.svg'
import vite from '../assets/icons/frontend/vite.svg'
import nest from '../assets/icons/frontend/nestjs.svg'
import eslint from '../assets/icons/frontend/eslint.svg'
import bootstrap from '../assets/icons/frontend/bootstrap.svg'

const frontend: CardProps[] = [
    {
        name: 'Html',
        icon: html,
    },
    {
        name: 'Css',
        icon: css,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwindcss,
    },
    {
        name: 'Bootstrap',
        icon: bootstrap,
    },
    {
        name: 'Styled Components',
        icon: styledComponents,
    },
    {
        name: 'Javascript',
        icon: javascript
    },
    {
        name: 'Typescript',
        icon: typescript
    },
    {
        name: 'ReactJs',
        icon: react,
    },
    {
        name: 'React Native',
        icon: react,
    },
    {
        name: 'Selenium',
        icon: selenium,
    },
    {
        name: 'Jquery',
        icon: jquery,
    },
    {
        name: 'Axios',
        icon: axios,
    },
    {
        name: 'Vite',
        icon: vite,
    },
    {
        name: 'NestJs',
        icon: nest,
    },
    {
        name: 'Eslint',
        icon: eslint,
    },
]

export function Frontend() {
    return (<div>
        <Title title='frontend' />
        <div className=' flex flex-row flex-wrap'>
            {frontend.map(item => (
                <Card name={item.name} icon={item.icon} />
            ))}
        </div>
        <h1 className="text-white font-medium text-4xl mt-6">{'}'}</h1>
    </div>)
}