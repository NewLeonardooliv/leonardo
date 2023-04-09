import { Card, CardProps } from "./Card";
import { Title } from "./Title";

import laravel from '../assets/icons/backend/laravel.svg'
import javascript from '../assets/icons/backend/javascript.svg'
import typescript from '../assets/icons/backend/typescript.svg'
import mariadb from '../assets/icons/backend/mariadb.svg'
import mysql from '../assets/icons/backend/mysql.svg'
import php from '../assets/icons/backend/php.svg'
import zend from '../assets/icons/backend/zendframework.svg'
import nodejs from '../assets/icons/backend/nodejs.svg'
import postgresql from '../assets/icons/backend/postgresql.svg'
import express from '../assets/icons/backend/express.svg'
import api from '../assets/icons/backend/api.svg'
import json from '../assets/icons/backend/json.svg'
import phpunit from '../assets/icons/backend/phpunit.svg'
import mockery from '../assets/icons/backend/mockery.jpg'
import jest from '../assets/icons/backend/jest.svg'
import sockeio from '../assets/icons/backend/socketio.svg'
import lumen from '../assets/icons/backend/lumen.svg'
import babel from '../assets/icons/backend/babel.svg'
import prisma from '../assets/icons/backend/prisma.svg'

const backend: CardProps[] = [
    {
        name: 'PHP',
        icon: php
    },
    {
        name: 'Laravel',
        icon: laravel
    },
    {
        name: 'Lumen',
        icon: lumen
    },
    {
        name: 'Zend',
        icon: zend
    },
    {
        name: 'PhpUnit',
        icon: phpunit
    },
    {
        name: 'Mockery.io',
        icon: mockery
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
        name: 'Node',
        icon: nodejs
    },
    {
        name: 'Jest',
        icon: jest
    },
    {
        name: 'Express.js',
        icon: express
    },
    {
        name: 'Socke.io',
        icon: sockeio
    },
    {
        name: 'Babel',
        icon: babel
    },
    {
        name: 'Prisma.io',
        icon: prisma
    },
    {
        name: 'MariaDB',
        icon: mariadb
    },
    {
        name: 'MySql',
        icon: mysql
    },
    {
        name: 'PostgreSQL',
        icon: postgresql
    },
    {
        name: 'REST Api',
        icon: api
    },
    {
        name: 'Json Api',
        icon: json
    },
]

export function Backend() {
    return (<div>
        <Title title='backend' />
        <div className='flex flex-row flex-wrap'>
            {backend.map(item => (
                <Card name={item.name} icon={item.icon} />
            ))}
        </div>
        <h1 className="text-white font-medium text-4xl mt-6">{'}'}</h1>
    </div>)
}