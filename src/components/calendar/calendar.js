import React, {Component} from 'react';
import './calendar.scss';
import moment from 'moment';
import cn from 'classnames';

const CalendarDay = () => {

    const handleClick = () => {

    };

    return (
        <td className="calendar__tbody-cell" onClick={handleClick}>
            <div className="calendar__tbody-date">{day++}</div>
        </td>
    );
};

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: moment()
        }
    }

    handleClick = () => {
        console.log(moment());
        console.log(moment() - 1);
    };


    renderTableBody = () => {
        let date = moment();
        let dayOfWeek = moment().day();
        let firstDay = moment().startOf('month');
        console.log(dayOfWeek);
        window.moment = moment;
        let weeks = [];
        let index = 1;
        let day = 1;
        let cls = i => classNames('calendar__tbody-cellbar', {'calendar__tbody-cellbar_selected': i === 1});
        while (index < 42) {
            let days = [];
            for (let j = 0; j < 7; j++) {
                index++;
                if (firstDay.day() < index) {
                    days.push(
                        <td className="calendar__tbody-cell">
                            <div className="calendar__tbody-date">{day++}</div>
                        </td>
                    )
                } else {
                    date = date.add(1, 'days');
                    days.push(
                        <td className="calendar__tbody-cell">
                            <div className="calendar__tbody-date">{date.date()}</div>
                        </td>
                    )
                }
            }

            weeks.push(
                <tr className="calendar__tbody-week">
                    {days}
                </tr>
            );
        }


        return (
            <tbody className="calendar__tbody">
            {weeks}
            </tbody>
        )

        // return (
        //     <tbody className="calendar__tbody">
        //     <tr className="calendar__tbody-week">
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">11</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">21</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">31</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">41</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">51</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">61</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">71</div>
        //         </td>
        //     </tr>
        //     <tr className="calendar__tbody-week">
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">11</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">21</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">31</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">41</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">51</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">61</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">71</div>
        //         </td>
        //     </tr>
        //     <tr className="calendar__tbody-week">
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">11</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">21</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">31</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">41</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">51</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">61</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">71</div>
        //         </td>
        //     </tr>
        //     <tr className="calendar__tbody-week">
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">11</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">21</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">31</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">41</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">51</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">61</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">71</div>
        //         </td>
        //     </tr>
        //     <tr className="calendar__tbody-week">
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">11</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">21</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">31</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">41</div>
        //         </td>
        //         <td className="calendar__tbody-cell calendar__tbody-cell_current">
        //             <div className="calendar__tbody-date">51</div>
        //         </td>
        //         <td className="calendar__tbody-cell">
        //             <div className="calendar__tbody-date">61</div>
        //         </td>
        //         <td className="calendar__tbody-cell calendar__tbody-cell_selected">
        //             <div className="calendar__tbody-date">71</div>
        //         </td>
        //     </tr>
        //     </tbody>
        // )
    };

    render() {
        return (
            <div className="calendar">
                <div className="calendar__header">
                    <div className="calendar__header-container">
                        <button className="calendar__btn" onClick={this.handleClick}>
                            <div className="calendar__btn-img">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
                                    <path fill="none" d="M24 24H0V0h24v24z"/>
                                </svg>
                            </div>
                        </button>
                        <button className="calendar__btn">
                            <div className="calendar__btn-img">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="calendar__select">
                        <button className="calendar__month-select">Август</button>
                        <button className="calendar__year-select">2018</button>
                    </div>
                    <div className="calendar__header-container">
                        <button className="calendar__btn">
                            <div className="calendar__btn-img calendar__btn-img_rotate180">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            </div>
                        </button>
                        <button className="calendar__btn">
                            <div className="calendar__btn-img calendar__btn-img_rotate180">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
                                    <path fill="none" d="M24 24H0V0h24v24z"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="calendar__body">
                    <table className="calender__table">
                        <thead className="calendar__body-header">
                        <tr>
                            <th className="calendar__column-title"><span>Mo</span></th>
                            <th className="calendar__column-title"><span>Tu</span></th>
                            <th className="calendar__column-title"><span>We</span></th>
                            <th className="calendar__column-title"><span>Th</span></th>
                            <th className="calendar__column-title"><span>Fr</span></th>
                            <th className="calendar__column-title"><span>Sa</span></th>
                            <th className="calendar__column-title"><span>Su</span></th>
                        </tr>
                        </thead>
                        {this.renderTableBody()}
                    </table>
                </div>
            </div>
        )
    }
}
