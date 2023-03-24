console.log('***** Music Collection *****')
// Create a variable `collection` that starts as an empty array.

let collection = [];

// Add a function named `addToCollection`. This function should:
// Take in the album's `title`, `artist`, `yearPublished` as input parameters
// Create a new object having the above properties
// Add the new object to the end of the `collection` array
// Return the newly created object

function addToCollection (jazzAlbum, collection){
    console.log('in addToCollection:', addToCollection);
    collection.push(jazzAlbum);
    return collection;
} // end addToCollection

let jazzAlbum = {
    title: 'Workin With The Miles Davis Quintet',
    artist: 'Miles Davis',
    yearPublished: 1959
};

collection = addToCollection (jazzAlbum, collection)
console.log('Collection now:', collection);

// Test the `addToCollection` function:
// Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. 
// (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// Console.log each album as added using the returned value.
// After all are added, console.log the `collection` array.


