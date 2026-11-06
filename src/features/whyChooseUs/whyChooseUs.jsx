import { useSelector } from "react-redux";
import FeatureCard from "./FeaturesCard";

const WhyChooseUs = () => {
    const whyChooseUs=useSelector(
        (state)=>state.whyChooseUs
    )
  return (
<section className="relative overflow-hidden bg-[#08001f] px-6 py-20 text-white">
    {/* Top-right decorative dots */}
<div
  className="pointer-events-none absolute right-10 top-20 h-24 w-24 opacity-30"
  style={{
    backgroundImage:
      "radial-gradient(circle, #9333ea 2px, transparent 2px)",
    backgroundSize: "14px 14px",
  }}
/>

{/* Bottom-left decorative dots */}
<div
  className="pointer-events-none absolute bottom-10 left-10 h-24 w-24 opacity-30"
  style={{
    backgroundImage:
      "radial-gradient(circle, #9333ea 2px, transparent 2px)",
    backgroundSize: "14px 14px",
  }}
/>

{/* Top-left glowing circle */}
<div className="pointer-events-none absolute -left-24 -top-24 h-60 w-60 rounded-full border border-purple-500/20 bg-purple-600/5 blur-sm" />

{/* Bottom-right glowing circle */}
<div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full border border-purple-500/20 bg-purple-600/5 blur-sm" />
<div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-5 py-2">
                <span className="text-xs font-semibold tracking-widest text-purple-300">
                    WHY CHOOSE US
                </span>
                </div>
          <h2 className="text-3xl font-bold md:text-5xl">
            Why Companies{" "}
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            We combine technical expertise, speed, and reliability
            to help businesses build exceptional digital products.
          </p>
          <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400" />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
        <div className="mt-12 text-center">
  <a
    href="#contact"
    className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30"
  >
    Start Your Project
    <span className="text-xl">→</span>
  </a>

  <p className="mt-4 text-sm text-gray-400">
    Let's build something amazing together.
  </p>
</div>
        

      </div>
    </section>
  );
};

export default WhyChooseUs;