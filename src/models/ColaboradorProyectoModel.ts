import {Model} from 'sequelize';


interface ColaboradorProyectoAtributos{
    idProyectoCP:number,
    idColaboradorCP:number,
    tarea:string
}

module.exports = (sequelize:any,DataTypes:any)=>{
    class ColaboradorProyectoModel extends Model<ColaboradorProyectoAtributos>
    implements ColaboradorProyectoAtributos{
        idProyectoCP!: number;
        idColaboradorCP!: number;
        tarea!:string;
        static associate(models:any){

        }
    }

    ColaboradorProyectoModel.init({
        idProyectoCP:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            references:{
                model:'Proyecto',
                key:'idProyecto'
            }
        },
        idColaboradorCP:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            references:{
                model:'Colaborador',
                key:'idColaborador'
            }
        },
        tarea:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        sequelize,
        modelName:'ColabProy'
    });
    return ColaboradorProyectoModel;
}