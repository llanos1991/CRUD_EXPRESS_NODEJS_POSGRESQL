import Sequelize from 'sequelize';

const sequelize= new Sequelize( 'postgres', 'postgres', 'cllanos', {
    host :'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000
      },
      logging:false
}
)

export{
    sequelize
}