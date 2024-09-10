import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { AuthLayout } from './layout.auth';
import { useRegister } from '../hooks/use.register';
import { Link } from 'react-router-dom';

export const Register = () => {
  const { errors, loading, isRegistered, handleRegister } = useRegister();

  return (
    <AuthLayout>
      <div className="w-[300px] space-y-6">
        <section>
          <h3>Register</h3>
          <p>Please create an account to continue</p>
        </section>
        <form onSubmit={handleRegister} key={isRegistered ? 'registered' : 'unregistered'} className="space-y-2">
          <Input name="name" placeholder="Name" />
          <Input name="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
          <Button disabled={loading} isFullwidth>
            Register
          </Button>
          {errors.map((error) => {
            return (
              <div key={error.code} className="text-center text-xs text-rose-600">
                {error.message}
              </div>
            );
          })}
          {isRegistered && (
            <div className="text-center text-xs text-emerald-500">Register Success, Please login...</div>
          )}
        </form>
        <div>
          Have an account ? <Link to="/login">Login</Link>
        </div>
      </div>
    </AuthLayout>
  );
};
