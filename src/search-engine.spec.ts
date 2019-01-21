import { search } from './search-engine';
import { expect,  } from 'chai';
import 'mocha';

describe('search function', () => {
	it('should return search results', (done) => {
		search({
			query: 'test',
			language: 'english'
		}).then((result: any) => {
			expect(result.statusCode).to.equal(200);
			done();
		}).catch(err => {
			done(err);
		});
	});
});