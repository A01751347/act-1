import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        collection: 'vuelos',
        timestamps: true
    }
})
export class Vuelo {
    @prop({ required: true, trim: true })
    public aerolinea!: string;

    @prop({ required: true, trim: true, unique: true })
    public numero_vuelo!: string;

    @prop({ required: true, trim: true })
    public puerta_embarque!: string;

    @prop({ required: true, trim: true, default: "A01751347" })
    public matricula!: string;
}

export const VueloModel = getModelForClass(Vuelo);
