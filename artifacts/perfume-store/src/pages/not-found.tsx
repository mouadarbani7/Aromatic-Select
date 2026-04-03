import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-7xl md:text-8xl mb-6 text-primary">404</h1>
        <h2 className="font-serif text-3xl mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-10 leading-relaxed font-light">
          The page you are looking for has evaporated into the ether. 
          Return to the atelier to discover our collections.
        </p>
        <Link href="/" className="inline-block border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase transition-all">
          Return Home
        </Link>
      </div>
    </div>
  );
}
