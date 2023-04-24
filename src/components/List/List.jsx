function List({usersList}) {

    const usersMap = usersList.map((user) => {
        return (
            <li key={user.id}>
                <p>{user.name}</p>
            </li>
        )
    });

    return (
        <ul>
            {usersMap}
        </ul>
    )
}
export default List;