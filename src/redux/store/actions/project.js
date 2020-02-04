import { firestore } from '../../../config/firebaseConfig';

export const createProject = project => {
	console.log('TCL: createProject project', project);
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
				console.log('TCL:createProject  response', response);
				dispatch({
					type: 'CREATE_PROJECT',
					payload: project
				});
			})
			.catch(error => {
				console.log('TCL:createProject error', error);
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
					responseSnap.forEach(responseData => {
						console.log('TCL: getProjects -> responseData', responseData);
						data.push(responseData.data());
					});
					dispatch({
						type: 'GET_PROJECTS',
						payload: data
					});
				})
				.catch(responseSnapErr => {
					console.log('TCL: getContact -> responseSnapErr', responseSnapErr);
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
