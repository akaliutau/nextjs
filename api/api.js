const API_KEY = process.env.UNSPLASH_API_KEY;

const config_data = require('../config.json');
const london_data = require('../cloud_config/config_london.json');
const bristol_data = require('../cloud_config/config_bristol.json');

const mapping = {
	'London' : london_data,
	'Bristol' : bristol_data,
};

export const getQueryPhotos = async (query) => {
	
  
  console.log('getQueryPhotos :' + query);
  let options = {};  

  return mapping[query];
};


