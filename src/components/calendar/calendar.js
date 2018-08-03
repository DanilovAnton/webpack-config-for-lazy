import React, {Component} from 'react';
import './calendar.scss';
import moment from 'moment';
import cn from 'classnames';
import _ from 'lodash';

moment.locale('ru');


const listDays = inputDate => {
    const date = inputDate.clone();
    const firstDay = date.clone().startOf('month'); // первый день месяца
    const dayOfWeek = firstDay.clone().day(); //день недели
    let startDay; // дата отчета
    let days = [];
    if (dayOfWeek > 1) {
        startDay = firstDay.clone().subtract(dayOfWeek - 1, 'd');
    } else {
        startDay = firstDay.clone();
    }
    let i = 0;
    while (i < 42) {
        days.push(startDay.clone());
        startDay.add(1, 'd');
        i++;
    }
    return days;
};
const week = [
    {id: 1, name: 'Пн'},
    {id: 2, name: 'Вт'},
    {id: 3, name: 'Ср'},
    {id: 4, name: 'Чт'},
    {id: 5, name: 'Пт'},
    {id: 6, name: 'Сб'},
    {id: 7, name: 'Вс'},
];

const CalendarBody = props => {
        let listTD = [];
        let listTR = [];

        const cls = (date) => {
            let propsDate = props.date.clone().startOf('month');
            let cloneDate = date.clone().startOf('month');
            return cn(
                'calendar__tbody-cell',
                {'calendar__tbody-cell_inactive': !propsDate.isSame(cloneDate)},
                {'calendar__tbody-cell_selected': date.isSame(props.selectedDays)}
            );
        };


        const clsBlock = date => {
            return cn(
                'calendar__tbody-date',
                {'calendar__tbody-date_current': date.isSame(moment().startOf('day'))}
            )
        };


        const td = date => (
            <td key={_.uniqueId()} className={cls(date)} onClick={() => props.tdOnClick(date)}>
                <div className={clsBlock(date)}><span className="calendar__tbody-text">{date.date()}</span></div>
            </td>
        );

        const tr = node => <tr key={_.uniqueId()} className="calendar__tbody-week ">{node}</tr>;

        props.days.forEach((date, i) => {
            listTD.push(td(date));
            if ((i + 1) % 7 === 0) {
                listTR.push(tr(listTD));
                listTD = [];
            }
        });

        return (
            <tbody className="calendar__tbody">
            {listTR}
            </tbody>
        );
    }
;

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: moment().startOf('day'),
            months: moment.months(),
            days: listDays(moment().startOf('day')),
            selectedDays: {}
        };
        window.moment = moment;
    }

    getMonth = () => this.state.months[this.state.date.month()].toUpperCase();

    getYear = () => this.state.date.year();

    renderTableBody = () => {
        return (
            <CalendarBody
                date={this.state.date}
                tdOnClick={this.handleTdOnClick}
                days={this.state.days}
                selectedDays={this.state.selectedDays}
            />
        )
    };

    handleTdOnClick = date => {
        this.setState({selectedDays: date})
    };

    handlePlusMonth = () => {
        let newDate = this.state.date.clone();
        newDate.add(1, 'M');
        this.setState({date: newDate, days: listDays(newDate)});
    };

    handleMinusMonth = () => {
        let newDate = this.state.date.clone();
        newDate.subtract(1, 'M');
        this.setState({date: newDate, days: listDays(newDate)});
    };

    handlePlusYear = () => {
        let newDate = this.state.date.clone();
        newDate.add(1, 'Y');
        this.setState({date: newDate, days: listDays(newDate)});
    };

    handleMinusYear = () => {
        let newDate = this.state.date.clone();
        newDate.subtract(1, 'Y');
        this.setState({date: newDate, days: listDays(newDate)});
    };

    renderHead = () => {
        return (
            <thead className="calendar__body-header">
            <tr>
                {week.map(el => <th key={el.id} className="calendar__column-title"><span>{el.name}</span></th>)}
            </tr>
            </thead>
        )
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
                        {this.renderHead()}
                        {this.renderTableBody()}
                    </table>
                </div>
            </div>
        )
    }
}
