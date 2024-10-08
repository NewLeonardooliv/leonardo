import { Card, CardProps } from "./Card";
import { Title } from "./Title";

import apache from '../assets/icons/outros/apache.svg'
import docker from '../assets/icons/outros/docker.svg'
import git from '../assets/icons/outros/git.svg'
import linux from '../assets/icons/outros/linux.svg'
import ubuntu from '../assets/icons/outros/ubuntu.svg'
import nginx from '../assets/icons/outros/nginx.svg'
import graphql from '../assets/icons/outros/graphql.png'
import json from '../assets/icons/outros/json.svg'

const outros: CardProps[] = [
    {
        name: 'Apache',
        icon: apache,
        link: 'https://www.apache.org/'
    },
    {
        name: 'Docker',
        icon: docker,
        link: 'https://www.docker.com/'
    },
    {
        name: 'Git',
        icon: git,
        link: 'https://git-scm.com/'
    },
    {
        name: 'Linux',
        icon: linux,
        link: 'https://4linux.com.br/o-que-e-linux/'
    },
    {
        name: 'Nginx',
        icon: nginx,
        link: 'https://nginx.org/en/'
    },
    {
        name: 'JSON',
        icon: json,
        link: 'https://www.devmedia.com.br/o-que-e-json/23166'
    },
    {
        name: 'GraphQL',
        icon: graphql,
        link: 'https://graphql.org/'
    },
]

export function Outros() {
    return (<div>
        <Title title='outros' />
        <div className=' flex flex-row flex-wrap'>
            {outros.map(item => (
                <Card name={item.name} icon={item.icon} link={item.link} />
            ))}
        </div>
        <h1 className="text-white font-medium text-4xl mt-6">{'}'}</h1>
    </div>)
}