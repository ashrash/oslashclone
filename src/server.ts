import App from './app';
import HealthRoute from './routes/health.route';
import UserRoute from './routes/user.route';

const app = new App([new HealthRoute(), new UserRoute()]);

app.listen();

export default app;