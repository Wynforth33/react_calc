// Create 'ButtonList' Data Object
const ButtonList = {
  keyboard: [ // Keyboard Buttons
    [ //Row 1
      {
        key: '%',
        operator: '%',
        innerHtml: '%',
        class: null
      },
      {
        key: 'root',
        operator: 'root',
        innerHtml: 'Sqrt',
        class: null
      },
      {
        key: 'squared',
        operator: 'squared',
        innerHtml: 'x^2',
        class: null
      },
      {
        key: '1/x',
        operator: '1/x',
        innerHtml: '1/x',
        class: null
      }
    ],
    [ //Row 2
      {
        key: 'CE',
        operator: 'CE',
        innerHtml: 'CE',
        class: null
      },
      {
        key: 'C',
        operator: 'C',
        innerHtml: 'C',
        class: null
      },
      {
        key: 'BS',
        operator: 'BS',
        innerHtml: '<=',
        class: null
      },
      {
        key: 'divide',
        operator: 'divide',
        innerHtml: '/',
        class: 'basic'
      }
    ],
    [ //Row 3
      {
        key: '7',
        operator: '7',
        innerHtml: '7',
        class: 'number'
      },
      {
        key: '8',
        operator: '8',
        innerHtml: '8',
        class: 'number'
      },
      {
        key: '9',
        operator: '9',
        innerHtml: '9',
        class: 'number'
      },
      {
        key: 'multiply',
        operator: 'multiply',
        innerHtml: 'x',
        class: 'basic'
      }
    ],
    [ //Row 4
      {
        key: '4',
        operator: '4',
        innerHtml: '4',
        class: 'number'
      },
      {
        key: '5',
        operator: '5',
        innerHtml: '5',
        class: 'number'
      },
      {
        key: '6',
        operator: '6',
        innerHtml: '6',
        class: 'number'
      },
      {
        key: 'minus',
        operator: 'minus',
        innerHtml: '-',
        class: 'basic'
      }
    ],
    [ //Row 5
      {
        key: '1',
        operator: '1',
        innerHtml: '1',
        class: 'number'
      },
      {
        key: '2',
        operator: '2',
        innerHtml: '2',
        class: 'number'
      },
      {
        key: '3',
        operator: '3',
        innerHtml: '3',
        class: 'number'
      },
      {
        key: 'add',
        operator: 'add',
        innerHtml: '+',
        class: 'basic'
      }
    ],
    [ //Row 6
      {
        key: 'negate',
        operator: 'negate',
        innerHtml: '+/-',
        class: 'basic'
      },
      {
        key: '0',
        operator: '0',
        innerHtml: '0',
        class: 'number'
      },
      {
        key: '.',
        operator: '.',
        innerHtml: '.',
        class: 'basic'
      },
      {
        key: '=',
        operator: '=',
        innerHtml: '=',
        class: 'basic'
      }
    ],
  ],

  memory: [ // Memory Buttons
    {
      key: 'MC',
      operator: 'MC',
      innerHtml: 'MC',
      class: 'not-in-use'
    },
    {
      key: 'MR',
      operator: 'MR',
      innerHtml: 'MR',
      class: 'not-in-use'
    },
    {
      key: 'M+',
      operator: 'M+',
      innerHtml: 'M+',
      class: null
    },
    {
      key: 'M-',
      operator: 'M-',
      innerHtml: 'M-',
      class: null
    },
    {
      key: 'MS',
      operator: 'MS',
      innerHtml: 'MS',
      class: null
    },
    {
      key: 'memory-history',
      operator: 'memory-history',
      innerHtml: 'V',
      class: 'not-in-use'
    }
  ]
}

// Exports
export default ButtonList; // 'ButtonList' Data Object
