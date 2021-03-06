const { O_DIRECTORY } = require('constants');
const fs = require('fs')

exports.sort_names = function() {
    let unsorted_names;
    const content = fs.readFileSync('./unsorted-names-list.txt', 'utf8'); // Read the txt file from the directory.
    unsorted_names = content.split('\r\n');
    unsorted_names.sort((a, b) => {
        const x = a.split(' ');
        const y = b.split(' ');
        return x[x.length-1].toLowerCase() > y[y.length-1].toLowerCase() ? 1 : -1    // Compared in lower case to prevent errors due to case sensitivity.
    })
    var stream = fs.createWriteStream("./sorted-names-list.txt");   // create a stream to write the sorted list to the directory.
    stream.once('open', function(fd) {
    unsorted_names.forEach((item) => {
        stream.write(item + '\n');
    });
    stream.end();
    });
    console.log(unsorted_names);
    return unsorted_names; // return the sorted list of names to the screen.
}