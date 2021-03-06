import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "../../common/Loading";

interface ScreenshotButtonProps {
   screenshot: string | null;
   onScreenshotTook: (screenshot: string | null) => void;   
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {
   const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

   async function hangleTakeScreenshot() {
      setIsTakingScreenshot(true);

      const canvas = await html2canvas(document.querySelector('html')!);
      const base64Image = canvas.toDataURL('image/png');
      onScreenshotTook(base64Image);

      setIsTakingScreenshot(false);
   }

   if (screenshot){
      return (
         <button
            type="button"
            className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
            style={{
               backgroundImage: `url(${screenshot})`,
               backgroundPosition: 'right bottom',
               backgroundSize: 100
            }}
            onClick={() => onScreenshotTook(null)}
         >
            <Trash weight="fill" />
         </button>
      )

   }

   return (
      <button
         type="button"
         disabled={isTakingScreenshot}
         onClick={hangleTakeScreenshot}
         className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus-brand-ring-2"
      >
         {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
      </button>
   )
}