import SocialFollow from "../components/SocialFollow"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import * as navBarStyles from './NavigationBar.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function NavigationBar() {
  return (
      <div>
        <Navbar expand="sm" className="general_menu">
			<Nav className="container-fluid">
				<Nav.Item>
					<Navbar.Brand>
					   <span className={navBarStyles.mainTitle}>ALIAKSEI KALIUTAU</span>
					</Navbar.Brand>
				</Nav.Item>
				<Nav.Item>
					<Navbar.Brand className={navBarStyles.ref} href="/">Home</Navbar.Brand>
				</Nav.Item>
				<Nav.Item>
					<Navbar.Brand className={navBarStyles.ref} href="/about">About me</Navbar.Brand>
				</Nav.Item>
			</Nav>
		</Navbar>
	  </div>		
  );
}