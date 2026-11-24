import { useState, useEffect } from 'react';

export interface User {
    id: number;
    name: string;
    email: string;
}

function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) {
                    throw new Error(`Failed to fetch users: ${response.status}`);
                }

                const fetchedUsers: User[] = await response.json();
                setUsers(fetchedUsers);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Failed to fetch users');
            } finally {
                setLoading(false);
            }
        }

        void fetchUsers();
    }, []);

    if (loading) {
        return <p role="status">Loading users...</p>;
    }

    if (error) {
        return <p role="alert">{error}</p>;
    }

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <strong>{user.name}</strong> ({user.email})
                </li>
            ))}
        </ul>
    );

}

export default UserList;