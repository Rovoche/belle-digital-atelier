import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404 — Not Found</p>
        <h1 className="display-lg mt-6">This page does not exist</h1>
        <p className="mt-4 text-sm text-mute">The page you're looking for is unavailable.</p>
        <Link to="/" className="mt-8 inline-block border-b border-ink pb-1 text-sm tracking-widest uppercase">
          Return to the atelier
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Something interrupted</p>
        <h1 className="display-lg mt-6">This page didn't load</h1>
        <div className="mt-8 flex justify-center gap-4 text-sm uppercase tracking-widest">
          <button onClick={() => { router.invalidate(); reset(); }} className="border-b border-ink pb-1">Try again</button>
          <a href="/" className="border-b border-ink pb-1">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Belle By Essy — Luxury Bridal & Occasion Couture" },
      { name: "description", content: "A Nigerian luxury fashion house crafting bridal, evening, and heritage couture for a discerning international clientele. By private consultation." },
      { name: "author", content: "Belle By Essy" },
      { name: "keywords", content: "luxury bridal couture, Nigerian fashion designer, custom bridal gowns, evening couture, occasion wear, Asooke, kaftan, heritage couture" },
      { property: "og:title", content: "Belle By Essy — Luxury Bridal & Occasion Couture" },
      { property: "og:description", content: "A Nigerian luxury fashion house crafting bridal, evening, and heritage couture for a discerning international clientele. By private consultation." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/ivory-rose-2.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/ivory-rose-2.jpg" },
      { name: "twitter:title", content: "Belle By Essy — Luxury Bridal & Occasion Couture" },
      { name: "twitter:description", content: "A Nigerian luxury fashion house crafting bridal, evening, and heritage couture for a discerning international clientele. By private consultation." },
      { name: "theme-color", content: "#f6f2e9" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/jpeg", href: "/favicon.jpg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FashionBrand",
          name: "Belle By Essy",
          description: "Luxury bridal and occasion couture house based in Nigeria.",
          url: "/",
          logo: "/logo.png",
          sameAs: ["https://www.instagram.com/belle_byessy/"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
