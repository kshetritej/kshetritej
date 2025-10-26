"use client";

import { Volume2 } from "lucide-react";
import { useState } from "react";

export default function PronounceTej() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakName = () => {
    if (isSpeaking) return;

    const utterance = new SpeechSynthesisUtterance("Tayj Kshay-tree");
    utterance.lang = "en-US";
    utterance.pitch = 1.05;
    utterance.rate = 0.95;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <h1 className="text-2xl font-bold">TEJ KSHETRI</h1>
      <div className="flex gap-1">
        <p className="-ml-12 text-sm text-muted-foreground italic">/ˈteɪdʒ ˈkʃeːtri/</p>
        <button
          onClick={speakName}
          className="cursor-pointer flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
        >
          <Volume2 size={16} />
        </button>
      </div>
    </div>
  );
}
