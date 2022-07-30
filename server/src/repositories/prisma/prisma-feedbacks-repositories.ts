import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepsitory implements FeedbackRepository {
  async create({ type, comment, screenshot}: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })
    
  }
}