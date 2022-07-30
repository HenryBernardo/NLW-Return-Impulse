import { useState } from "react";

import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.png';
import ideaImageUrl from '../../assets/idea.png';
import thoughtImageUrl from '../../assets/thought.png';
import { FeedbackSuccessTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagen de um inseto'
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagen de uma lâmpada'
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagen de um balão de pensamento'
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType |  null>(null)
  const[feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedBack() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedBack} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackSuccessTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep feedbackType={feedbackType}
            onFeedbackRestartRequested={handleRestartFeedBack}
            onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )  }
      

        

      <footer className="text-xs text-neutral-400 ">
      Feito com ♥ pela <a className="underline underline-offset-2" href="https://app.rocketseat.com.br" >Rocketseat </a>
      </footer>
    </div>
  );
}