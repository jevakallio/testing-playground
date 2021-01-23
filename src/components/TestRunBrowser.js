import React from 'react';
import TestFile from './TestFile';

function TestRunBrowser({ testRun = [], selectedEvent, dispatch }) {
  return (
    <div className="h-auto w-full flex flex-grow flex-col">
      <div className="space-y-4">
        {testRun.map((file, i) => (
          <TestFile
            key={file.testFilePath}
            fileIndex={i}
            isSelected={i === selectedEvent.fileIndex}
            selectedEvent={selectedEvent}
            file={file}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}

export default TestRunBrowser;
