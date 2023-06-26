import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where
} from 'firebase/firestore';
import { db } from '../firebase';
import { ListProps } from '../pages/home';
import { TaskProps } from '../components/List';

export const createList = async (userId: string | undefined, title: string) => {
  try {
    const response = await addDoc(collection(db, 'lists'), {
      title: title,
      userId: userId
    });

    return response.id;
  } catch (error) {
    console.log(error);
  }
};

export const getListsByUser = async (userId: string) => {
  const q = query(collection(db, 'lists'), where('userId', '==', userId));
  let listArray: ListProps[] = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    listArray.push({ id: doc.id, title: doc.data().title });
  });
  return listArray;
};

export const deleteList = async (userId: string) => {
  await deleteDoc(doc(db, 'lists', userId));
};

// TASKS

export const createTask = async (listId: string | undefined, title: string) => {
  try {
    const response = await addDoc(collection(db, 'tasks'), {
      title: title,
      listId: listId,
      isComplete: false
    });

    return response.id;
  } catch (error) {
    console.log(error);
  }
};

export const getTasksByList = async (listId: string) => {
  const q = query(collection(db, 'tasks'), where('listId', '==', listId));
  let taskArray: TaskProps[] = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    taskArray.push({
      id: doc.id,
      title: doc.data().title,
      isComplete: doc.data().isComplete
    });
  });
  return taskArray;
};

export const deleteTask = async (listId: string) => {
  await deleteDoc(doc(db, 'tasks', listId));
};

// Update todo in firebase
export const toggleCompleteTask = async (task: TaskProps) => {
  await updateDoc(doc(db, 'tasks', task.id), {
    isComplete: !task.isComplete
  });
};
