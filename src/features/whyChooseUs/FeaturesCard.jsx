import {Users,UsersRound,Rocket,ShieldCheck } from "lucide-react"

const FeatureCard=({feature})=>{
    const icons={
        users:Users,
        rocket:Rocket,
        usersRound:UsersRound,
        shieldCheck:ShieldCheck
    }
    const Icon=icons[feature.icon]
   
        const colors = {
    purple: {
      border: "border-purple-500/30",
      icon: "bg-purple-500/10 text-purple-400",
      glow: "hover:shadow-purple-500/10",
    },
    blue: {
      border: "border-blue-500/30",
      icon: "bg-blue-500/10 text-blue-400",
      glow: "hover:shadow-blue-500/10",
    },
    cyan: {
      border: "border-cyan-500/30",
      icon: "bg-cyan-500/10 text-cyan-400",
      glow: "hover:shadow-cyan-500/10",
    },
    pink: {
      border: "border-pink-500/30",
      icon: "bg-pink-500/10 text-pink-400",
      glow: "hover:shadow-pink-500/10",
    },
  };

  const style = colors[feature.color];

  return (
    <article
    className={`flex flex-col items-center rounded-2xl border ${style.border} 
    bg-[#110b29] p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${style.glow}`}
    >
      <div
      className={`mb-5 flex h-20 w-20 items-center justify-center rounded-2xl ${style.icon}`}
      >
        <Icon size={32} strokeWidth={1.8} />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-white">
        {feature.title}
      </h3>
      <div
  className={`mb-4 mt-1 h-1 w-10 rounded-full ${
    feature.color === "purple"
      ? "bg-purple-500"
      : feature.color === "blue"
      ? "bg-blue-500"
      : feature.color === "cyan"
      ? "bg-cyan-500"
      : "bg-pink-500"
  }`}
/>

      <p className="leading-relaxed text-gray-400">
        {feature.description}
      </p>
    </article>
  );
}
export default FeatureCard