const client = new Appwrite.Client()
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("69aa00220008584f0b2c");

const databases = new Appwrite.Databases(client);

/* データベース */
const DATABASE_ID = "rujyDB";

/* コレクション */
const MESSAGE_COLLECTION = "messages";
const HOMEWORK_COLLECTION = "homework";
const NAME_COLLECTION = "names";
const PASSWORD_COLLECTION = "password";
