import test from 'ava'
import parseObject from './../src/parseObject'

test('passing test', t => {
    t.pass()
})

test('parse string', t => {
    t.is(parseObject({
        'foo': 'bar'
    }), 'bar')
})

test('parse more strings', t => {
    t.is(parseObject({
        'foo': 'bar',
        'bar': 'bar',
        'barbar': 'foobar'
    }), 'barbarfoobar')
})

test('parse strings and array', t => {
    t.is(parseObject({
        'foo': 'bar',
        'mefa': [ 'bar', 'foo' ],
        'bar': 'bar'
    }), 'barbarfoobar')
})

test('parse a more complicated neest of stuff', t => {
    t.is(parseObject({
        'foo': 'bar',
        'mefa': [ {
            'foo': 'bar'
        } ],
        'bar': 'bar',
        'slerp': {
            'boromir': [ 'derp', 'herp' ],
            'asd': 'fafsb',
        },
        'kerp': 'merp'
    }), 'barbarbarderpherpfafsbmerp')
})

test('random object from stackoverflow', t => {
    t.is(parseObject({
        ajaxsettings : { "ak1" : "v1", "ak2" : "v2" },
        uisettings : { "ui1" : "v1", "ui22" : "v2" }
    }), 'v1v2v1v2')
})