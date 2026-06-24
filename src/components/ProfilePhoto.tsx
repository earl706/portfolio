import { profile } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"
import { Panel } from "./ui/Themed"

const usesPlaceholder = profile.photo.includes("placeholder")

export default function ProfilePhoto({ className = "" }: { className?: string }) {
  const { classes: t } = useTheme()

  return (
    <div className={`group relative ${className}`}>
      {t.photoGlow !== "hidden" && <div className={t.photoGlow} />}
      <Panel className={t.photoPanel}>
        <div className={t.photoInner}>
          {usesPlaceholder ? (
            <div className="portrait-initials flex h-full w-full flex-col items-center justify-center gap-2">
              <span
                className={`${t.fontDisplay} text-4xl font-bold tracking-tight ${t.textPrimary}`}
                aria-hidden="true"
              >
                {profile.initials}
              </span>
              <span className={`${t.fontSans} text-[10px] ${t.textTransform} tracking-widest ${t.textMuted}`}>
                {t.textTransform === "uppercase" ? "PORTRAIT_PENDING" : "Photo coming soon"}
              </span>
            </div>
          ) : (
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
          )}
          {t.showPhotoScan && (
            <div className="photo-scan pointer-events-none absolute inset-x-0 h-8 bg-gradient-to-b from-current/20 to-transparent" />
          )}
          {t.photoCaption !== "hidden" && (
            <div className={t.photoCaption}>
              {t.textTransform === "uppercase"
                ? `ID: ${profile.initials}-001`
                : profile.name}
            </div>
          )}
        </div>
        {t.photoMeta !== "hidden" && (
          <div className={t.photoMeta}>
            <span className={t.textAccent2}>
              {usesPlaceholder ? "[AVATAR_MODE]" : "[IMG_LOADED]"}
            </span>
            <span>SECURE</span>
          </div>
        )}
      </Panel>
    </div>
  )
}
