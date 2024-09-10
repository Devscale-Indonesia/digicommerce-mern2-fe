import React from 'react';

export const AuthLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="grid h-screen grid-cols-2">
      <section className="bg-primary-600" />
      <section className="flex items-center justify-center">{children}</section>
    </main>
  );
};
