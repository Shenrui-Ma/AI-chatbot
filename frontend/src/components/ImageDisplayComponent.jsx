import React from "react";

function ImageDisplayComponent(props) {
  // 图片样式，包括尺寸和阴影效果
  const imageStyle = {
    width: "600px",
    height: "1000px",
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)", // 添加阴影效果
    className: "rounded-full", // 添加圆角样式
  };

  return (
    <div>
      {/* 使用传入的src属性显示图片，并应用定义的样式 */}
      <img src={props.src} alt="示例图片" style={imageStyle} />
    </div>
  );
}

export default ImageDisplayComponent;
