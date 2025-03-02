/*
* area 为 true 时表示为面积图
*/
const option = {
    theme: 'light',
    smooth: true,
    area: true,
    data: [
        { 'Month': 'Jan', 'Domestic': 32, 'Abroad': 37 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 32, 'Abroad': 22 },
        { 'Month': 'Apr', 'Domestic': 32, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 13 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 12 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 30 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 32 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 12 }
    ],
    xAxis: {
        data: 'Month',
        fullGrid: true,
    },
    yAxis: {
        name: 'Units'
    }
};
