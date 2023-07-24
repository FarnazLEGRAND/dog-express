import { Router } from "express";
import Joi from 'joi';
import { dogRepository } from "../repository/dog-repository";
import { ObjectId } from "mongodb";

export const dogController = Router();

dogController.get('/',async (req, res) => {
    res.json(await dogRepository.findAll());
});
dogController.get('/:id',async (req, res) => {
    if(!ObjectId.isValid(req.params.id)) {
        res.status(400).end('Invalid Id');
        return;
    }
    const dog = await dogRepository.findById(req.params.id);
    if(!dog) {
        res.status(404).end('Dog Not Found');
        return;
    }
    res.json(dog);

});

dogController.post('/', async (req,res) => {
    const dog = req.body;
    const {error} = dogValidation.validate(dog);
    if(error) {
        res.status(400).json(error);
        return;
    }
    await dogRepository.persist(dog);
    res.status(201).json(dog);
});




const dogValidation = Joi.object({
    name: Joi.string().required(),
    breed: Joi.string().required(),
    birthdate: Joi.string().isoDate().required()
})