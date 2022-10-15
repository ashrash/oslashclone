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
        createdAt: "created_dttm",
        updatedAt: "updated_dttm"
      }
    );
    return User;
};

export default User;