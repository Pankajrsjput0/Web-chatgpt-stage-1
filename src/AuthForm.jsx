import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function AuthForm({ setUser }) {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const [isSignUp, setIsSignUp] = useState(true); // Toggle between sign-up and login form

        const auth = getAuth();

          const handleSubmit = async (e) => {
              e.preventDefault();

                  try {
                        if (isSignUp) {
                                await createUserWithEmailAndPassword(auth, email, password);
                                        setIsSignUp(false); // Switch to login after successful sign-up
                                              } else {
                                                      await signInWithEmailAndPassword(auth, email, password);
                                                            }
                                                                  setUser(auth.currentUser); // Set authenticated user
                                                                      } catch (error) {
                                                                            console.error("Error during authentication:", error);
                                                                                }
                                                                                  };

                                                                                    return (
                                                                                        <div>
                                                                                              <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
                                                                                                    <form onSubmit={handleSubmit}>
                                                                                                            <input
                                                                                                                      type="email"
                                                                                                                                placeholder="Email"
                                                                                                                                          value={email}
                                                                                                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                            />
                                                                                                                                                                    <input
                                                                                                                                                                              type="password"
                                                                                                                                                                                        placeholder="Password"
                                                                                                                                                                                                  value={password}
                                                                                                                                                                                                            onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                    />
                                                                                                                                                                                                                            <button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
                                                                                                                                                                                                                                  </form>
                                                                                                                                                                                                                                        <button onClick={() => setIsSignUp(!isSignUp)}>
                                                                                                                                                                                                                                                {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
                                                                                                                                                                                                                                                      </button>
                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                            export default AuthForm;