import './style.css';

import { createApp } from 'vue';

import { createRxDatabase } from 'rxdb';
import {
  getRxStorageSharedWorker,
  getRxStorageWorker,
} from 'rxdb-premium/plugins/storage-worker';

import App from './App.vue';
import IdbWorkerUrl from './shared-worker?url&worker';

createApp(App).mount('#app')

async function initDb() {
    const database = createRxDatabase({
        name: 'mydatabase1',
        storage: getRxStorageWorker(
            {
                workerInput: IdbWorkerUrl,
                workerOptions: {
                    type: 'module',
                }
            }
        )
    });

    console.log('database1 promise', database);
    const db = await database;
    console.log('database1', db);
}

initDb();

async function initDb2() {
    const database = createRxDatabase({
        name: 'mydatabase2',
        storage: getRxStorageSharedWorker(
            {
                workerInput: IdbWorkerUrl,
                workerOptions: {
                    type: 'module',
                }
            }
        )
    });

    console.log('database2 promise', database);
    const db = await database;
    console.log('database2', db);
}

initDb2();