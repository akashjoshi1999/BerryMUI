import React from 'react'

const ApexChart = () => {
    return (
        <svg
            className="icon icon-tabler icon-tabler-chart-dots"
            width="1.3rem" height="1.3rem" viewBox="0 0 24 24"
            strokeWidth="1.5" stroke="currentColor" fill="none"
            strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 3v18h18"></path><circle cx="9" cy="9" r="2"></circle>
            <circle cx="19" cy="7" r="2"></circle><circle cx="14" cy="15" r="2"></circle>
            <line x1="10.16" y1="10.62" x2="12.5" y2="13.5"></line><path d="M15.088 13.328l2.837 -4.586"></path>
        </svg>
    )
}

export default ApexChart
