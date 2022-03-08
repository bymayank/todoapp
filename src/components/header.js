import ReactDOM from "react-dom";
import React from "react";
import "@innovaccer/design-system/css";
import { HorizontalNav } from '@innovaccer/design-system';
export default function Header() {
  const data = [
    {
      name: 'mainapp',
      label: 'Main App',
    },
    {
      name: 'about',
      label: 'About',
    },
  ];

  const [active, setActive] = React.useState({
    name: 'mainapp'
  });

  const onClickHandler = (menu) => {
    console.log('menu-clicked: ', menu);
    setActive(menu);
  };

  return (
    <div className="d-flex align-items-center py-6" style={{ background: 'var(--secondary-lightest)' }}>
      <HorizontalNav
        className="w-100 justify-content-center"
        menus={data}
        active={active}
        onClick={onClickHandler}
      />
    </div>
  );
}

ReactDOM.render(<Header />, document.getElementById("root"));
