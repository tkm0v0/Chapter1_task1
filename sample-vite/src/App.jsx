import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// インポートするコンポーネント
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link><br />
        <Link to="/page1">Page1</Link><br />
        <Link to="/page1/detailA">Page1 Detail A</Link><br />
        <Link to="/page1/detailB">Page1 Detail B</Link><br />
        <Link to="/page2">Page2</Link><br />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} >
             {/* パターン1 */}
            {/* <Route path="/page1/detailA" element={<Page1DetailA />} />
            <Route path="/page1/detailB" element={<Page1DetailB />} /> */}
             {/* パターン2 */}
          <Route path="detailA" element={<Page1DetailA />} />
          <Route path="detailB" element={<Page1DetailB />} />

        </Route>
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//React Router version 6以降の書き方
// Switchの代わりにRoutesを使用する: React Router version 6では、Switchコンポーネントは廃止され、Routesコンポーネントに置き換えられました。これにより、ルートの定義がより明確になり、ネストされたルーティングが簡単になります。

// Routeの子要素にコンポーネントを直接指定するのではなく、elementプロパティを使用する: Version 6では、ルートに対するコンポーネントはelementプロパティを通して渡され、JSX形式で記述する必要があります。

//、Linkコンポーネントにexactプロパティは使用されません。exactプロパティは、以前のバージョンのReact Router（特にversion 5以前）でRouteコンポーネントにおいて、パスの完全一致を指定するために使用されていました。しかし、React Router version 6ではRouteのマッチングシステムが改善され、Routesコンポーネント内のRouteが自動的に正確なマッチングを行うため、このプロパティは不要になりました。
// そのため、Linkコンポーネントのexactプロパティは削除するのが適切です。