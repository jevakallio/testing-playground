import React, { useState } from 'react';
import TestCase from './TestCase';
import {
  FileIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@primer/octicons-react';

const determineSuccess = (file) =>
  file.testCases.every((c) => c.result.status === 'passed');

const statusBorderColor = (isSuccess) =>
  isSuccess ? 'border-green-400' : 'border-red-400';

function TestFile({ file, fileIndex, isSelected, selectedEvent, dispatch }) {
  const [isSuccess] = useState(determineSuccess(file));
  const [isOpen, setIsOpen] = useState(!isSuccess);

  return (
    <div
      key={file.testFilePath}
      className={`bg-white p-2 rounded-sm border-r-4 ${statusBorderColor(
        isSuccess,
      )}`}
    >
      <h3
        className="text-sm font-bold flex flex-row justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          <span className="mr-2">
            <FileIcon />
          </span>

          {file.testFileName}
        </span>
        <span className="flex flex-end">
          {isOpen ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
        </span>
      </h3>
      {isOpen && (
        <>
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
        </>
      )}
    </div>
  );
}

export default TestFile;
