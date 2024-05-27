export const COOKIE_START_NOTE_NAME = 'note';

export interface Cookie {
  name: string;
  value: {
    title: string;
    content: string;
  };
  expires: string;
}

/*
'nombreDeLaCookie=valorDeLaCookie;
expires=Tue, 19 Jun 2023 12:00:00 UTC';
 */
