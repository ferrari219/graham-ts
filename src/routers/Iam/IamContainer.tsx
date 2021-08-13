import { profileApi } from 'api';
import React, { Component } from 'react';
import IamPresenter from './IamPresenter';

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

interface IiamState {
	iam: null;
	// myname: string | null;
	// job: string | null;
	// iam: string | null;
	// comment: string | null;
	// birth: string | null;
	// FrontendSkill: object | null;
	// DesignSkill: object | null;
	// BackendSkill: object | null;
	// EtcSkill: object | null;
	// email: string | null;
	// github: string | null;
	// homepage: string | null;
	loading: boolean;
	error: string | null;
}
class IamContainer extends Component<{}, IiamState> {
	state = {
		iam: null,
		// myname: null,
		// job: null,
		// iam: null,
		// comment: null,
		// birth: null,
		// FrontendSkill: null,
		// DesignSkill: null,
		// BackendSkill: null,
		// EtcSkill: null,
		// email: null,
		// github: null,
		// homepage: null,
		loading: true,
		error: null,
	};

	async componentDidMount() {
		try {
			const { data: iam } = await profileApi.iam();
			this.setState({
				iam,
			});
			console.log(iam);
		} catch {
			this.setState({ error: "can't find information" });
		} finally {
			this.setState({ loading: false });
		}
	}

	render() {
		const {
			iam,
			// myname,
			// job,
			// iam,
			// comment,
			// birth,
			// FrontendSkill,
			// DesignSkill,
			// BackendSkill,
			// EtcSkill,
			// email,
			// github,
			// homepage,
			loading,
			error,
		} = this.state;
		return (
			<IamPresenter
				iam={iam}
				// myname={myname}
				// job={job}
				// iam={iam}
				// comment={comment}
				// birth={birth}
				// FrontendSkill={FrontendSkill}
				// DesignSkill={DesignSkill}
				// BackendSkill={BackendSkill}
				// EtcSkill={EtcSkill}
				// email={email}
				// github={github}
				// homepage={homepage}
				loading={loading}
				error={error}
			/>
		);
	}
}

export default IamContainer;
