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


  
const removeNotification = (hash: string)=> {
  const instance = NotiSingleton.getInstance();
  instance.notifications.delete(hash);
}


export const addNotification =(notification: NotinotiProps) =>{

  const hash = Math.random() + Date.now().toString();

  const instance = NotiSingleton.getInstance();
  instance.notifications.set(hash, notification);
  if (notification.timeout) {
    setTimeout(() => {
      removeNotification(hash);
    }, notification.timeout);
  }
}

interface useNotification {
  notifications: Reactive<Map<string, NotinotiProps>>;
  addNotification: (notification: NotinotiProps) => void
}

export const useNotification = () : useNotification => {
  const instance = NotiSingleton.getInstance();
  return {
    notifications: instance.notifications,
    addNotification: addNotification
  }
}