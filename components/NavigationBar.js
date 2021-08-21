import SocialFollow from "../components/SocialFollow"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

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
           <Navbar expand="sm" bg="light" className="general_menu">
			<Nav className="container-fluid">
				<Nav.Item>
					<Navbar.Brand href="/">AV KALIUTAU</Navbar.Brand>
				</Nav.Item>
				<Nav.Item className="border-left pl-2 ml-auto">
					<SocialFollow/>
				</Nav.Item>
			</Nav>
			
		</Navbar>

  );
}