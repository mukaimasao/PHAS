/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from 'express';
import * as yup from 'yup';
// import User from '../../models/User';
import { validation } from '../../shared/middlewares';

interface IParamProps {
  id: number;
}

export const getByPkValidation = validation((getSchema) => ({
  params: getSchema<IParamProps>(
    yup.object().shape({
      id: yup.number().integer().required().moreThan(0),
    }),
  ),
}));

export const getByPkUser = async (
  req: Request<{}, {}, {}, {}, IParamProps>,
  res: Response,
) => {
  res.send('Get ALL!');
};
