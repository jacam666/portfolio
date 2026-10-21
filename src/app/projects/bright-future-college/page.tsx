import Image from "next/image";
import Link from "next/link";

const designAreas = [
  {
    number: "01",
    title: "Internet edge and routing",
    detail:
      "The ISP router connects to the edge router, which connects to ASA-FW-01. Default and return routes provide paths between the external, firewall and campus networks.",
  },
  {
    number: "02",
    title: "Staff and student networks",
    detail:
      "Staff devices use VLAN 10 and student devices use VLAN 20. The core switch provides VLAN gateways and DHCP pools for wired and wireless clients.",
  },
  {
    number: "03",
    title: "Wireless and servers",
    detail:
      "Separate staff and student access points use WPA2-PSK. Email-1, web-1 and the ESA appliance connect to the ASA firewall.",
  },
  {
    number: "04",
    title: "Restricted administration",
    detail:
      "SSH management is configured for the core switch, edge router, ASA and access switches, with access restricted to the Admin PC.",
  },
];

const addressing = [
  {
    connection: "ISP router to edge router",
    detail:
      "ISP G0/0/0: 192.168.1.2/24 · Edge G0/0/0: 192.168.1.1/24",
  },
  {
    connection: "Edge router to ASA-FW-01",
    detail:
      "Edge G0/0/1: 192.168.2.1/24 · ASA G1/5: 192.168.2.2/24",
  },
  {
    connection: "ASA default route",
    detail: "Next hop: 192.168.2.1",
  },
  {
    connection: "Core switch default route",
    detail: "Next hop: 192.168.6.1",
  },
];

const securityControls = [
  "Separate staff and student traffic using VLAN 10 and VLAN 20.",
  "Use DHCP pools on the core switch for staff and student devices.",
  "Configure WPA2-PSK on the staff and student wireless access points.",
  "Configure NAT/PAT for staff and student network traffic on the ASA.",
  "Apply a rule to block student access to the staff subnet.",
  "Restrict SSH management access to the Admin PC.",
];

const validation = [
  {
    title: "Student network isolation",
    status: "Verified",
    detail:
      "The setup notes record that student access to the staff subnet was blocked while web, email and ISP access remained available.",
  },
  {
    title: "Staff-to-student email",
    status: "Test recorded",
    detail:
      "The build steps include an email test from a staff PC to a student PC. The notes also report that email remained available after student isolation was applied.",
  },
  {
    title: "SSH administration",
    status: "Test recorded",
    detail:
      "The setup includes SSH checks from the Admin PC and configuration to restrict access to that device across the network equipment.",
  },
  {
    title: "Connectivity troubleshooting",
    status: "Troubleshooting noted",
    detail:
      "A ping from a staff PC to the ASA initially failed. ICMP inspection was then added to the ASA default inspection class.",
  },
];

export default function BrightFutureCollegePage() {
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

        <header className="mt-12 overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-[#edf2f7] via-[#f8f5ef] to-[#ebe8df] shadow-[0_30px_80px_rgba(15,23,42,0.10)]">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-800">
                Cisco Packet Tracer · Network security lab
              </span>

              <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Bright Future College
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
                A simulated campus network built in Cisco Packet Tracer, with
                routed internet access, a Cisco ASA firewall, separate staff
                and student networks, shared services and restricted
                administration.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Cisco Packet Tracer",
                  "VLANs 10 and 20",
                  "Cisco ASA",
                  "DHCP and NAT/PAT",
                  "WPA2-PSK",
                  "SSH management",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-300 bg-white/70 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-inner shadow-slate-200/70">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Project snapshot
              </p>

              <dl className="mt-6 space-y-5">
                {[
                  ["Environment", "Cisco Packet Tracer simulation"],
                  ["Network", "Staff, student and server segments"],
                  ["Security focus", "Isolation and restricted management"],
                  ["Key result", "Student access to staff subnet blocked"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      {label}
                    </dt>
                    <dd className="mt-2 text-base font-semibold text-slate-900">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </header>

        <section className="mt-16" aria-labelledby="brief">
          <p className="text-xs font-semibold uppercase tracking-[0.23em] text-blue-700">
            Project brief
          </p>
          <h2
            id="brief"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900"
          >
            Connecting and separating campus networks
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-700">
            The design connects an ISP router, edge router, ASA firewall and
            core switching. Staff and student devices receive addresses through
            DHCP on separate VLANs. Server connections, wireless access and
            administration are included in the Packet Tracer lab.
          </p>
        </section>

        <figure className="mt-8 overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-5 py-4">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-emerald-500"
            />
            <span className="text-sm font-medium text-slate-700">
              Bright Future College network topology
            </span>
          </div>

          <a
            href="/images/brightfuture-image.png"
            target="_blank"
            rel="noopener noreferrer"
            className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700"
            aria-label="Open the full campus network diagram in a new tab"
          >
            <Image
              src="/images/brightfuture-image.png"
              alt="Bright Future College Packet Tracer network showing ISP and edge routers, ASA firewall, core switch, staff and student networks, and connected servers."
              width={1348}
              height={724}
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="h-auto w-full"
            />
          </a>

          <figcaption className="px-5 py-4 text-sm leading-6 text-slate-600">
            Select the diagram to view the full network layout.
          </figcaption>
        </figure>

        <section className="mt-10" aria-labelledby="components">
          <p className="text-xs font-semibold uppercase tracking-[0.23em] text-blue-700">
            Design
          </p>
          <h2
            id="components"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900"
          >
            Main network components
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {designAreas.map((area) => (
              <article
                key={area.number}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <span className="font-mono text-sm text-blue-700">
                  {area.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {area.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]"
          aria-label="Network configuration and security controls"
        >
          <div className="rounded-[28px] border border-slate-200 bg-[#eef4fb] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Routing and addressing
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Key links and next hops
            </h2>

            <dl className="mt-6 divide-y divide-slate-200">
              {addressing.map((item) => (
                <div key={item.connection} className="py-5 first:pt-0 last:pb-0">
                  <dt className="text-sm font-semibold text-slate-900">
                    {item.connection}
                  </dt>
                  <dd className="mt-2 font-mono text-sm leading-6 text-slate-700">
                    {item.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm leading-7 text-slate-600">
              The setup also includes return routes for the VLAN networks and
              static addresses for the email, web and ESA servers.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_15px_40px_rgba(15,23,42,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Security controls
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              Segmentation and administration
            </h2>

            <ul className="mt-6 space-y-4">
              {securityControls.map((control) => (
                <li key={control} className="flex gap-3 text-sm leading-7 text-slate-700">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-700"
                  />
                  <span>{control}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="mt-16 rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_15px_40px_rgba(15,23,42,0.04)] sm:p-10"
          aria-labelledby="validation"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
            Testing and troubleshooting
          </p>
          <h2
            id="validation"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-900"
          >
            What the lab demonstrated
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-600">
            The build notes record the following checks and troubleshooting
            steps. The student isolation result is stated explicitly in the
            notes; other test entries are described as recorded checks.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {validation.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="mt-16 grid gap-8 md:grid-cols-2"
          aria-label="Project reflection"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              What I learned
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Following traffic through the network
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              Building the lab helped connect routing, VLANs, firewall
              interfaces, DHCP and NAT/PAT. The isolation test also showed how
              to restrict traffic between student and staff networks while
              keeping required services available.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#eef4fb] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
              Troubleshooting example
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Diagnosing a failed ping
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              When a staff PC could not ping the ASA, the setup notes record
              adding ICMP inspection to the ASA default inspection class. This
              is a useful example of checking the traffic path and firewall
              handling when a connectivity test fails.
            </p>
          </div>
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-slate-300 pt-8">
          <p className="text-sm text-slate-600">
            Cisco Packet Tracer · Educational network security lab
          </p>
          <Link
            href="/"
            className="text-sm font-semibold text-blue-700 transition hover:text-blue-900"
          >
            Explore more projects <span aria-hidden="true">→</span>
          </Link>
        </footer>
      </div>
    </main>
  );
}