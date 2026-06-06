import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User,
  confirmPasswordReset,
  verifyBeforeUpdateEmail,
  updateEmail,
  updatePassword,
} from 'firebase/auth';
import { auth } from '../config';

export class AuthService {
  /**
   * Register a new user with email and password
   */
  static async register(email: string, password: string): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Login user with email and password
   */
  static async login(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Logout current user
   */
  static async logout(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Get current authenticated user
   */
  static getCurrentUser(): User | null {
    return auth.currentUser;
  }

  /**
   * Send password reset email
   */
  static async sendPasswordReset(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Reset password with code
   */
  static async resetPassword(code: string, newPassword: string): Promise<void> {
    try {
      await confirmPasswordReset(auth, code, newPassword);
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Update user profile
   */
  static async updateUserProfile(displayName: string, photoURL?: string): Promise<void> {
    try {
      if (!auth.currentUser) {
        throw new Error('No user logged in');
      }
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Update user email
   */
  static async updateUserEmail(newEmail: string): Promise<void> {
    try {
      if (!auth.currentUser) {
        throw new Error('No user logged in');
      }
      await updateEmail(auth.currentUser, newEmail);
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Update user password
   */
  static async updateUserPassword(newPassword: string): Promise<void> {
    try {
      if (!auth.currentUser) {
        throw new Error('No user logged in');
      }
      await updatePassword(auth.currentUser, newPassword);
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Get ID token for API requests
   */
  static async getIdToken(forceRefresh = false): Promise<string> {
    try {
      if (!auth.currentUser) {
        throw new Error('No user logged in');
      }
      return await auth.currentUser.getIdToken(forceRefresh);
    } catch (error) {
      throw this.handleAuthError(error);
    }
  }

  /**
   * Handle Firebase Auth errors
   */
  private static handleAuthError(error: unknown): Error {
    if (error instanceof Error) {
      const message = error.message.toLowerCase();

      if (message.includes('user-not-found') || message.includes('invalid-credential')) {
        return new Error('Invalid email or password');
      }
      if (message.includes('wrong-password')) {
        return new Error('Invalid email or password');
      }
      if (message.includes('email-already-in-use')) {
        return new Error('This email is already in use');
      }
      if (message.includes('weak-password')) {
        return new Error('Password is too weak. Use at least 8 characters');
      }
      if (message.includes('invalid-email')) {
        return new Error('Invalid email address');
      }
      if (message.includes('account-exists-with-different-credential')) {
        return new Error('Account exists with different credentials');
      }

      return error;
    }

    return new Error('An authentication error occurred');
  }
}
