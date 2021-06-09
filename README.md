#Name sorter
This program accepts a file unsorted-names-list.txt containing list of names, read it and sort it alphabetically by lastname.Then print the sorted list to the console and output it to a file called sorted-names-list.txt in the same directory as given file.

## Steps:

1.The fs module is imported.

2.The fs.readFileSync function is used to read the .txt file and then .split function is used to store it into an array called unsorted-names. 

3.Then using sort compare function, the array is sorted alphabetically by lastname first.

4.Using fs.createWriteStream a writable file named sorted-names-list.txt is created in which each   item from the sorted list is written once.

5.Finally, the function returns the sorted list allowing the names to be printed on the screen.