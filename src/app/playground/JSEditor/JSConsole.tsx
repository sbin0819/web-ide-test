import {
  SandpackLayout,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackPreview,
} from '@codesandbox/sandpack-react'

export default function JSConsole() {
  return (
    <SandpackLayout>
      <SandpackPreview style={{ display: 'none' }} />
      <SandpackCodeEditor
        style={{ height: '100vh' }}
        showLineNumbers
        showInlineErrors
      />
      <SandpackConsole
        style={{ height: '100vh' }}
        resetOnPreviewRestart={true}
        // onLogsChange={(c) => console.log(c)}
      />
    </SandpackLayout>
  )
}
