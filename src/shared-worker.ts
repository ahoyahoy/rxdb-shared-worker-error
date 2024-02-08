import { getRxStorageIndexedDB } from 'rxdb-premium/plugins/storage-indexeddb';
import { exposeWorkerRxStorage } from 'rxdb-premium/plugins/storage-worker';

exposeWorkerRxStorage({
    /**
     * You can wrap any implementation of the RxStorage interface
     * into a worker.
     * Here we use the IndexedDB RxStorage.
     */
    storage: getRxStorageIndexedDB()
});