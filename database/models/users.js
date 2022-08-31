module.exports = (sequelize, dataTypes) => {
   let alias = 'Users';
   let cols = {
      id: {
         type: dataTypes.BIGINT,
         primaryKey: true,
         autoIncrement: true
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

   return Users = sequelize.define(alias,cols,config)
}
