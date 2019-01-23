import * as request from 'request'

export { searchAndQueue };

const searchAndQueue = async(data) => {
	const query = data.query;
	const language = data.language;
	let result: any = await search(query, language);
	for(let item of result.items){
		console.log(item);
	}
	return result;
}

const search = async(query, language) =>{
	const apiKey = process.env.GOOGLE_SEARCH_ENGINE_API_KEY;
	let engineId = {
		english: '013208728683326209432:233wzniucte',
		portuguese: '013208728683326209432:vlclgezht3o'
	};
	let get = new Promise((resolve, reject) => {
		request.get(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineId[language]}&q=${query}`, (err, response, body)=>{
			if(err){
				return reject(err);
			}else if(response && response.statusCode != 200){
				return reject(`failed with status ${response.statusCode}`);
			}else{
				return resolve(JSON.parse(body));
			}
		});
	});
	let body = await get;
	return body;
}


const saveToS3 = async(url) =>{

}