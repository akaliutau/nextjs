import Head from 'next/head'
import Link from 'next/link'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationBar from '../components/NavigationBar'


import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AV Kaliutau</title>
        <link rel="icon" href="/favicon.ico" />
		<meta name="title" property="og:title" content="Aliaksei Kaliutau - The Photo Gallery" key="title" />
		<meta name="description" property="og:description" content="My personal website, designed as a responsive photo gallery, where I am experimenting with various web technologies" key="description" />
		<meta name="keywords" property="og:keywords" content="Aliaksei Kaliutau, Kaliutau, photo gallery, galleria, photos, london, bristol, uk, england, personal, nextjs, vercel, react" key="keywords" />
		<meta name="url" property="og:url" content="avkaliutau.com" key="url" />
      </Head>
	  
	  <header>
		<NavigationBar/>
	  </header>

      <main>
        <div className="grid">
          <a href="/bristol" className="card card-img0">
            <h3>Bristol, UK &rarr;</h3>
          </a>
		
          <a href="/london" className="card card-img1">
			<h3>London, UK &rarr;</h3>
          </a>
        </div>
      </main>

      <footer>
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel" className="logo" />
      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
