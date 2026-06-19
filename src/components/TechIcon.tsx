import { techIconMap, type TechName } from "../lib/tech"

export function TechIcon({ name, className }: { name: TechName; className?: string }) {
  const Icon = techIconMap[name]
  return <Icon className={className} />
}
