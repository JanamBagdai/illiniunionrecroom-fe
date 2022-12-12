import {useEffect, useState} from "react";
import "../Styles/neonEffect.css";

function RegisterPageTable() {
    const [data, getData] = useState([]);
    const URL = "http://localhost:3000/get-count";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch(URL,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
            .then((res) => res.json())

            .then((response) => {
                console.log(response);
                getData(response.data);
            });
    };
    return (
        <div class="registerPageTableBody">
            <tbody>
            <tr>
                <td className="registerPageTable"><span>Bowling</span>: {data.bowling} in queue</td>
            </tr>
            <tr>
                <td class="registerPageTable"><span>Billiards</span>: {data.billiards} in queue</td>
            </tr>
            </tbody>
        </div>
    );
}

export default RegisterPageTable;