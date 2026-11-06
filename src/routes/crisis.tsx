import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Phone } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/crisis")({
  component: Crisis,
});

// Numbers verified against each organization's site and the Texas HHS
// local mental health authority directory. Re-check when updating LAST_REVIEWED.
const LAST_REVIEWED = "November 2026";

type Resource = {
  name: string;
  detail: string;
  contacts: { label: string; href: string }[];
};

const NATIONAL: Resource[] = [
  {
    name: "988 Suicide & Crisis Lifeline",
    detail:
      "Free, confidential, 24/7 support by call, text, or chat. Interpretation is available in more than 240 languages, including Arabic.",
    contacts: [
      { label: "Call or text 988", href: "tel:988" },
      { label: "Chat at 988lifeline.org", href: "https://988lifeline.org/chat/" },
    ],
  },
  {
    name: "Crisis Text Line",
    detail: "24/7 support by text with a trained crisis counselor.",
    contacts: [{ label: "Text HOME to 741741", href: "sms:741741?body=HOME" }],
  },
  {
    name: "Veterans Crisis Line",
    detail: "For veterans, service members, and their families. 24/7.",
    contacts: [
      { label: "Dial 988, then press 1", href: "tel:988" },
      { label: "Text 838255", href: "sms:838255" },
    ],
  },
  {
    name: "The Trevor Project",
    detail: "24/7 crisis support for LGBTQ+ young people.",
    contacts: [
      { label: "1-866-488-7386", href: "tel:+18664887386" },
      { label: "Text START to 678678", href: "sms:678678?body=START" },
    ],
  },
  {
    name: "Trans Lifeline",
    detail: "Peer support run by and for trans people. Check their site for current hours.",
    contacts: [{ label: "1-877-565-8860", href: "tel:+18775658860" }],
  },
  {
    name: "SAMHSA National Helpline",
    detail: "Free, 24/7 treatment referral and information for mental health and substance use.",
    contacts: [{ label: "1-800-662-4357", href: "tel:+18006624357" }],
  },
];

const COUNTY_LINES: Resource[] = [
  {
    name: "Dallas County: NTBHA",
    detail:
      "North Texas Behavioral Health Authority, 24/7 crisis line and mobile crisis. Also serves Ellis, Hunt, Kaufman, Navarro, and Rockwall counties.",
    contacts: [{ label: "866-260-8000", href: "tel:+18662608000" }],
  },
  {
    name: "Tarrant County: My Health My Resources (MHMR)",
    detail: "24/7 ICARE crisis line, including mobile crisis outreach.",
    contacts: [
      { label: "817-335-3022", href: "tel:+18173353022" },
      { label: "800-866-2465", href: "tel:+18008662465" },
    ],
  },
  {
    name: "Collin County: LifePath Systems",
    detail: "24/7 crisis line.",
    contacts: [{ label: "877-422-5939", href: "tel:+18774225939" }],
  },
  {
    name: "Denton County MHMR",
    detail: "24/7 crisis line.",
    contacts: [{ label: "800-762-0157", href: "tel:+18007620157" }],
  },
  {
    name: "Johnson County: Pecan Valley Centers",
    detail: "24/7 crisis line.",
    contacts: [{ label: "800-772-5987", href: "tel:+18007725987" }],
  },
];

const SAFETY: Resource[] = [
  {
    name: "Genesis Women’s Shelter & Support",
    detail: "24-hour helpline for domestic violence, call or text. Dallas.",
    contacts: [{ label: "214-946-4357", href: "tel:+12149464357" }],
  },
  {
    name: "The Family Place",
    detail: "24-hour family violence hotline. Dallas.",
    contacts: [{ label: "214-941-1991", href: "tel:+12149411991" }],
  },
  {
    name: "Dallas Area Rape Crisis Center (DARCC)",
    detail: "24-hour hotline for survivors of sexual assault.",
    contacts: [{ label: "972-641-7273", href: "tel:+19726417273" }],
  },
  {
    name: "National Domestic Violence Hotline",
    detail: "24/7, confidential.",
    contacts: [
      { label: "1-800-799-7233", href: "tel:+18007997233" },
      { label: "Text START to 88788", href: "sms:88788?body=START" },
    ],
  },
];

function Crisis() {
  useEffect(() => {
    document.title =
      "Crisis Resources in Dallas–Fort Worth | Sarah Ateia Khattab, LPC Associate, supervised by Don Zablosky, LPC-S";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="main" className="mx-auto max-w-4xl px-6 pt-32 max-[340px]:pt-36 pb-24 sm:pt-40">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Crisis resources</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          If you need help right now.
        </h1>

        <div className="mt-8 rounded-3xl bg-primary px-6 py-8 text-primary-foreground sm:px-10">
          <p className="font-serif text-2xl leading-snug sm:text-3xl">
            If you or someone else is in immediate danger, call 911 or go to the nearest emergency
            room.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:911"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call 911
            </a>
            <a
              href="tel:988"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-medium"
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call or text 988
            </a>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-primary-foreground/80">
            My practice doesn’t provide emergency services, and calls and messages may not be
            answered right away. Please use the resources on this page instead.
          </p>
          <p
            lang="ar"
            dir="rtl"
            className="mt-4 border-t border-primary-foreground/20 pt-4 text-base leading-relaxed"
          >
            هل تحتاج إلى مساعدة باللغة العربية؟ اتصل بالرقم 988 واطلب مترجمًا فوريًا.
          </p>
        </div>

        <ResourceGroup title="24/7 national lines" items={NATIONAL} />
        <ResourceGroup
          title="Dallas–Fort Worth county crisis lines"
          note="Your county’s mental health authority runs a 24/7 crisis line and can send a mobile crisis team."
          items={COUNTY_LINES}
        />
        <ResourceGroup title="Domestic violence & sexual assault" items={SAFETY} />

        <p className="mt-14 text-xs leading-relaxed text-muted-foreground">
          Last reviewed {LAST_REVIEWED}. Numbers can change. If one doesn’t connect, call or text
          988. These organizations are independent of my practice.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}

function ResourceGroup({
  title,
  note,
  items,
}: {
  title: string;
  note?: string;
  items: Resource[];
}) {
  return (
    <section className="mt-16">
      <h2 className="font-serif text-2xl text-foreground sm:text-3xl">{title}</h2>
      {note && <p className="mt-2 text-sm text-muted-foreground">{note}</p>}
      <ul className="mt-6 divide-y divide-border rounded-3xl border border-border bg-card">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
          >
            <div className="sm:max-w-md">
              <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {item.contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="whitespace-nowrap rounded-full border border-primary/30 bg-background px-4 py-2 text-sm text-primary-foreground transition hover:border-primary hover:bg-secondary"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
