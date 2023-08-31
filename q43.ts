function show_magicians2(magicians) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  function make_great(magicians2) {
    let greatMagicians2 = [];
    for (let i = 0; i < magicians2.length; i++) {
      greatMagicians2.push ("the Great" ${magicians2[i]});
    
    return greatMagicians2;
  }
  
  // Creating an array of magician's names
  let magicianNames2= ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  // Calling make_great() with a copy of magician's names
  let greatMagicianNames2= make_great([...magicianNames2]);
  
  // Calling the function to show original magician's names
  console.log("Original Magician Names:");
  show_magicians(magicianNames2);
  
  // Calling the function to show modified magician's names
  console.log("\nModified Magician Names:");
  show_magicians(greatMagicianNames2);
  