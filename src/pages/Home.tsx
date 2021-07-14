import Footer from "components/footer";
import useUser from "hooks/useUser";

export default function Home() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const user = useUser();

    const login = () => {
        user.login({
            id: 1234,
            email: 'gabriel@alienlab.com.br',
            name: 'Gabriel'
        });
    }

    const logout = () => {
        user.logout();
    }

    return (
        <div>
            <h1 style={{ color: '#F3FF3F' }}>Hello World</h1>
            <p>URL: {apiUrl}</p>
            <p>User logged in: {user.isLoggedIn ? 'yes' : 'no'}</p>
            {user.isLoggedIn &&
                <p>User logged: <strong>{user.user?.name}</strong></p>
            }
            <div>
                <button onClick={login}>login</button>
                <button onClick={logout}>logout</button>
            </div>

            <Footer/>
        </div>
    );
}