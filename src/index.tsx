import { ApolloProvider } from '@apollo/client';
import { createRoot } from 'react-dom/client';

import App from './App';
import graphqlClient from './core/graphqlClient';
import './core/globalStyles.scss'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <ApolloProvider client={graphqlClient}>
    <App />
  </ApolloProvider>
);