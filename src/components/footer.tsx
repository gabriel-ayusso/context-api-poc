import useUser from "hooks/useUser";

export default function Footer() {
    const user = useUser();

    return (
        <div>
            {user.isLoggedIn ?
                <p>Copyright &copy; {(new Date()).getFullYear} {user.user?.email}.</p> :
                <p>Copyright &copy; {(new Date()).getFullYear} Alien Lab.</p>
            }
        </div>
    );
}