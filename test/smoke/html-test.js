const glob = require('glob');

describe('Checking generated html files', () => {
    it('should generated html files', (done) => {
        const files = glob.sync("./dist/?(index|search).html");

        if(files.length > 0) {
            done();
        }else {
            throw new Error('no html files generated');
        }
    })
})