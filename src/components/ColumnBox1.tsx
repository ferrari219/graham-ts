import React from 'react';

interface IcolumnboxProps {
	myname?: string | null;
	job?: string | null;
	iam?: string | null;
	comment?: string | null;
	birth?: string | null;
	FrontendSkill?: object | null;
	DesignSkill?: object | null;
	BackendSkill?: object | null;
	EtcSkill?: object | null;
	email?: string | null;
	github?: string | null;
	homepage?: string | null;
}

const ColumnBox1: React.FunctionComponent<IcolumnboxProps> = ({
	myname,
	job,
	iam,
	comment,
	birth,
	FrontendSkill,
	DesignSkill,
	BackendSkill,
	EtcSkill,
	email,
	github,
	homepage,
}) => {
	return <div>ColumnBox1</div>;
};

export default ColumnBox1;
