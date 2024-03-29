import NavigationBar from '../components/NavigationBar'
import SocialFollow from '../components/SocialFollow'
import Head from 'next/head'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faJava,
  faPython,
  faFlask,
  faAws,
  faGoogle,
  faGit,
  faJs,
  faNodeJs,
  faDocker,
  faUbuntu
} from "@fortawesome/free-brands-svg-icons";

import "bootstrap/dist/css/bootstrap.css";


export default function AboutPage(prop) {

  console.log('loading about page ');	
  
   const renderTooltip = props => (
    <Tooltip {...props}>Tooltip for props</Tooltip>
  );
	
  return (
  	<div>
	  <div className="container">
        <Head>
		   <title>About</title>
		</Head>
		<header>
           <NavigationBar/>
		</header>
		
		<main>
			<div className="text">
			<div> 
			To those I’ve never met before: Nice to meet you!
			</div> 
			<div> 
			To those I’ve met before: Long time no see!
			</div> 
			<p/>
			<div>My name is Aliaksei (aka Al). I work as a software developer for various companies whilst living a nomadic global lifestyle. My latest project was Bot Data Platform at <a href="https://www.ocadogroup.com/osp/our-technology/" rel="noopener noreferrer" target="_blank">Ocado Technology</a>, and my previous work at <a href="https://ibagroupit.com/" rel="noopener noreferrer" target="_blank"> IBA</a> was tied with the area of Intelligent Automations and AI Research (I worked at RnD department on pioneering technology in MLaaS/RPAaaS domain).</div>
			<p/>
            <div> My background is a Masters Degree in Physics and Informatics from Brest State University. I always was interested both in Physics and in application of scientific principles to solve real-life problems. Working in IT industry for deep tech companies helped me to achieve that goal. My love to Science (and to Physics in particular) still lasts, and my career path is a unique mixture of innovative work, inspiration and bright achievements.</div>
			<p/>
			<div>I specialise in the applications of AI/ML in various markets, in high-performance distributed systems, and always ready to learn something new. Technology is constantly evolving, and I like it. I'm always on the quest for the Holy Stack.</div>
			<p/>
			<div> Here are my favourite languages and tools:</div>
			<p/>
			<div> 
				<span> </span>
				<a href="https://openjdk.java.net/" className="java social blackiconcolor" data-toggle="tooltip" title="Java">
					<FontAwesomeIcon icon={faJava} size="2x" />
				</a>
				<a href="https://www.python.org/" className="python social blackiconcolor" data-toggle="tooltip" title="Python">
					<FontAwesomeIcon icon={faPython} size="2x" />
				</a>
				<span> </span>
				<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" className="js social blackiconcolor" data-toggle="tooltip" title="JavaScript">
					<FontAwesomeIcon icon={faJs} size="2x" />
				</a>
				<a href="https://reactjs.org/" className="react social blackiconcolor" data-toggle="tooltip" title="React">
					<FontAwesomeIcon icon={faReact} size="2x" />
				</a>
				<span> </span>
				<a href="https://nodejs.org/" className="nodejs social blackiconcolor" data-toggle="tooltip" title="NodeJs">
					<FontAwesomeIcon icon={faNodeJs} size="2x" />
				</a>
				<span> </span>
				<a href="https://aws.amazon.com/" className="aws social blackiconcolor" data-toggle="tooltip" title="AWS">
					<FontAwesomeIcon icon={faAws} size="2x" />
				</a>
				<span> </span>
				<a href="https://cloud.google.com//" className="google social blackiconcolor" data-toggle="tooltip" title="Google Cloud">
					<FontAwesomeIcon icon={faGoogle} size="2x" />
				</a>
				<span> </span>
				<a href="https://git-scm.com/" className="git social blackiconcolor" data-toggle="tooltip" title="Git">
					<FontAwesomeIcon icon={faGit} size="2x" />
				</a>
				<span> </span>
				<a href="https://www.docker.com/" className="docker social blackiconcolor" data-toggle="tooltip" title="Docker">
					<FontAwesomeIcon icon={faDocker} size="2x" />
				</a>
				<span> </span>
				<a href="https://ubuntu.com/" className="ubuntu social blackiconcolor" data-toggle="tooltip" title="Ubuntu">
					<FontAwesomeIcon icon={faUbuntu} size="2x" />
				</a>
			</div>
			<p/>
			<div>In my spare time I like making photos (some of them are presented on this site), walking uncharted paths, and trying to find inspiration in new hobbies.</div>
			</div>
			<SocialFollow/>
		</main>
	  </div>
	</div>
  )
}
