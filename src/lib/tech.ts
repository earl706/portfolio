import {
  DjangoIcon,
  GitIcon,
  JavaScriptIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  VueIcon,
} from "../components/icons/TechIcons"

export const techIconMap = {
  Python: PythonIcon,
  JavaScript: JavaScriptIcon,
  TypeScript: TypeScriptIcon,
  Django: DjangoIcon,
  React: ReactIcon,
  Vue: VueIcon,
  "Tailwind CSS": TailwindIcon,
  Git: GitIcon,
} as const

export type TechName = keyof typeof techIconMap

export function isTechName(name: string): name is TechName {
  return name in techIconMap
}
