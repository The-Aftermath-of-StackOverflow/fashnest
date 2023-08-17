import clientPromise from '../../../lib/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('fashnet-users')
  switch (req.method) {
    case 'POST':
      let bodyObject = req.body
      let userObject = {
        _id: bodyObject.email,
        name: bodyObject.name,
        email: bodyObject.email,
        pic: bodyObject.image_url,
        fashion_history: [],
      }
      let addUser = await db.collection('users').insertOne(userObject)
      res.json({user: addUser})
      break
    case 'GET':
      const { email } = req.headers
      const getUser = await db
        .collection('users')
        .find({
          email: email,
        })
        .toArray()
      res.json({ status: 200, data: getUser })
      // res.json({message: "Done"})
      break
  }
}
