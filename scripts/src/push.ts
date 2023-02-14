import { config } from 'dotenv';
import { getFilesFromPath } from 'web3.storage';
import { makeStorageClient } from './utils/ipfs';
config();

export async function push(path: string) {
  const ipfs = makeStorageClient();
  const files = await getFilesFromPath(path);
  const cid = await ipfs.put(files);
  console.log(cid);
}
