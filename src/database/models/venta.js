
function ventaData(sequelize, Datatypes){
    // nombre de la tabla, igual al nombre de la tabla en la base de datos
    let a = 'Venta';
  
    // todos las columnas que va a tener esa tabla, debemos indicar el tipo de dato de cada tabla que 
    // debe tener, debemos ver que tipo de de dato de sequalize corresponde con el tipo de dato de lbd, ver la doc de
    // sequalize
    let c = {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      monto_unitario: {type: Datatypes.FLOAT},
      cantidad: { type: Datatypes.INTEGER},
      Usuario_id: { type: Datatypes.INTEGER},
      Entrada_id: { type: Datatypes.INTEGER},
    }
    // esto lo dejamos asi por defecto, son congif de sequalize
    let cg = {camelCase: false, timestamps: false}; 
  
    // aca declaro una variable, con el metodo sequalize.define le paso las 3 variables y el resultdo lo guardo
    // en la variable peliculas 
    const venta = sequelize.define(a,c,cg)
  
    // retorno la variable peliculas
    return venta;
  }
  
  // aca exportamos todo
  module.exports = ventaData;