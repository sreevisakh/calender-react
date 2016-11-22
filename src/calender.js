var Calender = (function () {
    function Calender(date) {
        this.WeekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        if (date) {
            this.date = new Date(date);
            this.day = this.date.getDate();
            this.month = this.date.getMonth();
            this.year = this.date.getFullYear();
            this.week = this.date.getDay();
            this.getFirstWeek();
        }
    }
    Calender.prototype.getFirstWeek = function () {
        var firstDate = new Date("01/" + this.month + "/" + this.year);
        return firstDate.getDay();
    };
    Calender.prototype.get = function () {
        var days = new Array(this.getDays());
        var result;
        var start = this.getFirstWeek();
        var week = 0;
        days.forEach(function (date) {
            result[week].push({ date: date, week: this.WeekDays[week] });
            start++;
            if (start > 6) {
                start = 0;
                week++;
            }
        });
        return result;
    };
    Calender.prototype.getDays = function () {
        var d = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
        return d.getDate();
    };
    return Calender;
}());
