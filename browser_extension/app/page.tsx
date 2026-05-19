'use client';
import { useState } from 'react';
import Extension from './assets/components/Extension';
import ConsoleIcon from './assets/icons/ConsoleIcon';

export const extensionsData = [
  {
    id: 'console-plus',
    icon: <ConsoleIcon />,
    title: 'ConsolePlus',
    description:
      'Enhanced developer console with advanced filtering and logging',
    enabled: false,
  },
];

export default function Home() {
  const [extensions, setExtensions] = useState(extensionsData);

  const handleToggle = (id: string, value: boolean) => {
    setExtensions((prev) => {
      prev.map((ex) => (ex.id === id ? { ...ex, enabled: value } : ex));
    });
  };

  const handleRemove = (id: string) => {
    setExtensions((prev) => prev.filter((ex) => ex.id !== id));
  };

  return (
    <div className=' flex items-center justify-center '>
      {extensions.map((ext) => {
        <Extension
          key={ext.id}
          icon={ext.icon}
          description={ext.description}
          isEnabled={ext.enabled}
          title={ext.title}
          actionLabel='Remove'
          onToggle={(value) => handleToggle(ext.id, value)}
          onAction={() => handleRemove(ext.id)}
        />;
      })}
    </div>
  );
}
