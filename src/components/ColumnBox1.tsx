import React from 'react';

interface IcolumnboxProps {
	children: React.ReactNode;
}

const ColumnBox1: React.FunctionComponent<IcolumnboxProps> = (children) => {
	return <div>{children}</div>;
};

export default ColumnBox1;
