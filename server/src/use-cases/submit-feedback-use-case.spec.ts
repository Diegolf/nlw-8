import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
   { create: createFeedbackSpy },
   { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {

   it("should be able to submit a feedback", async () => {   
      await expect(submitFeedback.execute({
         type: "BUG",
         comment: "exemple comment",
         screenshot: "data:image/png;base64,test.jpg",
      })).resolves.not.toThrow();

      expect(createFeedbackSpy).toHaveBeenCalled();
      expect(sendMailSpy).toHaveBeenCalled();

   });

   it("should not be able to submit a feedback without a type", async () => {   
      await expect(submitFeedback.execute({
         type: "",
         comment: "exemple comment",
         screenshot: "data:image/png;base64,test.png",
      })).rejects.toThrow();
   });

   it("should not be able to submit a feedback without a comment", async () => {   
      await expect(submitFeedback.execute({
         type: "BUG",
         comment: "",
         screenshot: "data:image/png;base64,test.png",
      })).rejects.toThrow();
   });

   it("should not be able to submit a feedback with an invalid screenshot format", async () => {   
      await expect(submitFeedback.execute({
         type: "BUG",
         comment: "exemple comment",
         screenshot: "data:image/jpg;base64,test.jpg",
      })).rejects.toThrow();
   });

});