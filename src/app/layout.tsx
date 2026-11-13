import type { Metadata } from 'next';
import './globals.css';
import './publications.css';
import './brand.css';
import './system.css';
import Shell from './shell';
export const metadata: Metadata = { title: 'LCF | Liga Cimatec Finance', description: 'Uma iniciativa estudantil do SENAI CIMATEC para aproximar universitários da Bahia do mercado financeiro. Formação, tecnologia, projetos e conexões.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><Shell>{children}</Shell></body></html>}
