import { notifications } from "$lib/stores";
import { v4 as uuidv4 } from "uuid";

const NotificationService = () => { };

let length = 0;

notifications.subscribe(notifications => {
    length = notifications.length;
})

NotificationService.push = (message: string, status: string) => {
    const uuid = uuidv4();
    const notification = {
        message,
        status,
        id: uuid
    }

    notifications.update((n) => [...n, notification]);
}

NotificationService.pop = (id: string) => {
    notifications.update(n => {
        return n.filter(item => item.id != id);
    })
}

NotificationService.clear = () => {
    notifications.update(n => {
        return [];
    })
}

export default NotificationService;