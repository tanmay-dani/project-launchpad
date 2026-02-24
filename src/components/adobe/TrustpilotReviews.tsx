import ScrollReveal from "./ScrollReveal";
import trustpilotLogo from "@/assets/trustpilot-logo.svg";
import trustpilotStars from "@/assets/trustpilot-stars-4.svg";
import { reviews } from "@/data/reviews";

const TrustpilotStar = ({ filled }: { filled: boolean }) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="1.5" fill={filled ? "#00b67a" : "#dcdce6"} />
    <path
      d="M12 4.5l2.39 4.84 5.34.78-3.87 3.77.91 5.33L12 16.77l-4.77 2.45.91-5.33-3.87-3.77 5.34-.78L12 4.5z"
      fill="white"
    />
  </svg>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <TrustpilotStar key={i} filled={i < rating} />
    ))}
  </div>
);

const TrustpilotReviews = () => {
  return (
    <section className="py-16 px-4 border-t border-border/40">
      <div className="container max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src={trustpilotStars} alt="Trustpilot 4 stars" className="h-6" />
              <span className="text-sm font-medium text-muted-foreground">
                4.2 out of 5 · 7 reviews on
              </span>
              <img src={trustpilotLogo} alt="Trustpilot" className="h-5" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              What Our Customers Say
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="bg-secondary/40 border border-border/50 rounded-xl p-5 h-full backdrop-blur-sm flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    {review.avatar ? (
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                        {review.name[0]}
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-semibold text-foreground">{review.name}</p>
                      <p className="text-[11px] text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1.5">{review.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  "{review.text}"
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-8">
            <a
              href="https://www.trustpilot.com/review/thepremiumnest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primary/80 underline underline-offset-4 transition-colors"
            >
              See all reviews on Trustpilot →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TrustpilotReviews;
