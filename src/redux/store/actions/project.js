import { firestore } from '../../../config/firebaseConfig';

export const createProject = project => {
	return (dispatch, getState) => {
		firestore
			.collection('projects')
			.add({
				...project,
				firstName: 'Gaurav',
				lastName: 'Bagul',
				// id: 12345,
				createdAt: new Date()
			})
			.then(response => {
				dispatch({
					type: 'CREATE_PROJECT',
					payload: project
				});
			})
			.catch(error => {
				dispatch({
					type: 'CREATE_PROJECT_ERROR',
					payload: error
				});
			});
	};
};

export const getProjects = () => {
	return dispatch =>
		new Promise(async () => {
			await firestore
				.collection('projects')
				.get()
				.then(async responseSnap => {
					let data = [];
					await responseSnap.forEach(responseData => {
						data.push(responseData.data());
					});
					await dispatch({
						type: 'GET_PROJECTS',
						payload: data
					});
				})
				.catch(responseSnapErr => {
					dispatch({
						type: 'GET_PROJECTS',
						payload: []
					});
				});
		}).catch(err => {
			console.log('Error retriving contacts ' + err);
			dispatch({
				type: 'GET_PROJECTS',
				payload: []
			});
		});
};
