const isAutorized = (req, res, next) =>{
  if(req && req.headers &&
    req.headers.autorization &&
    req.headers.autorization === "admin"){
    res.send("Autorization Ok");
    console.log("Aotorization Ok");
    next();
  }else{
    console.log("Aotorization Fallied");    
    res.status(401).send("Not Autorized");
  }
};

module.exports = { isAutorized };