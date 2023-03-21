import '@/styles/globals.css'
import '@/styles/MainMenu.css'
import '@/styles/PageLayout.css'
import '@/styles/Footer.css'
import { Col, Container, Row } from 'react-bootstrap';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
