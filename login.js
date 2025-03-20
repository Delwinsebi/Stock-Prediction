// Configuration for the application
const CONFIG = {
    // Stock configuration
    stocks: [
        { symbol: 'AAPL', name: 'Apple Inc.' }
    ],
    // Time range configuration
    timeRange: {
        start: new Date('2020-01-01'),
        end: new Date()
    },
    // API Configuration
    api: {
        baseUrl: 'https://query1.finance.yahoo.com/v8/finance/chart',
        headers: {
            'Content-Type': 'application/json'
        }
    },
    // Chart configuration
    chartConfig: {
        backgroundColor: 'rgba(66, 153, 225, 0.1)',
        borderColor: '#2c5282',
        pointBackgroundColor: '#2b6cb0',
        gridColor: 'rgba(0, 0, 0, 0.05)'
    }
};