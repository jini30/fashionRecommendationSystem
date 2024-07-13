//  importing functions and db
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";


// function to add user to firestore
async function addUser() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      username: "John Doe",
      email: "john@example.com",
      profile_picture: "john.jpg",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//call the addUser function
addUser();

// function to retrieve data
const fetchItems = async () => {
  try{
  const querySnapshot = await getDocs(collection(db, 'items'));
  const items = querySnapshot.docs.map(doc => doc.data());
  console.log(items);
  }catch (e) {
    console.log("Error fetching items:", e);
  }
};

// call the function fetchItems(this is optional)
fetchItems();
