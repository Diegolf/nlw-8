import { Fragment } from "react";
import { CloseButton } from "../CloseButton/CloseButton";
import successImageUrl from "../../../assets/imgs/Success.svg"

interface FeedbackSuccesssStepProps {
   onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccesssStep({ onFeedbackRestartRequested }: FeedbackSuccesssStepProps) {
   return (
      <>
         <header>
            <CloseButton />
         </header>
         <div className="flex flex-col items-center py-10 w-[304px]">
            <img src={successImageUrl} alt="Imagem de um V verde de sucesso" />
            <span className="text-xl mt-2">
               Agradecemos o feedback!
            </span>
            <button
               className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700  transition-colors focus-brand-ring-2"
               onClick={onFeedbackRestartRequested}
            >
               Quero enviar outro
            </button>
         </div>
      </>
   );
}