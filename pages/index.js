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
      </Head>
	  
	  <header>
		<nav>
			<ul className="menu">
				<NavigationBar/>
			</ul>
		</nav>
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
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
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
