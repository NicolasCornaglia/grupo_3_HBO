module.exports = (sequelize, dataTypes) => {
   let alias = 'Product';
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
      description: {
         type: dataTypes.STRING,
         allowNull: false
      },
      price: {
         type: dataTypes.FLOAT,
         allowNull: false
      },
      image: {
         type: dataTypes.STRING,
         allowNull: false
      },
      dimensions: {
         type: dataTypes.STRING,
         allowNull: false
      },
      category_id: {
         type: dataTypes.STRING,
         allowNull: false
      },
      color_id: {
         type: dataTypes.STRING,
         allowNull: false
      },
      material_id: {
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
      tableName: 'products',
      timestamps: false
   }

   const Product = sequelize.define(alias,cols,config);

   Product.associate = function(models) {
      
      Product.belongsTo(models.Category, {
         as: "category",
         foreignKey: "category_id"
      });

      Product.belongsTo(models.Color, {
         as: "color",
         foreignKey: "color_id"
      });

      Product.belongsTo(models.Material, {
         as: "material",
         foreignKey: "material_id"
      });
   }

   return Product

}