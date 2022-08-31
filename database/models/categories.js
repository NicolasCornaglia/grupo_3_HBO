module.exports = (sequelize, dataTypes) => {
   let alias = 'Category';
   let cols = {
      id: {
         type: dataTypes.BIGINT,
         primaryKey: true,
         autoIncrement: true
      },
      name: {
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
      tableName: 'categories',
      timestamps: false
   }

   const Category = sequelize.define(alias,cols,config);

   return Category

}
