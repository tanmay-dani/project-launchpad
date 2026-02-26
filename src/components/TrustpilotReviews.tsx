import { reviews } from "@/data/reviews";
import trustpilotStars from "@/assets/trustpilot-stars-4.svg";
import trustpilotLogo from "@/assets/trustpilot-logo.svg";


// Single Trustpilot star matching their exact brand style
const TPStar = ({ filled }: { filled: boolean }) => (
  <div
    className="inline-flex items-center justify-center"
    style={{
      width: 22,
      height: 22,
      backgroundColor: filled ? '#00b67a' : '#dcdce6',
      borderRadius: 2,
    }}
  >
    <svg width="14" height="14" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export function TrustpilotReviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="mb-8 text-center">
        <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
          What Our Customers Say
        </h2>
        <p className="mt-2 text-muted-foreground">
          Real reviews from real customers on Trustpilot
        </p>

        <a
          href="https://www.trustpilot.com/review/thepremiumnest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#050816] px-4 py-2 text-xs sm:text-sm text-slate-200 transition hover:bg-black"
        >
          <img src={trustpilotStars} alt="Trustpilot 4.3 stars" className="h-5" />
          <span>4.3 out of 5 · 7 reviews on</span>
          <img src={trustpilotLogo} alt="Trustpilot" className="h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.name + review.date}
            className="flex h-full flex-col rounded-2xl border border-border bg-card/80 p-5 shadow-sm"
          >
            <header className="mb-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                    {review.name[0]}
                  </div>
                )}
                <div>
                  <p className="text-xs font-semibold text-foreground">{review.name}</p>
                  <p className="text-[11px] text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <StarRating rating={review.rating} />
            </header>

            <h3 className="mb-1 text-sm font-semibold text-foreground">{review.title}</h3>
            <p className="flex-1 text-xs leading-relaxed text-muted-foreground">
              “{review.text}”
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.trustpilot.com/review/thepremiumnest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-primary underline underline-offset-4 hover:text-primary/80"
        >
          See all reviews on Trustpilot →
        </a>
      </div>
    </section>
  );
}
