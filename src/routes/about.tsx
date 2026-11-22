import { createFileRoute } from "@tanstack/react-router";
import { BookingActions } from "@/components/ds/booking";
import { LICENSE_VERIFY_URL, SiteFooter, SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/about")({
  component: About,
});

const PSYCHOLOGY_TODAY =
  "https://www.psychologytoday.com/us/therapists/sarah-ateia-khattab-supervised-by-don-zablosky-l-irving-tx/1869085";

const H2 = "mt-12 font-serif text-2xl leading-snug text-foreground sm:text-3xl";
const P = "mt-4 text-base leading-relaxed text-muted-foreground";
const UL =
  "mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground marker:text-taupe";
const A = "underline underline-offset-4 hover:text-foreground";

/**
 * The one page that says plainly who Sarah is, what makes her counseling different, and what she
 * doesn't do. Search engines and AI answer engines treat a page like this as the main source
 * about a person, so keep it factual and consistent with directory profiles.
 */
function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader arabicHref="/ar/about/" />
      <main id="main" className="mx-auto max-w-3xl px-6 pt-44 max-[340px]:pt-48 pb-20 sm:pt-40">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <a href="/" className="inline-flex min-h-11 items-center hover:text-foreground">
            Home
          </a>
        </nav>
        <p className="mt-4 text-sm font-semibold text-clay">About</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
          About Sarah Ateia, LPC Associate
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Sarah Ateia, LPC Associate, supervised by Don Zablosky, LPC-S, is a counselor based in
          Irving, Texas (LPC Associate #104391, M.S.). She offers walk and talk counseling outdoors
          in Irving and across Dallas–Fort Worth, and telehealth anywhere in Texas, in English and
          Arabic. Her approach is holistic and mind-body: learning to work with your biology instead
          of against it.
        </p>
        <BookingActions className="mt-8" />

        <h2 className={H2}>What makes Sarah Ateia’s counseling different?</h2>
        <p className={P}>
          Sarah’s counseling combines outdoor sessions, two languages, and a mind-body approach,
          with fees that can be lowered based on income.
        </p>
        <ul className={UL}>
          <li>
            <a href="/walk-and-talk-therapy-dallas/" className={A}>
              Walk and talk therapy
            </a>{" "}
            outdoors, usually on a trail in Irving, instead of an office
          </li>
          <li>
            <a href="/telehealth-counseling-texas/" className={A}>
              Telehealth
            </a>{" "}
            for anyone located in Texas at the time of the session
          </li>
          <li>
            Sessions in English or{" "}
            <a href="/arabic-counseling/" className={A}>
              Arabic
            </a>
            , with respect for every culture, faith, or none
          </li>
          <li>
            A{" "}
            <a href="/holistic-counseling/" className={A}>
              holistic, mind-body approach
            </a>{" "}
            that pays attention to sleep, stress, movement and the nervous system, not only thoughts
          </li>
          <li>
            Self-pay with a{" "}
            <a href="/affordable-therapy-dallas/" className={A}>
              sliding scale
            </a>{" "}
            and a free 15-minute phone consultation
          </li>
        </ul>

        <h2 className={H2}>What are Sarah Ateia’s credentials?</h2>
        <p className={P}>
          Sarah is a Licensed Professional Counselor Associate and a National Certified Counselor,
          with a master’s degree in counseling.
        </p>
        <ul className={UL}>
          <li>
            LPC Associate #104391, Texas Behavioral Health Executive Council, supervised by Don
            Zablosky, LPC-S, LMFT-S, NCC
          </li>
          <li>
            National Certified Counselor (NCC) #1746909, National Board for Certified Counselors
          </li>
          <li>M.S., Psychology (Counseling &amp; Human Development), Texas Woman’s University</li>
          <li>B.S., Psychology, The University of Texas at Dallas</li>
          <li>
            Before counseling, worked as a transcranial magnetic stimulation (TMS) technician in an
            integrative psychiatry practice. She does not provide TMS.
          </li>
        </ul>
        <p className={P}>
          You can confirm any Texas counseling license on the{" "}
          <a href={LICENSE_VERIFY_URL} className={A}>
            state license verification site
          </a>
          . Read more about{" "}
          <a href="/resources/what-is-an-lpc-associate/" className={A}>
            what an LPC Associate is
          </a>
          .
        </p>

        <h2 className={H2}>What does Sarah Ateia help with?</h2>
        <p className={P}>
          Sarah works with adults and young adults on anxiety, low mood, ADHD, stress, burnout, life
          transitions and relationship patterns.
        </p>
        <ul className={UL}>
          <li>
            <a href="/anxiety-therapy-dallas/" className={A}>
              Anxiety therapy
            </a>{" "}
            and{" "}
            <a href="/depression-counseling-dallas/" className={A}>
              depression counseling
            </a>
          </li>
          <li>
            <a href="/adhd-therapy/" className={A}>
              Adult ADHD counseling
            </a>{" "}
            and{" "}
            <a href="/young-adult-counseling/" className={A}>
              counseling for young adults
            </a>
          </li>
          <li>
            Burnout, stress and{" "}
            <a href="/resources/nervous-system-regulation-techniques/" className={A}>
              nervous system regulation
            </a>
          </li>
        </ul>

        <h2 className={H2}>Where does Sarah Ateia see clients?</h2>
        <p className={P}>
          Sarah sees clients outdoors in Dallas–Fort Worth, with Irving as home base, and by
          telehealth anywhere in Texas. There is no office.
        </p>
        <p className={P}>
          In-person sessions serve{" "}
          <a href="/counseling-irving-tx/" className={A}>
            Irving
          </a>
          ,{" "}
          <a href="/counseling-las-colinas-tx/" className={A}>
            Las Colinas
          </a>
          ,{" "}
          <a href="/counseling-dallas-tx/" className={A}>
            Dallas
          </a>
          ,{" "}
          <a href="/counseling-coppell-tx/" className={A}>
            Coppell
          </a>
          ,{" "}
          <a href="/counseling-grand-prairie-tx/" className={A}>
            Grand Prairie
          </a>{" "}
          and{" "}
          <a href="/counseling-farmers-branch-tx/" className={A}>
            Farmers Branch
          </a>
          .
        </p>

        <h2 className={H2}>How much does counseling with Sarah Ateia cost?</h2>
        <p className={P}>
          Counseling with Sarah is self-pay: $100 per session, with optional packages of 6 sessions
          for $540 or 8 sessions for $640, and reduced rates based on household income.
        </p>
        <p className={P}>
          She doesn’t bill insurance. You have the right to a Good Faith Estimate of expected
          charges before services begin. See{" "}
          <a href="/resources/therapy-cost-without-insurance/" className={A}>
            what therapy costs without insurance
          </a>
          .
        </p>

        <h2 className={H2}>What doesn’t Sarah Ateia do?</h2>
        <p className={P}>
          Sarah offers talk therapy only. Being clear about this helps you find the right care.
        </p>
        <ul className={UL}>
          <li>
            She doesn’t diagnose ADHD or provide ADHD evaluations.{" "}
            <a href="/resources/can-a-therapist-diagnose-adhd/" className={A}>
              Here’s who does
            </a>
            .
          </li>
          <li>She doesn’t prescribe medication.</li>
          <li>She doesn’t bill insurance.</li>
          <li>
            She isn’t a crisis service. In crisis, call or text 988, call 911, or see{" "}
            <a href="/crisis/" className={A}>
              24/7 crisis lines in Dallas–Fort Worth
            </a>
            .
          </li>
        </ul>

        <h2 className={H2}>Where else can I find Sarah Ateia?</h2>
        <p className={P}>
          Sarah Ateia also goes by Sarah Ateia Khattab, the name on her{" "}
          <a href={PSYCHOLOGY_TODAY} className={A}>
            Psychology Today profile
          </a>
          . Both names refer to the same Irving, Texas LPC Associate. She writes plain-language
          guides in{" "}
          <a href="/resources/" className={A}>
            Resources
          </a>{" "}
          and the{" "}
          <a href="/blog/" className={A}>
            blog
          </a>
          .
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
