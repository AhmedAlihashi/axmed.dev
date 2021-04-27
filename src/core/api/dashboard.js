import firebase from "../firebase";
import "firebase/firestore";
import "firebase/auth";

const db = firebase.firestore();

export const addDashboardEntry = async (name, contact, message) => {
  const collection = db.collection("dashboardEntries");
  const id = Date.now();

  const req = await collection.doc(`${id}`).set({
    id,
    name,
    contact,
    message,
    date: `${new Date()
      .toString()
      .split(" ")
      .splice(1, 3)
      .join(" ")} ( ${new Date().toLocaleTimeString()} )`,
  });

  return req;
};

export const getDashboardEntry = async () => {
  const collection = db.collection("dashboardEntries");

  const Dashboard = await collection.get();
  return Dashboard.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

export const deleteDashboardEntry = async (id) => {
  const collection = db.collection("dashboardEntries");

  const req = await collection.doc(`${id}`).delete();
  return req;
};
