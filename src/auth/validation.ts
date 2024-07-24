// src/middleware/validation.ts

import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

interface ValidationResponse {
  message: string;
  errors: ValidationError[];
}

export function validateDto<T extends object>(dtoClass: { new(): T }) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObject = plainToClass(dtoClass as new () => object, req.body);
    const errors = await validate(dtoObject);

    if (errors.length > 0) {
      const validationResponse: ValidationResponse = {
        message: 'Validation failed',
        errors,
      };
      return res.status(400).json(validationResponse);
    }

    next();
  };
}
