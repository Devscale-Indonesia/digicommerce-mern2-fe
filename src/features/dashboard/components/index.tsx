import { useAtomValue } from 'jotai';
import { LayoutDashboard } from './layout';
import { userAtom } from '../../../lib/auth';

export const Dashboard = () => {
  const user = useAtomValue(userAtom);

  return (
    <LayoutDashboard>
      <main>
        <section>
          <h3>Welcome back, {user?.name}!</h3>
          <p>Here is your dashboard...</p>
        </section>
      </main>
    </LayoutDashboard>
  );
};
