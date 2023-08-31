function make_album(artist, title, tracks4) {
    let album = {
      artist: artist,
      title: title
    };
  
    if (tracks4 !== undefined) {
      album.tracks = tracks4;
    }
  
    return album;
  }
  
  // Making function calls to create album dictionaries
  let album1 = make_album`("Taylor Swift", "Fearless");
  let album2 = make_album("Ed Sheeran", "÷", 16);
  let album3 = make_album("Adele", "25", 12);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  