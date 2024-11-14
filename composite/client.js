import Directory from './directory.js';
import File from './file.js';

const root = new Directory('root');
const home = new Directory('home');
const user = new Directory('user');

const file1 = new File('file1.txt', 100);
const file2 = new File('file2.txt', 200);
const file3 = new File('file3.txt', 300);

root.add(home);
home.add(user);
user.add(file1);
user.add(file2);
root.add(file3);

console.log(`Total size of root: ${root.getSize()}`); // Output: Total size of root: 600
