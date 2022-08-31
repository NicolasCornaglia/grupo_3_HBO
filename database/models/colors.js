module.exports = (sequelize, dataTypes) => {
   let alias = 'Color';
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
      tableName: 'colors',
      timestamps: false
   }

   const Color = sequelize.define(alias,cols,config);

   return Color
}