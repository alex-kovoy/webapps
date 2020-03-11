/*
Copyright 2019 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import { useStore } from 'shared/libs/stores';
import ConsoleContext from './consoleContext';

export const ConsoleReactContext = React.createContext<ConsoleContext>(null);

const ConsoleContextProvider: React.FC<{
  value: ConsoleContext;
}> = props => {
  return <ConsoleReactContext.Provider {...props} />;
};

export default ConsoleContextProvider;

export function useConsoleContext() {
  const ctx = React.useContext(ConsoleReactContext);
  window['teleconsole'] = ctx;
  return ctx;
}

export function useStoreDocs() {
  const console = React.useContext(ConsoleReactContext);
  return useStore(console.storeDocs);
}

export function useParties() {
  const teleconsole = React.useContext(ConsoleReactContext);
  return useStore(teleconsole.storeParties);
}
