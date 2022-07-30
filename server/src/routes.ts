import express from 'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepsitory } from './repositories/prisma/prisma-feedbacks-repositories';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { comment, type, screenshot } = req.body; 


   const prismaFeedbacksRepsitory = new PrismaFeedbacksRepsitory()
   const nodemailerMailAdapter = new NodemailerMailAdapter()

   const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepsitory, nodemailerMailAdapter
   )

   await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
   });


  return res.status(201).send();
});