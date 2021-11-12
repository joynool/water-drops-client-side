import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Authentication/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, getIdToken } from "firebase/auth";

initializeAuthentication();

const useFirebase = () =>
{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password, name, history) =>
    {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result =>
            {
                setAuthError('');

                const newUser = { email, displayName: name };
                setUser(newUser);

                saveUser(email, name);

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => { });

                history.replace('/');
            })
            .catch((error) => setAuthError(error.message))
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location, history) =>
    {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result =>
            {
                const destination = location.state.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => setAuthError(error.message))
            .finally(() => setIsLoading(false));
    };

    useEffect(() =>
    {
        const unsubscribe = onAuthStateChanged(auth, (user) =>
        {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            };
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth]);

    const logout = () =>
    {
        setIsLoading(true);
        signOut(auth)
            .then(() => { setIsLoading(false) });
    };

    const saveUser = (email, displayName) =>
    {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };

    return { user, isLoading, registerUser, loginUser, logout, authError, setAuthError };
};

export default useFirebase;