import React, {Component} from 'react';
import './calendar.scss';
import moment from 'moment';
import cn from 'classnames';

moment.locale('ru');


const CalendarBody = props => {
    const date = props.date.clone();
    const firstDay = date.clone().startOf('month'); // первый день месяца
    const dayOfWeek = firstDay.clone().day(); //день недели
    let i = 0; // счетчик
    let startDay; // дата отчета
    const endIndex = 42;
    let listTD = []; // массив для td
    let listTR = []; // массив для tr

    const cls = date => {
        return cn('calendar__tbody-cell', {'calendar__tbody-cell_inactive': props.date.startOf('month').isSame(date.startOf('month'))});
    };

    if (dayOfWeek > 1) {
        startDay = firstDay.clone().subtract(dayOfWeek - 1, 'd');
    } else {
        startDay = firstDay.clone();
    }
    const td = number => <td className={cls(date)}>
        <div className="calendar__tbody-date">{number}</div>
    </td>;
    const tr = node => <tr className="calendar__tbody-week ">{node}</tr>;


    while (i < endIndex) {
        listTD = [];
        for (let j = 0; j < 7; j++) {
            listTD.push(td(startDay.date()));
            startDay.add(1, 'd');
            i++;
        }
        listTR.push(tr(listTD));
    }

    return (
        <tbody className="calendar__tbody">
        {listTR}
        </tbody>
    );
};

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            months: moment.months(),
        };
    }


    getMonth = () => this.state.months[this.state.date.month()].toUpperCase();

    getYear = () => this.state.date.year();

    renderTableBody = () => {
        return (
            <CalendarBody date={this.state.date}/>
        )
    };

    handlePlusMonth = () => {
        let newDate = this.state.date.clone();
        newDate.add(1, 'M');
        this.setState({date: newDate});
    };

    handleMinusMonth = () => {
        let newDate = this.state.date.clone();
        newDate.subtract(1, 'M');
        this.setState({date: newDate});
    };

    handlePlusYear = () => {
        let newDate = this.state.date.clone();
        newDate.add(1, 'Y');
        this.setState({date: newDate});
    };

    handleMinusYear = () => {
        let newDate = this.state.date.clone();
        newDate.subtract(1, 'Y');
        this.setState({date: newDate});
    };

    render() {
        return (
            <div className="calendar" style={{width: 320}}>
                <div className="calendar__header">
                    <div className="calendar__header-container">
                        <button className="calendar__btn" onClick={this.handleMinusYear}>
                            <div className="calendar__btn-img">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
                                    <path fill="none" d="M24 24H0V0h24v24z"/>
                                </svg>
                            </div>
                        </button>
                        <button className="calendar__btn" onClick={this.handleMinusMonth}>
                            <div className="calendar__btn-img">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="calendar__select">
                        <button className="calendar__month-select">{this.getMonth()}</button>
                        <button className="calendar__year-select">{this.getYear()}</button>
                    </div>
                    <div className="calendar__header-container">
                        <button className="calendar__btn" onClick={this.handlePlusMonth}>
                            <div className="calendar__btn-img calendar__btn-img_rotate180">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            </div>
                        </button>
                        <button className="calendar__btn" onClick={this.handlePlusYear}>
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
