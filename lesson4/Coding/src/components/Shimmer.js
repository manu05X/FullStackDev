// const Shimmer = () => {
//     return <div className="shimmer-container">
//         <div className="shimmer-card">Cards</div>
//         <div className="shimmer-card">Cards</div>
//         <div className="shimmer-card">Cards</div>
//         <div className="shimmer-card">Cards</div>
//     </div>
// };

// export default Shimmer;


import React from "react";

const Shimmer = ({ numCards }) => {
    const shimmerCards = [];

    // Generate shimmer cards based on the specified number
    for (let i = 0; i < numCards; i++) {
        shimmerCards.push(
            <div key={i} className="shimmer-card">
                <div className="shimmer"></div>
            </div>
        );
    }

    return <div className="shimmer-container">{shimmerCards}</div>;
};

export default Shimmer;
