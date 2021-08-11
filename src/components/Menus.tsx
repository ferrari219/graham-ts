import React from 'react';
import Menu from './Menu';

interface ImenusProps {
  category?: Array<{
    id: number;
    name: string;
    lnk: string;
  }>;
}

const Menus: React.FunctionComponent<ImenusProps> = ({ category }) => {
  console.log(category);
  return (
    <ul>
      {category &&
        [...category].map((item) => (
          <Menu key={item.id} id={item.id} name={item.name} lnk={item.lnk} />
        ))}
    </ul>
  );
};

export default Menus;
