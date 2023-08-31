function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
  }
  
  // Large shirt with default message
  make_shirt();
  
  // Medium shirt with default message
  make_shirt("medium");
  
  // Small shirt with a different message
  make_shirt("small", "JavaScript is fun!");
  