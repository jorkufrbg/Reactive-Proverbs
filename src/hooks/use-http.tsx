import { useReducer, useCallback } from 'react';

function httpReducer(state: any, action: { type: string; responseData: any; errorMessage: any; }) {
  if (action.type === 'SEND') {
    return {
      data: null,
      error: null,
      status: 'pending',
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error: null,
      status: 'completed',
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error: action.errorMessage,
      status: 'completed',
    };
  }

  return state;
}

function useHttp(requestFunction: any, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData: any) {
      dispatch({
        type: 'SEND',
        responseData: undefined,
        errorMessage: undefined
      });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({
          type: 'SUCCESS', responseData,
          errorMessage: undefined
        });
      } catch (error) {
        if (error instanceof Error) {
          dispatch({
            type: 'ERROR',
            errorMessage: error.message || 'Something went wrong!',
            responseData: undefined
          });
        }

      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
