import { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(3);
  return (
    <button onClick={() => setCount((state) => state + 1)}>
      Count {count} 热更新测试
    </button>
  );
}
