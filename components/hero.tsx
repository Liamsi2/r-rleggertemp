import Image from "next/image";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="hjem" className="relative overflow-hidden bg-foreground">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-plumber.jpg"
          alt="Profesjonell rorlegger på jobb"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-center px-4 py-24 lg:px-8 lg:py-36">
        <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
          Sertifisert rorlegger i ditt naerområde
        </span>
        <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          <span className="text-balance">
            Din lokale rorlegger &ndash; kvalitet og service du kan stole på
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          Vi er et erfarent team av rorleggere som tilbyr profesjonelle
          VVS-tjenester til private og bedrifter. Raskt, pålitelig og alltid til
          konkurransedyktige priser.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#kontakt">
              Få uforpliktende tilbud
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href="tel:12345678">
              <Phone className="mr-2 h-4 w-4" />
              12345678
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
