---
nav:
  title: Components
  path: /components
group:
  title: '主题'
  order: 2
---

## Demo

```tsx
import React from 'react';
import { Button, ThemeToggle, Card } from 'heima-ui-lesson';

export default () => (
  <div className="demo-body">
    <div className="horizon-center">
      <Button
        type="highlight"
        style={{ width: 200 }}
        text="测试主题色"
        onClick={() => console.log('click it')}
      />
    </div>

    <Card />
    <div className="horizon-center">
      <ThemeToggle />
    </div>
  </div>
);
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
