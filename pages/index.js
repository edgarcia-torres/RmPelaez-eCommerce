import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PageLayout from '@/components/PageLayout/PageLayout'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <PageLayout title='tech news home'>

      </PageLayout>
    </>
  )
}
