import React, { useEffect, useState } from 'react';
import * as Toggle from '@radix-ui/react-toggle';
import { BsSunrise, BsSunset } from 'react-icons/bs';
import { useTheme } from 'next-themes';

export const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <Toggle.Root
      className="p-2 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-100 rounded-md"
      pressed={theme === 'dark' ? true : false}
      onPressedChange={() =>
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }
    >
      {theme === 'dark' ? (
        <BsSunrise className="w-5 h-5" />
      ) : (
        <BsSunset className="w-5 h-5" />
      )}
    </Toggle.Root>
  );
};