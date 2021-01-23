import React, { useState } from 'react';
import QueryEditor from './QueryEditor';
import QueryOutput from './QueryOutput';

function Query({ query, result, dispatch, variant }) {
  const [initialValue] = useState(query);

  return (
    <div className="relative h-56 w-full flex flex-col">
      <div className="query-editor flex-auto relative">
        <QueryEditor
          variant={variant}
          initialValue={initialValue}
          dispatch={dispatch}
        />
      </div>

      <QueryOutput error={result?.error?.message} result={result?.formatted} />
    </div>
  );
}

export default React.memo(Query);
