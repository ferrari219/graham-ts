import React, { Profiler } from 'react';
import Loader from 'components/Loader';
import Error from 'components/Error';
import Headers from 'components/Headers';
import ColumnBox from 'components/ColumnBox';
import Profile from 'components/Profile';

// "title": "Graham's",
// "myname": "Sung-ho Jeon",
// "job": "Frontend Developer / Designer",
// "iam": "디자인, 개발 모두 다하는 욕심 많은 프론트엔드 개발자 전성호 입니다.",
// "comment": "매일 공부하고, 새로운 기술 적용하는데서 재미를 느낍니다. 궁금한 점은 찾아보고 직접 만들다보니 어느새 디자인, 개발 모두 다 하게 되었습니다.",
// "birth": "1983. 2. 2",
// "FrontendSkill": ["React", "ES6", "styled-components", "SASS", "html"],
// "DesignSkill": ["Figma", "Adobe XD", "Photoshop"],
// "BackendSkill": ["Node Express", "MySql"],
// "EtcSkill": ["gulp", "jQuery", "github", "gitlab"],
// "email": "grahamsnum@gmail.com",
// "github": "https://github.com/ferrari219",
// "homepage": "ferrari219.github.io"

interface IiamProps {
	iam: object | null;
	loading: boolean;
	error: string | null;
}

const IamPresenter: React.FunctionComponent<IiamProps> = ({
	iam,
	loading,
	error,
}) => {
	return (
		<main>
			<Headers current="I am..." />
			<ColumnBox>
				<Profile {...iam} />
			</ColumnBox>
		</main>
	);
};

export default IamPresenter;
