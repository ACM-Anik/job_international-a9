import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Bar } from 'recharts';

const Statistics = () => {
    const result = [
        { id:1, name: "assignment 1", marks: 60 },
        { id:2, name: "assignment 2", marks: 57 },
        { id:3, name: "assignment 3", marks: 60 },
        { id:4, name: "assignment 4", marks: 55 },
        { id:5, name: "assignment 5", marks: 60 },
        { id:6, name: "assignment 6", marks: 58 },
        { id:7, name: "assignment 7", marks: 60 },
        { id:8, name: "assignment 8", marks: 60 }
    ];

    return (
        <div className="mb-5">
            <h1 className='text-center text-4xl font-bold mb-10 p-10 bg-[#F4F4F4]'>
                Result Statistics
            </h1>
            <div className='flex justify-center'>
                <ComposedChart
                    width={500}
                    height={400}
                    data={result}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="marks" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;