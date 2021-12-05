import { MongoDB } from '../mongodb';

const mongodb = new MongoDB();

let users = 0;
let isOpenDB = false;
let disconnectTimeout = null;
let connectPromise = null; 

export async function connect(callback) {
    users++;

    if (!isOpenDB) {
        try {
            if (disconnectTimeout) {
                clearTimeout(disconnectTimeout);
                disconnectTimeout = null;
            }

            if (connectPromise) {
                await connectPromise;
                connectPromise = null;
            } else {
                connectPromise = mongodb.connect();
                await connectPromise;
                connectPromise = null;
                console.log('Logger: mongodb connect');
            }

            isOpenDB = true;
        } catch (e) {
            console.log('Logger: failed mongodb connect: ', e);
            throw new Error('bd: failed to connect to the database');
        }
    }

    try {
        return await callback();
    } catch (e) {
        throw e;
    } finally {
        users--;
        if (users === 0 && isOpenDB) {
            disconnectTimeout = setTimeout(async () => {
                if (isOpenDB) {
                    isOpenDB = false;
                    await mongodb.close();
                    console.log('Logger: mongodb disconnect');
                }
            }, 1000 * 60);
        }
    }
}