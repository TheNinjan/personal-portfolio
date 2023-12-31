import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (<div className='max-w-[1200px] mx-auto'>
    <Component {...pageProps} />
  </div>)
}
