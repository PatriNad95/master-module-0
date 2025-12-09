interface UserSession {
  connectionId: string;
  nickname: string;
  room: string;
}

export interface ConnectionConfig {
  nickname: string;
  room: string;
}

let userSessions: UserSession[] = [];

export const addUserSession = (
  connectionId: string,
  config: ConnectionConfig
): boolean => {
  if (isNicknameUsed(config.nickname)) {
    console.log('Nickname already in use:', config.nickname);
    return false;
  } else {
    userSessions = [
      ...userSessions,
      { connectionId, nickname: config.nickname, room: config.room },
    ];
    console.log(`'New user joined room: ${config.room}'`, config.nickname);
    return true;
  }
};

export const getUserInfo = (connectionId: string): UserSession => {
  const session = userSessions.find((s) => s.connectionId === connectionId);
  return session
    ? { connectionId, nickname: session.nickname, room: session.room }
    : { connectionId: '-1', nickname: 'Anonimo', room: 'General' };
};

export const isNicknameUsed = (newUserNickname: string): boolean => {
  return userSessions.some(
    (s) => s.nickname.toLowerCase() === newUserNickname.toLowerCase()
  );
};
