import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();


const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute ({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'data:image/png;base64, fdfddxcxc',
    })).resolves.not.toThrow();
  });

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedback.execute ({
      type: '',
      comment: 'example comment',
      screenshot: 'data:image/png;base64, fdfddxcxc',
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedback.execute ({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64, fdfddxcxc',
    })).rejects.toThrow();
  });

  it('should not be able to submit a feedback with invalid screenshot', async () => {
    await expect(submitFeedback.execute ({
      type: 'BUG',
      comment: 'um comment',
      screenshot: '123',
    })).rejects.toThrow();
  });
});