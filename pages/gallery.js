import React from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import Link from 'next/link'

import { getQueryPhotos } from "../api/api";
import NavigationBar from '../components/NavigationBar'

var Template = require('./template');

const base_storage_url = 'https://drive.google.com/uc?id=';

class Gallery extends React.Component { 

	constructor(props) {
		super(props);
		console.log('MyLoader props :' + JSON.stringify(props));
   }

handleClientLoad() {
    console.log('Success on load');
}

componentDidMount() {
	
	var wHeight = window.innerHeight;
	var wWidth = window.innerWidth;
	console.log('wHeight='+wHeight);
	console.log('wWidth='+wWidth);
    var itemsPR = Math.floor(wWidth / 300) + 1;
	console.log('itemsPR='+itemsPR);
 	itemsPR = itemsPR > 2 ? 3 : 2;
    var minNumbRows = Math.floor(wHeight / 300) + 1;
	console.log('minNumbRows='+itemsPR);
 	minNumbRows = minNumbRows > 3 ? minNumbRows : 3;
	
    var options = {
        rowHeight: 300,
		gap: 110,
		itemsPerRow: itemsPR,
		minRowsAtStart: minNumbRows, //<-- calculate
		rowsPerPage: 0,
        lightbox: true,
        ratioLimit: {
            min: 1,
            max: 1
		}
		};
		
	this.handleClientLoad();
 
    // Get reference of gallery container
    var elementRef = document.getElementById('gallery');
	var photoswipeRef = document.getElementsByClassName('pswp')[0];

    // Init gallery according to wanted format
    var gallery = new NaturalGallery.Square(elementRef, options, photoswipeRef); 

    // Init the gallery
    gallery.init();
	
	getQueryPhotos(this.props.tag)
	.then(data => {
		//Covert your map object into JSON object
		var items=[];

		Object.keys(data).forEach(function(val){
			var i = data[val];
			var obj = {
                    thumbnailSrc: base_storage_url + i.urls.small,
                    enlargedSrc: base_storage_url + i.urls.regular,
                    enlargedWidth: i.width,
                    enlargedHeight: i.height,
                    title: i.description ? i.description : "",
                    color: '#0070f3'
                }
			items.push(obj);
		})
		console.log('adding items')
        gallery.addItems(items);
 	})

	



}

render() {
      return (
	  	<div className="container">
        <Head>
        <title>Photos</title>
		<link rel="stylesheet" href="assets/photoswipe/photoswipe.css"/>
		<link rel="stylesheet" href="assets/photoswipe/default-skin/default-skin.css"/>
		<script src="assets/photoswipe/photoswipe.min.js" defer></script>
		<script src="assets/photoswipe/photoswipe-ui-default.min.js" defer></script>

		<link rel="stylesheet" href="assets/natural-gallery-js/natural-gallery.css"/>
		<link rel="stylesheet" href="assets/natural-gallery-js/themes/natural.css"/>
		<script src="assets/natural-gallery-js/natural-gallery.js" defer></script>
        <link rel="stylesheet" href="assets/main.css"/>


      </Head>
	  <Template/>
	  <header>
           <NavigationBar/>
      </header>

	  <main>
		<div id="body" >
			<div>
				<div id="gallery"></div>
			</div>
		</div>
	  </main>
	</div>
	  )
}

}

export default Gallery
