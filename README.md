#Name sorter
This program accepts a file unsorted-names-list.txt containing list of names, read it and sort it alphabetically by lastname first and then by given name, print it to the console and create a file called sorted-names-list in the same directory as given file.

The fs module is imported at first.
The fs.readFileSync function is used to read the .txt file and then using .split function, it is stored into a array called unsorted-names. Then using sort compare function, the array is sorted alphabetically by lastname first.
Using fs.createWriteStream a writable file named sorted-names-list.txt is created in which each item from the sorted list is written once.
Finally, the function return the sorted list allowing the names to be printed on the screen.