import { connection } from "./connection";
import {Dog} from '../entities';
import { ObjectId } from "mongodb";


const collection = connection.db('dog-express').collection<Dog>('dog');


export const dogRepository = {
    findAll() {
        return collection.find().toArray();
    },
    findById(_id:string) {
        return collection.findOne(new ObjectId(_id));
    },
    async persist(dog:Dog) {
        const result = await collection.insertOne(dog);
        dog._id = result.insertedId;
        return dog;
    }
}