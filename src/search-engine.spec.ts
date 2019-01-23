import { searchAndQueue } from './search-engine';
import { expect,  } from 'chai';
import 'mocha';

describe('search function', () => {
	it('should return search results', (done) => {
		searchAndQueue({
			query: 'test',
			language: 'english'
		}).then((result: any) => {
			expect(result.items.length).is.gt(0);
			done();
		}).catch(err => {
			done(err);
		});
	});
});