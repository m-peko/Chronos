import React from 'react';

const ScheduleBody = () => {
    let timeline = [];

    for (let i = 7; i <= 12; i++)
        timeline.push(
            <tr key={ Math.random().toString(36).substr(2, 16) }>
                <td>{ i }AM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );

    for (let i = 1; i <= 7; i++)
        timeline.push(
            <tr key={ Math.random().toString(36).substr(2, 16) }>
                <td>{ i }PM</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );

    return (
        <tbody>{ timeline }</tbody>
    );
};

export default ScheduleBody;
