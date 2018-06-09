// Create 'ButtonList' Data Object
const ButtonList = {
  keyboard: [ // Keyboard Buttons
    [ //Row 1
      {
        operator: '%',
        innerHtml: '%',
        class: null
      },
      {
        operator: 'root',
        innerHtml: '&radic;',
        class: null
      },
      {
        operator: 'squared',
        innerHtml: 'x&sup2;',
        class: null
      },
      {
        operator: '1/x',
        innerHtml: '1/x',
        class: null
      }
    ],
    [ //Row 2
      {
        operator: 'CE',
        innerHtml: 'CE',
        class: null
      },
      {
        operator: 'C',
        innerHtml: 'C',
        class: null
      },
      {
        operator: 'backspace',
        innerHtml: '<img src="./backspace.png">',
        class: null
      },
      {
        operator: 'divide',
        innerHtml: '&divide;',
        class: 'basic'
      }
    ],
    [ //Row 3
      {
        operator: '7',
        innerHtml: '7',
        class: 'number'
      },
      {
        operator: '8',
        innerHtml: '8',
        class: 'number'
      },
      {
        operator: '9',
        innerHtml: '9',
        class: 'number'
      },
      {
        operator: 'multiply',
        innerHtml: '&times;',
        class: 'basic'
      }
    ],
    [ //Row 4
      {
        operator: '4',
        innerHtml: '4',
        class: 'number'
      },
      {
        operator: '5',
        innerHtml: '5',
        class: 'number'
      },
      {
        operator: '6',
        innerHtml: '6',
        class: 'number'
      },
      {
        operator: 'minus',
        innerHtml: '&minus;',
        class: 'basic'
      }
    ],
    [ //Row 5
      {
        operator: '1',
        innerHtml: '1',
        class: 'number'
      },
      {
        operator: '2',
        innerHtml: '2',
        class: 'number'
      },
      {
        operator: '3',
        innerHtml: '3',
        class: 'number'
      },
      {
        operator: 'add',
        innerHtml: '&plus;',
        class: 'basic'
      }
    ],
    [ //Row 6
      {
        operator: 'negate',
        innerHtml: '&plusmn;',
        class: 'basic'
      },
      {
        operator: '0',
        innerHtml: '0',
        class: 'number'
      },
      {
        operator: '.',
        innerHtml: '.',
        class: 'basic'
      },
      {
        operator: '=',
        innerHtml: '=',
        class: 'basic'
      }
    ],
  ],

  memory: [ // Memory Buttons
    {
      operator: 'MC',
      innerHtml: 'MC',
      class: 'not-in-use'
    },
    {
      operator: 'MR',
      innerHtml: 'MR',
      class: 'not-in-use'
    },
    {
      operator: 'M+',
      innerHtml: 'M+',
      class: null
    },
    {
      operator: 'M-',
      innerHtml: 'M-',
      class: null
    },
    {
      operator: 'MS',
      innerHtml: 'MS',
      class: null
    },
    {
      operator: 'memory-history',
      innerHtml: 'M&blacktriangledown;',
      class: 'not-in-use'
    }
  ]
}

// Exports
export default ButtonList; // 'ButtonList' Data Object
