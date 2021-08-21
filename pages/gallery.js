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

handleGoogleClientLoad() {
    console.log('Success on load');
}

componentDidMount() {

    var options = {
        rowHeight: 400,
		gap: 120,
		itemsPerRow: 3,
		minRowsAtStart: 3, //<-- calculate
		rowsPerPage: 0,
        lightbox: true,
        ratioLimit: {
            min: 1,
            max: 1
		}
		};
		
	console.log('props: ' + JSON.stringify(this.props));
	
	this.handleGoogleClientLoad();
 
    // Get reference of gallery container
    var elementRef = document.getElementById('gallery');
	var photoswipeRef = document.getElementsByClassName('pswp')[0];

    // Init gallery according to wanted format
    var gallery = new NaturalGallery.Square(elementRef, options, photoswipeRef); 

    // Init the gallery
    gallery.init();
	
	getQueryPhotos(this.props.tag)
	.then(data => {
		console.log(JSON.stringify(Object.keys(data)))
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
					//height: 400,
					//width:400,
                    //backgroundPosition: ['0% 0%', '100% 100%', undefined][Math.floor(Math.random() * 3)],
                    //backgroundSize: ['cover', 'contain', undefined][Math.floor(Math.random() * 3)]
                }
			items.push(obj);
			items.push(obj);
		})
		console.log(JSON.stringify(items))
		console.log('adding items')
        gallery.addItems(items);
		    // Init the gallery
 
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
