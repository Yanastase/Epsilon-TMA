import React from 'react'
import { doSignOut } from '../firebase/auth'
import { getAuth, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
export default function Home() {
    const app = getAuth()
    const handleSignout = ()  => {
        signOut(auth)
    }
  return ( <div className="h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
    <h1 className="text-3xl font-bold mb-4">Tu es connecté !</h1>
    <button
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
      onClick={handleSignout}
    >
      Déconnecte-toi
    </button>
  </div>
</div>
  )
}
