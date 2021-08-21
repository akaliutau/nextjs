import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './SocialFollow.module.css'

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className=" socialContainer">
		<div> Follow me on: </div>
		<span> </span>
	    <a href="https://www.twitter.com/kaliutau" className="twitter social">
			<FontAwesomeIcon icon={faTwitter} size="2x" />
		</a>
		<span> </span>
		<a href="https://www.linkedin.com/in/aliaksei-kaliutau-53a791162" className="linkedin social">
			<FontAwesomeIcon icon={faLinkedin} size="2x" />
		</a>
		<span> </span>
		<a href="https://github.com/akalu" className="github social">
			<FontAwesomeIcon icon={faGithub} size="2x" />
		</a>
		<span> </span>
	</div>
  );
}