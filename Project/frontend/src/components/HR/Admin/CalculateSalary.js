import React from 'react'

export default function CalculateSalary() {
    return (
        <div>
            <div className="flex flex-col items-center gap-10">
                <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">Total: $500</span>
                </div>

                <div className="flex flex-row gap-6">
                    <button className="btn btn-outline bg-blue-600 text-white">Mark as Paid</button>
                    <button className="btn btn-outline btn-primary">Request Finance</button>
                </div>
            </div>

        </div>
    )
}
