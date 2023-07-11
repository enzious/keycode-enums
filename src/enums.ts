// https://github.com/micmonay/keybd_event

const KEY_ENUM: { [key_enum: string]: string } = {
  KEY_RCTRL: 'RIGHT CTRL',
  KEY_LCTRL: 'LEFT CTRL',
  KEY_LSHIFT: 'LEFT SHIFT',
  KEY_RSHIFT: 'RIGHT SHIFT',
  KEY_LALT: 'LEFT ALT',
  KEY_RALT: 'RIGHT ALT',

  KEY_SP1: 'SP1',
  KEY_SP2: 'SP2',
  KEY_SP3: 'SP3',
  KEY_SP4: 'SP4',
  KEY_SP5: 'SP5',
  KEY_SP6: 'SP6',
  KEY_SP7: 'SP7',
  KEY_SP8: 'SP8',
  KEY_SP9: 'SP9',
  KEY_SP10: 'SP10',
  KEY_SP11: 'SP11',
  KEY_SP12: 'SP12',

  KEY_UP: 'UP',
  KEY_DOWN: 'DOWN',
  KEY_LEFT: 'LEFT',
  KEY_RIGHT: 'RIGHT',

  KEY_ESCAPE: 'ESC',
  KEY_1: '1',
  KEY_2: '2',
  KEY_3: '3',
  KEY_4: '4',
  KEY_5: '5',
  KEY_6: '6',
  KEY_7: '7',
  KEY_8: '8',
  KEY_9: '9',
  KEY_0: '0',
  KEY_Q: 'Q',
  KEY_W: 'W',
  KEY_E: 'E',
  KEY_R: 'R',
  KEY_T: 'T',
  KEY_Y: 'Y',
  KEY_U: 'U',
  KEY_I: 'I',
  KEY_O: 'O',
  KEY_P: 'P',
  KEY_A: 'A',
  KEY_S: 'S',
  KEY_D: 'D',
  KEY_F: 'F',
  KEY_G: 'G',
  KEY_H: 'H',
  KEY_J: 'J',
  KEY_K: 'K',
  KEY_L: 'L',
  KEY_Z: 'Z',
  KEY_X: 'X',
  KEY_C: 'C',
  KEY_V: 'V',
  KEY_B: 'B',
  KEY_N: 'N',
  KEY_M: 'M',

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

  KEY_NUMLOCK: 'NUMLOCK',
  KEY_SCROLLLOCK: 'SCROLLLOCK',
  KEY_RESERVED: 'RESERVED',
  KEY_MINUS: 'MINUS',
  KEY_EQUAL: 'EQUAL',
  KEY_BACKSPACE: 'BACKSPACE',
  KEY_TAB: 'TAB',
  KEY_LEFTBRACE: 'LEFT BRACE',
  KEY_RIGHTBRACE: 'RIGHT BRACE',
  KEY_ENTER: 'ENTER',
  KEY_SEMICOLON: ';',
  KEY_APOSTROPHE: '\'',
  KEY_GRAVE: '`',
  KEY_BACKSLASH: '\\',
  KEY_COMMA: ',',
  KEY_DOT: '.',
  KEY_SLASH: '/',
  KEY_SPACE: 'SPACE',
  KEY_CAPSLOCK: 'CAPSLOCK',

  KEY_KP0: 'KP0',
  KEY_KP1: 'KP1',
  KEY_KP2: 'KP2',
  KEY_KP3: 'KP3',
  KEY_KP4: 'KP4',
  KEY_KP5: 'KP5',
  KEY_KP6: 'KP6',
  KEY_KP7: 'KP7',
  KEY_KP8: 'KP8',
  KEY_KP9: 'KP9',
  KEY_KPMINUS: 'KPMINUS',
  KEY_KPPLUS: 'KPPLUS',
  KEY_KPDOT: 'KPDOT',
  KEY_KPJPCOMMA: 'KPJPCOMMA',
  KEY_KPENTER: 'KPENTER',
  KEY_KPSLASH: 'KPSLASH',
  KEY_KPASTERISK: 'KPASTERISK',
  KEY_KPEQUAL: 'KPEQUAL',
  KEY_KPPLUSMINUS: 'KPPLUSMINUS',
  KEY_KPCOMMA: 'KPCOMMA',

  KEY_ZENKAKUHANKAKU: 'ZENKAKUHANKAKU',
  KEY_102ND: '102ND',
  KEY_RO: 'RO',
  KEY_KATAKANA: 'KATAKANA',
  KEY_HIRAGANA: 'HIRAGANA',
  KEY_HENKAN: 'HENKAN',
  KEY_KATAKANAHIRAGANA: 'KATAKANAHIRAGANA',
  KEY_MUHENKAN: 'MUHENKAN',
  KEY_SYSRQ: 'SYSRQ',
  KEY_LINEFEED: 'LINEFEED',
  KEY_HOME: 'HOME',
  KEY_PAGEUP: 'PAGEUP',
  KEY_END: 'END',
  KEY_PAGEDOWN: 'PAGEDOWN',
  KEY_INSERT: 'INSERT',
  KEY_DELETE: 'DELETE',
  KEY_MACRO: 'MACRO',
  KEY_MUTE: 'MUTE',
  KEY_VOLUMEDOWN: 'VOLUMEDOWN',
  KEY_VOLUMEUP: 'VOLUMEUP',
  KEY_POWER: 'POWER',
  KEY_PAUSE: 'PAUSE',
  KEY_SCALE: 'SCALE',

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

  MOUSE_1: 'MOUSE1',
  MOUSE_2: 'MOUSE2',
  MOUSE_3: 'MOUSE3',
  MOUSE_4: 'MOUSE4',
  MOUSE_5: 'MOUSE5',
  MOUSE_6: 'MOUSE6',
}

const MOUSE_BUTTONS: { [key_enum: string]: number } = {
  MOUSE_1: 1,
  MOUSE_2: 2,
  MOUSE_3: 3,
  MOUSE_4: 4,
  MOUSE_5: 5,
  MOUSE_6: 6,
}

const LINUX_KEYCODES: { [key_enum: string]: number } = {
  KEY_RCTRL:             97, // KEY_RIGHTCTRL
  KEY_LCTRL:             29, // KEY_LEFTCTRL
  KEY_LSHIFT:            42, // KEY_LEFTSHIFT
  KEY_RSHIFT:            54, // KEY_RIGHTSHIFT
  KEY_LALT:              56, // KEY_LEFTALT
  KEY_RALT:              100, // KEY_RIGHTALT

  KEY_UP:                103,
  KEY_DOWN:              108,
  KEY_LEFT:              105,
  KEY_RIGHT:             106,

  KEY_ESCAPE:            1,
  KEY_1:                 2,
  KEY_2:                 3,
  KEY_3:                 4,
  KEY_4:                 5,
  KEY_5:                 6,
  KEY_6:                 7,
  KEY_7:                 8,
  KEY_8:                 9,
  KEY_9:                 10,
  KEY_0:                 11,
  KEY_Q:                 16,
  KEY_W:                 17,
  KEY_E:                 18,
  KEY_R:                 19,
  KEY_T:                 20,
  KEY_Y:                 21,
  KEY_U:                 22,
  KEY_I:                 23,
  KEY_O:                 24,
  KEY_P:                 25,
  KEY_A:                 30,
  KEY_S:                 31,
  KEY_D:                 32,
  KEY_F:                 33,
  KEY_G:                 34,
  KEY_H:                 35,
  KEY_J:                 36,
  KEY_K:                 37,
  KEY_L:                 38,
  KEY_Z:                 44,
  KEY_X:                 45,
  KEY_C:                 46,
  KEY_V:                 47,
  KEY_B:                 48,
  KEY_N:                 49,
  KEY_M:                 50,

  KEY_F1:                59,
  KEY_F2:                60,
  KEY_F3:                61,
  KEY_F4:                62,
  KEY_F5:                63,
  KEY_F6:                64,
  KEY_F7:                65,
  KEY_F8:                66,
  KEY_F9:                67,
  KEY_F10:               68,
  KEY_F11:               87,
  KEY_F12:               88,

  KEY_NUMLOCK:           69,
  KEY_SCROLLLOCK:        70,
  KEY_RESERVED:          0,
  KEY_MINUS:             12,
  KEY_EQUAL:             13,
  KEY_BACKSPACE:         14,
  KEY_TAB:               15,
  KEY_LEFTBRACE:         26,
  KEY_RIGHTBRACE:        27,
  KEY_ENTER:             28,
  KEY_SEMICOLON:         39,
  KEY_APOSTROPHE:        40,
  KEY_GRAVE:             41,
  KEY_BACKSLASH:         43,
  KEY_COMMA:             51,
  KEY_DOT:               52,
  KEY_SLASH:             53,
  KEY_SPACE:             57,
  KEY_CAPSLOCK:          58,
  KEY_INSERT:            91,
  KEY_DELETE:            92,
  KEY_HOME:              3653,
  KEY_END:               3675,
  KEY_PAGEUP:            3637,
  KEY_PAGEDOWN:          3677,

  KEY_KP0:               82,
  KEY_KP1:               79,
  KEY_KP2:               80,
  KEY_KP3:               81,
  KEY_KP4:               75,
  KEY_KP5:               76,
  KEY_KP6:               77,
  KEY_KP7:               71,
  KEY_KP8:               72,
  KEY_KP9:               73,
  KEY_KPMINUS:           74,
  KEY_KPPLUS:            78,
  KEY_KPDOT:             83,
  KEY_KPJPCOMMA:         95,
  KEY_KPENTER:           96,
  KEY_KPSLASH:           98,
  KEY_KPASTERISK:        55,
  KEY_KPEQUAL:           117,
  KEY_KPPLUSMINUS:       118,
  KEY_KPCOMMA:           121,

  KEY_ZENKAKUHANKAKU:    85,
  KEY_102ND:             86,
  KEY_RO:                89,
  KEY_KATAKANA:          90,
  KEY_KATAKANAHIRAGANA:  93,
  KEY_MUHENKAN:          94,
  KEY_SYSRQ:             99,
  KEY_LINEFEED:          101,
  KEY_MACRO:             112,
  KEY_MUTE:              113,
  KEY_VOLUMEDOWN:        114,
  KEY_VOLUMEUP:          115,
  KEY_POWER:             116,
  KEY_PAUSE:             119,
  KEY_SCALE:             120,

  KEY_F13:               183,
  KEY_F14:               184,
  KEY_F15:               185,
  KEY_F16:               186,
  KEY_F17:               187,
  KEY_F18:               188,
  KEY_F19:               189,
  KEY_F20:               190,
  KEY_F21:               191,
  KEY_F22:               192,
  KEY_F23:               193,
  KEY_F24:               194,
};

const DARWIN_KEYCODES: { [key_enum: string]: number } = {
  KEY_LCTRL:           0x3B, // KEY_Control
  KEY_RCTRL:           0x3E, // KEY_RightControl
  KEY_LSHIFT:          0x38, // KEY_Shift
  KEY_RSHIFT:          0x3C, // KEY_RightShift
  KEY_Command:         0x37,

  KEY_SP1:             0x0A,
  KEY_SP2:             0x1B,
  KEY_SP3:             0x18,
  KEY_SP4:             0x21,
  KEY_SP5:             0x1E,
  KEY_SP6:             0x29,
  KEY_SP7:             0x27,
  KEY_SP8:             0x2A,
  KEY_SP9:             0x2B,
  KEY_SP10:            0x2F,
  KEY_SP11:            0x2C,
  KEY_SP12:            0x32,

  KEY_A:               0x00,
  KEY_S:               0x01,
  KEY_D:               0x02,
  KEY_F:               0x03,
  KEY_H:               0x04,
  KEY_G:               0x05,
  KEY_Z:               0x06,
  KEY_X:               0x07,
  KEY_C:               0x08,
  KEY_V:               0x09,
  KEY_B:               0x0B,
  KEY_Q:               0x0C,
  KEY_W:               0x0D,
  KEY_E:               0x0E,
  KEY_R:               0x0F,
  KEY_Y:               0x10,
  KEY_T:               0x11,
  KEY_1:               0x12,
  KEY_2:               0x13,
  KEY_3:               0x14,
  KEY_4:               0x15,
  KEY_6:               0x16,
  KEY_5:               0x17,
  KEY_EQUAL:           0x18,
  KEY_9:               0x19,
  KEY_7:               0x1A,
  KEY_MINUS:           0x1B,
  KEY_8:               0x1C,
  KEY_0:               0x1D,
  KEY_RightBracket:    0x1E,
  KEY_O:               0x1F,
  KEY_U:               0x20,
  KEY_LeftBracket:     0x21,
  KEY_I:               0x22,
  KEY_P:               0x23,
  KEY_L:               0x25,
  KEY_J:               0x26,
  KEY_Quote:           0x27,
  KEY_K:               0x28,
  KEY_SEMICOLON:       0x29,
  KEY_BACKSLASH:       0x2A,
  KEY_COMMA:           0x2B,
  KEY_SLASH:           0x2C,
  KEY_N:               0x2D,
  KEY_M:               0x2E,
  KEY_Period:          0x2F,
  KEY_GRAVE:           0x32,
  KEY_KPDOT:           0x41, // KEY_KeypadDecimal
  KEY_KPASTERISK:      0x43, // KEY_KeypadMultiply
  KEY_KPPLUS:          0x45, // KEY_KeypadPlus
  KEY_KeypadClear:     0x47, // KEY_KeypadClear
  KEY_KeypadDivide:    0x4B, // KEY_KeypadDivide
  KEY_KeypadEnter:     0x4C, // KEY_KeypadEnter
  KEY_KPMINUS:         0x4E, // KEY_KeypadMinus
  KEY_KeypadEquals:    0x51, // KEY_KeypadEquals
  KEY_KP0:             0x52, // KEY_Keypad0
  KEY_KP1:             0x53, // KEY_Keypad1
  KEY_KP2:             0x54, // KEY_Keypad2
  KEY_KP3:             0x55, // KEY_Keypad3
  KEY_KP4:             0x56, // KEY_Keypad4
  KEY_KP5:             0x57, // KEY_Keypad5
  KEY_KP6:             0x58, // KEY_Keypad6
  KEY_KP7:             0x59, // KEY_Keypad7
  KEY_KP8:             0x5B, // KEY_Keypad8
  KEY_KP9:             0x5C, // KEY_Keypad9

  KEY_ENTER:           0x24,
  KEY_TAB:             0x30,
  KEY_SPACE:           0x31,
  KEY_DELETE:          0x33,
  KEY_ESCAPE:          0x35,
  KEY_CAPSLOCK:        0x39,
  KEY_Option:          0x3A,
  KEY_RightOption:     0x3D,
  KEY_Function:        0x3F,
  KEY_F17:             0x40,
  KEY_VOLUMEUP:        0x48,
  KEY_VOLUMEDOWN:      0x49,
  KEY_MUTE:            0x4A,
  KEY_F18:             0x4F,
  KEY_F19:             0x50,
  KEY_F20:             0x5A,
  KEY_F5:              0x60,
  KEY_F6:              0x61,
  KEY_F7:              0x62,
  KEY_F3:              0x63,
  KEY_F8:              0x64,
  KEY_F9:              0x65,
  KEY_F11:             0x67,
  KEY_F13:             0x69,
  KEY_F16:             0x6A,
  KEY_F14:             0x6B,
  KEY_F10:             0x6D,
  KEY_F12:             0x6F,
  KEY_F15:             0x71,
  KEY_HELP:            0x72,
  KEY_HOME:            0x73,
  KEY_PAGEUP:          0x74,
  KEY_ForwardDelete:   0x75,
  KEY_F4:              0x76,
  KEY_END:             0x77,
  KEY_F2:              0x78,
  KEY_PAGEDOWN:        0x79,
  KEY_F1:              0x7A,
  KEY_LEFT:            0x7B,
  KEY_RIGHT:           0x7C,
  KEY_DOWN:            0x7D,
  KEY_UP:              0x7E
};

const WINDOWS_KEYCODES: { [key_enum: string]: number } = {
  KEY_SHIFT:       42,
  KEY_CTRL:        29,
  KEY_ALT:         56,
  KEY_LALT:        56,
  KEY_RALT:        3640,
  KEY_LSHIFT:      42,
  KEY_RSHIFT:      54,
  KEY_LCTRL:       29,
  KEY_RCTRL:       3613, 

  KEY_SP1:         41,
  KEY_SP2:         12,
  KEY_SP3:         13,
  KEY_SP4:         26,
  KEY_SP5:         27,
  KEY_SP6:         39,
  KEY_SP7:         40,
  KEY_SP8:         43,
  KEY_SP9:         51,
  KEY_SP10:        52,
  KEY_SP11:        53,
  KEY_SP12:        86,

  KEY_ESCAPE:      1,
  KEY_1:           2,
  KEY_2:           3,
  KEY_3:           4,
  KEY_4:           5,
  KEY_5:           6,
  KEY_6:           7,
  KEY_7:           8,
  KEY_8:           9,
  KEY_9:           10,
  KEY_0:           11,
  KEY_Q:           16,
  KEY_W:           17,
  KEY_E:           18,
  KEY_R:           19,
  KEY_T:           20,
  KEY_Y:           21,
  KEY_U:           22,
  KEY_I:           23,
  KEY_O:           24,
  KEY_P:           25,
  KEY_A:           30,
  KEY_S:           31,
  KEY_D:           32,
  KEY_F:           33,
  KEY_G:           34,
  KEY_H:           35,
  KEY_J:           36,
  KEY_K:           37,
  KEY_L:           38,
  KEY_Z:           44,
  KEY_X:           45,
  KEY_C:           46,
  KEY_V:           47,
  KEY_B:           48,
  KEY_N:           49,
  KEY_M:           50,
  KEY_F1:          59,
  KEY_F2:          60,
  KEY_F3:          61,
  KEY_F4:          62,
  KEY_F5:          63,
  KEY_F6:          64,
  KEY_F7:          65,
  KEY_F8:          66,
  KEY_F9:          67,
  KEY_F10:         68,
  KEY_F11:         87,
  KEY_F12:         88,

  KEY_NUMLOCK:     69,
  KEY_SCROLLLOCK:  70,
  KEY_RESERVED:    0,
  KEY_MINUS:       12,
  KEY_EQUAL:       13,
  KEY_BACKSPACE:   14,
  KEY_TAB:         15,
  KEY_LEFTBRACE:   26,
  KEY_RIGHTBRACE:  27,
  KEY_ENTER:       28,
  KEY_SEMICOLON:   39,
  KEY_APOSTROPHE:  40,
  KEY_GRAVE:       41,
  KEY_BACKSLASH:   43,
  KEY_COMMA:       51,
  KEY_DOT:         52,
  KEY_SLASH:       53,
  KEY_KPASTERISK:  55,
  KEY_SPACE:       57,
  KEY_CAPSLOCK:    58,

  KEY_KP0:         82,
  KEY_KP1:         79,
  KEY_KP2:         80,
  KEY_KP3:         81,
  KEY_KP4:         75,
  KEY_KP5:         76,
  KEY_KP6:         77,
  KEY_KP7:         71,
  KEY_KP8:         72,
  KEY_KP9:         73,
  KEY_KPMINUS:     74,
  KEY_KPPLUS:      78,
  KEY_KPDOT:       83,

  // I add 0xFFF for all Virtual key,
  KEY_LBUTTON:     0x01 + 0xFFF,
  KEY_RBUTTON:     0x02 + 0xFFF,
  KEY_CANCEL:      0x03 + 0xFFF,
  KEY_MBUTTON:     0x04 + 0xFFF,
  KEY_XBUTTON1:    0x05 + 0xFFF,
  KEY_XBUTTON2:    0x06 + 0xFFF,
  KEY_BACK:        0x08 + 0xFFF,
  KEY_CLEAR:       0x0C + 0xFFF,
  KEY_PAUSE:       0x13 + 0xFFF,
  KEY_CAPITAL:     0x14 + 0xFFF,
  KEY_KANA:        0x15 + 0xFFF,
  KEY_HANGUEL:     0x15 + 0xFFF,
  KEY_HANGUL:      0x15 + 0xFFF,
  KEY_JUNJA:       0x17 + 0xFFF,
  KEY_FINAL:       0x18 + 0xFFF,
  KEY_HANJA:       0x19 + 0xFFF,
  KEY_KANJI:       0x19 + 0xFFF,
  KEY_CONVERT:     0x1C + 0xFFF,
  KEY_NONCONVERT:  0x1D + 0xFFF,
  KEY_ACCEPT:      0x1E + 0xFFF,
  KEY_MODECHANGE:  0x1F + 0xFFF,
  KEY_PAGEUP:      0x21 + 0xFFF,
  KEY_PAGEDOWN:    0x22 + 0xFFF,
  KEY_END:         0x23 + 0xFFF,
  KEY_HOME:        0x24 + 0xFFF,
  KEY_LEFT:        0x25 + 0xFFF,
  KEY_UP:          0x26 + 0xFFF,
  KEY_RIGHT:       0x27 + 0xFFF,
  KEY_DOWN:        0x28 + 0xFFF,
  KEY_SELECT:      0x29 + 0xFFF,
  KEY_PRINT:       0x2A + 0xFFF,
  KEY_EXECUTE:     0x2B + 0xFFF,
  KEY_SNAPSHOT:    0x2C + 0xFFF,
  KEY_INSERT:      0x2D + 0xFFF,
  KEY_DELETE:      0x2E + 0xFFF,
  KEY_HELP:        0x2F + 0xFFF,
};

const WEB_KEYCODES: { [key_enum: string]: number } = {
  KEY_BACKSPACE:     8,
  KEY_TAB:           9,
  KEY_ENTER:         13,
  KEY_LSHIFT:        16,
  KEY_RSHIFT:        16,
  KEY_LCTRL:         17,
  KEY_RCTRL:         17,
  KEY_LALT:          18,
  KEY_RALT:          18,
  KEY_CAPSLOCK:      20,

  KEY_PAUSE:         19,
  KEY_ESCAPE:        27,
  KEY_PAGEUP:        33,
  KEY_SPACE:         32,
  KEY_PAGEDOWN:      34,
  KEY_END:           35,
  KEY_HOME:          36,
  KEY_LEFT:          37,
  KEY_UP:            38,
  KEY_RIGHT:         39,
  KEY_DOWN:          40,
  KEY_PRINT:         44,
  KEY_INSERT:        45,
  KEY_DELETE:        46,

  KEY_0:             48,
  KEY_1:             49,
  KEY_2:             50,
  KEY_3:             51,
  KEY_4:             52,
  KEY_5:             53,
  KEY_6:             54,
  KEY_7:             55,
  KEY_8:             56,
  KEY_9:             57,
  KEY_A:             65,
  KEY_B:             66,
  KEY_C:             67,
  KEY_D:             68,
  KEY_E:             69,
  KEY_F:             70,
  KEY_G:             71,
  KEY_H:             72,
  KEY_I:             73,
  KEY_J:             74,
  KEY_K:             75,
  KEY_L:             76,
  KEY_M:             77,
  KEY_N:             78,
  KEY_O:             79,
  KEY_P:             80,
  KEY_Q:             81,
  KEY_R:             82,
  KEY_S:             83,
  KEY_T:             84,
  KEY_U:             85,
  KEY_V:             86,
  KEY_W:             87,
  KEY_X:             88,
  KEY_Y:             89,
  KEY_Z:             90,

  KEY_LMETA:         91,
  KEY_RMETA:         92,
  KEY_SELECT:        93,

  KEY_KP0:           96,
  KEY_KP1:           97,
  KEY_KP2:           98,
  KEY_KP3:           99,
  KEY_KP4:           100,
  KEY_KP5:           101,
  KEY_KP6:           102,
  KEY_KP7:           103,
  KEY_KP8:           104,
  KEY_KP9:           105,
  KEY_KPASTERISK:    106,
  KEY_KPPLUS:        107,
  KEY_KPMINUS:       109,
  KEY_KPDOT:         110,
  KEY_KPSLASH:       111,

  KEY_F1:            112,
  KEY_F2:            113,
  KEY_F3:            114,
  KEY_F4:            115,
  KEY_F5:            116,
  KEY_F6:            117,
  KEY_F7:            118,
  KEY_F8:            119,
  KEY_F9:            120,
  KEY_F10:           121,
  KEY_F11:           122,
  KEY_F12:           123,

  KEY_NUMLOCK:       144,
  KEY_SCROLLLOCK:    145,
  KEY_SEMICOLON:     186,
  KEY_EQUAL:         187,
  KEY_COMMA:         188,
  KEY_MINUS:         189,
  KEY_DOT:           190,
  KEY_SLASH:         191,
  KEY_LBRACE:        219,
  KEY_BACKSLASH:     220,
  KEY_RBRACE:        221,
};

const DARWIN_KEYCODES_INVERTED = Object.entries(DARWIN_KEYCODES)
  .reduce((acc: { [key: number]: string }, [key, value]) => {
    if (!acc[value]) {
      acc[value] = key;
    }
    return acc;
  }, {});

const LINUX_KEYCODES_INVERTED = Object.entries(LINUX_KEYCODES)
  .reduce((acc: { [key: number]: string }, [key, value]) => {
    if (!acc[value]) {
      acc[value] = key;
    }
    return acc;
  }, {});

const WINDOWS_KEYCODES_INVERTED = Object.entries(WINDOWS_KEYCODES)
  .reduce((acc: { [key: number]: string }, [key, value]) => {
    if (!acc[value]) {
      acc[value] = key;
    }
    return acc;
  }, {});

const WEB_KEYCODES_INVERTED = Object.entries(WEB_KEYCODES)
  .reduce((acc: { [key: number]: string }, [key, value]) => {
    if (!acc[value]) {
      acc[value] = key;
    }
    return acc;
  }, {});

const MOUSE_BUTTONS_INVERTED = Object.entries(MOUSE_BUTTONS)
  .reduce((acc: { [key: number]: string }, [key, value]) => {
    if (!acc[value]) {
      acc[value] = key;
    }
    return acc;
  }, {});

const WEB_KEYCODES_TO_KEY_ENUM = Object.entries(WEB_KEYCODES)
  .reduce((acc: { [key: number]: string }, [key, value]) => {
    const keyEnum = KEY_ENUM[key];
    if (!acc[value]) {
      acc[value] = keyEnum;
    }
    return acc;
  }, {});

const DARWIN_KEYCODES_TO_KEY_ENUM = Object.entries(DARWIN_KEYCODES)
  .reduce((acc: { [key: number]: string }, [key, value]) => {
    const keyEnum = KEY_ENUM[key];
    if (!acc[value]) {
      acc[value] = keyEnum;
    }
    return acc;
  }, {});

const LINUX_KEYCODES_TO_KEY_ENUM = Object.entries(LINUX_KEYCODES)
  .reduce((acc: { [key: number]: string }, [key, value]) => {
    const keyEnum = KEY_ENUM[key];
    if (!acc[value]) {
      acc[value] = keyEnum;
    }
    return acc;
  }, {});

const WINDOWS_KEYCODES_TO_KEY_ENUM = Object.entries(WINDOWS_KEYCODES)
  .reduce((acc: { [key: number]: string }, [key, value]) => {
    const keyEnum = KEY_ENUM[key];
    if (!acc[value]) {
      acc[value] = keyEnum;
    }
    return acc;
  }, {});

const MOUSE_BUTTONS_TO_KEY_ENUM = Object.entries(MOUSE_BUTTONS)
  .reduce((acc: { [key: number]: string }, [key, value]) => {
    const keyEnum = KEY_ENUM[key];
    if (!acc[value]) {
      acc[value] = keyEnum;
    }
    return acc;
  }, {});

export {
  DARWIN_KEYCODES,
  DARWIN_KEYCODES_INVERTED,
  DARWIN_KEYCODES_TO_KEY_ENUM,
  LINUX_KEYCODES,
  LINUX_KEYCODES_INVERTED,
  LINUX_KEYCODES_TO_KEY_ENUM,
  WINDOWS_KEYCODES,
  WINDOWS_KEYCODES_INVERTED,
  WINDOWS_KEYCODES_TO_KEY_ENUM,
  WEB_KEYCODES,
  WEB_KEYCODES_INVERTED,
  WEB_KEYCODES_TO_KEY_ENUM,
  MOUSE_BUTTONS,
  MOUSE_BUTTONS_INVERTED,
  MOUSE_BUTTONS_TO_KEY_ENUM,
};
