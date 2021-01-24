import React from 'react';
import {
  CheckCircleFillIcon,
  XCircleFillIcon,
  EyeIcon,
  EyeClosedIcon,
  ZapIcon,
} from '@primer/octicons-react';

// @todo lol fixme
const getEventDisplayText = (event, short = false) => {
  if (event.type === 'Query') {
    return `${short ? '' : 'screen.'}${event.method}("${event.args[0]}")`;
  } else {
    const [, ...args] = event.args;
    const el = event.selector; //short && node.length > 25 ? `${node.substring(0, 25)}...` : node;
    const rest = [null, ...args.map((a) => `"${a}"`)].join(', ');
    return `${short ? '' : 'userEvent.'}${event.method}(${el}${rest})`;
  }
};

const EventIcon = ({ type, result }) => {
  const size = 12;
  if (type === 'Query') {
    if (result) {
      return <EyeIcon aria-label="Found" size={size} />;
    } else {
      return <EyeClosedIcon aria-label="Not Found" size={size} />;
    }
  } else {
    return <ZapIcon aria-label="User Event" size={size} />;
  }
};

const StatusIcon = ({ result }) => {
  if (result.status === 'passed') {
    return (
      <span className="mr-2 text-green-400">
        <CheckCircleFillIcon />
      </span>
    );
  } else {
    return (
      <span className="mr-2 text-red-400">
        <XCircleFillIcon />
      </span>
    );
  }
};

function TestCase({
  testCase,
  fileIndex,
  caseIndex,
  selectedEvent,
  isSelected,
  dispatch,
}) {
  const selectEvent = (event, eventIndex) => {
    dispatch({
      type: 'SET_SELECTED_EVENT',
      payload: {
        fileIndex,
        caseIndex,
        eventIndex,
      },
    });
    dispatch({ type: 'SET_MARKUP', markup: event.html });
    dispatch({
      type: 'SET_QUERY',
      query: getEventDisplayText(event),
    });
  };

  return (
    <div className="full-width">
      <h4
        key={testCase.title}
        className={`text-sm  mb-2 ${
          isSelected ? 'font-bold text-blue-600' : 'text-gray-600'
        }`}
      >
        <StatusIcon result={testCase.result} />
        {testCase.title}
      </h4>
      <ul className="text-xs full-width">
        {testCase.events.map((event, i) => (
          <li
            className={`full-width p-1 ${
              isSelected && i === selectedEvent.eventIndex
                ? 'text-blue-600 bg-blue-200'
                : 'text-gray-600'
            }`}
            key={i}
          >
            <div style={{ textIndent: '-2rem', marginLeft: '2rem' }}>
              <span className="ml-4relative">
                <EventIcon
                  type={event.event.type}
                  result={event.event.result}
                />
              </span>
              <a
                className={`cursor-pointer p-2 full-width`}
                onClick={() => selectEvent(event.event, i)}
              >
                {getEventDisplayText(event.event, true)}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TestCase;
