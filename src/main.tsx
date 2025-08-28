import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')as HTMLElement).render(
   <QueryClientProvider client={queryClient}>
  <StrictMode>
      <App />
       <ReactQueryDevtools initialIsOpen={false} />
    </StrictMode>
    </QueryClientProvider>,
)
