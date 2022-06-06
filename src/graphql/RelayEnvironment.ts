import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

async function fetchRelay(params:any, variables:any) {
  try {
    return await fetchGraphQL(params.text, variables);
  } catch (e) {
    return `error: ${e}`;
  }
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
