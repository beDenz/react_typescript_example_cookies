import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

const QueryProvider: React.FC = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export { QueryProvider }
