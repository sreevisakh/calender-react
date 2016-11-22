class CalenderModel {
    
    date : Date;
    today : Date;
    day : number;
    month : number;
    year : number;
    week : number;
    dates : Array<any>;

    weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday' ,'Saturday'];
    Months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    constructor(date){
        if(!date){
            date = new Date();
        }
        this.today = new Date();
        this.date = date;
        this.day = this.date.getDate();
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
        this.week = this.date.getDay();
        this.dates = this.get();

    }
    getMonth(){
        return this.Months[this.month];
    }
    getFirstWeek(){
        let firstDate = this.date;
        firstDate.setDate(1);
        return firstDate.getDay();

    }
    setMonth(month){
        this.date = new Date(this.date.setMonth(month));
        this.month = month;
        this.get();
    }
    setYear(year){
        this.date = new Date(this.date.setFullYear(year));
        this.year = year;
        this.get();
    }
    get() {
        let days:Array<number> = Array.apply(null, {length: this.getDays()}).map(Number.call, Number);
        let result: Array<Array<CalenderDate>> = [];
        let start = this.getFirstWeek();
        result[0] = this.getPreviousDates(start);
        let week = 0;

        days.forEach((date) => {
            if(this.isToday(date)){
                result[week].push({date : date+1,type :'today' });
            }else{
                result[week].push({date : date+1,type :'active' });
            }
            
            start++;
            if(start > 6){
                start = 0;
                week++;
            }
            if(!result[week]){
                result[week]=[];
            }

        });
        let j= 1;
        for(let i=start; i < 7;i++){
            result[week].push({date : j,type:'faded'})
            j++;
        }
        this.dates = result;
        return result;

    }
    isToday(dayNumber){
        if(this.month === this.today.getMonth() && dayNumber === this.today.getDate())
        {
            return true;
        }
        else{
            return false;
        }
    }
    getPreviousDates(count):Array<CalenderDate>{
        //get Previous Month number
        let previousMonth;

        if(this.month > 0){
            previousMonth = this.month - 1;
        }
        else{
            previousMonth = 11;
        }
    
        //get noof days in previous month
        var d = new Date();
        d.setMonth(previousMonth);

        if(this.month === 0){
            d.setFullYear(d.getFullYear()-1);
        }

        //get NoOf Days
        var d = new Date(d.getFullYear(), d.getMonth()+1, 0);
        let days = d.getDate();

        let result:Array<CalenderDate> = [];
        for(let i=count;i>0;i--){
            result.push({date : days, type : 'faded'})
            days--;
        }
        return result.reverse();
    }
    getDays(){
        var d= new Date(this.today.getFullYear(), this.today.getMonth()+1, 0);       
        return d.getDate();
    }
}
interface CalenderDate{
    date : number,
    type : string
}
export default CalenderModel;