const isAutorized = (req, res, next) =>{
  if(req && req.headers){
    console.log(req.headers);
  }
  next();
};

module.exports = { isAutorized };