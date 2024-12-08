import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import Message from "../Message/Message";
import styles from './Channel.module.css'

function Channel({ user = null, db = null }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { uid, displayName, photoURL } = user;

  useEffect(() => {
    if (db) {
      // Create a Firestore query
      const messagesRef = collection(db, "messages");
      const messagesQuery = query(messagesRef, orderBy("createdAt"), limit(100));

      // Set up real-time subscription
      const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMessages(data);
      });

      return unsubscribe; // Cleanup subscription on component unmount
    }
  }, [db]);

  const handleOnChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (db) {
      try {
        const messagesRef = collection(db, "messages");
        await addDoc(messagesRef, {
          text: newMessage,
          createdAt: serverTimestamp(),
          uid,
          displayName,
        });
        setNewMessage(""); // Clear input after sending
      } catch (error) {
        console.error("Error sending message:", error.message);
      }
    }
  };

  return (
    <>
      <ul className={styles.item}>
        {messages.map((message) => (
          <li key={message.id}>
            <Message {...message} />
            </li>
        ))}
      </ul>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="Type your message..."
        />
        <button type="submit" disabled={!newMessage}>
          Send
        </button>
      </form>
    </>
  );
}

export default Channel;
