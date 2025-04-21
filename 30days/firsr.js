
let books=[
{
    title:'Book One',genre:'Science',publish:2009,eidition:2014
 },
 {
    title:'Book Sec',genre:'Fiction',publish:1987,eidition:2010
 },
 {
    title:'Book Three',genre:'History',publish:1986,eidition:2005
 },
 {
    title:'Book Four',genre:'No-Fiction',publish:1981,eidition:1989
 },
 {
    title:'Book Eight',genre:'Science',publish:2000,eidition:2016
 },
 {
    title:'Book Nine',genre:'History',publish:1990,eidition:2001
 },
 {
    title:'Book Ten',genre:'Fiction',publish:1995,eidition:2009
 },
]

let bk = books.filter((num)=> num.genre === 'History' && num.publish >= 1986);
console.log(bk)