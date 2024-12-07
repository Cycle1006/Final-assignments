document.getElementById('submitButton1').addEventListener('click', async function() {
    const questionInput = document.getElementById('questionInput').value;
    const answerDisplay1 = document.getElementById('answerDisplay1');

    // 设置请求体为JSON格式的问题查询
    const requestBody = { query: questionInput };

    try {
        // 发送POST请求到后端服务器
        const response = await fetch('http://localhost:3000/word', {
            method: 'POST', // 确保是POST方法
            headers: {
                'Content-Type': 'application/json' // 设置请求头为JSON
            },
            body: JSON.stringify(requestBody) // 将请求体转换为JSON字符串
        });

        // 检查响应状态
        if (!response.ok) {
            throw new Error('网络响应异常: ' + response.statusText);
        }

        // 解析响应JSON数据
        const data = await response.json();

        // 根据后端返回的数据更新页面显示
        if (data.error) {
            answerDisplay1.textContent = '错误: ' + (data.message || '服务器内部错误。');
            answerDisplay1.style.color = 'red'; // 可选：设置错误信息的颜色
        } else {
            answerDisplay1.textContent = '答案: ' + (data.answer || '无答案返回。');
            answerDisplay1.style.color = 'black'; // 可选：设置正常信息的颜色（如果需要的话）
        }
    } catch (error) {
        // 捕获并处理请求过程中的错误
        console.error('请求过程中发生错误:', error);
        answerDisplay1.textContent = '错误: 无法连接到服务器或服务器返回错误。请稍后再试。';
        answerDisplay1.style.color = 'red'; // 可选：设置错误信息的颜色
    }
});


document.getElementById('submitButton1').addEventListener('click', async function() {
    const questionInput = document.getElementById('questionInput').value;
    const answerDisplay1 = document.getElementById('answerDisplay1');

    // 设置请求体为JSON格式的问题查询
    const requestBody = { query: questionInput };

    try {
        // 发送POST请求到后端服务器
        const response = await fetch('http://localhost:3000/word', {
            method: 'POST', // 确保是POST方法
            headers: {
                'Content-Type': 'application/json' // 设置请求头为JSON
            },
            body: JSON.stringify(requestBody) // 将请求体转换为JSON字符串
        });

        // 检查响应状态
        if (!response.ok) {
            throw new Error('网络响应异常: ' + response.statusText);
        }

        // 解析响应JSON数据
        const data = await response.json();

        // 根据后端返回的数据更新页面显示
        if (data.error) {
            answerDisplay1.textContent = '错误: ' + (data.message || '服务器内部错误。');
            answerDisplay1.style.color = 'red'; // 可选：设置错误信息的颜色
        } else {
            answerDisplay1.textContent = '答案: ' + (data.answer || '无答案返回。');
            answerDisplay1.style.color = 'black'; // 可选：设置正常信息的颜色（如果需要的话）
        }
    } catch (error) {
        // 捕获并处理请求过程中的错误
        console.error('请求过程中发生错误:', error);
        answerDisplay1.textContent = '错误: 无法连接到服务器或服务器返回错误。请稍后再试。';
        answerDisplay1.style.color = 'red'; // 可选：设置错误信息的颜色
    }
});