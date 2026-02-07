"use client";

import React from "react"

import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Adresse",
  },
  {
    icon: Phone,
    label: "Telefon",
    value: "12345678",
    href: "tel:12345678",
  },
  {
    icon: Mail,
    label: "E-post",
    value: "post@dittselskap.no",
    href: "mailto:post@dittselskap.no",
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Kontakt oss
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-secondary-foreground md:text-4xl">
            <span className="text-balance">
              Ta kontakt for et uforpliktende tilbud
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Fyll ut skjemaet nedenfor, eller ta direkte kontakt med oss på
            telefon eller e-post. Vi svarer deg raskt!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="space-y-8 lg:col-span-2">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-medium text-foreground">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Apningstider
              </h3>
              <div className="mt-3 space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Mandag - Fredag</span>
                  <span className="font-medium text-foreground">07:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Lordag</span>
                  <span className="font-medium text-foreground">09:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sondag</span>
                  <span className="font-medium text-foreground">Stengt</span>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Send className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    Takk for din henvendelse!
                  </h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    Vi har mottatt meldingen din og vil ta kontakt med deg så
                    raskt som mulig.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-6"
                  >
                    Send ny melding
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Navn</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Ditt fulle navn"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+47 000 00 000"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-post</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="din@epost.no"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Melding</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Fortell oss om hva du trenger hjelp med..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send melding
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Ved å sende inn skjemaet godtar du at vi bruker
                    informasjonen til å kontakte deg angående din henvendelse.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
