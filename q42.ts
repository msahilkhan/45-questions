function show_magicians1(magicians) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  // Creating an array of magician's names
  let magicianNames1 = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  // Calling make_great() to modify magician's names
  make_great(magicianNames1);
  
  // Calling the function to show modified magician's names
  show_magicians1(magicianNames1);
  