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
import phpunit from '../assets/icons/backend/phpunit.svg'
import mockery from '../assets/icons/backend/mockery.jpg'
import jest from '../assets/icons/backend/jest.svg'
import sockeio from '../assets/icons/backend/socketio.svg'
import lumen from '../assets/icons/backend/lumen.svg'
import babel from '../assets/icons/backend/babel.svg'
import prisma from '../assets/icons/backend/prisma.svg'
import terminal from '../assets/icons/backend/terminal.png'
import swagger from '../assets/icons/backend/swagger.svg'
import csfixer from '../assets/icons/backend/csfixer.png'
import nestjs from '../assets/icons/backend/nestjs.svg'
import rabbitmq from '../assets/icons/backend/rabbitmq.svg'
import apacheKafka from '../assets/icons/backend/apacheKafka.svg'
import microservice from '../assets/icons/backend/microservice.png'
import ddd from '../assets/icons/backend/ddd.webp'
import solid from '../assets/icons/backend/solid.png'
import designpatterns from '../assets/icons/backend/designpatterns.png'
import jwt from '../assets/icons/backend/jwt.svg'
import rust from '../assets/icons/backend/rust.png'


const backend: CardProps[] = [
    {
        name: 'PHP',
        icon: php,
        link: 'https://www.php.net/'
    },
    {
        name: 'Laravel',
        icon: laravel,
        link: 'https://laravel.com/'
    },
    {
        name: 'Lumen',
        icon: lumen,
        link: 'https://lumen.laravel.com/docs/10.x'
    },
    {
        name: 'Zend',
        icon: zend,
        link: 'https://framework.zend.com/'
    },
    {
        name: 'PhpUnit',
        icon: phpunit,
        link: 'https://phpunit.de/'
    },
    {
        name: 'CS Fixer',
        icon: csfixer,
        link: 'https://github.com/PHP-CS-Fixer'
    },
    {
        name: 'Mockery.io',
        icon: mockery,
        link: 'http://docs.mockery.io/en/latest/'
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
        name: 'Node',
        icon: nodejs,
        link: 'https://nodejs.org/en'
    },
    {
        name: 'Jest',
        icon: jest,
        link: 'https://jestjs.io/pt-BR/'
    },
    {
        name: 'Express.js',
        icon: express,
        link: 'https://expressjs.com/pt-br/'
    },
    {
        name: 'Socket.io',
        icon: sockeio,
        link: 'https://socket.io/'
    },
    {
        name: 'Babel',
        icon: babel,
        link: 'https://babeljs.io/'
    },
    {
        name: 'Prisma.io',
        icon: prisma,
        link: 'https://www.prisma.io/'
    },
    {
        name: 'MySql',
        icon: mysql,
        link: 'https://www.mysql.com/'
    },
    {
        name: 'PostgreSQL',
        icon: postgresql,
        link: 'https://www.postgresql.org/'
    },
    {
        name: 'REST Api',
        icon: api,
        link: 'https://developer.mozilla.org/pt-BR/docs/Glossary/REST'
    },
    {
        name: 'Shell',
        icon: terminal,
        link: 'https://www.devmedia.com.br/introducao-ao-shell-script-no-linux/25778'
    },
    {
        name: 'Swagger UI',
        icon: swagger,
        link: 'https://swagger.io/'
    },
    {
        name: 'NestJS',
        icon: nestjs,
        link: 'https://nestjs.com/'
    },
    {
        name: 'RabbitMQ',
        icon: rabbitmq,
        link: 'https://www.rabbitmq.com/'
    },
    {
        name: 'Kafka',
        icon: apacheKafka,
        link: 'https://kafka.apache.org/'
    },
    {
        name: 'Microsserviços',
        icon: microservice,
        link: 'https://cloud.google.com/learn/what-is-microservices-architecture?hl=pt-BR'
    },
    {
        name: 'DDD',
        icon: ddd,
        link: 'https://zup.com.br/blog/domain-driven-design-ddd'
    },
    {
        name: 'Solid',
        icon: solid,
        link: 'https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530'
    },
    {
        name: 'Patterns',
        icon: designpatterns,
        link: 'https://refactoring.guru/design-patterns'
    },
    {
        name: 'JWT',
        icon: jwt,
        link: 'https://jwt.io/'
    },
    {
        name: 'Rust',
        icon: rust,
        link: 'https://www.rust-lang.org/pt-BR'
    },
]

export function Backend() {
    return (<div>
        <Title title='backend' />
        <div className='flex flex-row flex-wrap'>
            {backend.map(item => (
                <Card name={item.name} icon={item.icon} link={item.link} />
            ))}
        </div>
        <h1 className="text-white font-medium text-4xl mt-6">{'}'}</h1>
    </div>)
}