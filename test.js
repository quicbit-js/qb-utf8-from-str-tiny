var test = require('test-kit').tape()
var utf8_from_str = require('.')
var utf8_to_str = require('qb-utf8-to-str-tiny')

test('utf8', function (t) {
    t.tableAssert(
        [
            [ 's',                   'exp'                                  ],
            [ '',                    []                                     ],
            [ 'a',                   [ 0x61 ]                                 ],
            [ 'abc\uD801\uDC00',     [ 0x61,0x62,0x63,0xF0,0x90,0x90,0x80 ]   ],
            [ '在嚴寒的冬日裡',        [ 229,156,168,229,154,180,229,175,146,231,154,132,229,134,172,230,151,165,232,163,161 ] ],
            [ '"abc"%',              [ 34,97,98,99,34,37 ] ],
            [ 'abc𐐀defg,é',          [ 97,98,99,240,144,144,128,100,101,102,103,44,195,169 ]       ],
            [ 'gîddñup𐂃!',         [ 103,195,174,100,100,195,177,117,112,240,144,130,131,33 ]     ],
            [ 'ᄒ,ᅡ,ᆫ,한',           [ 225,132,146,44,225,133,161,44,225,134,171,44,237,149,156 ]  ],
        ],
        utf8_from_str
    )
})

test('ascii', function (t) {
  for(var i=0; i<128; i++) {
    var s = String.fromCharCode(i)
    t.same(utf8_from_str(s), [i], t.desc('ascii', [s], [i]))
  }
  t.end()
})
