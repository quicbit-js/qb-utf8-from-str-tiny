var test = require('test-kit').tape()
var utf8_from_str = require('.')
var utf8_to_str = require('qb-utf8-to-str-tiny')

test('utf8', function(t) {
    t.tableAssert(
        [
            [ 's',                   'exp'                                  ],
            [ '',                    []                                     ],
            [ 'a',                   [0x61]                                 ],
            [ 'abc\uD801\uDC00',     [0x61,0x62,0x63,0xF0,0x90,0x90,0x80]   ],
            [ '在嚴寒的冬日裡',        [229,156,168,229,154,180,229,175,146,231,154,132,229,134,172,230,151,165,232,163,161] ],
            [ '"abc"%',              [ 34,97,98,99,34,37 ] ],
        ],
        utf8_from_str
    )
})

test('utf8 and utf8_to_str in harmony and at peace with the world', function(t) {
    t.tableAssert(
        [
            [ 'v',                                  'exp'               ],
            [ '',                                   ''                  ],
            [ '在嚴寒的冬日裡',                       '在嚴寒的冬日裡'      ],
            [ 'abc𐐀defg,é',                         'abc𐐀defg,é'        ],
            [ 'gîddñup𐂃!',                         'gîddñup𐂃!'       ],
            [ 'ᄒ,ᅡ,ᆫ,한',                           'ᄒ,ᅡ,ᆫ,한'        ],
        ],
        function(v) { return utf8_to_str(utf8_from_str(v)) }
    )
})

test('utf8 and utf8_to_str - all ascii', function(t) {
    for(var i=1; i<128; i+=11) {
        t.same(utf8_from_str(utf8_to_str([i])), [i], t.desc('ascii', [i], i))
    }
    t.end()
})
