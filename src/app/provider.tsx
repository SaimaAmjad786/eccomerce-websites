
"use client";
import { Provider } from 'react-redux';
import { Store } from './Redux/store';
import React from 'react'


function Providers({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
        <Provider store={Store}>
        {children}
        </Provider>
    </div>
  )
}

export default Providers

