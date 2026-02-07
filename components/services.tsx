import Image from "next/image";
import { Droplets, Bath, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Droplets,
    title: "Lekkasjer og tette ror",
    description:
      "Rask utrykning ved vannlekkasjer og tette avlop. Vi finner feilen raskt og fikser problemet effektivt, slik at du slipper unodvendige skader og kostnader.",
    image: "/images/hero-plumber.jpg",
  },
  {
    icon: Bath,
    title: "Bad & kjokken",
    description:
      "Komplett installasjon og oppussing av bad og kjokken. Fra planlegging til ferdig resultat sørger vi for kvalitetsarbeid som varer i mange år.",
    image: "/images/service-bathroom.jpg",
  },
  {
    icon: Flame,
    title: "Varmtvannsbereder",
    description:
      "Service, reparasjon og utskifting av varmtvannsbereder. Vi hjelper deg med å velge riktig losning og sørger for trygg og forskriftsmessig installasjon.",
    image: "/images/service-heater.jpg",
  },
];

export function Services() {
  return (
    <section id="tjenester" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Våre tjenester
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Profesjonelle VVS-tjenester for enhver situasjon
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Enten du trenger hjelp med en lekkasje eller planlegger en storre oppussing,
            har vi kompetansen og erfaringen som trengs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
