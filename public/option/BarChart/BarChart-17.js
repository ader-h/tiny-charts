const option = {
    theme: 'light',
    padding: [50, 30, 50, 20],
    legend: {
        show: true,
    },
    tooltip: {
        formatter: (params, ticket, callback) => {
            let htmlString = '';
            params.forEach((itemSeventeen, index) => {
                if (index === 0) {
                    htmlString += (itemSeventeen.name + '<br/>');
                }
                htmlString +=
                    `<div>
                    <span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:${itemSeventeen.color};"></span>
                    <span style="margin-left:5px;">
                        <span style="display:inline-block;width:110px;">${itemSeventeen.seriesName} User</span>
                        <span style="font-weight:bold">${itemSeventeen.value}%</span>
                    <span style="color:gray"> out </span>
                    <span style="color:red">${100 - itemSeventeen.value}%</span>
                    </span>
                </div>`;
            });
            return htmlString
        },
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33, 'Abroad': 17 },
        { 'Month': 'Feb', 'Domestic': 27, 'Abroad': 39 },
        { 'Month': 'Mar', 'Domestic': 31, 'Abroad': 27 },
        { 'Month': 'Apr', 'Domestic': 30, 'Abroad': 15 },
        { 'Month': 'May', 'Domestic': 37, 'Abroad': 17 },
        { 'Month': 'Jun', 'Domestic': 36, 'Abroad': 17 },
        { 'Month': 'Jul', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Aug', 'Domestic': 22, 'Abroad': 17 },
        { 'Month': 'Sep', 'Domestic': 17, 'Abroad': 37 },
        { 'Month': 'Oct', 'Domestic': 40, 'Abroad': 33 },
        { 'Month': 'Nov', 'Domestic': 42, 'Abroad': 22 },
        { 'Month': 'Dec', 'Domestic': 32, 'Abroad': 17 }
    ],
    xAxis: {
        data: 'Month',
    },
    yAxis: {
        name: 'Percent(%)'
    }
};
