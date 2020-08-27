module.exports=function(sequelize, dataTypes){
    let alias = "Actor";
    let cols = {
        id:{
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(100)
        },
        last_name: {
            type: dataTypes.STRING(100)
        },
        rating: {
            type: dataTypes.DECIMAL(3,1)
        },
        favorite_movie_id:{
            type: dataTypes.INTEGER(10).UNSIGNED
            
        },
        status: {
            type: dataTypes.TINYINT(5)
        },
    };
    let config = {
        tableName: "actors",
        timestamps: false
    }
    let Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models) {
        Actor.belongsTo(models.Movie, {
            as: "favorite_movie",
            foreignKey: "favorite_movie_id"
        }),
        Actor.belongsToMany(models.Movie, {
            as: "actor_movies",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        })
    }

    return Actor;
}