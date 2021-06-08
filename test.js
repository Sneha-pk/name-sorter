let expect = require('chai').expect;
let {sort_names} = require('./app.js');

describe("Sort names by the lastname alphabetically", function() {
   it("The order of names will be ['Marin Alvarez','Adonis Julius Archer','Beau Tristan Bentley','Hunter Uriah Mathew Clarke','Leo Gardner','Vaughn Lewis','London Lindsey','Mikayla Lopez','Janet Parsons','Frankie Conner Ritter','Shelby Nathan Yoder']", function() {
       const output = ['Marin Alvarez','Adonis Julius Archer','Beau Tristan Bentley','Hunter Uriah Mathew Clarke','Leo Gardner','Vaughn Lewis','London Lindsey','Mikayla Lopez','Janet Parsons','Frankie Conner Ritter','Shelby Nathan Yoder'];
       const expected = sort_names();
       expect(expected).to.eql(output)
   	});
});