import computer from '../assets/images/computer.png'

import linkedin from '../assets/icons/SocialMedia/linkedin.svg'
import github from '../assets/icons/SocialMedia/github.svg'
import instagram from '../assets/icons/SocialMedia/instagram.svg'
import download from '../assets/icons/SocialMedia/download.svg'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Curriculo } from './Curriculo';

export function Profile() {
    return (
        <div className="flex flex-col md:flex-row my-9 mx-1 bg-current-line rounded-lg overflow-hidden">
            <div className="md:flex-1 p-6 m-3">
                <h2 className="text-4xl font-bold text-white mb-2">Leonardo Oliveira</h2>
                <h3 className="text-2xl font-normal mb-5 text-white">Desenvolvedor Full Stack</h3>
                <p className="text-white text-xl mb-4 md:mb-6">Tenho experiência em sistemas web usando PHP e Javascript. Atualmente, estou cursando Engenharia de Software na Universidade de Rio Verde. Como desenvolvedor, busco sempre aprender e aplicar as melhores práticas de desenvolvimento de software para garantir a qualidade e eficiência das soluções que crio.</p>
                <div className='flex flex-wrap'>
                    <a href="https://www.linkedin.com/in/leonardooliv/" target='__blank'>
                        <div className="hover:drop-shadow-2xl transition-all m-1 w-40 h-40 bg-current-line rounded-lg cursor-pointer">
                            <div className="flex flex-col items-center pb-6 md:pb-10 px-4 pt-4">
                                <img className="h-14 w-14 my-3" src={linkedin} alt="Logo do Linkedin" />
                                <h5 className="mb-1 text-xl font-medium text-white">Linkedin</h5>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/NewLeonardooliv" target='__blank'>
                        <div className="hover:drop-shadow-2xl transition-all m-1 w-40 h-40 bg-current-line rounded-lg cursor-pointer">
                            <div className="flex flex-col items-center pb-6 md:pb-10 px-4 pt-4">
                                <img className="h-14 w-14 my-3" src={github} alt="Logo do Github" />
                                <h5 className="mb-1 text-xl font-medium text-white">GitHub</h5>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/leonardooliv_/" target='__blank'>
                        <div className="hover:drop-shadow-2xl transition-all m-1 w-40 h-40 bg-current-line rounded-lg cursor-pointer">
                            <div className="flex flex-col items-center pb-6 md:pb-10 px-4 pt-4">
                                <img className="h-14 w-14 my-3" src={instagram} alt="Logo do Instagram" />
                                <h5 className="mb-1 text-xl font-medium text-white">Instagram</h5>
                            </div>
                        </div>
                    </a>
                    <PDFDownloadLink document={<Curriculo />} fileName='LEONARDO OLIVEIRA CURRICULO'>
                        <div className="hover:drop-shadow-2xl transition-all m-1 w-40 h-40 bg-current-line rounded-lg cursor-pointer">
                            <div className="flex flex-col items-center pb-6 md:pb-10 px-4 pt-4">
                                <img className="h-14 w-14 my-3" src={download} alt="Logo do Instagram" />
                                <h5 className="mb-1 text-xl font-medium text-white">Currículo</h5>
                            </div>
                        </div>
                    </PDFDownloadLink>
                </div>
            </div>
            <div className="md:flex-shrink-0">
                <img className="object-cover object-center h-48 md:h-[300px] m-8 animate-float" src={computer} alt="Imagem de perfil" />
            </div>
        </div>
    );
}