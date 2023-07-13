import { ENUM_TO_IOHOOK } from './iohook';

export const ENUM_TO_WEB = {
  KEY_BACKSPACE: 8,
  KEY_TAB: 9,
  KEY_ENTER: 13,
  KEY_SHIFT: 16,
  KEY_CONTROL: 17,
  KEY_ALT: 18,
  KEY_PAUSE: 19,
  KEY_CAPS_LOCK: 20,
  KEY_ESCAPE: 27,
  KEY_SPACE: 32,
  KEY_PAGE_UP: 33,
  KEY_PAGE_DOWN: 34,
  KEY_END: 35,
  KEY_HOME: 36,
  KEY_LEFT: 37,
  KEY_UP: 38,
  KEY_RIGHT: 39,
  KEY_DOWN: 40,
  KEY_INSERT: 45,
  KEY_DELETE: 46,
  KEY_0: 48,
  KEY_1: 49,
  KEY_2: 50,
  KEY_3: 51,
  KEY_4: 52,
  KEY_5: 53,
  KEY_6: 54,
  KEY_7: 55,
  KEY_8: 56,
  KEY_9: 57,
  KEY_A: 65,
  KEY_B: 66,
  KEY_C: 67,
  KEY_D: 68,
  KEY_E: 69,
  KEY_F: 70,
  KEY_G: 71,
  KEY_H: 72,
  KEY_I: 73,
  KEY_J: 74,
  KEY_K: 75,
  KEY_L: 76,
  KEY_M: 77,
  KEY_N: 78,
  KEY_O: 79,
  KEY_P: 80,
  KEY_Q: 81,
  KEY_R: 82,
  KEY_S: 83,
  KEY_T: 84,
  KEY_U: 85,
  KEY_V: 86,
  KEY_W: 87,
  KEY_X: 88,
  KEY_Y: 89,
  KEY_Z: 90,
  KEY_META: 91,
  MOUSE_BUTTON_3: 93,
  KEY_KP_0: 96,
  KEY_KP_1: 97,
  KEY_KP_2: 98,
  KEY_KP_3: 99,
  KEY_KP_4: 100,
  KEY_KP_5: 101,
  KEY_KP_6: 102,
  KEY_KP_7: 103,
  KEY_KP_8: 104,
  KEY_KP_9: 105,
  KEY_KP_MULTIPLY: 106,
  KEY_KP_ADD: 107,
  KEY_KP_SUBTRACT: 109,
  KEY_KP_SEPARATOR: 110,
  KEY_KP_DIVIDE: 111,
  KEY_F1: 112,
  KEY_F2: 113,
  KEY_F3: 114,
  KEY_F4: 115,
  KEY_F5: 116,
  KEY_F6: 117,
  KEY_F7: 118,
  KEY_F8: 119,
  KEY_F9: 120,
  KEY_F10: 121,
  KEY_F11: 122,
  KEY_F12: 123,
  KEY_NUM_LOCK: 144,
  KEY_SCROLL_LOCK: 145,
  KEY_MY_COMPUTER: 182,
  KEY_MY_CALCULATOR: 183,
  KEY_SEMICOLON: 186,
  KEY_EQUALS: 187,
  KEY_COMMA: 188,
  KEY_MINUS: 189,
  KEY_PERIOD: 190,
  KEY_SLASH: 191,
  KEY_BACKQUOTE: 192,
  KEY_OPEN_BRACKET: 219,
  KEY_BACK_SLASH: 220,
  KEY_CLOSE_BRACKET: 221,
  KEY_QUOTE: 222,
};

export const ENUM_TO_DISPLAY = {
  KEY_BACKSPACE: 'Backspace',
  KEY_TAB: 'Tab',
  KEY_ENTER: 'Enter',
  KEY_SHIFT: 'Shift',
  KEY_CONTROL: 'Control',
  KEY_ALT: 'Alt',
  KEY_PAUSE: 'Pause',
  KEY_CAPS_LOCK: 'Caps Lock',
  KEY_ESCAPE: 'Escape',
  KEY_SPACE: 'Space',
  KEY_PAGE_UP: 'Page Up',
  KEY_PAGE_DOWN: 'Page Down',
  KEY_END: 'End',
  KEY_HOME: 'Home',
  KEY_LEFT: 'Left',
  KEY_UP: 'Up',
  KEY_RIGHT: 'Right',
  KEY_DOWN: 'Down',
  KEY_INSERT: 'Insert',
  KEY_DELETE: 'Delete',
  KEY_0: '0',
  KEY_1: '1',
  KEY_2: '2',
  KEY_3: '3',
  KEY_4: '4',
  KEY_5: '5',
  KEY_6: '6',
  KEY_7: '7',
  KEY_8: '8',
  KEY_9: '9',
  KEY_A: 'A',
  KEY_B: 'B',
  KEY_C: 'C',
  KEY_D: 'D',
  KEY_E: 'E',
  KEY_F: 'F',
  KEY_G: 'G',
  KEY_H: 'H',
  KEY_I: 'I',
  KEY_J: 'J',
  KEY_K: 'K',
  KEY_L: 'L',
  KEY_M: 'M',
  KEY_N: 'N',
  KEY_O: 'O',
  KEY_P: 'P',
  KEY_Q: 'Q',
  KEY_R: 'R',
  KEY_S: 'S',
  KEY_T: 'T',
  KEY_U: 'U',
  KEY_V: 'V',
  KEY_W: 'W',
  KEY_X: 'X',
  KEY_Y: 'Y',
  KEY_Z: 'Z',
  KEY_META: 'Meta',
  KEY_KP_0: 'KP 0',
  KEY_KP_1: 'KP 1',
  KEY_KP_2: 'KP 2',
  KEY_KP_3: 'KP 3',
  KEY_KP_4: 'KP 4',
  KEY_KP_5: 'KP 5',
  KEY_KP_6: 'KP 6',
  KEY_KP_7: 'KP 7',
  KEY_KP_8: 'KP 8',
  KEY_KP_9: 'KP 9',
  KEY_KP_MULTIPLY: 'KP *',
  KEY_KP_ADD: 'KP +',
  KEY_KP_SUBTRACT: 'KP -',
  KEY_KP_SEPARATOR: 'KP .',
  KEY_KP_DIVIDE: 'KP /',
  KEY_F1: 'F1',
  KEY_F2: 'F2',
  KEY_F3: 'F3',
  KEY_F4: 'F4',
  KEY_F5: 'F5',
  KEY_F6: 'F6',
  KEY_F7: 'F7',
  KEY_F8: 'F8',
  KEY_F9: 'F9',
  KEY_F10: 'F10',
  KEY_F11: 'F11',
  KEY_F12: 'F12',
  KEY_NUM_LOCK: 'Num Lock',
  KEY_SCROLL_LOCK: 'Scroll Lock',
  KEY_MY_COMPUTER: 'My Computer',
  KEY_MY_CALCULATOR: 'My Calculator',
  KEY_SEMICOLON: ';',
  KEY_EQUALS: '=',
  KEY_COMMA: ',',
  KEY_MINUS: '-',
  KEY_PERIOD: '.',
  KEY_SLASH: '/',
  KEY_BACKQUOTE: '`',
  KEY_OPEN_BRACKET: '[',
  KEY_BACK_SLASH: '\\',
  KEY_CLOSE_BRACKET: ']',
  KEY_QUOTE: '\'',
  KEY_F13: 'F13',
  KEY_F14: 'F14',
  KEY_F15: 'F15',
  KEY_F16: 'F16',
  KEY_F17: 'F17',
  KEY_F18: 'F18',
  KEY_F19: 'F19',
  KEY_F20: 'F20',
  KEY_F21: 'F21',
  KEY_F22: 'F22',
  KEY_F23: 'F23',
  KEY_F24: 'F24',
  KEY_PRINTSCREEN: 'Print Screen',
  KEY_LESSER_GREATER: '<>',
  KEY_CLEAR: 'Clear',
  KEY_KP_ENTER: 'KP Enter',
  KEY_KP_END: 'KP End',
  KEY_KP_DOWN: 'KP Down',
  KEY_KP_PAGE_DOWN: 'KP Page Down',
  KEY_KP_LEFT: 'KP Left',
  KEY_KP_CLEAR: 'KP Clear',
  KEY_KP_RIGHT: 'KP Right',
  KEY_KP_HOME: 'KP Home',
  KEY_KP_UP: 'KP Up',
  KEY_KP_PAGE_UP: 'KP Page Up',
  KEY_KP_INSERT: 'KP Insert',
  KEY_KP_DELETE: 'KP Delete',
  KEY_SHIFT_L: 'Left Shift',
  KEY_SHIFT_R: 'Right Shift',
  KEY_CONTROL_L: 'Left Control',
  KEY_CONTROL_R: 'Right Control',
  KEY_ALT_L: 'Left Alt',
  KEY_ALT_R: 'Right Alt',
  KEY_META_L: 'Left Meta',
  KEY_META_R: 'Right Meta',
  KEY_CONTEXT_MENU: 'Context Menu',
  KEY_POWER: 'Power',
  KEY_SLEEP: 'Sleep',
  KEY_WAKE: 'Wake',
  KEY_MEDIA_PLAY: 'Play',
  KEY_MEDIA_STOP: 'Stop',
  KEY_MEDIA_PREVIOUS: 'Previous',
  KEY_MEDIA_NEXT: 'Next',
  KEY_MEDIA_SELECT: 'Select',
  KEY_MEDIA_EJECT: 'Eject',
  KEY_VOLUME_MUTE: 'Mute',
  KEY_VOLUME_UP: 'Volume Up',
  KEY_VOLUME_DOWN: 'Volume Down',
  KEY_APP_MAIL: 'Mail',
  KEY_APP_CALCULATOR: 'Calculator',
  KEY_APP_MUSIC: 'Music',
  KEY_APP_PICTURES: 'Picture',
  KEY_BROWSER_SEARCH: 'Search',
  KEY_BROWSER_HOME: 'Browser Home',
  KEY_BROWSER_BACK: 'Browser Back',
  KEY_BROWSER_FORWARD: 'Browser Forward',
  KEY_BROWSER_STOP: 'Browser Stop',
  KEY_BROWSER_REFRESH: 'Browser Refresh',
  KEY_BROWSER_FAVORITES: 'Browser Favorites',
  KEY_KATAKANA: 'Katakana',
  KEY_UNDERSCORE: '_',
  KEY_FURIGANA: 'Furigana',
  KEY_KANJI: 'Kanji',
  KEY_HIRAGANA: 'Hiragana',
  KEY_YEN: 'Yen',
  KEY_KP_COMMA: 'KP Comma',
  KEY_SUN_HELP: 'Sun Help',
  KEY_SUN_STOP: 'Sun Stop',
  KEY_SUN_PROPS: 'Sun Props',
  KEY_SUN_FRONT: 'Sun Front',
  KEY_SUN_OPEN: 'Sun Open',
  KEY_SUN_FIND: 'Sun Find',
  KEY_SUN_AGAIN: 'Sun Again',
  KEY_SUN_UNDO: 'Sun Undo',
  KEY_SUN_COPY: 'Sun Insert',
  KEY_SUN_INSERT: 'Sun Insert',
  KEY_SUN_CUT: 'Sun Cut',
  KEY_UNDEFINED: 'UNDEFINED',
  MOUSE_NOBUTTON: 'Mouse No Button',
  MOUSE_BUTTON1: 'Mouse 1',
  MOUSE_BUTTON2: 'Mouse 2',
  MOUSE_BUTTON3: 'Mouse 3',
  MOUSE_BUTTON4: 'Mouse 4',
  MOUSE_BUTTON5: 'Mouse 5',
};

export const WEB_TO_ENUM = Object.entries(ENUM_TO_WEB)
  .reduce((acc: { [key: string]: string }, [key, value]) => {
    if (!acc[value]) {
      acc[value] = key;
    }

    return acc;
  }, {});

export const IOHOOK_TO_ENUM = Object.entries(ENUM_TO_IOHOOK)
  .reduce((acc: { [key: string]: string }, [key, value]) => {
    if (!acc[value]) {
      acc[value] = key;
    }

    return acc;
  }, {});

export const DISPLAY_TO_ENUM = Object.entries(ENUM_TO_DISPLAY)
  .reduce((acc: { [key: string]: string }, [key, value]) => {
    if (!acc[value]) {
      acc[value] = key;
    }

    return acc;
  }, {});

export const keyCodeToKeyEnum = (source: 'iohook' | 'web', keyCode: number): string | undefined => {
  switch (source) {
    case 'web':
      return WEB_TO_ENUM[keyCode];
    default:
      return IOHOOK_TO_ENUM[keyCode];
  }
};

export const mouseButtonToKeyEnum = (source: 'iohook' | 'web', mouseButton: number): string | undefined => {
  switch (mouseButton) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return `MOUSE_BUTTON${mouseButton}`;
    default:
      return 'MOUSE_NOBUTTON';
  }
};

export const keyEnumToKeyCode = (target: 'iohook' | 'web', keyEnum: string): number | undefined => {
  switch (target) {
    case 'web':
      return ENUM_TO_WEB[keyEnum as keyof typeof ENUM_TO_WEB];
    default:
      return ENUM_TO_IOHOOK[keyEnum as keyof typeof ENUM_TO_IOHOOK];
  }
};

export const keyEnumToDisplay = (keyEnum: string | undefined): string | undefined => {
  return ENUM_TO_DISPLAY[keyEnum as keyof typeof ENUM_TO_DISPLAY];
};

export const keyCodeToDisplay = (source: 'iohook' | 'web', keyCode: number): string | undefined => {
  return keyEnumToDisplay(keyCodeToKeyEnum(source, keyCode));
};

