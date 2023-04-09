import { Card, CardProps } from "./Card";
import { Title } from "./Title";

import apache from '../assets/icons/outros/apache.svg'
import docker from '../assets/icons/outros/docker.svg'
import git from '../assets/icons/outros/git.svg'
import linux from '../assets/icons/outros/linux.svg'
import terminal from '../assets/icons/outros/terminal.svg'


const outros: CardProps[] = [
    {
        name: 'Apache',
        icon: apache,
    },
    {
        name: 'Docker',
        icon: docker,
    },
    {
        name: 'Git',
        icon: git,
    },
    {
        name: 'Linux',
        icon: linux,
    },
    {
        name: 'Terminal',
        icon: terminal,
    },
]

export function Outros() {
    return (<div>
        <Title title='outros' />
        <div className=' flex flex-row flex-wrap'>
            {outros.map(item => (
                <Card name={item.name} icon={item.icon} />
            ))}
        </div>
        <h1 className="text-white font-medium text-4xl mt-6">{'}'}</h1>
    </div>)
}