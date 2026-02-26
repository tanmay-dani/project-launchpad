import ScrollReveal from "./ScrollReveal";
import trustpilotLogo from "@/assets/trustpilot-logo.svg";
import trustpilotStars from "@/assets/trustpilot-stars-4.svg";
import { reviews } from "@/data/reviews";

const TPStar = ({ filled }: { filled: boolean }) => (
  <div
    className="inline-flex items-center justify-center"
    style={{
      width: 20,
      height: 20,
      backgroundColor: filled ? '#00b67a' : '#dcdce6',
      borderRadius: 2,
    }}
  >
    <svg width="12" height="12" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 0L15.65 8.74H25L17.17 14.14L20.33 22.88L12.5 17.48L4.67 22.88L7.83 14.14L0 8.74H9.35L12.5 0Z"
        fill="white"
      />
    </svg>
  </div>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <TPStar key={i} filled={i < rating} />
    ))}
  </div>
);

const TrustpilotReviews = () => {
  return (
    <section className="py-16 px-4 border-t border-border/40">
      <div className="container max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <a href="https://www.trustpilot.com/review/thepremiumnest.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 mb-3 hover:opacity-80 transition-opacity">
              <img src={trustpilotStars} alt="Trustpilot 4 stars" className="h-6" />
              <span className="text-sm font-medium text-muted-foreground">
                4.3 out of 5 · 7 reviews on
              </span>
              <img src={trustpilotLogo} alt="Trustpilot" className="h-5" />
            </a>
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
