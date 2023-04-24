import List from "../List";

function Item() {

    const usersList = [
        {
            id: 1,
            name: 'William',
            adress: "Rua 10",
        },
        {
            id: 2,
            name: 'João',
            adress: "Rua 05",
        },
        {
            id: 3,
            name: 'Maria',
            adress: 'Rua 15',
        },
        {
            id: 4,
            name: 'Juliana',
            adress: 'Rua 20',
        },
    ]



    return (
        <div>
            <List usersList={usersList} />
        </div>
    )
        
}

export default Item;
