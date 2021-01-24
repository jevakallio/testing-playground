import React, { useState } from 'react';
import QueryEditor from './QueryEditor';
import QueryOutput from './QueryOutput';

function Query({ query, result, dispatch, variant }) {
  const [initialValue] = useState(query);
  console.log('result', result);
  return (
    <div className="relative h-56 w-full flex flex-col">
      <div className="query-editor flex-auto relative">
        <QueryEditor
          variant={variant}
          initialValue={initialValue}
          readOnly={result && result.readOnly}
          dispatch={dispatch}
        />
      </div>

      <QueryOutput error={result?.error?.message} result={result?.formatted} />
    </div>
  );
}

export default React.memo(Query);
