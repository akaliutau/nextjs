import NavigationBar from '../components/NavigationBar'
import SocialFollow from '../components/SocialFollow'

export default function AboutPage(prop) {

  console.log('loading about page ');	
	
  return (
  	<div>
	  <div className="container">
 
		<header>
           <NavigationBar/>
		</header>
		
		<main>
			<div> About me</div>
			
			<SocialFollow/>
		</main>
	  </div>
	</div>
  )
}
