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
import cypress from '../assets/icons/frontend/cypress.webp'
import shadcn from '../assets/icons/frontend/shadcn.png'
import angular from '../assets/icons/frontend/angular.png'

const frontend: CardProps[] = [
    {
        name: 'Html',
        icon: html,
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML'
    },
    {
        name: 'Css',
        icon: css,
        link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
    },
    {
        name: 'Tailwind CSS',
        icon: tailwindcss,
        link: 'https://tailwindcss.com/'
    },
    {
        name: 'Bootstrap',
        icon: bootstrap,
        link: 'https://getbootstrap.com/'
    },
    {
        name: 'Styled Components',
        icon: styledComponents,
        link: 'https://styled-components.com/'
    },
    {
        name: 'Javascript',
        icon: javascript,
        link: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript'
    },
    {
        name: 'Typescript',
        icon: typescript,
        link: 'https://www.typescriptlang.org/',
    },
    {
        name: 'ReactJs',
        icon: react,
        link: 'https://react.dev/'
    },
    {
        name: 'React Native',
        icon: react,
        link: 'https://react.dev/'
    },
    {
        name: 'Selenium',
        icon: selenium,
        link: 'https://www.selenium.dev/'
    },
    {
        name: 'Jquery',
        icon: jquery,
        link: 'https://jquery.com/'
    },
    {
        name: 'Axios',
        icon: axios,
        link: 'https://axios-http.com/ptbr/docs/intro'
    },
    {
        name: 'Vite',
        icon: vite,
        link: 'https://vitejs.dev/'
    },
    {
        name: 'NextJs',
        icon: nest,
        link: 'https://nextjs.org/'
    },
    {
        name: 'Eslint',
        icon: eslint,
        link: 'https://eslint.org/'
    },
    {
        name: 'Cypress',
        icon: cypress,
        link: 'https://www.cypress.io/'
    },
    {
        name: 'shadcn/ui',
        icon: shadcn,
        link: 'https://ui.shadcn.com/'
    },
    {
        name: 'Angular',
        icon: angular,
        link: 'hthttps://angular.dev/'
    },
]

export function Frontend() {
    return (<div>
        <Title title='frontend' />
        <div className=' flex flex-row flex-wrap'>
            {frontend.map(item => (
                <Card name={item.name} icon={item.icon} link={item.link} />
            ))}
        </div>
        <h1 className="text-white font-medium text-4xl mt-6">{'}'}</h1>
    </div>)
}