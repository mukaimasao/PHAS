/* eslint-disable @typescript-eslint/ban-types */
import { Request, Response } from 'express';
import * as yup from 'yup';
// import User from '../../models/User';
import { validation } from '../../shared/middlewares';

interface IQueryProps {
  page?: number;
  limit?: number;
  filter?: string;
}

export const getAllValidation = validation((getSchema) => ({
  body: getSchema<IQueryProps>(
    yup.object().shape({
      page: yup.number().moreThan(0),
      limit: yup.number().moreThan(0),
      filter: yup.string(),
    }),
  ),
}));

export const GetAllUsers = async (
  req: Request<{}, {}, {}, IQueryProps>,
  res: Response,
) => {
  res.send('Get ALL!');
};
