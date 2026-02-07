import { ShieldCheck, Clock, Banknote, Award, Wrench, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Sertifiserte fagfolk",
    description:
      "Alle våre rorleggere er sertifiserte og holder seg oppdatert på gjeldende forskrifter og standarder.",
  },
  {
    icon: Clock,
    title: "Rask respons",
    description:
      "Vi er tilgjengelige når du trenger oss og prioriterer alltid rask respons på henvendelser.",
  },
  {
    icon: Banknote,
    title: "Tydelige priser",
    description:
      "Ingen skjulte kostnader. Du får alltid et klart pristilbud for du godkjenner arbeidet.",
  },
  {
    icon: Award,
    title: "Garantert kvalitet",
    description:
      "Vi står inne for arbeidet vårt og gir garanti på alle utforte oppdrag.",
  },
  {
    icon: Wrench,
    title: "Moderne utstyr",
    description:
      "Vi bruker det nyeste innen verktoy og teknologi for effektive og varige losninger.",
  },
  {
    icon: HeartHandshake,
    title: "Personlig service",
    description:
      "Som et lokalt firma kjenner vi kundene våre og gir alltid personlig og tilpasset service.",
  },
];

export function WhyUs() {
  return (
    <section id="hvorfor-oss" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Hvorfor velge oss
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-secondary-foreground md:text-4xl">
            <span className="text-balance">
              Grunner til å velge Ditt Selskap
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vi kombinerer faglig dyktighet med personlig service for å gi deg
            den beste opplevelsen.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 rounded-xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <reason.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
