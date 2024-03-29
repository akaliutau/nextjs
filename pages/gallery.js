import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head'
import Link from 'next/link'

import { getQueryPhotos } from "../api/api";
import NavigationBar from '../components/NavigationBar'

var Template = require('./template');

const base_storage_url = 'https://photogallery-versel-images.s3.eu-west-2.amazonaws.com/photos/';

class Gallery extends React.Component { 

	constructor(props) {
		super(props);
		console.log('MyLoader props :' + JSON.stringify(props));
		this.title = props.tag;
   }

handleClientLoad() {
    console.log('Success on load');
}

componentDidMount() {

	var wHeight = window.innerHeight;
	var wWidth = window.innerWidth;
	var imGap = 20;
    var itemsPR = Math.floor(wWidth / 300) + 1;
	console.log('itemsPR='+itemsPR);
 	itemsPR = itemsPR > 2 ? 3 : 2;
	imGap = itemsPR > 2 ? 50 : 10;
    var minNumbRows = Math.floor(wHeight / 300) + 1;
	console.log('minNumbRows='+itemsPR);
 	minNumbRows = minNumbRows > 3 ? minNumbRows : 3;
	
    var options = {
        rowHeight: 400,
		gap: imGap,
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
    const elementRef = document.getElementById('gallery');
	const photoswipeRef = document.getElementsByClassName('pswp')[0];

    // Init gallery according to wanted format
    const gallery = new NaturalGallery.Natural(elementRef, options, photoswipeRef); 
	const tag = this.props.tag;

    // Init the gallery
    gallery.init();
	
	getQueryPhotos(tag)
	.then(data => {
		//Covert your map object into JSON object
		var items=[];

		Object.keys(data).forEach(function(val){
			var i = data[val];
			var obj = {
                    thumbnailSrc: base_storage_url + tag + '/tumblr/' + val + '_t.jpg',
                    enlargedSrc: base_storage_url + tag + '/' + val + '.jpg',
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
		<title>{this.title}</title>
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
