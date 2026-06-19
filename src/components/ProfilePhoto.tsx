import { profile } from "../data/portfolio"

export default function ProfilePhoto({ className = "" }: { className?: string }) {
  return (
    <div className={`group relative ${className}`}>
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-yellow opacity-40 blur-sm transition-all duration-700 group-hover:opacity-70 group-hover:blur-md" />
      <div className="cyber-panel relative overflow-hidden p-1 transition-all duration-700 group-hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden border border-neon-cyan/30 bg-black">
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.12)_2px,rgba(0,0,0,0.12)_4px)] opacity-60" />
          <div className="photo-scan pointer-events-none absolute inset-x-0 h-8 bg-gradient-to-b from-neon-cyan/20 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent px-3 py-2">
            <p className="font-sans text-[9px] uppercase tracking-[0.25em] text-neon-cyan">
              ID: {profile.initials}-001
            </p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between px-1 font-sans text-[9px] uppercase tracking-widest text-zinc-600">
          <span className="text-neon-pink">[IMG_LOADED]</span>
          <span>SECURE</span>
        </div>
      </div>
    </div>
  )
}
