console.log('***** Music Collection *****')
// Create a variable `collection` that starts as an empty array.

let collection = [];

// Add a function named `addToCollection`. This function should:
// Take in the album's `title`, `artist`, `yearPublished` as input parameters
// Create a new object having the above properties
// Add the new object to the end of the `collection` array
// Return the newly created object

function addToCollection(title, artist, yearPublished) {
    collection = [];
    console.log('in addToCollection:');
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
      };
      collection.push(newAlbum);
    return collection[collection.length-1];
  } // end addToCollection
  
console.log('Collection now:', collection);

// Test the `addToCollection` function:
// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. 
// (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Console.log each album as added using the returned value.
// After all are added, console.log the `collection` array.

let jazzAlbum1 = addToCollection('Workin With The Miles Davis Quintet', 'Miles Davis', 1959);
console.log('Album added:', jazzAlbum1);
let jazzAlbum2 = addToCollection('Sketches of Spain', 'Miles Davis', 1960);
console.log('Album added:', jazzAlbum2);
let jazzAlbum3 = addToCollection('On the Corner', 'Miles Davis', 1972);
console.log('Album added:', jazzAlbum3);
let jazzAlbum4 = addToCollection('Body and Soul', 'Billie Holiday', 1957);
console.log('Album added:', jazzAlbum4);
let jazzAlbum5 = addToCollection('Solitude', 'Billie Holiday', 1952);
console.log('Album added:', jazzAlbum5);
let jazzAlbum6 = addToCollection('Ella and Louis', 'Louis Armstrong', 1956);
console.log('Album added:', jazzAlbum6);

console.log(`Collection now is: ${JSON.stringify(collection)}`);


// Add a function named `showCollection`. This function should:
// Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// Console.log the number of items in the array.
// Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.

function showCollection (anArray){
    console.log('in showCollection: The number of items is -->', anArray.length);
    console. log("\n Showing collection!: \n");
    for (let album of anArray) {
        console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`);  
    } // end for 
    } // end showCollection 

// Test the `showCollection` function.


(showCollection(collection));
console. log("\n Testing showCollection: \n");
console.log(`${jazzAlbum1.title} by ${jazzAlbum1.artist} published in ${jazzAlbum1.yearPublished}`);
console.log(`${jazzAlbum2.title} by ${jazzAlbum2.artist} published in ${jazzAlbum2.yearPublished}`);
console.log(`${jazzAlbum3.title} by ${jazzAlbum3.artist} published in ${jazzAlbum3.yearPublished}`);
console.log(`${jazzAlbum4.title} by ${jazzAlbum4.artist} published in ${jazzAlbum4.yearPublished}`);
console.log(`${jazzAlbum5.title} by ${jazzAlbum5.artist} published in ${jazzAlbum5.yearPublished}`);
console.log(`${jazzAlbum6.title} by ${jazzAlbum6.artist} published in ${jazzAlbum6.yearPublished}`);

// Add a function named `findByArtist`. This function should:
// Take in `artist` (a string) parameter
// Create an array to hold any results, empty to start
// Loop through the `collection` and add any objects with a matching artist to the array.
// Return the array with the matching results. If no results are found, return an empty array.

function findByArtist(anArtist) {
    let artistResults = [];
    for (let album of collection) {
      if (album.artist === anArtist) {
        artistResults.push(album);
      } // end if artist in collection
    } // end for loop artists in collection
    return artistResults;
} // end findByArtist


// Test the `findByArtist` function. Make sure to test with an artist you know is in the collection,
// as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

console. log("\n Testing findByArtist: \n");
console. log('findByArtist test:', findByArtist('Louis Armstrong'));
console. log('findByArtist test:', findByArtist('Billie Holiday'));
console. log('findByArtist test:', findByArtist('Miles Davis'));