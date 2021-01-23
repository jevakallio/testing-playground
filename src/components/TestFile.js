import React from 'react';
import TestCase from './TestCase';
import { FileIcon } from '@primer/octicons-react';

const statusBorderColor = (file) =>
  file.testCases.every((c) => c.result.status === 'passed')
    ? 'border-green-400'
    : 'border-red-400';

function TestFile({ file, fileIndex, isSelected, selectedEvent, dispatch }) {
  return (
    <div
      key={file.testFilePath}
      className={`bg-white p-2 rounded-sm border-r-4 ${statusBorderColor(
        file,
      )}`}
    >
      <h3 className="text-sm font-bold">
        <span className="mr-2">
          <FileIcon />
        </span>

        {file.testFileName}
      </h3>
      <hr className="my-2" />
      <div className="space-y-2">
        {file.testCases.map((testCase, i) => (
          <TestCase
            key={testCase.title}
            fileIndex={fileIndex}
            caseIndex={i}
            testCase={testCase}
            isSelected={isSelected && i === selectedEvent.caseIndex}
            selectedEvent={selectedEvent}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}

export default TestFile;
