import { PieChart, Pie, Cell } from "recharts";

const colors = ["#FF0000", "#00FF00"];
const data = [
    {
        "name": "Approuvé",
        "value": 75
    },
    {
        "name": "Refusé",
        "value": 25
    }
];

export default function Stats({data, colors}){
    return(
        <PieChart width={730} height={250}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#00FFFF" label>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>
        </PieChart>
    );
}