import { DesignProvider } from "./design/DesignContext"
import CustomizationWizard from "./components/design/CustomizationWizard"
import Portfolio from "./components/Portfolio"
import { useDesign } from "./hooks/useDesign"

function AppShell() {
  const { wizardComplete } = useDesign()
  if (!wizardComplete) return <CustomizationWizard />
  return <Portfolio />
}

export default function App() {
  return (
    <DesignProvider>
      <AppShell />
    </DesignProvider>
  )
}
