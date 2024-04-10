import React from 'react'
import { doSignOut } from '../firebase/auth'
import { getAuth, signOut } from 'firebase/auth'
import { auth } from '../firebase/firebase'
export default function Home() {
    const app = getAuth()
    const handleSignout = ()  => {
        signOut(auth)
    }
  return ( <div>
      <h1>Tu es connecté ! </h1>
      <button onClick={handleSignout}> déconnecte toi</button>
  </div>
  )
}
