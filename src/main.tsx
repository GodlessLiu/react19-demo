import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Section } from './Section'
import DemoTransiation from "./client/Action"
import DemoActionState from "./client/UseActionState"
import DemoFormStatus from "./client/UseFormStatus"
import DemoOptimistic from "./client/UseOptimistic"
import DemoUse from "./client/Use"
import DemoMetaData from "./client/MetaData"
import DemoStylesSheetAndScripts from "./client/StylesSheetAndScript"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Section title='Action with useTransiation'>
      <DemoTransiation />
    </Section>
    <Section title='Action with useActionState'>
      <DemoActionState />
    </Section>
    <Section title='Demo with useFormStatus'>
      <DemoFormStatus />
    </Section>
    <Section title='Demo with useOptimistic'>
      <DemoOptimistic />
    </Section>
    <Section title='Demo with use'>
      <DemoUse />
    </Section>
    <Section title='Demo with metaData'>
      <DemoMetaData />
    </Section>
    <Section title='Demo with stylesSheetAndScripts'>
      <DemoStylesSheetAndScripts />
    </Section>
  </StrictMode>,
)
