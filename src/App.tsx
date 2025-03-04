import { Container, Stack } from '@mui/material'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotificationsProvider } from '@toolpad/core/useNotifications'

import './App.css'
import AppHeader from './shared/ui/AppHeader/AppHeader'
import { HomePage } from './pages/Home'

const  App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <Container>
          <Stack direction='column' spacing={1}>
            <AppHeader />
            <HomePage />
            </Stack>
        </Container>
      </NotificationsProvider>
    </QueryClientProvider>
  )
}

export default App