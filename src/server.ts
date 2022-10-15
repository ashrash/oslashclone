import App from './app';
import HealthRoute from './routes/health.route';
import UserRoute from './routes/user.route';
import ShortcutRoute from './routes/shortcut.route';

const app = new App([new HealthRoute(), new UserRoute(), new ShortcutRoute()]);

app.listen();

export default app;