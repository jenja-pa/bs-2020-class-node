const {saveData} = require("../repository/user.repository");

const getName = (user) => {
  if(user){
    return user.name;
  }else{
    return null;
  }
};

const saveName = (user) => {
  if(user){
    return saveData(user.name);
  }else{
    return null;
  }
};

module.exports = { getName, saveName };