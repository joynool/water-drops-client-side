import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Authentication/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

/*------------------------------------------------------------------------
Implement custom hook as useFirebase() to pass all firebase functionality
--------------------------------------------------------------------------*/
initializeAuthentication();

const useFirebase = () =>
{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    console.log(admin)
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
                const destination = location?.state?.from || '/'
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

    // filter admin user from database
    useEffect(() =>
    {
        fetch(`https://guarded-gorge-39504.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user?.email]);

    const logout = () =>
    {
        setIsLoading(true);
        signOut(auth)
            .then(() => { setIsLoading(false) });
    };

    // Save user to database for admin power
    const saveUser = (email, displayName) =>
    {
        const user = { email, displayName };
        fetch('https://guarded-gorge-39504.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };

    return { user, admin, isLoading, registerUser, loginUser, logout, authError, setAuthError };
};

export default useFirebase;