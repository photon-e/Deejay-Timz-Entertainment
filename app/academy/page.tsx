import { Hero, Section } from "@/components/ui";
import { courses } from "@/lib/data";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("DJ Academy Nigeria");
export default function Page() {
  return (
    <>
      <Hero
        title="Become A Professional DJ"
        subtitle="Learn beat matching, mixing, sound equipment, crowd reading, performance, branding, and music fundamentals."
      />
      <Section title="Courses">
        <div className="grid gap-5 md:grid-cols-3">
          {courses.map((c) => (
            <div className="glass rounded-3xl p-7" key={c}>
              <h3 className="text-2xl font-bold">{c}</h3>
              <p className="mt-3 text-white/65">
                Hands-on training, mentorship, and live event practice.
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Enrollment Form">
        <form
          action="/api/academy"
          method="post"
          className="grid gap-4 md:grid-cols-2"
        >
          <input name="name" placeholder="Name" />
          <input name="phone" placeholder="Phone" />
          <input name="email" placeholder="Email" />
          <select name="course">
            {courses.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <textarea
            name="message"
            placeholder="Message"
            className="md:col-span-2"
          />
          <button className="rounded-full bg-primary px-6 py-3 font-bold text-black">
            Enroll
          </button>
        </form>
      </Section>
    </>
  );
}
