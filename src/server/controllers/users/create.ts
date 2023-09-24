/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from 'express';
import * as yup from 'yup';
import { IUser } from '../../models/User';
import { validation } from '../../shared/middlewares';

interface IBodyProps extends Omit<IUser, 'idUser'>{}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      name: yup.string().required().min(3).max(50),
      email: yup.string().required().email().max(50),
      password: yup.string().required().min(8).max(100),
    }),
  ),
}));

export const createUser = async (  req: Request<{}, {}, IBodyProps>,  res: Response) => {
  return res.status(201).json(1);
  // try {
  //   const newUser = await User.create(req.body);
  //   res.status(201).json(newUser);
  // } catch (error) {
  //   res.status(500).json({ error: "Erro ao criar usuário." });
  // }
};
