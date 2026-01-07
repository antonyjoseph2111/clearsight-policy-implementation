import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Configuration from landing.html
const firebaseConfig = {
    apiKey: "AIzaSyBbSIkpNcHNU_pBE7Pf3W5ZYN4696Sqmg0",
    authDomain: "clearsight-7.firebaseapp.com",
    projectId: "clearsight-7",
    storageBucket: "clearsight-7.firebasestorage.app",
    messagingSenderId: "1030090548960",
    appId: "1:1030090548960:web:ca080ff6d5d083b5245285",
    measurementId: "G-HZGDR87ZDM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

/**
 * Monitors authentication state.
 * @param {Function} callback - Function to call with user object (or null).
 */
export function monitorAuthState(callback) {
    onAuthStateChanged(auth, (user) => {
        if (callback) callback(user);
    });
}

/**
 * Checks if user is authenticated for protected pages.
 * Redirects to login.html if not authenticated.
 */
export function requireAuth() {
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            // Store current URL to redirect back after login
            sessionStorage.setItem('redirectAfterLogin', window.location.href);
            window.location.href = 'login.html';
        }
    });
}

/**
 * Checks if user is already logged in (for login page).
 * Redirects to dashboard if authenticated.
 */
export function redirectIfLoggedIn() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const redirectUrl = sessionStorage.getItem('redirectAfterLogin') || 'dashboard.html';
            sessionStorage.removeItem('redirectAfterLogin');
            window.location.href = redirectUrl;
        }
    });
}

/**
 * Logs in with Email and Password.
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise}
 */
export async function loginWithEmail(email, password) {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user;
    } catch (error) {
        throw error;
    }
}

/**
 * Logs in with Google.
 * @returns {Promise}
 */
export async function loginWithGoogle() {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        return result.user;
    } catch (error) {
        throw error;
    }
}

/**
 * Logs out the current user.
 * @returns {Promise}
 */
export async function logoutUser() {
    try {
        await signOut(auth);
        window.location.href = 'login.html';
    } catch (error) {
        console.error("Logout Error:", error);
        throw error;
    }
}

export { auth };
