import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "../CloseButton/CloseButton";
import { ScreenshotButton } from "../ScreenshotButton/ScreenshotButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm/WidgetForm";

interface FeedbackContentStepProps {
   feedbackType: FeedbackType;
   onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested }: FeedbackContentStepProps) {
   const feedbackTypeInfo = feedbackTypes[feedbackType];
   const [screenshot, setScreenshot] = useState<string | null>(null);
   const [comment, setComment] = useState("");

   function handleSubmitFeedback(event: FormEvent) {
      event.preventDefault();
      console.log({screenshot, comment});
   }

   return (
      <>
         <header>
            <button
               type="button"
               className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
               onClick={onFeedbackRestartRequested}
            >
               <ArrowLeft weight="bold" className="w-4 h-4" />
            </button>
            <span className="text-xl leading-6 flex items-center gap-2">
               <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
               {feedbackTypeInfo.title}
            </span>
            <CloseButton />
         </header>

         <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
            <textarea
               className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus-brand resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
               placeholder="Conte com detalhes o que está acontecendo..."
               onChange={event => setComment(event.target.value)}
            />

            <footer className="flex gap-2 mt-2">
               <ScreenshotButton 
                  screenshot={screenshot}
                  onScreenshotTook={setScreenshot} 
               />
               <button
                  type="submit"
                  className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus-brand-ring-2 transition-colors"
               >
                  Enviar Feedback

               </button>
            </footer>
         </form>
      </>
   );
}