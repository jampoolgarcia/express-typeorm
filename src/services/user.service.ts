import { Request, Response } from "express";
import { User } from "../models/user.entity";

// crea un registro nuevo
export const createUser = async (req: Request, res: Response) => {
  try {
    // obtenemos los datos del req.body
    const { firstName, lastName } = req.body;

    // creamos el usuario
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;

    // guardamos el objeto en db
    await user.save();

    // devuelvo el usuario creado
    return res.json(user);
  } catch (err) {
    if(err instanceof Error)
    return res.status(500).json({msg: err.message });
  }
};

// actualiza un registro existente
export const updateUser = (req: Request, res: Response) => {};

// devuelve todo los registros
export const findAllUser = (req: Request, res: Response) => {};

// elimina un registro extistente
export const deleteUser = (req: Request, res: Response) => {};
