import {
  wrappedKeyEncryptionWebCryptoStorage,
} from 'rxdb-premium/plugins/encryption-web-crypto';
import { getRxStorageIndexedDB } from 'rxdb-premium/plugins/storage-indexeddb';
import { exposeWorkerRxStorage } from 'rxdb-premium/plugins/storage-worker';

exposeWorkerRxStorage({
    storage: wrappedKeyEncryptionWebCryptoStorage({
        storage: getRxStorageIndexedDB()
    })
});