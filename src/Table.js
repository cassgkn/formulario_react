import React from "react";


const TableHeader = () => (
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Profissão</th>
                    <th>Ação</th>
                </tr>
            </thead>
    )


const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => (
        
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
                <button onClick={() => props.removeCharacter(index)}>Apagar</button>
            </td>
        </tr>

    ));

    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;

    return (
        <table>
            <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

export default Table;