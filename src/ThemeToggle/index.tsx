import React, { useEffect, useState } from 'react';
// import 'font-awesome/less/font-awesome.less';

import './index.less';

function ThemeToggle({ theme }) {
  // 一般是服务器下发的几种模式。
  const themeList = ['#2980b9', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];

  const themeToggle = () => {
    let themeToggler = document.querySelector('.theme-toggler') as Element;
    themeToggler.classList.toggle('active');

    // toggle按钮的active 关联 body的 active
    if (themeToggler.classList.contains('active')) {
      document.querySelector('.demo-body')?.classList.add('active');
    } else {
      document.querySelector('.demo-body')?.classList.remove('active');
    }
  };

  const mainColorSelect = (i) => {
    console.log('e====', i);
    // document.querySelector(':root')?.style?.setProperty('--main-color', i);

    document.documentElement.setAttribute('data-theme', i);
  };

  return (
    <div>
      <div className="themes-container">
        <h3>切换主题色 light/dark</h3>
        <div className="theme-toggler" onClick={themeToggle}>
          <span>light</span>
          <span className="toggler"></span>
          <span>dart</span>
        </div>

        <h3>选择品牌色</h3>
        <div className="theme-colors">
          {themeList.map((i, k) => (
            <div
              key={k}
              className="color"
              style={{ background: i }}
              onClick={() => mainColorSelect(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThemeToggle;
