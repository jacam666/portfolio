import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Two connected offices",
    description:
      "Two office networks linked through a router, with a switch in each office connecting local devices.",
  },
  {
    number: "02",
    title: "Wired & wireless access",
    description:
      "Desktop PCs and printers sit alongside wireless laptops and smartphones in a realistic office layout.",
  },
  {
    number: "03",
    title: "Business services",
    description:
      "The topology includes dedicated servers for DHCP and email, bringing essential network services into the design.",
  },
];

const validation = [
  {
    title: "Local connectivity",
    detail: "Check communication between devices within each office.",
  },
  {
    title: "Communication between offices",
    detail: "Check addressing, gateways and routing between the two networks.",
  },
  {
    title: "Network services",
    detail: "Check DHCP address assignment and email delivery.",
  },
  {
    title: "Wireless access",
    detail: "Check client connections and access to the intended services.",
  },
];

export default function CyberSecurityCapstonePage() {
  return (
    <main className="min-h-screen bg-[#f3efe8] text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 lg:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"
        >
          <span aria-hidden="true">←</span>
          Back to portfolio
        </Link>

        <header className="relative mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-[#edf2f7] via-[#f8f5ef] to-[#ebe8df] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl"
          />

          <div className="relative">
            <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-800">
              Cyber security bootcamp · Capstone
            </span>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
              Two offices.
              <br />
              <span className="text-blue-700">One connected network.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              A simulated business network built in Cisco Packet Tracer,
              bringing together office connectivity, shared services and
              wireless access.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Cisco Packet Tracer",
                "IP addressing",
                "Routing & switching",
                "Wireless security",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-300 bg-white/75 px-3 py-1.5 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <dl className="relative mt-10 grid gap-6 border-t border-slate-300/80 pt-7 sm:grid-cols-3">
            {[
              ["Environment", "Bootcamp simulation"],
              ["Scope", "Two-office network"],
              ["Focus", "Connectivity & services"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-widest text-slate-500">
                  {label}
                </dt>
                <dd className="mt-2 text-sm font-semibold text-slate-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <section aria-labelledby="overview" className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            The brief
          </p>
          <h2
            id="overview"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900"
          >
            Connecting a small business
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-slate-700">
            This capstone explores how two office spaces can form a connected
            business network. The design includes employee devices, printers,
            an email server and a DHCP server, with both wired and wireless
            connections represented.
          </p>
        </section>

        <figure className="mt-8 overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-5 py-4">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-blue-600"
            />
            <span className="text-sm font-medium text-slate-700">
              Network topology
            </span>
          </div>

          <a
            href="/images/capstone-project.png"
            target="_blank"
            rel="noopener noreferrer"
            className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700"
            aria-label="Open full-size network diagram in a new tab"
          >
            <Image
              src="/images/capstone-project.png"
              alt="Cisco Packet Tracer diagram showing two offices connected by a router, with switches, servers, PCs, printers and wireless devices."
              width={1764}
              height={734}
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="h-auto w-full"
            />
          </a>

          <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
            Two-office lab topology. Select the image to explore the full-size
            diagram.
          </figcaption>
        </figure>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="font-mono text-sm font-semibold text-blue-700">
                {feature.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <section
          aria-labelledby="design"
          className="mt-16 grid gap-10 lg:grid-cols-2"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Network design
            </p>
            <h2
              id="design"
              className="mt-3 text-3xl font-semibold tracking-tight text-slate-900"
            >
              Addressing & access
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              Each office uses a different IP address range. Switches connect
              the local wired devices, while a router links the offices. The
              main office also includes wireless access for mobile devices.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              The diagram identifies WPA2-PSK for the wireless network.
              Separate address ranges organise the network; access control
              rules would be needed to restrict traffic between offices.
            </p>
          </div>

          <dl className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6 shadow-sm">
            {[
              ["Main office addresses", "192.168.1.x"],
              ["Office 2 addresses", "192.168.2.x"],
              ["Server roles", "DHCP & email"],
              ["Wireless security shown", "WPA2-PSK"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex flex-wrap items-center justify-between gap-3 py-6"
              >
                <dt className="text-sm text-slate-600">{label}</dt>
                <dd className="font-mono text-sm font-medium text-blue-800">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          aria-labelledby="validation"
          className="mt-16 rounded-[28px] border border-slate-200 bg-[#eef4fb] p-7 sm:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
            Validation approach
          </p>
          <h2
            id="validation"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-900"
          >
            What needs to work?
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-700">
            These checks define how the design can be validated. Test results
            are not included in this overview.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {validation.map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 font-mono text-sm font-semibold text-blue-800">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-slate-300 pt-6">
            <h3 className="font-semibold text-slate-900">
              Troubleshooting approach
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Start with physical links and interface status, then check IP
              addresses, subnet masks and default gateways. Check routing and
              service settings next, testing one change at a time to isolate
              the cause.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="reflection"
          className="mt-16 grid gap-10 md:grid-cols-2"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Reflection
            </p>
            <h2
              id="reflection"
              className="mt-3 text-2xl font-semibold text-slate-900"
            >
              Bringing the fundamentals together
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              The project connects network topology, IP addressing and business
              services in one visual lab. It provides a practical foundation
              for explaining how endpoints, switches, routers and servers work
              together.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
              Future development
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Building on the design
            </h2>
            <ul className="mt-5 space-y-4 text-slate-700">
              {[
                "Introduce a separate guest wireless network.",
                "Apply and test access control rules between networks.",
                "Explore secure management access for network devices.",
                "Document repeatable tests and their results.",
              ].map((item) => (
                <li key={item} className="flex gap-3 leading-7">
                  <span aria-hidden="true" className="text-blue-700">
                    ↗
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-slate-300 pt-8">
          <p className="text-sm text-slate-600">
            Cisco Packet Tracer · Educational lab environment
          </p>
          <Link
            href="/"
            className="text-sm font-medium text-blue-700 transition hover:text-blue-900"
          >
            Explore more projects <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </main>
  );
}