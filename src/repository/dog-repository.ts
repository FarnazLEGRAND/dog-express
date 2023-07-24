import { ObjectId } from "mongodb";
import { Dog } from "../entities";
import { connection } from "./connection"
const collection = connection.db('dog-express').collection<Dog>('dog');

export const dogRepository = {
    findAll(){
        return collection.find().toArray();
    },


    async persist(dog:Dog) {
        const result= await collection.insertOne(dog);
        dog._id = result.insertedId; //On assigne l'id auto-généré à l'objet dog
        return dog;
    },
}