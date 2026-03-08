const client = new Appwrite.Client()
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("69aa00220008584f0b2c");

const databases = new Appwrite.Databases(client);

const DATABASE_ID = "rujyDB";
const COLLECTION_ID = "password";

async function login(){

const input = document.getElementById("password").value;

try{

const res = await databases.getDocument(
DATABASE_ID,
COLLECTION_ID,
"sitepass"
);

if(input === res.password){

location.href="index.html";

}else{

document.getElementById("error").innerText="パスワードが違います";

}

}catch(e){

document.getElementById("error").innerText="パスワード設定がありません";

}

}
