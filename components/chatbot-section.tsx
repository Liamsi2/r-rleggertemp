"use client";

import { MessageCircle, Bot, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: HelpCircle,
    text: "Svar på vanlige spørsmål om tjenester og priser",
  },
  {
    icon: Clock,
    text: "Tilgjengelig 24/7 for raske svar",
  },
  {
    icon: MessageCircle,
    text: "Hjelp med å bestille time eller be om tilbud",
  },
];

export function ChatbotSection() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          {/* Text content */}
          <div className="flex-1">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
              Virtuell assistent
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-primary-foreground md:text-4xl">
              <span className="text-balance">
                Trenger du hjelp eller har spørsmål?
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              Vår virtuelle assistent kan gi deg svar på vanlige spørsmål om
              tjenester, priser og tilgjengelighet. Prøv chatboten vår for rask
              og enkel hjelp.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature) => (
                <li key={feature.text} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <feature.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground/90">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              variant="secondary"
              className="mt-8"
              onClick={() => {
                // Dispatch a custom event that the ChatWidget listens for
                window.dispatchEvent(new CustomEvent("open-chat-widget"));
              }}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Start en samtale
            </Button>
          </div>

          {/* Chat illustration */}
          <div className="w-full max-w-md flex-shrink-0">
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm">
              {/* Chat header */}
              <div className="mb-6 flex items-center gap-3 border-b border-primary-foreground/10 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-medium text-primary-foreground">
                    VVS-Assistenten
                  </p>
                  <p className="text-xs text-primary-foreground/60">
                    Online nå
                  </p>
                </div>
                <div className="ml-auto h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              {/* Messages */}
              <div className="space-y-4">
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-primary-foreground/10 px-4 py-3">
                  <p className="text-sm text-primary-foreground/90">
                    Hei! Hvordan kan jeg hjelpe deg i dag?
                  </p>
                </div>
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary-foreground/20 px-4 py-3">
                  <p className="text-sm text-primary-foreground">
                    Hva koster det å bytte varmtvannsbereder?
                  </p>
                </div>
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-primary-foreground/10 px-4 py-3">
                  <p className="text-sm text-primary-foreground/90">
                    Prisen avhenger av type og storrelse. En standard
                    utskifting starter fra ca. 8 000 kr inkl. arbeid. Ønsker du
                    et uforpliktende tilbud?
                  </p>
                </div>
              </div>

              {/* Input */}
              <div className="mt-6 flex items-center gap-2 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-2.5">
                <span className="text-sm text-primary-foreground/40">
                  Skriv en melding...
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
