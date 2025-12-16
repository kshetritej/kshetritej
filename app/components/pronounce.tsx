"use client"

import { useState } from "react"
import { Volume2 } from "lucide-react"

export default function PronounceTej() {
  const [isPlaying, setIsPlaying] = useState(false)

  const playPronunciation = () => {
    setIsPlaying(true)
    const utterance = new SpeechSynthesisUtterance("Tej Kshetri")
    utterance.rate = 0.8
    utterance.pitch = 1
    utterance.onend = () => setIsPlaying(false)
    speechSynthesis.speak(utterance)
  }

  return (
    <div className="flex items-center gap-3">
      <h1 className="text-5xl md:text-7xl font-serif text-balance leading-tight">Tej Kshetri</h1>
      <button
        onClick={playPronunciation}
        className="hover:bg-gray-400 transition-colors rounded-full p-2"
        aria-label="Pronounce name"
        disabled={isPlaying}
      >
        <Volume2 className={`w-5 h-5 ${isPlaying ? "animate-pulse" : ""}`} />
      </button>
    </div>
  )
}
