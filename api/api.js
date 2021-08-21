const API_KEY = process.env.UNSPLASH_API_KEY;

const config_data = require('../config.json');
const london_data = require('../cloud_config/london.json');
const bristol_data = require('../cloud_config/bristol.json');

const mapping = {
	'London' : london_data,
	'Bristol' : bristol_data,
};

export const getQueryPhotos = async (query) => {
	
  
  console.log('getQueryPhotos :' + query);
  console.log('config_data :' + JSON.stringify(config_data));
  let options = {};  

  console.log('json from url :' + mapping[query]);
  
  return mapping[query];
};

