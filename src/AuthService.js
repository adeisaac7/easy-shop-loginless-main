import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { app } from './firebase-config'; // Assuming you exported 'app' from firebase-config.js
 
const auth = getAuth(app);

const actionCodeSettings = {
  // URL you want to redirect back to after the sign-in process.
  // This needs to be on the authorized domains list in the Firebase console.
  url: 'http://localhost:5173/', // Replace with your actual redirect URL
  handleCodeInApp: true,
};
 
export const sendSignInLinkToEmail = async (email) => {
  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    console.log('Sign-in link sent successfully!');
    // You might want to store the email in local storage to pre-fill the field on the landing page
    localStorage.setItem('emailForSignIn', email);
  } catch (error) {
    console.error('Error sending sign-in link:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
 
export const isSignInWithEmailLink = (url) => {
  return isSignInWithEmailLink(auth, url);
};
 
export const signInWithEmailLink = async (email, url) => {
  try {
    const result = await signInWithEmailLink(auth, email, url);
    console.log('Successfully signed in with email link:', result.user);
    // Clear email from storage after successful sign-in
    localStorage.removeItem('emailForSignIn');
    return result.user;
  } catch (error) {
    console.error('Error signing in with email link:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};