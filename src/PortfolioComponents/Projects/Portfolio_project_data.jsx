// import ml from ';
import ml from '../../Images/stockmarket.JPG'
import portfolio from '../../Images/portfoliowebsite.JPG';
import wordpress from '../../Images/wordpress.jpg';
import passgen from '../../Images/passgenPython.JPG';
import notif from '../../Images/drinkwater.JPG';
import progress from '../../Images/workinprogress1.jpg';

const data_projects = [
    {
        pro_name: 'Portfolio Using React components',
        img: portfolio,
        deployed_url: '',
        github_url: '',
        category: ['react.js'],
    },
    {
        pro_name: 'Stock market price predictions using LSTM',
        img: ml,
        deployed_url:('https://github.com/ksagar09/Stock-price-prediction-using-LSTM-module-in-neural-networks/blob/master/Stock_price_prediction_Nifty50_Google_Colab.ipynb'),
        github_url: 'https://github.com/ksagar09/Stock-price-prediction-using-LSTM-module-in-neural-networks/blob/master/Stock_price_prediction_Nifty50_Google_Colab.ipynb',
        category: ['Machine Learning'],
    },
    {
        pro_name: 'Wordpress website: ML For everyone',
        img:wordpress,
        deployed_url: 'https://github.com/ksagar09/WordpressProject',
        github_url: 'https://github.com/ksagar09/WordpressProject',
        category: ['Wordpress'],
    },
    {
        pro_name: 'Drink water notification using python',
        img:notif,
        deployed_url: 'https://github.com/ksagar09/Python-Project-Notification-/blob/main/Drink%20Water%20Notification.ipynb',
        github_url: 'https://github.com/ksagar09/Python-Project-Notification-/blob/main/Drink%20Water%20Notification.ipynb',
        category: ['Python'],
    },

    {
        pro_name: 'Random password generator using python',
        img:passgen,
        deployed_url: 'https://github.com/ksagar09/Python-Project-Password-Generator-',
        github_url: 'https://github.com/ksagar09/Python-Project-Password-Generator-',
        category: ['Python'],
    },
    {
        pro_name: 'Coming Soon 1',
        img:progress,
        deployed_url: '',
        github_url: '',
        category: ['react.js'],
    },
    {
        pro_name: 'Coming Soon',
        img: progress,
        deployed_url: '',
        github_url: '',
        category: ['react.js'],
    },

]

export default data_projects;