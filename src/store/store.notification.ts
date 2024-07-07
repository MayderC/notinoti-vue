import { Reactive, reactive } from 'vue';
import { NotinotiProps } from '../interfaces/notinoti.interface';


class NotiSingleton {
  private static instance: NotiSingleton;
  notifications: Reactive<Map<string, NotinotiProps>>;

  private constructor() {
    this.notifications = reactive(
      new Map<string, NotinotiProps>()
    );
   }

  static getInstance() {
    if (!NotiSingleton.instance) {
      NotiSingleton.instance = reactive(new NotiSingleton());
    }
    return NotiSingleton.instance;
  }
}


  
const removeNoti = (hash: string)=> {
  const instance = NotiSingleton.getInstance();
  instance.notifications.delete(hash);
}


const addNotification =(notification: NotinotiProps) =>{

  const instance = NotiSingleton.getInstance();
  let hash = Math.random() + Date.now().toString();

  while (instance.notifications.has(hash)) {
    hash = Math.random() + Date.now().toString();
  }

  
  notification.id = hash;
  instance.notifications.set(hash, notification);
  console.log(instance.notifications);

  setTimeout(() => {
    removeNoti(hash);
  }, notification.timeout || 2000);

}
interface useNotification {
  notifications: Reactive<Map<string, NotinotiProps>>;
  addNotification: (notification: NotinotiProps) => void
}


/*
  @returns {useNotification} - An object containing the notifications and the addNotification function
*/

export const useNotification = () : useNotification => {
  const instance = NotiSingleton.getInstance();
  return {
    notifications: instance.notifications,
    addNotification: addNotification
  }
}