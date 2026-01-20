import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import Modals from '../../components/modals';
import { Provider } from 'react-redux';
import { store } from '../../redux';

const ProviderConf = ({children}:{children:React.ReactNode}) => {
    const queryClient = new QueryClient();
  return (
    <div>
        <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            {children}
            <Modals/>
        </QueryClientProvider>
        </Provider>
    </div>
  )
}

export default ProviderConf