export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

function LogoMark() {
  // Simple MWT logo mark (SVG) in your cyan scheme
  return (
    <div className="grid h-10 w-10 place-items-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-sm">
      <span className="text-sm font-extrabold tracking-tight text-[color:var(--primary)]">
        MWT
      </span>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-[color:var(--bg)]/70 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <LogoMark />
            <div className="leading-tight">
              <div className="text-base font-semibold tracking-tight">
                Mathew <span className="text-white/70">Web & Tech</span>
              </div>
              <div className="text-xs text-[color:var(--muted)]">Websites for small businesses</div>
            </div>
          </div>

          <a
            href="#contact"
            className="rounded-xl bg-[color:var(--primary)] px-4 py-2 text-sm font-semibold text-black hover:bg-[color:var(--primaryDark)]"
          >
            Get a free quote
          </a>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/5 px-3 py-1 text-xs text-[color:var(--primary)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--primary)]" />
              Affordable websites for small businesses
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              A clean website that helps small businesses get customers.
            </h1>

            <p className="mt-4 max-w-xl text-base text-[color:var(--muted)] md:text-lg">
              No agency prices. No confusing jargon. Just a modern, mobile-friendly website that makes your business
              look trustworthy.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-black hover:bg-[color:var(--primaryDark)]"
              >
                Get a free quote
              </a>
              <a
                href="#pricing"
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] px-6 py-3 text-sm font-semibold text-white hover:border-[color:var(--primary)]"
              >
                See pricing
              </a>
            </div>

            <div className="mt-6 grid gap-2 text-sm text-[color:var(--muted)]">
              <span>✅ Mobile-friendly</span>
              <span>✅ Fast loading</span>
              <span>✅ Local + worldwide</span>
              <span className="text-white/80">One-to-one service. No middlemen.</span>
            </div>
          </div>

          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
            <h2 className="text-lg font-semibold">What you get</h2>

            <div className="mt-4 grid gap-3 text-sm text-[color:var(--muted)]">
              <Feature title="Modern 1–5 page website">
                Perfect for trades, shops, and services.
              </Feature>
              <Feature title="Clear contact buttons">
                So customers can call or message fast.
              </Feature>
              <Feature title="Straightforward pricing">
                No hidden fees. No nonsense.
              </Feature>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Feature({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-[color:var(--border)] bg-white/5 p-4">
      <div className="font-semibold text-white">{title}</div>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function Pricing() {
  return (
    <section className="border-t border-[color:var(--border)] py-14" id="pricing">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Simple pricing</h2>
        <p className="mt-2 max-w-2xl text-[color:var(--muted)]">
          Keep it affordable and clear. You can change these prices anytime.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <PriceCard name="Starter" price="£100" desc="1-page site (landing page)">
            <li>Mobile-friendly</li>
            <li>Contact button</li>
            <li>Basic SEO</li>
          </PriceCard>

          <PriceCard
            name="Business"
            price="£300"
            desc="Up to 5 pages"
            featured
            badge="Most popular"
          >
            <li>Home + Services + About</li>
            <li>Contact section</li>
            <li>Better SEO setup</li>
          </PriceCard>

          <PriceCard name="Pro" price="£500" desc="More pages + extras">
            <li>More sections/features</li>
            <li>Bookings or forms</li>
            <li>Priority tweaks</li>
          </PriceCard>
        </div>
      </Container>
    </section>
  );
}

function PriceCard({
  name,
  price,
  desc,
  featured,
  badge,
  children,
}: {
  name: string;
  price: string;
  desc: string;
  featured?: boolean;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "rounded-2xl border bg-[color:var(--surface)] p-6 shadow-sm",
        featured
          ? "border-[color:var(--primary)] ring-1 ring-[color:var(--primary)]/30"
          : "border-[color:var(--border)]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="mt-2 text-sm text-[color:var(--muted)]">{desc}</p>
        </div>

        <div className="text-right">
          <div className="text-xl font-semibold text-[color:var(--primary)]">{price}</div>
          {badge ? (
            <div className="mt-2 inline-flex rounded-full border border-[color:var(--border)] bg-white/5 px-2.5 py-1 text-[11px] text-white/80">
              {badge}
            </div>
          ) : null}
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted)]">{children}</ul>
    </div>
  );
}

function Contact() {
  return (
    <section className="border-t border-[color:var(--border)] py-14" id="contact">
      <Container>
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 text-center shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Want a quote?</h2>
          <p className="mt-3 text-[color:var(--muted)]">
            Email me what your business is and what you need. I’ll reply with a clear price.
          </p>

          <a
  href="mailto:mathewwebandtech@gmail.com?subject=Website%20Quote%20Request&body=Hi%20Mathew%2C%0A%0AMy%20business%20name%3A%0AWhat%20I%20need%20(website%2FPC)%3A%0AApprox%20budget%3A%0APhone%20number%20(optional)%3A%0A%0AThanks%21"
  className="mt-6 inline-flex items-center justify-center rounded-xl bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-black hover:bg-[color:var(--primaryDark)]"
>
  Email me
</a>



          <p className="mt-4 text-sm text-white/70">
            Based in Northern Ireland — working worldwide
          </p>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-10">
      <Container>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[color:var(--muted)]">
            © {new Date().getFullYear()} Mathew Web & Tech
          </p>
          <p className="text-sm text-[color:var(--muted)]">
            Based in Northern Ireland — working worldwide
          </p>
        </div>
      </Container>
    </footer>
  );
}

