import { drawer } from 'material-components-web';

export class App {

    constructor() {
        this.message = 'Hello World!';
    }

    attached() {
        this.drawer = new drawer.MDCPersistentDrawer(this.drawerEl);
        this.drawer.open = true;
    }

    toggleDrawer() {
        this.drawer.open = !this.drawer.open;
    }
}
