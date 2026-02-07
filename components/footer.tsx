import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">
                  DS
                </span>
              </div>
              <span className="font-heading text-lg font-bold text-background">
                Ditt Selskap
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Din pålitelige partner for alle VVS-behov. Kvalitetsarbeid med
              garanti og konkurransedyktige priser.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-background/40">
              Snarveier
            </h4>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Bunntekst-navigasjon">
              <a
                href="#hjem"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                Hjem
              </a>
              <a
                href="#tjenester"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                Tjenester
              </a>
              <a
                href="#hvorfor-oss"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                Hvorfor oss
              </a>
              <a
                href="#kundeerfaringer"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                Kundeerfaringer
              </a>
              <a
                href="#kontakt"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                Kontakt oss
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-background/40">
              Kontakt
            </h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Adresse</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href="tel:12345678"
                  className="transition-colors hover:text-background"
                >
                  12345678
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-background/60">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:post@dittselskap.no"
                  className="transition-colors hover:text-background"
                >
                  post@dittselskap.no
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-sm text-background/40">
            &copy; {new Date().getFullYear()} Ditt Selskap. Alle rettigheter
            reservert.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-background/40 transition-colors hover:text-background"
            >
              Personvern
            </a>
            <a
              href="#"
              className="text-sm text-background/40 transition-colors hover:text-background"
            >
              Vilkår
            </a>
            <a
              href="#"
              className="text-sm text-background/40 transition-colors hover:text-background"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
