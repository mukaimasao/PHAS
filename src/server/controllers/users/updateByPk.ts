/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from 'express';
import * as yup from 'yup';
// import User from '../../models/User';
import { validation } from '../../shared/middlewares';

interface IParamProps {
  id: number;
}

interface IBodyProps {
  name: string;
  email: string;
  password: string;
}

export const updateByPkValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      name: yup.string().required().min(3),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
  ),
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    }),
  ),
}));

export const updateByPkUser = async (
  req: Request<{}, {}, IBodyProps, {}, IParamProps>,
  res: Response,
) => {
  res.send('Update!');
};
