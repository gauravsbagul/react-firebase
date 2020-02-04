import { firestore } from '../../../config/firebaseConfig';

export const getAllNotifications = () => {
    console.log("TCL: getAllNotifications -> getAllNotifications")
    return dispatch =>
        new Promise(async () => {
            await firestore
                .collection('notifications')
                .get()
                .then(responseSnap => {
                    console.log("TCL: getAllNotifications -> responseSnap", responseSnap)
                    // let data = [];
                    // responseSnap.forEach(responseData => {
                    //     data.push(responseData.data());
                    // });
                    dispatch({
                        type: 'GET_NOTIFICATION',
                        payload: responseSnap
                    });
                })
                .catch(responseSnapErr => {
                    console.log("TCL: getAllNotifications -> responseSnapErr", responseSnapErr)
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
