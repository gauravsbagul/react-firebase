import firebase, { firestore } from '../../../config/firebaseConfig';

export const signIn = credentials => {
	return dispatch =>
		new Promise(async () => {
			return firebase
				.auth()
				.signInWithEmailAndPassword(credentials.email, credentials.password)
				.then(async response => {
					dispatch({
						type: 'LOGIN_SUCCESS',
						payload: {
							data: response
						}
					});

				})
				.catch(async error => {
					dispatch({
						type: 'LOGIN_ERROR',
						payload: error
					});
				});
		}).catch(err => {
			dispatch({
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
	console.log("TCL: UID", UID)
	let user = firebase.auth();
	console.log("TCL: user", user)
	return (dispatch, getState) => {
		firestore
			.collection('users')
			.doc()
			.get()
			.then(snapshot => {
				console.log("TCL: snapshot", snapshot.data())
				console.log("TCL: snapshot", snapshot.id)
				var currentUser = {
					uid: snapshot.id,
					...snapshot.data()
				}
				dispatch({
					type: 'CURRENT_USER',
					payload: currentUser
				});
			})
			.catch(err => {
				console.log('Error getting documents', err);
			});


	};
};

