'use client'

import { SandpackProvider as Provider } from '@codesandbox/sandpack-react'
import JSConsole from './JSConsole'

export default function JSEditorProvider() {
  return (
    <Provider
      template="vanilla"
      files={{ 'index.js': 'console.log("hello world")' }}
    >
      <JSConsole />
    </Provider>
  )
}
