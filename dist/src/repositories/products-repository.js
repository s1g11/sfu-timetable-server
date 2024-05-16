"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepository = void 0;
const events = [
    { id: 1, date: '11.1.1111', month: "5.2024", title: 'test event1', description: "test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1test desc1", place: "ikit", time: "12:00", color: null },
    { id: 2, date: '11.1.2222', month: "5.2024", title: 'test event2', description: "test desc2", place: "ikit", time: "13:00", color: "#2cd5c8" },
    { id: 3, date: '11.1.3333', month: "3.2024", title: 'test event3', description: "test desc3", place: "ikit", time: "15:00", color: "#38190e" },
    { id: 4, date: '11.1.4444', month: "3.2024", title: 'test event4', description: "test desc4", place: "ikit", time: "8:00", color: "#2821ec" },
    { id: 5, date: '11.1.5555', month: "5.2024", title: 'test event5', description: "test desc5", place: "ikit", time: "20:00", color: "#c74919" }
];
exports.productsRepository = {
    getEventsInPeriod(month) {
        if (month) {
            return events.filter(e => e.month === month);
        }
        else {
            const date = new Date();
            const month = `${date.getMonth() + 1}.${date.getFullYear()}`;
            return events.filter(e => e.month === month);
        }
    },
    getEventByTitle(title) {
        if (title) {
            return events.filter(e => e.title.indexOf(title) > -1);
        }
        else {
            return [];
        }
    }
};
