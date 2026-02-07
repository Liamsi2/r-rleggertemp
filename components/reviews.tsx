import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Review 1",
    location: "",
    rating: 5,
    text: "Review 1",
  },
  {
    name: "Review 2",
    location: "",
    rating: 5,
    text: "Review 2",
  },
  {
    name: "Review 3",
    location: "",
    rating: 5,
    text: "Review 3",
  },
];

export function Reviews() {
  return (
    <section id="kundeerfaringer" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Kundeerfaringer
          </span>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-balance">
              Hva våre kunder sier
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Vi er stolte av å levere kvalitetstjenester som gjor kundene våre
            fornøyde gang etter gang.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <Card
              key={review.name}
              className="border-border bg-card transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="mb-4 flex gap-0.5" aria-label={`${review.rating} av 5 stjerner`}>
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="leading-relaxed text-muted-foreground">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-semibold text-primary">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {review.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
