import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-new.png";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/", { replace: true });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <img src={logo} alt="The Premium Nest" className="mb-8 h-14 w-auto" />
      <h1 className="mb-2 text-6xl font-black text-foreground">404</h1>
      <p className="mb-2 text-xl text-muted-foreground">Oops! This page doesn't exist.</p>
      <p className="mb-6 text-sm text-muted-foreground">
        Redirecting to homepage in <span className="font-semibold text-primary">{countdown}s</span>…
      </p>
      <a
        href="/"
        className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
      >
        Go Home Now
      </a>
    </div>
  );
};

export default NotFound;
