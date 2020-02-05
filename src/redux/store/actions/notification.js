import { firestore } from '../../../config/firebaseConfig';

export const getAllNotifications = () => {
    return dispatch =>
        new Promise(async () => {
            await firestore
                .collection('notifications')
                .get()
                .then(async responseSnap => {
                    let data = [];
                    responseSnap.forEach(responseData => {
                        data.push(responseData.data());
                    });
                    await dispatch({
                        type: 'GET_NOTIFICATION',
                        payload: data
                    });
                })
                .catch(responseSnapErr => {
                    dispatch({
                        type: 'GET_NOTIFICATION',
                        payload: []
                    });
                });
        }).catch(err => {
            console.log('Error retriving contacts ' + err);
            dispatch({
                type: 'GET_NOTIFICATION',
                payload: []
            });
        });
};
