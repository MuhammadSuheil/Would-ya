// Firebase configuration
// Fill in your Firebase project credentials here or in .env
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

/**
 * Save a response to Firestore.
 * @param {Object} data
 * @param {'yes'|'no'} data.answer
 * @param {string} [data.reason]
 * @param {'Sabtu'|'Minggu'} [data.selectedDay]
 * @param {string} [data.selectedLocation]
 * @param {string} [data.customLocation]
 * @param {string} [data.feedback]
 */
export async function saveResponse(data) {
  try {
    // Strip out undefined values to prevent Firestore error
    const sanitizedData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined)
    )
    const docRef = await addDoc(collection(db, 'responses'), {
      ...sanitizedData,
      timestamp: serverTimestamp(),
    })
    console.log('Response saved to Firestore with ID:', docRef.id)
    return docRef
  } catch (err) {
    console.error('Firestore save error:', err)
  }
}
