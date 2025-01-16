import mongoose, { Connection } from 'mongoose';

const uri = process.env.MONGO_URI as string;

let cachedConnection: Connection | null = null; 

async function connectDB() {

  if (cachedConnection) {
    console.log('Using existing connection');
    return cachedConnection;
  }

  try {
    const cnx = await mongoose.connect(uri);
    cachedConnection = cnx.connection;
    console.log('Connected to MongoDB');
    return cachedConnection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;