import db from '../config/firebaseAdminConfig';

interface IUser {
  email: string;
  password: string; 
  username?: string;
}

class User {
  public email: string;
  public password: string;
  public username?: string;

  constructor({ email, password, username }: IUser) {
    this.email = email;
    this.password = password; 
    this.username = username;
  }

  // Save to FireStore Storage
  async register(): Promise<void> {
    try {
      const userRef = db.collection('users').doc(this.email);
      await userRef.set({
        // User data to be saved onto our database
        email: this.email,
        password: this.password, 
        username: this.username,
      });
      console.log('User registered successfully');
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }

  //method to authenticate a user
  static async login(email: string, password: string): Promise<IUser | null> {
    try {
      const userRef = db.collection('users').doc(email);
      const doc = await userRef.get();
      if (!doc.exists) {
        console.log('No such user found!');
        return null;
      }
      const user = doc.data() as IUser;
      if (user.password === password) {
        console.log('User logged in successfully');
        return user;
      } else {
        console.log('Password is incorrect');
        return null;
      }
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }
}

export default User;
