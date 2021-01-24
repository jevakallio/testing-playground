import React, { useCallback } from 'react';
import Editor from './Editor';

function QueryEditor(props) {
  const { dispatch, initialValue, readOnly } = props;

  const onLoad = useCallback(
    (editor) => dispatch({ type: 'SET_QUERY_EDITOR', editor }),
    [dispatch],
  );

  const onChange = useCallback(
    (query, { origin }) =>
      dispatch({
        type: 'SET_QUERY',
        query,
        origin: 'EDITOR',
        immediate: origin === 'user',
      }),
    [dispatch],
  );

  return (
    <div
      style={
        // super ugly hack: when we're displaying a user event, we don't
        // want user to try to edit the query, because the query never works
        // we fake it by passing a "reverse engineered" selector that matches
        // whatever element was passed to userEvent/fireEvent in test
        readOnly ? { filter: 'grayscale(100%)', pointerEvents: 'none' } : {}
      }
      className="flex flex-col w-full h-full"
    >
      <Editor
        mode="javascript"
        initialValue={initialValue}
        readOnly={readOnly}
        onLoad={onLoad}
        onChange={onChange}
      />
    </div>
  );
}

export default React.memo(QueryEditor);
