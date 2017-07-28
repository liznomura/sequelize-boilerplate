module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Users", { // build sequelize model class, first param = name, second param is columns (properties), 3rd param is options
    username: DataTypes.STRING // JS: class Users with one .username property
    // DB: table Users with columns id, username, created_at, and updated_at
  }, {
    classMethods: {
      associate: function(models) { // defines all relationships for this model
        User.hasMany(models.Task);
      }
    }
  });

  return User;
};