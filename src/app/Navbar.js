import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="sections">
                <li><i className="fa-solid fa-chart-line"></i>Dashboards</li>
                <li><i className="fa-solid fa-chart-column"></i>Performance</li>
                <li><i className="fa-solid fa-eye"></i>Availability</li>
                <li><i className="fa-solid fa-code-fork"></i>Integrations</li>
                <li><i className="fa-solid fa-file"></i>Reports</li>
                <li className="alert-item"><i className="fa-solid fa-triangle-exclamation"></i>Alerts</li>
            </ul>
        </nav>
    )
}

export default Navbar;