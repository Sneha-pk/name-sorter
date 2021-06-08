const { O_DIRECTORY } = require('constants');
const fs = require('fs')

exports.sort_names = function() {
    let unsorted_names;
    const content = fs.readFileSync('./unsorted-names-list.txt', 'utf8'); // Read the txt file from the O_DIRECTORY.
    unsorted_names = content.split('\r\n');
    unsorted_names.sort((a, b) => {
        const x = a.split(' ');
        const y = b.split(' ');
        return x[x.length-1].toLowerCase() > y[y.length-1].toLowerCase() ? 1 : -1    // Compared in lower case to prevent errors due to case sensitivity.
    })
    var stream = fs.createWriteStream("./sorted-names-list.txt");   //
    stream.once('open', function(fd) {
    unsorted_names.forEach((item) => {
        stream.write(item + '\n');
    });
    stream.end();
    });

    return unsorted_names;
}