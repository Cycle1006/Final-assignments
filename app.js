const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors()); // 允许跨域请求（请在生产环境中配置更安全的CORS策略）
app.use(express.json()); // 解析JSON请求体

// 封装调用外部API的函数
async function fetchAnswer1(query) {
    try {
        const response = await axios.post('https://qianfan.baidubce.com/v2/app/conversation/runs', {
            app_id: '5d724670-e81d-4ec1-8b08-f116c187b3ea', 
            query: query,
            conversation_id: 'dca35ba8-adb1-4631-aa2f-959e714eea56', 
            stream: false
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer bce-v3/ALTAK-PYsTADudv7vmnDCxcH4Hq/1cae127e4a1f1d04ba67eeb5561aaa4d74f4b5c0`
            }
        });
        return response.data.answer; 
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        // 但对于前端，我们只返回一个通用的错误消息
        throw new Error('Failed to fetch answer.');
    }
}


app.post('/word', async (req, res) => {
    const { query } = req.body;

    try {
        const answer = await fetchAnswer1(query);
        res.json({ answer: answer });
    } catch (error) {
        // 对于前端，我们只返回一个通用的错误响应
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve answer.' });
    }
});




// 封装调用外部API的函数
async function fetchAnswer2(query) {
    try {
        const response = await axios.post( 'https://qianfan.baidubce.com/v2/app/conversation/runs', {
                app_id: "2b4e4774-d0d6-452b-82c8-07a629b7f14c",
                query: query,
                conversation_id: "8144607d-2d11-4e03-9fc0-f097a6c09725",
                stream: false
        }, {
            headers: {
                'Content-Type': 'application/json',
                'X-Appbuilder-Authorization': 'Bearer bce-v3/ALTAK-PYsTADudv7vmnDCxcH4Hq/1cae127e4a1f1d04ba67eeb5561aaa4d74f4b5c0'
            }
        });
        return response.data.answer; 
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        // 但对于前端，我们只返回一个通用的错误消息
        throw new Error('Failed to fetch answer.');
    }
}


app.post('/image', async (req, res) => {
    const { query } = req.body;

    try {
        const answer = await fetchAnswer2(query);
        res.json({ answer: answer });
    } catch (error) {
        // 对于前端，我们只返回一个通用的错误响应
        res.status(500).json({ error: 'Internal Server Error', message: 'Failed to retrieve answer.' });
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


