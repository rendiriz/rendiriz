import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { etw } from 'easy-tailwind';
import * as Tooltip from '@radix-ui/react-tooltip';

interface NavbarItem {
  href: string;
  children?: React.ReactNode;
  text?: string;
}

export default function NavbarItem(props: NavbarItem) {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Link
            href={props.href}
            className={etw(
              'hidden sm:block',
              'inline-flex rounded-lg p-2.5',
              'text-sm',
              isActive ? 'text-black dark:text-white' : 'text-neutral-500',
              {
                hover: 'bg-neutral-100 dark:bg-neutral-800',
              },
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {props.children}
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={5}
            className={etw(
              'bg-black dark:bg-white text-white dark:text-black',
              'select-none leading-none',
              'rounded-lg py-2.5 px-3',
              'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade',
              'data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade',
              'data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade',
              'data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade',
              'shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]',
              'will-change-[transform,opacity]',
            )}
          >
            {props.text}
            <Tooltip.Arrow className="fill-black dark:fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
