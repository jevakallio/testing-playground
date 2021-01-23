import React from 'react';
import { useParams } from 'react-router-dom';
import Preview from '../components/Preview';
import MarkupEditor from '../components/MarkupEditor';
import usePlayground from '../hooks/usePlayground';
import Layout from '../components/Layout';
import Loader from '../components/Loader';
import Query from '../components/Query';

// import PlaygroundPanels from '../components/PlaygroundPanels';
import { usePreviewEvents } from '../context/PreviewEvents';

function Playground() {
  const { gistId, gistVersion } = useParams();
  const [state, dispatch] = usePlayground({ gistId, gistVersion });
  const {
    query,
    markup,
    selectedEvent,
    result,
    status,
    dirty,
    settings,
    testRun,
  } = state;
  const { previewRef } = usePreviewEvents();

  const isLoading = status === 'loading';

  return (
    <Layout
      testRun={testRun}
      selectedEvent={selectedEvent}
      dispatch={dispatch}
      gistId={gistId}
      gistVersion={gistVersion}
      dirty={dirty}
      status={status}
      settings={settings}
    >
      <Loader loading={isLoading} />
      <div
        className={[
          'flex flex-col h-auto md:h-full w-full fade',
          isLoading ? 'opacity-0' : 'opacity-100',
        ].join(' ')}
      >
        <div className="editor p-4 gap-4 md:gap-8 md:h-56 flex-auto grid-cols-1 md:grid-cols-2">
          <div className="flex-auto h-56 md:h-full">
            <Preview
              forwardedRef={previewRef}
              markup={markup}
              elements={result?.elements}
              accessibleRoles={result?.accessibleRoles}
              dispatch={dispatch}
            />
          </div>
          <div className="flex flex-auto flex-col relative h-56 md:h-full space-y-2">
            <MarkupEditor markup={markup} dispatch={dispatch} />
            <Query query={query} result={result} dispatch={dispatch} />
          </div>
        </div>
        {/* <PlaygroundPanels state={state} dispatch={dispatch} />} */}
      </div>
    </Layout>
  );
}

export default Playground;
