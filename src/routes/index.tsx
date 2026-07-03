import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { RovocheModal } from "@/components/RovocheModal";
import sapphireVideo from "../../public/sapphire-heritage-kaftan.mp4.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
});

const WHATSAPP = "https://wa.me/2348000000000";
const INSTAGRAM = "https://www.instagram.com/belle_byessy/";

const signaturePieces = [
  {
    name: "Midnight Amethyst Gown",
    kind: "Evening Couture",
    year: "N° 001",
    img: "/midnight-amethyst-1.jpg",
    detail: "/midnight-amethyst-3.jpg",
    note: "Sculpted silhouette in liquid amethyst. Hand-set crystal work along a plunging neckline, finished with a sweeping cathedral train.",
  },
  {
    name: "Royal Fuchsia Asooke Ensemble",
    kind: "Traditional Luxury",
    year: "N° 002",
    img: "/royal-fuchsia-1.jpg",
    detail: "/royal-fuchsia-2.jpg",
    note: "Heirloom Asooke reimagined. Regal fuchsia weave, structured shoulder architecture, embroidered with heritage motifs by master hands.",
  },
  {
    name: "Ivory Rose Bridal Gown",
    kind: "Bridal Couture",
    year: "N° 003",
    img: "/ivory-rose-2.jpg",
    detail: "/ivory-rose-6.jpg",
    note: "A modern bride's heirloom. Fluid ivory silk, three-dimensional rose appliqué, and a whisper-fine tulle veil — six months in the making.",
  },
  {
    name: "Sapphire Heritage Kaftan",
    kind: "Native Wear",
    year: "N° 004",
    img: "/sapphire-kaftan-1.jpg",
    detail: "/sapphire-kaftan-3.jpg",
    note: "A ceremonial kaftan in deep sapphire. Gilded thread-work, floor-sweeping drape, tailored for occasions of consequence.",
  },
];

const journey = [
  { n: "I",   t: "Discovery",     d: "A private introduction to the house and an exploration of your vision." },
  { n: "II",  t: "Consultation",  d: "Studio or virtual atelier session. Reference-building, silhouette, colour direction." },
  { n: "III", t: "Design",        d: "Hand-illustrated concepts, fabric curation, first fitting swatches." },
  { n: "IV",  t: "Craftsmanship", d: "The garment is patterned, cut and hand-finished by our atelier team." },
  { n: "V",   t: "Final Fitting", d: "Precision fittings until the piece sits as though sculpted." },
  { n: "VI",  t: "Collection",    d: "Delivered in signature Belle By Essy presentation. Worldwide dispatch available." },
];

const pillars = [
  { t: "International Clients",  d: "Dressing brides and clients across Lagos, London, Dubai, Houston and beyond." },
  { t: "Luxury Craftsmanship",   d: "A hand-finished discipline. Every seam, every bead, considered." },
  { t: "Private Consultations",  d: "By appointment only. Intimate sessions, undivided attention." },
  { t: "Timely Delivery",        d: "Structured production timelines, transparent milestones, on-time collection." },
  { t: "Custom Design Process",  d: "No two commissions alike. Each piece drafted from your story." },
];

function Home() {
  return (
    <div className="bg-ivory text-ink">
      <RovocheModal />
      <Nav />
      <Hero />
      <Marquee />
      <Collections />
      <SignaturePieces />
      <About />
      <Journey />
      <Pillars />
      <InstagramBlock />
      <Contact />
      <Footer />
    </div>
  );
}

/* ─────────────────────────── NAV ─────────────────────────── */
const navLinks = [
  { href: "#collections", label: "Collections" },
  { href: "#signature", label: "Signature" },
  { href: "#journey", label: "Couture Journey" },
  { href: "#about", label: "Maison" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/80 backdrop-blur-md border-b border-line/60">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-3 md:px-12 md:py-5">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Belle By Essy" className="h-14 w-auto md:h-16" />
        </a>

        <nav className="hidden gap-10 text-[0.7rem] uppercase tracking-[0.28em] text-ink-soft md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink transition">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block border-b border-ink pb-1 text-[0.7rem] uppercase tracking-[0.28em]"
        >
          Book Consultation
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden -mr-2 p-2 text-ink"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden border-t border-line/60 bg-ivory transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 text-sm uppercase tracking-[0.28em] text-ink-soft">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/40 py-4 hover:text-ink transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-block border border-ink px-6 py-3 text-center text-[0.7rem] uppercase tracking-[0.28em]"
          >
            Book Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/ivory-rose-3.jpg"
          alt="Ivory Rose Bridal Gown editorial"
          className="h-full w-full object-cover fade-in-slow"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/10 via-ink/10 to-ink/60" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-between px-6 pt-32 pb-10 md:px-12 md:pt-40 md:pb-16">
        <div className="fade-up">
          <p className="eyebrow text-ivory/80">Maison — Est. Lagos</p>
        </div>

        <div className="max-w-4xl fade-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="display-xl text-ivory">
            Couture, <em className="italic font-light">quietly</em>
            <br /> composed.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/85 md:text-lg">
            Belle By Essy is a Nigerian luxury fashion house dressing brides and women of consequence — one hand-finished garment at a time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 md:gap-6">
            <a href="#collections" className="group inline-flex items-center gap-3 border border-ivory bg-ivory px-7 py-4 text-[0.7rem] uppercase tracking-[0.32em] text-ink transition hover:bg-transparent hover:text-ivory">
              Explore Collection
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 border border-ivory/60 px-7 py-4 text-[0.7rem] uppercase tracking-[0.32em] text-ivory transition hover:border-ivory">
              Book a Consultation
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-[0.7rem] uppercase tracking-[0.32em] text-ivory/85 border-b border-ivory/40 pb-1 hover:border-ivory">
              Instagram
            </a>
          </div>
        </div>

        <div className="flex items-end justify-between gap-6 text-ivory/70">
          <div className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll — The Atelier</div>
          <div className="hidden text-right text-xs italic md:block">
            <em>“The bride wore a whisper.”</em>
            <div className="mt-1 not-italic text-[0.65rem] uppercase tracking-[0.3em]">Editorial 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── MARQUEE ─────────────────────────── */
function Marquee() {
  const items = ["Bridal Couture", "Evening Couture", "Heritage & Traditional", "Native Ceremonial", "Private Commissions", "International Delivery"];
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-line/70 bg-bone py-5 overflow-hidden">
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((it, i) => (
          <span key={i} className="mx-8 flex items-center gap-8 text-[0.7rem] uppercase tracking-[0.4em] text-ink-soft">
            {it}
            <span className="inline-block h-1 w-1 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── COLLECTIONS ─────────────────────────── */
function Collections() {
  const cats = [
    { label: "01 — Bridal", title: "Bridal Couture", img: "/ivory-rose-4.jpg", note: "Heirloom gowns for the modern bride." },
    { label: "02 — Evening", title: "Evening Couture", img: "/midnight-amethyst-2.jpg", note: "Sculpted silhouettes for occasions of consequence." },
    { label: "03 — Heritage", title: "Traditional Luxury", img: "/royal-fuchsia-2.jpg", note: "Asooke and heritage cloth, elevated." },
    { label: "04 — Ceremonial", title: "Native Wear", img: "/sapphire-kaftan-2.jpg", note: "Kaftans and ceremonial dress." },
  ];
  return (
    <section id="collections" className="px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">The House — Chapter I</p>
            <h2 className="display-lg mt-6 max-w-2xl">Four disciplines. <em className="italic font-light">One hand.</em></h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Each chapter of the house speaks a different language — but every stitch shares the same accent.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-12">
          {cats.map((c, i) => (
            <a key={c.title} href="#signature" className="group block">
              <div className={`relative overflow-hidden bg-bone ${i % 2 === 1 ? "md:mt-24" : ""}`}>
                <img src={c.img} alt={c.title} loading="lazy" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              </div>
              <div className="mt-6 flex items-baseline justify-between gap-6">
                <div>
                  <p className="eyebrow">{c.label}</p>
                  <h3 className="display-lg mt-2 text-3xl md:text-4xl">{c.title}</h3>
                </div>
                <span className="text-[0.7rem] uppercase tracking-[0.3em] text-ink-soft group-hover:text-ink transition">View →</span>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">{c.note}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SIGNATURE PIECES ─────────────────────────── */
function SignaturePieces() {
  return (
    <section id="signature" className="border-t border-line/60 bg-bone px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 text-center md:mb-28">
          <p className="eyebrow">The Archive — Chapter II</p>
          <h2 className="display-lg mt-6">Signature <em className="italic font-light">Pieces</em></h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
            A curated selection from recent private commissions.
          </p>
        </div>

        <div className="space-y-32 md:space-y-48">
          {signaturePieces.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <article key={p.name} className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
                <div className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}>
                  <div className="relative overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                  </div>
                </div>
                <div className={`md:col-span-5 ${reversed ? "md:order-1 md:pr-8" : "md:pl-8"}`}>
                  <p className="eyebrow text-gold">{p.year}</p>
                  <p className="eyebrow mt-3 text-mute">{p.kind}</p>
                  <h3 className="display-lg mt-6 leading-[1.05]">{p.name}</h3>
                  <div className="my-8 h-px w-16 bg-ink/40" />
                  <p className="text-base leading-relaxed text-ink-soft">{p.note}</p>
                  <div className="mt-10 flex items-center gap-4">
                    <a href="#contact" className="border-b border-ink pb-1 text-[0.7rem] uppercase tracking-[0.3em]">Enquire About This Piece</a>
                  </div>
                  <div className="mt-10 aspect-[4/3] overflow-hidden">
                    <img src={p.detail} alt={`${p.name} detail`} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── ABOUT ─────────────────────────── */
function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-24">
        <div className="md:col-span-5">
          <div className="sticky top-32 overflow-hidden">
            <img src="/ivory-rose-5.jpg" alt="Atelier hand-work" loading="lazy" className="aspect-[3/4] w-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-7 md:pt-10">
          <p className="eyebrow">The Maison — Chapter III</p>
          <h2 className="display-lg mt-6">
            A quiet <em className="italic font-light">discipline</em> of hand-finished couture.
          </h2>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>Belle By Essy is a Lagos-based house building garments for the woman who has already decided who she is.</p>
            <p>We work in small numbers. Each commission is drafted, cut and hand-finished within our atelier — never rushed, never repeated.</p>
            <p>Our clients arrive by referral, from three continents, for weddings, ceremonies and moments that deserve permanence.</p>
          </div>
          <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-line pt-10 md:grid-cols-3">
            <div><dt className="eyebrow">Founded</dt><dd className="mt-2 font-display text-3xl">Lagos</dd></div>
            <div><dt className="eyebrow">Commissions</dt><dd className="mt-2 font-display text-3xl">By Invitation</dd></div>
            <div><dt className="eyebrow">Delivery</dt><dd className="mt-2 font-display text-3xl">Worldwide</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── JOURNEY ─────────────────────────── */
function Journey() {
  return (
    <section id="journey" className="relative overflow-hidden bg-ink px-6 py-24 text-ivory md:px-12 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-20 flex flex-col justify-between gap-8 md:mb-28 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-ivory/60">The Process — Chapter IV</p>
            <h2 className="display-lg mt-6 text-ivory">
              The Couture <em className="italic font-light">Journey</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/70">
            Six chapters, unhurried. From a first conversation to a garment collected in silk-lined tissue.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {journey.map((s) => (
            <li key={s.n} className="group border-t border-ivory/20 pt-6">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-4xl italic text-gold">{s.n}</span>
                <span className="eyebrow text-ivory/50">Chapter</span>
              </div>
              <h3 className="mt-6 font-display text-3xl text-ivory">{s.t}</h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────────────────── PILLARS ─────────────────────────── */
function Pillars() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-20 text-center">
          <p className="eyebrow">The Standard — Chapter V</p>
          <h2 className="display-lg mt-6">The Client <em className="italic font-light">Experience</em></h2>
        </div>

        <div className="grid grid-cols-1 gap-px bg-line md:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <div key={p.t} className="group relative bg-ivory p-10 transition-colors duration-500 hover:bg-bone">
              <span className="eyebrow text-gold">{`0${i + 1}`}</span>
              <h3 className="mt-6 font-display text-2xl leading-tight">{p.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          <video className="aspect-[3/4] w-full object-cover" src="/royal-fuchsia-1.mp4" muted loop playsInline autoPlay preload="metadata" />
          <video className="aspect-[3/4] w-full object-cover" src="/ivory-rose-video.mp4" muted loop playsInline autoPlay preload="metadata" />
          <video className="aspect-[3/4] w-full object-cover" src={sapphireVideo.url} muted loop playsInline autoPlay preload="metadata" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── INSTAGRAM ─────────────────────────── */
function InstagramBlock() {
  const imgs = ["/ivory-rose-1.jpg", "/midnight-amethyst-3.jpg", "/royal-fuchsia-1.jpg", "/sapphire-kaftan-3.jpg", "/ivory-rose-7.jpg", "/midnight-amethyst-2.jpg"];
  return (
    <section className="border-t border-line/60 bg-bone px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">The Atelier — Behind the Scenes</p>
            <h2 className="display-lg mt-6">Instagram <em className="italic font-light">@belle_byessy</em></h2>
          </div>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="border-b border-ink pb-1 text-[0.7rem] uppercase tracking-[0.32em]">
            See more behind the scenes on Instagram →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {imgs.map((src, i) => (
            <a key={i} href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="group relative block overflow-hidden">
              <img src={src} loading="lazy" alt="Behind the scenes" className="aspect-square w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CONTACT ─────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-24">
          <div className="md:col-span-6">
            <p className="eyebrow">By Appointment — Chapter VI</p>
            <h2 className="display-xl mt-6">
              Begin a <em className="italic font-light">private</em>
              <br /> conversation.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft">
              Consultations are held privately in our Lagos atelier or virtually for international clientele. Kindly share your event date, garment intention and city — we will respond within one business day.
            </p>
          </div>

          <div className="md:col-span-6 md:pt-6">
            <ul className="divide-y divide-line">
              <li className="grid grid-cols-[9rem_1fr] gap-6 py-6">
                <span className="eyebrow pt-1">WhatsApp</span>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between font-display text-2xl md:text-3xl">
                  <span>Begin an Enquiry</span>
                  <span className="text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </li>
              <li className="grid grid-cols-[9rem_1fr] gap-6 py-6">
                <span className="eyebrow pt-1">Instagram</span>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between font-display text-2xl md:text-3xl">
                  <span>@belle_byessy</span>
                  <span className="text-base transition-transform group-hover:translate-x-1">→</span>
                </a>
              </li>
              <li className="grid grid-cols-[9rem_1fr] gap-6 py-6">
                <span className="eyebrow pt-1">Correspondence</span>
                <a href="mailto:atelier@bellebyessy.com" className="font-display text-2xl md:text-3xl">atelier@bellebyessy.com</a>
              </li>
              <li className="grid grid-cols-[9rem_1fr] gap-6 py-6">
                <span className="eyebrow pt-1">Atelier</span>
                <span className="font-display text-2xl md:text-3xl">Lagos, Nigeria<br /><span className="text-base text-mute">By private appointment</span></span>
              </li>
              <li className="grid grid-cols-[9rem_1fr] gap-6 py-6">
                <span className="eyebrow pt-1">Hours</span>
                <span className="font-display text-2xl md:text-3xl">Mon — Sat<br /><span className="text-base text-mute">10:00 — 18:00 WAT</span></span>
              </li>
            </ul>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-4 border border-ink bg-ink px-8 py-4 text-[0.7rem] uppercase tracking-[0.32em] text-ivory transition hover:bg-ivory hover:text-ink"
            >
              Book Consultation via WhatsApp
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-line bg-ivory px-6 pb-10 pt-20 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <img src="/logo.png" alt="Belle By Essy" className="h-10 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-soft">
              A Nigerian luxury fashion house crafting bridal and occasion couture, by private consultation.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li><a href="#collections" className="hover:text-gold transition">Collections</a></li>
              <li><a href="#signature" className="hover:text-gold transition">Signature Pieces</a></li>
              <li><a href="#journey" className="hover:text-gold transition">Couture Journey</a></li>
              <li><a href="#about" className="hover:text-gold transition">The Maison</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">WhatsApp Atelier</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">Instagram — @belle_byessy</a></li>
              <li><a href="mailto:atelier@bellebyessy.com" className="hover:text-gold transition">atelier@bellebyessy.com</a></li>
              <li className="text-mute">Lagos, Nigeria · By appointment</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-line pt-8 text-xs text-mute md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Belle By Essy. All rights reserved.</span>
          <span className="uppercase tracking-[0.3em]">Luxury Bridal · Evening · Heritage · Native</span>
        </div>

        {/* Rovoche signature block */}
        <div className="mt-16 border-t border-ink/80 pt-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
            <div className="h-px w-16 bg-gold" />
            <p className="font-display text-2xl leading-tight md:text-3xl">
              Built on Rock. <em className="italic font-light">Crafted to Last.</em>
            </p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.5em] text-ink">— Rovoche</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-[0.35em] text-mute">
              Demo Experience for Belle By Essy
            </p>
            <div className="h-px w-16 bg-gold" />
          </div>
        </div>
      </div>
    </footer>
  );
}
