import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
    <div className="text-center space-y-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-muted-foreground text-lg">Page not found</p>
      <Link to="/" className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition">
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;
