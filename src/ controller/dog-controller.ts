import { Router } from "express";
import Joi from "joi";
import { dogRepository } from "../repository/dog-repository";


export const dogController = Router();
  
dogController.get('/', async (req,res) => {
    const dogs = await dogRepository.findAll();
    res.json(dogs);
});

dogController.post('/', async (req,res) => {
    const validation = dogValidation.validate(req.body, {abortEarly:false});
    if(validation.error) {
        res.status(400).json(validation.error);
        return;
    }
    const person = await dogRepository.persist(req.body);
    res.status(201).json(person);
});



const dogValidation=Joi.object({
    name: Joi.string().required(),
    breed:Joi.string().required(),
    birthdate:Joi.string().required(),
})