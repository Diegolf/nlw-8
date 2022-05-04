import { Fragment } from "react";
import { CloseButton } from "../CloseButton/CloseButton";

export function FeedbackSuccesssStep() {
   return (
      <Fragment>
         <header>
            <span className="text-xl leading-6">Deixe seu feedback</span>
            <CloseButton />
         </header>
         <div className="flex py-8 gap-2 w-full">
           
         </div>
      </Fragment>
   );
}