import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { etw } from 'easy-tailwind';
import { site } from '@/libs/site';

interface NavbarItemMobile {
  href: string;
  text: string;
}

export default function NavbarItemMobile(props: NavbarItemMobile) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link
      href={props.href}
      className={etw(
        'flex font-medium py-3 px-4',
        'text-sm',
        isActive
          ? 'bg-neutral-50 dark:bg-neutral-900 text-black dark:text-white'
          : 'text-neutral-500',
        {
          hover: 'bg-neutral-100 dark:bg-neutral-800',
        },
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {props.text}
      <span className="sr-only">{`${site.title} ${props.text}`}</span>
    </Link>
  );
}
