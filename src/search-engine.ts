import * as request from 'request'

export { search };

const apiKey = 'AIzaSyCz180dw8C_APHBzShfCptz0ulLmHNncoI';
let engineId = {
	english: '013208728683326209432:233wzniucte',
	portuguese: '013208728683326209432:vlclgezht3o'
};

const search = async(data) => {
	const query = data.query;
	const language = data.language;
	let get = new Promise((resolve, reject) => {
		request.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineId[language]}&q=${query}`, (err, response, body)=>{
			if(err){
				return reject(err);
			}else if(response && response.statusCode != 200){
				return reject(`failed with status ${response.statusCode}`);
			}else{
				return resolve(body);
			}
		});
	});
	let body = await get;
	console.log(body);
}