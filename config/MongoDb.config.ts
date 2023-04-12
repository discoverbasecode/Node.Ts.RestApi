import { connect } from 'mongoose';

const DB_URI = `${process.env.MONGO_URL}`;

const dbInit = async () => {
        await connect(DB_URI);
        console.log('Connected to DB server ');
};

export default dbInit;
