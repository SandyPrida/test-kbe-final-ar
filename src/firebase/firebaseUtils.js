import { getDatabase, ref, push, set, get } from 'firebase/database';

import firebaseApp from './firebaseConfig';

const db = getDatabase(firebaseApp);
export const addUserToFirebase = async (name,language) => {
  var id_language_aktif;
  if(language == 'eng'){
    id_language_aktif = 1;
  }else if(language == 'ina'){
    id_language_aktif = 2;
  }else if(language == 'ned'){
    id_language_aktif = 3;
  }
  try {
    console.log(name)
    const newDataRef = push(ref(db, 'users'));

    set(newDataRef, {
      id_language: id_language_aktif,
      username: name,
      unlock_video: 0,
      current_level:1,
    });
    const id_user_aktif = newDataRef.key;
    return id_user_aktif;
    console.log('User added with ID: ', newDataRef.key);
  } catch (error) {
    console.error('Error adding user: ', error);
  }
}

// Get User Data
export const getUserFromFirebase = async (userId) => {
  try {
    const userRef = ref(db, `users/${userId}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      const userData = snapshot.val();
      return userData;
    } else {
      console.log('No such user with the provided ID');
      return null;
    }
  } catch (error) {
    console.error('Error getting user: ', error);
    throw error;
  }
};

// Get Video Data
export const getVideo = async (level) => {
  try {
    console.log('ini'+userId)
    const videosRef = ref(db, 'videos');
    const query = orderByChild('index');

    const snapshot = await get(query, equalTo(level, 'level'), videosRef);

    if (snapshot.exists()) {
      const videosData = snapshot.val();
      return videosData;
    } else {
      console.log('No videos found for the specified level');
      return null;
    }
  } catch (error) {
    console.error('Error getting video: ', error);
    throw error;
  }
};

// Get Progress Video Data
export const getProgressUser = async (userId) => {
  try {
    const progress_users = ref(db, 'progress_users');
    const query = orderByChild('index');

    const snapshot = await get(query, equalTo(userId, 'id_user'), progress_users);

    if (snapshot.exists()) {
      const ProgressUserData = snapshot.val();
      return ProgressUserData;
    } else {
      console.log('No Progress User found for the specified Id User');
      return null;
    }
  } catch (error) {
    console.error('Error getting progress user: ', error);
    throw error;
  }
};

export const addProgressUser = async (id_user, level) => {
  try {
    console.log(level)
    const newDataRef = push(ref(db, 'progress_user'));

    set(newDataRef, {
      id_user: id_user,
      level: level,
      status: "not_finish",
    });
    const id_progress = newDataRef.key;
    return id_progress;
    console.log('Progress added with ID: ', newDataRef.key);
  } catch (error) {
    console.error('Error adding progress: ', error);
  }
}

export const updateProgressUser = async (id_user, level) => {
  try {
    const progress_users = ref(db, 'progress_users');
    const query = orderByChild('index');

    const snapshot = await get(query, equalTo(id_user, 'id_user'), equalTo(level, 'level'), progress_users);

    if (snapshot.exists()) {
      const ProgressUserData = snapshot.val();
      return ProgressUserData;
    } else {
      console.log('No Progress User found for the specified Id User');
      return null;
    }
  } catch (error) {
    console.error('Error getting progress user: ', error);
    throw error;
  }
};