import mongoose from 'mongoose'

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URI.replace(
        '<password>',
        process.env.MONGODB_PASSWORD
      )
    )

    console.log(`MongoDB connecté: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Erreur: ${error.message}`)
    process.exit(1)
  }
}

export default dbConnect
