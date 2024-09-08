import { Link } from 'react-router-dom';

interface MenuProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export const Menu = ({ label, href, icon }: MenuProps) => {
  return (
    <Link
      to={href}
      className="flex items-center gap-2 rounded-lg bg-transparent px-3 py-2 font-medium transition duration-200 hover:bg-primary-500 hover:text-white"
    >
      {icon}
      {label}
    </Link>
  );
};
