import apolloServerContext from '@src/lib/config/apolloServerContext';
import schema from '@src/graphql/schema/schema';

const apolloServerConfig = {
  schema,
  playground: process.env.NODE_ENV !== 'production',
  context: apolloServerContext,
  apollo: {
    key: process.env.APOLLO_KEY,
    graphId: process.env.APOLLO_GRAPH_ID,
    graphVariant: process.env.APOLLO_GRAPH_VARIANT,
  },
};

export default apolloServerConfig;
