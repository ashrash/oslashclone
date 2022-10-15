const Shortcut = (sequelize, Sequelize, DataTypes) => {
    const Shortcut = sequelize.define(
      "shortcut",
      {
        short_link: {
          type: DataTypes.STRING,
          unique: true,
          primaryKey: true
        },
        email_id: {
          type: DataTypes.STRING,
        },
        url: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING
        }
      },
      {
        createdAt: "created_dttm",
        updatedAt: "updated_dttm"
      }
    );
    return Shortcut;
};

export default Shortcut;