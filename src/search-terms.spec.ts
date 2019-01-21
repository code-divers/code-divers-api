import { getSearchTerms, logSearchTerms } from './search-terms';
import { expect,  } from 'chai';
import 'mocha';

const DUMMY_CUSTOMER_ID = "949-233-5101";
const DUMMY_SEARCH_TERM = {"query":"בית מלון בחרמון","keywordTextMatchingQuery":"אירוח בוטיק","queryMatchTypeWithVariant":"broad","queryTargetingStatus":"None","logDate":1545955200000,"cost":0,"keywordId":600143536988,"finalUrl":"https://www.gaghagalil.co.il/","trackingUrlTemplate":null,"externalCustomerId":9492335101,"destinationUrl":null,"device":"Mobile devices with full browsers","time":{"dayOfWeek":"Friday","week":1545609600000,"month":1543622400000,"monthOfYear":"December","quarter":1538352000000,"year":"2018"},"adGroup":{"id":63049031703,"name":"Branding adgroup","status":"enabled"},"campaign":{"id":1664761562,"name":"Branding campaign"},"account":{"name":"Gag-Hagalil","timezone":"222"},"ad":{"format":"text","networkType":["Search Network","Google search"]},"statistics":{"clicks":0,"impressions":1,"ctr":"0.00%","allConversionRate":"0.00%","allConversionValue":0,"averageCost":0,"averageCpc":0,"averageCpe":0,"averageCpv":0,"averagePosition":1,"conversionRate":"0.00%","conversions":0,"conversionValue":"0.0","costPerAllConversion":0,"costPerConversion":0,"crossDeviceConversions":"--","engagementRate":"0.00%","engagements":0,"interactionRate":"0.00%","interactions":0,"valuePerAllConversion":0,"valuePerConversion":0},"videoStatistics":{"quartile100Rate":"0.00%","quartile25Rate":"0.00%","quartile50Rate":"0.00%","quartile75Rate":"0.00%","viewRate":"0.00%","views":0,"viewThroughConversions":0}}
	
	describe('logSearchTerms function', () => {
		it('should log search term', (done) => {
			logSearchTerms({
				customerId: DUMMY_CUSTOMER_ID,
				keywords:[DUMMY_SEARCH_TERM]
			}).then((result: any) => {
				expect(result.statusCode).to.equal(200);
				done();
			}).catch(err => {
				done(err);
			});
		});
	});
	
	describe('getSearchTerms function', () => {
		it('should return list of search terms', (done) => {
			getSearchTerms({
				customerId: DUMMY_CUSTOMER_ID
			}).then((result: any) => {
				expect(result.statusCode).to.equal(200);
				done();
			}).catch(err => {
				done(err);
			});
		});
	});