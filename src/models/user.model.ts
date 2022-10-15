const User = (sequelize, Sequelize, DataTypes) => {
    const User = sequelize.define(
      "users",
      {
        email: {
          type: DataTypes.STRING,
          unique: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING
        }
      },
      {
        timestamps: false
      }
    );
    return User;
};

export default User;