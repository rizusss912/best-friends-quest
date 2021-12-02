import { MongoClient } from 'mongodb';

let instance;


export class MongoDB {
    client = new MongoClient('mongodb+srv://GDDwDMzsiQan3eJ9:jYPw23h7xtFy1nG1@cluster0.tiqcb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    get db () {
        return this.client.db('best-friends-quest');
    }

    get quests () {
        return this.db.collection('quests');
    }

    get questions () {
        return this.db.collection('questions');
    }

    async close() {
        await this.client.close();
    }
 
    async connect() {
        await this.client.connect();
    }
}