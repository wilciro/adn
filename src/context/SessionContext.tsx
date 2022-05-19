import React, { createContext, useEffect, useRef, useState } from 'react';
import { SessionState } from 'context/models/SessionState';
import * as sessionService from '../services/sessionService';

export const useStateContainer = (initialState: SessionState = {}) => {
  const [username, setUsername] = useState(initialState.username);
  const [sessionId, setSessionId] = useState(initialState.sessionId);

  useEffect(() => {
    if (!username) {
      setSessionId(sessionService.deleteSession());
      return;
    }
    setSessionId(sessionService.createSession(username));
  }, [username]);

  return {
    data: { username, sessionId },
    mutations: { setUsername },
  };
};

export const SessionContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

interface SessionProps {
  children: React.ReactNode;
}

export const SessionProvider = ({ children }: SessionProps) => {
  const contextValue = useStateContainer(sessionService.recoverSession());
  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};

