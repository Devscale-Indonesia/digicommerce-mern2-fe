import { Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Tooltip } from '../components/ui/tooltip';

export default function App() {
  return (
    <>
      <h1 className="text-5xl font-bold">
        Hello from the app <span className="text-red-500">Another staging</span>!
      </h1>
      <Tooltip message="Hello from tooltip">
        <Button variant="outline" startContent={<Mail />}>
          Hello!
        </Button>
      </Tooltip>
    </>
  );
}
