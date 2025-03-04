import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'


const requiredEnvVars = ['VITE_ROOT_TREE_NAME', 'VITE_API_URL'] as const
const missingEnvVars = requiredEnvVars.filter(key => !import.meta.env[key])

if (missingEnvVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
