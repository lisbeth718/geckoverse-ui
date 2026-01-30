import { useEffect, useState } from "react"
import { cn } from "../utils"
import { PixelGeckoLoading } from "./pixel-gecko"

const GECKO_FACTS = [
  "Geckos can see 350x better in low light than humans",
  "Some geckos can run on water at 3 feet per second",
  "Geckos lick their own eyeballs to keep them clean",
  "Tokay geckos can bite with the force of 300 psi",
  "Geckos can climb smooth glass using van der Waals forces",
  "A gecko's tail can move for 30 minutes after detaching",
  "Geckos are the only lizards that can vocalize",
  "Crested geckos were thought extinct until 1994",
  "Geckos have no eyelids - just a transparent membrane",
  "Some geckos can glide up to 200 feet between trees",
  "Gecko feet have 500,000 tiny hairs per toe",
  "Leopard geckos can store fat in their tails for months",
  "Geckos can regenerate their tails in just 30 days",
  "The word 'gecko' comes from their chirping sound",
  "Geckos have been on Earth for 100 million years",
]

export function getRandomGeckoFact(): string {
  return GECKO_FACTS[Math.floor(Math.random() * GECKO_FACTS.length)]
}

export function GeckoLoadingWithFact({
  className,
  size = "md"
}: {
  className?: string
  size?: "sm" | "md" | "lg" | "xl"
}) {
  const [fact, setFact] = useState<string>("")

  useEffect(() => {
    setFact(getRandomGeckoFact())
    const interval = setInterval(() => {
      setFact(getRandomGeckoFact())
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <PixelGeckoLoading size={size} />
      <p className="text-xs text-center max-w-[200px] opacity-60 animate-fade-in">
        {fact}
      </p>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 0.6; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

// Alias
export const PixelGeckoLoadingWithFact = GeckoLoadingWithFact
