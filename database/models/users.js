module.exports = (sequelize, dataTypes) => {
   let alias = 'User';
   let cols = {
      id: {
         type: dataTypes.BIGINT,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
      },
      firstname: {
         type: dataTypes.STRING,
         allowNull: false
      },
      lastname: {
         type: dataTypes.STRING,
         allowNull: false
      },
      email: {
         type: dataTypes.STRING,
         allowNull: false
      },
      password: {
         type: dataTypes.STRING,
         allowNull: false
      },
      phone_number: {
         type: dataTypes.STRING,
         allowNull: false
      },
      city: {
         type: dataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: dataTypes.STRING,
         allowNull: false
      },
      role: {
         type: dataTypes.STRING,
         allowNull: false
      },
      avatar: {
         type: dataTypes.STRING,
         allowNull: false
      },
      created_at: {
         type: dataTypes.DATE,
         allowNull: true
      },
      updated_at: {
         type: dataTypes.DATE,
         allowNull: true
      }
   };

   let config = {
      tableName: 'users',
      timestamps: false
   }

   const User = sequelize.define(alias, cols, config);

   User.associate = (models) => {
      User.hasMany(models.Order, {
         as: "orders",
         foreignKey: "userId",
      });
   };

   return User;
}
