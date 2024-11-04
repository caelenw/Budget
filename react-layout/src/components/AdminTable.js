import React from 'react';

const AdminTable = () => {
    return (
        <div id="admin-acct" className="section">
            <table id="admin-table" border="3">
                <thead>
                    <tr>
                        <td>Account #</td>
                        <td>Routing #</td>
                        <td>Type</td>
                        <td>Bank</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>9562458745125456</td>
                        <td>845624532</td>
                        <td>Checking</td>
                        <td>Wells Fargo</td>
                    </tr>
                    <tr>
                        <td>45151234654581347</td>
                        <td>515615131</td>
                        <td>Credit</td>
                        <td>BB&T</td>
                    </tr>
                    <tr>
                        <td>65411324894665421</td>
                        <td>516516518</td>
                        <td>Credit</td>
                        <td>American Express</td>
                    </tr>
                    <tr>
                        <td>51655642318948946</td>
                        <td>588852147</td>
                        <td>Checking</td>
                        <td>Capital One</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default AdminTable;
