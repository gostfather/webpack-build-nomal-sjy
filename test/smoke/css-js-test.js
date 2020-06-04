const glob = require('glob')

describe('Checking generated css js files', () => {
    it('should generated css js files', (done) => {
        const files = glob.sync("./dist/?(index|search)_*?(.js|.css)");
        if(files.length > 0) {
            done();
        }else {
            throw new Error('no css js files generated');
        }
    })
})