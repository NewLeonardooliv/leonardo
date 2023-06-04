import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        padding: 40,
        fontFamily: 'Helvetica',
        fontSize: 11,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameTitleContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#000',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#000',
    },
    paragraph: {
        fontSize: 12,
        marginBottom: 8,
        color: '#444',
    },
    section: {
        marginBottom: 16,
        padding: 12,
        borderRadius: 6,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3366cc',
    },
    contactInfo: {
        marginTop: 24,
        flexDirection: 'column',
        textAlign: 'right',
    },
    contactText: {
        fontSize: 10,
        marginBottom: 4,
        color: '#777',
    },
});

export function Curriculo() {
    return (

        <Document>
            <Page style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.nameTitleContainer}>
                        <Text style={styles.name}>Leonardo da Silva Oliveira</Text>
                        <Text style={styles.subtitle}>Desenvolvedor Full Stack</Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Text style={styles.contactText}>LinkedIn: www.linkedin.com/in/leonardooliv/</Text>
                        <Text style={styles.contactText}>Portfólio: www.leonardo-eta.vercel.app/</Text>
                        <Text style={styles.contactText}>GitHub: www.github.com/NewLeonardooliv/</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.subtitle}>Resumo Profissional</Text>
                    <Text style={styles.paragraph}>
                        Sou desenvolvedor Full Stack com experiência em sistemas web usando PHP e Javascript.
                        Como desenvolvedor, busco sempre aprender e aplicar as melhores práticas de desenvolvimento de software para garantir a qualidade e eficiência das soluções que crio.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.subtitle}>Experiência Profissional</Text>
                    <View>
                        <Text style={styles.subtitle}>Desenvolvedor de Software | IpêWeb</Text>
                        <Text style={styles.paragraph}>Março de 2022 - Atualmente</Text>
                        <Text style={styles.paragraph}>- Responsável desenvolvimento e manutenção de sistemas para a Agrodefesa de vários estados do país com ZendFramework e PHP, desenvolvendo também ingrações de sistemas externos com API's Rest e SOAP</Text>
                        <Text style={styles.paragraph}>- Criação de software para recursos humanos e gerenciamento de funcionários com um micro-framework criado em PHP para o desenvolvimento da API, MySQL como gerenciador de banco de dados, ReactJs para desenvolvimento Frontend</Text>
                        <Text style={styles.paragraph}>- Criação de aplicação de integração para serviços internos com Node.js com a estrutura de software DDD (Domain-Driven Design)</Text>
                        <Text style={styles.paragraph}>- Desenvolvimento de aplicações para integração entre sistemas, como Jira, Slack, Gitlab e sistemas internos da empresa, utilizando PHP com o Laravel, cURL para comunicação entre serviços de API.</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.subtitle}>Educação</Text>
                    <Text style={styles.paragraph}>Engenharia de Software | Universidade de Rio Verde</Text>
                    <Text style={styles.paragraph}>Janeiro de 2021 - Cursando Atualmente</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.subtitle}>Habilidades Técnicas</Text>
                    <Text style={styles.paragraph}>- Linguagens de Programação: PHP, JavaScript e TypeScript</Text>
                    <Text style={styles.paragraph}>- Frameworks: Laravel, Zend, NextJS, Bootstrap e Lumen</Text>
                    <Text style={styles.paragraph}>- Bibliotecas: ReactJs, React Native, Express, Socket e Jest, PHPUnit</Text>
                    <Text style={styles.paragraph}>- ORMs: Eloquent, Prisma</Text>
                    <Text style={styles.paragraph}>- Banco de Dados: MySQL, PostgreSQL</Text>
                    <Text style={styles.paragraph}>- Estilização: CSS, Tailwind CSS, Bootstrap, Styled Components</Text>
                    <Text style={styles.paragraph}>- Controle de Versão: Git, Gitlab, GitHub, Bitbucket</Text>
                    <Text style={styles.paragraph}>- Conhecimentos: RabbitMQ, Node.js API's Soap e Rest</Text>
                    <Text style={styles.paragraph}>- Ferramentas de Desenvolvimento: VS Code, DBeaver, Postman, Insomina, Docker</Text>
                </View>
            </Page>
        </Document>
    )
};

