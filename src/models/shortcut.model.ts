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
        description: {
          type: DataTypes.STRING
        },
        created_dttm: {
          type: DataTypes.STRING
        }
      },
      {
        timestamps: false
      }
    );
    return Shortcut;
};

export default Shortcut;