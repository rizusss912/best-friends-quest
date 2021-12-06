import { MongoDB } from '../mongodb';

//TODO: грязь

let users = 0;
let isOpenDB = false;
let disconnectTimeout = null;
let connectPromise = null; 
let disconnectPromise = null;

export async function connect(callback) {
    const mongodb = new MongoDB();
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
                if (disconnectPromise) {
                    await disconnectPromise;
                    disconnectPromise = null;
                }

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
        if (users !== 0 || !isOpenDB) {
            return;
        }
        disconnectTimeout = setTimeout(async () => {
            if (!isOpenDB || connectPromise || disconnectPromise) {
                return;
            }

            isOpenDB = false;
            disconnectPromise = mongodb.close();
            await disconnectPromise;
            disconnectPromise = null;
            console.log('Logger: mongodb disconnect');
        }, 1000 * 60);
    }
}