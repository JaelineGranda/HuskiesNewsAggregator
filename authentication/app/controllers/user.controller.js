exports.allAccess = (req, res) => { // for public access
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => { // for logged in user access
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => { // for adming users
    res.status(200).send("Admin Content.");
  };