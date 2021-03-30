import {
    createHttpLink,
    ApolloClient,
    InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const URL = 'https://api.github.com/graphql';

const httpLink = createHttpLink({
    uri: URL,
});

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client