/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from 'express';
import * as yup from 'yup';
// import User from '../../models/User';
import { validation } from '../../shared/middlewares';

interface IUser {
  name: string;
  email: string;
  password: string;
}

export const createValidation = validation((getSchema) => ({
  body: getSchema<IUser>(
    yup.object().shape({
      name: yup.string().required().min(3),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
  ),
}));

export const createUser = async (
  req: Request<{}, {}, IUser>,
  res: Response,
) => {
  return res.status(201).json(1);
  // try {
  //   const newUser = await User.create(req.body);
  //   res.status(201).json(newUser);
  // } catch (error) {
  //   res.status(500).json({ error: "Erro ao criar usuário." });
  // }
};
