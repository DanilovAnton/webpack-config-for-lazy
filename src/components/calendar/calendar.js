import React, {Component} from 'react';
import './calendar.scss';


export default class Calendar extends Component {

    render() {
        return (
            <div className="calendar">
                <div className="calendar__header">
                    <div className="calendar__header-container">
                        <button className="calendar__btn">
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
                    <div className="calendar__selected">
                        <a className="rc-calendar-month-select" role="button" title="Choose a month">Aug</a>
                        <a className="rc-calendar-year-select" role="button" title="Choose a year">2018</a>
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
                        <tbody className="calendar__tbody">
                        <tr className="calendar__tbody-week">
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">11</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">21</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">31</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">41</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">51</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">61</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">71</div>
                            </td>
                        </tr>
                        <tr className="calendar__tbody-week">
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">11</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">21</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">31</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">41</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">51</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">61</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">71</div>
                            </td>
                        </tr>
                        <tr className="calendar__tbody-week">
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">11</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">21</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">31</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">41</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">51</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">61</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">71</div>
                            </td>
                        </tr>
                        <tr className="calendar__tbody-week">
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">11</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">21</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">31</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">41</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">51</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">61</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">71</div>
                            </td>
                        </tr>
                        <tr className="calendar__tbody-week">
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">11</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">21</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">31</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">41</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">51</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">61</div>
                            </td>
                            <td className="calendar__tbody-cell">
                                <div className="calendar__tbody-date">71</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
