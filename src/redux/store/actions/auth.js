import firebase, { firestore } from '../../../config/firebaseConfig';

export const signIn = credentials => {
	console.log('TCL: credentials', credentials);
	return dispatch =>
		new Promise(async () => {
			return firebase
				.auth()
				.signInWithEmailAndPassword(credentials.email, credentials.password)
				.then(async response => {
					console.log('TCL: response', response);
					return dispatch({
						type: 'LOGIN_SUCCESS',
						payload: {
							data: response
						}
					});
				})
				.catch(async error => {
					console.log('TCL: error', error);
					return dispatch({
						type: 'LOGIN_ERROR',
						payload: error
					});
				});
		}).catch(err => {
			console.log('TCL: err', err);
			return dispatch({
				type: 'LOGIN_ERROR',
				payload: err
			});
		});
};

export const signout = () => {
	return (dispatch, getState) => {
		firebase
			.auth()
			.signOut()
			.then(response => {
				dispatch({
					type: 'LOGIN_SUCCESS',
					payload: null
				});
			});
	};
};

export const signUp = newUser => {
	return (dispatch, getState) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(newUser.email, newUser.password)
			.then(response => {
				return firestore
					.collection('users')
					.doc(response.user.uid)
					.set({
						firstName: newUser.firstName,
						lastName: newUser.lastName,
						initials: newUser.firstName[0] + newUser.lastName[0]
					});
			})
			.then(() => {
				dispatch({
					type: 'SIGN_UP',
					payload: true
				});
			})
			.catch(err => {
				dispatch({
					type: 'SIGN_UP_ERROR',
					payload: err.message
				});
			});
	};
};

export const getCurrentUser = UID => {
	console.log('TCL: UID', UID);
	let user = firebase.auth();
	return (dispatch, getState) => {
		firestore
			.collection('users')
			.doc('AUW99mp0fyWUtYTallFR')
			.get()
			.then(snapshot => {
				console.log('TCL: snapshot', snapshot.data());
			})
			.catch(err => {
				console.log('Error getting documents', err);
			});
	};
};
