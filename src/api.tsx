import axios from 'axios';

const Api = axios.create({
	baseURL: 'https://ferrari219.github.io/graham/data/',
});

// Api.get('data1.json'); //test
// export default Api;

export const profileApi = {
	iam: () => Api.get('profile/iam.json'),
	contact: () => Api.get('profile/contact.json'),
};
export const careerApi = {
	livart: () => Api.get('career/livart.json'),
	jobKorea: () => Api.get('career/jobkorea.json'),
	pulip: () => Api.get('career/pulip.json'),
	him: () => Api.get('career/him.json'),
	p4line: () => Api.get('career/p4line.json'),
};

// https://ferrari219.github.io/graham/data/profile/iam.json
