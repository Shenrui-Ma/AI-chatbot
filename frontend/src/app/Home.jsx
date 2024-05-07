import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 导入 useNavigate 钩子
import InputComponent from './components/InputComponent';
import ImageDisplayComponent from './components/ImageDisplayComponent';
import WordsAfterClick from './components/WordsAfterClick';


const Home = () => {
    const [count, setCount] = useState(0);
    const [auPosition, setAuPosition] = useState({ top: 0, left: 0, visible: false });
    const navigate = useNavigate(); // 创建 navigate 实例
  
    const handleButtonClick = () => {
      setCount(count + 1);
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      setAuPosition({ top: y, left: x, visible: true });
      setTimeout(() => setAuPosition({ ...auPosition, visible: false }), 3000); // 3秒后隐藏
    };
  
    const handleChatNavigateChat = () => {
      navigate('/chat'); // 使用 navigate 函数进行页面跳转
    };
  
    return (
      <>
        <div>
          <a href="https://github.com/Azrael-76" target="_blank">
            <img src="\images\Silver_wolf.png" alt="四倍体果蝇 Azrael-76" className="dynamic-border" style={{ width: '200px', height: '200px' }}/>
          </a>
        </div>
        <h1>四倍体果蝇 Azrael-76</h1>
        <div className="card">
          <button onClick={handleButtonClick}>
            点我计数（啊♂~ 爽！）==》{count}《== oh yeah! aha aha...
          </button>
          <button onClick={handleChatNavigateChat}>跳转到聊天界面</button> {/* 添加跳转按钮 */}
          <p>
            ♂ <code>Au yes! Au,au yeah!</code> ♂
          </p>
        </div>
        <p className="read-the-docs">
          你想说什么
        </p>
        <p className="read-the-docs">
          whatever you want to say
        </p>
        <WordsAfterClick auPosition={auPosition} />
        <InputComponent />
        <ImageDisplayComponent />
      </>
    );
  };
  
  export default Home;