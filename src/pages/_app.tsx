import type { AppProps } from 'next/app'
import Image from 'next/image';

import { globalStyles } from '@/styles/global'
globalStyles();

import { Container, Header } from '@/styles/pages/app';

import logoImg from '../assets/logo.svg'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
