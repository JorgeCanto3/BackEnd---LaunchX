const fs = require('fs');
class Reader {
    static readJsonFile(path) {
        const rawdata = fs.readFileSync
        return JSON.parse(rawdata);
    }
}

module.exports = Reader
