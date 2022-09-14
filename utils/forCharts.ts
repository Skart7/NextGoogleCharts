export const getDaysArrayPerCurrentYear = () =>  {
    let start = new Date(`${new Date().getFullYear()}-01-01`)
    let end = new Date()
    let arr = []
    for(let dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt).toUTCString().slice(5,11))
    }      
    return arr
}
export const withSpacing = (number:number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}
export const categories = [
    'Computers', 'Laptops', 'Activity trackers', 'Gaming accessories'
]