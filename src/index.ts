import {
  WEB_KEYCODES_TO_KEY_ENUM,
  DARWIN_KEYCODES_TO_KEY_ENUM,
  LINUX_KEYCODES_TO_KEY_ENUM,
  WINDOWS_KEYCODES_TO_KEY_ENUM,
  MOUSE_BUTTONS_TO_KEY_ENUM,
} from './enums';

export {
  WEB_KEYCODES_TO_KEY_ENUM,
  DARWIN_KEYCODES_TO_KEY_ENUM,
  LINUX_KEYCODES_TO_KEY_ENUM,
  WINDOWS_KEYCODES_TO_KEY_ENUM,
  MOUSE_BUTTONS_TO_KEY_ENUM,
};

export const keyCodeToKeyEnum = (platform: string, keyCode: number) => {
  switch (platform) {
    case 'web':
      return WEB_KEYCODES_TO_KEY_ENUM[keyCode];
    case 'darwin':
      return DARWIN_KEYCODES_TO_KEY_ENUM[keyCode];
    case 'linux':
      return LINUX_KEYCODES_TO_KEY_ENUM[keyCode];
    case 'win32':
    case 'win64':
      return WINDOWS_KEYCODES_TO_KEY_ENUM[keyCode];
    default:
      return;
  }
};

export const mouseButtonToKeyEnum = (platform: string, mouseButton: number) => {
  switch (platform) {
    case 'web':
    case 'darwin':
    case 'linux':
    case 'win32':
    case 'win64':
    default:
      return MOUSE_BUTTONS_TO_KEY_ENUM[mouseButton];
  }
};