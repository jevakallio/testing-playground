import React from 'react';
import Header from './Header';
import TestRunBrowser from './TestRunBrowser';
import { ToastContainer } from 'react-toastify';

function Layout({
  children,
  testRun,
  selectedEvent,
  dirty,
  gistId,
  gistVersion,
  dispatch,
  status,
  settings,
}) {
  return (
    <div className="flex flex-col h-screen">
      {/* <div className="mb-8 flex-none">
        <Header
          gistId={gistId}
          gistVersion={gistVersion}
          dirty={dirty}
          canSave={!!dirty}
          canFork={!!gistId}
          dispatch={dispatch}
          status={status}
          settings={settings}
        />
      </div> */}
      <div className="flex flex-row h-screen w-full">
        {testRun && (
          <nav className="px-4 py-2 mt-2 w-1/4 h-screen space-y-2">
            <TestRunBrowser
              testRun={testRun}
              selectedEvent={selectedEvent}
              dispatch={dispatch}
            />
          </nav>
        )}

        <div className="h-full w-3/4 flex-grow flex-shrink relative">
          {children}
        </div>
      </div>

      {/* <ToastContainer
        position="bottom-right"
        closeOnClick
        pauseOnHover
        autoClose
        newestOnTop
      /> */}
    </div>
  );
}

export default Layout;
