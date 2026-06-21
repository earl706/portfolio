import { profile } from "../data/portfolio"
import { useTheme } from "../themes/useTheme"
import { Panel } from "./ui/Themed"

export default function ProfilePhoto({ className = "" }: { className?: string }) {
  const { classes: t } = useTheme()

  return (
    <div className={`group relative ${className}`}>
      {t.photoGlow !== "hidden" && <div className={t.photoGlow} />}
      <Panel className={t.photoPanel}>
        <div className={t.photoInner}>
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
          />
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
            <span className={t.textAccent2}>[IMG_LOADED]</span>
            <span>SECURE</span>
          </div>
        )}
      </Panel>
    </div>
  )
}
