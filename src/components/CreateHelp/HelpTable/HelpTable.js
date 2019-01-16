import React from 'react';

export default class HelpTable extends React.Component{
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Header 1</th>
                            <th>Header 2</th>
                            <th>Header 3</th>
                            <th>Header 4</th>
                            <th>Header 5</th>
                            <th>Header 6</th>
                            <th>Header 7</th>
                        </tr>
                        <tr>
                            <td>
                                <input type="text"/>
                            </td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><input type="text"/></td>
                            <td><select>
                                    <option value="All">
                                        All
                                    </option>
                                    <option value="option1">
                                        option1
                                    </option>
                                    <option value="option2">
                                        option2
                                    </option>
                                    <option value="option3">
                                        option3
                                    </option>
                                    <option value="option4">
                                        option4
                                    </option>
                                </select>
                            </td>
                            <td>value 1</td>
                            <td><input type="text"/></td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>value 1</td>
                            <td>value 1</td>
                            <td>value 1</td>
                            <td>value 1</td>
                            <td>value 1</td>
                            <td>value 1</td>
                            <td>value 1</td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}