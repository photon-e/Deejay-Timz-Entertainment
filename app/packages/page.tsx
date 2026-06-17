import { Hero, PackageCards, Section } from "@/components/ui";
import { packages } from "@/lib/data";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("Packages");
export default function Page() {
  return (
    <>
      <Hero
        title="Event Packages"
        subtitle="Compare flexible sound and entertainment packages for intimate, premium, and large-scale events."
      />
      <Section title="Package Comparison">
        <PackageCards />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2 text-left">
            <tbody>
              {[
                "DJ Services",
                "Full Range Speakers",
                "Subwoofers",
                "After Party",
                "Hype Man",
                "Dancers",
              ].map((f) => (
                <tr key={f} className="bg-white/5">
                  <th className="p-4">{f}</th>
                  {packages.map((p) => (
                    <td className="p-4" key={p.name}>
                      {p.features.some((x) => x.includes(f.split(" ")[0]))
                        ? "✓"
                        : "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
