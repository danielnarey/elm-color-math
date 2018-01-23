
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _danielnarey$elm_color_math$ColorMath$Rgba = F4(
	function (a, b, c, d) {
		return {red: a, green: b, blue: c, alpha: d};
	});
var _danielnarey$elm_color_math$ColorMath$Hsla = F4(
	function (a, b, c, d) {
		return {hue: a, saturation: b, lightness: c, alpha: d};
	});

var _danielnarey$elm_toolkit$Toolkit_Function$uncurry4 = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return A4(f, _p1._0, _p1._1, _p1._2, _p1._3);
	});
var _danielnarey$elm_toolkit$Toolkit_Function$uncurry3 = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A3(f, _p3._0, _p3._1, _p3._2);
	});
var _danielnarey$elm_toolkit$Toolkit_Function$curry4 = F5(
	function (f, a, b, c, d) {
		return f(
			{ctor: '_Tuple4', _0: a, _1: b, _2: c, _3: d});
	});
var _danielnarey$elm_toolkit$Toolkit_Function$curry3 = F4(
	function (f, a, b, c) {
		return f(
			{ctor: '_Tuple3', _0: a, _1: b, _2: c});
	});
var _danielnarey$elm_toolkit$Toolkit_Function$composeList = F2(
	function (fList, data) {
		var compose = function (functions) {
			var _p4 = functions;
			if (_p4.ctor === '[]') {
				return _elm_lang$core$Basics$identity;
			} else {
				return function (_p5) {
					return A2(
						compose,
						_p4._1,
						_p4._0(_p5));
				};
			}
		};
		return A2(compose, fList, data);
	});
var _danielnarey$elm_toolkit$Toolkit_Function$composeWithArgs = F3(
	function (f, args, data) {
		return A2(
			_danielnarey$elm_toolkit$Toolkit_Function$composeList,
			A2(_elm_lang$core$List$map, f, args),
			data);
	});
var _danielnarey$elm_toolkit$Toolkit_Function$compose4 = F2(
	function (_p6, data) {
		var _p7 = _p6;
		return _p7._3(
			_p7._2(
				_p7._1(
					_p7._0(data))));
	});
var _danielnarey$elm_toolkit$Toolkit_Function$compose3 = F2(
	function (_p8, data) {
		var _p9 = _p8;
		return _p9._2(
			_p9._1(
				_p9._0(data)));
	});
var _danielnarey$elm_toolkit$Toolkit_Function$compose = F2(
	function (_p10, data) {
		var _p11 = _p10;
		return _p11._1(
			_p11._0(data));
	});
var _danielnarey$elm_toolkit$Toolkit_Function$applyList = F2(
	function (fList, data) {
		var _p12 = fList;
		if (_p12.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p12._0(data),
				_1: A2(_danielnarey$elm_toolkit$Toolkit_Function$applyList, _p12._1, data)
			};
		}
	});
var _danielnarey$elm_toolkit$Toolkit_Function$applyWithArgs = F3(
	function (f, args, data) {
		return A2(
			_danielnarey$elm_toolkit$Toolkit_Function$applyList,
			A2(_elm_lang$core$List$map, f, args),
			data);
	});
var _danielnarey$elm_toolkit$Toolkit_Function$apply4 = F2(
	function (_p13, a) {
		var _p14 = _p13;
		return {
			ctor: '_Tuple4',
			_0: _p14._0(a),
			_1: _p14._1(a),
			_2: _p14._2(a),
			_3: _p14._3(a)
		};
	});
var _danielnarey$elm_toolkit$Toolkit_Function$apply3 = F2(
	function (_p15, a) {
		var _p16 = _p15;
		return {
			ctor: '_Tuple3',
			_0: _p16._0(a),
			_1: _p16._1(a),
			_2: _p16._2(a)
		};
	});
var _danielnarey$elm_toolkit$Toolkit_Function$apply2 = F2(
	function (_p17, a) {
		var _p18 = _p17;
		return {
			ctor: '_Tuple2',
			_0: _p18._0(a),
			_1: _p18._1(a)
		};
	});

var _danielnarey$elm_toolkit$Toolkit_Tuple$map = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: f(_p1._0),
			_1: f(_p1._1)
		};
	});

var _danielnarey$elm_toolkit$Toolkit_Tuple3$map = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple3',
			_0: f(_p1._0),
			_1: f(_p1._1),
			_2: f(_p1._2)
		};
	});
var _danielnarey$elm_toolkit$Toolkit_Tuple3$third = function (_p2) {
	var _p3 = _p2;
	return _p3._2;
};
var _danielnarey$elm_toolkit$Toolkit_Tuple3$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _danielnarey$elm_toolkit$Toolkit_Tuple3$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _danielnarey$elm_toolkit$Toolkit_Maybe$filter = function (maybeList) {
	var toSingleton = function (maybeValue) {
		var _p0 = maybeValue;
		if (_p0.ctor === 'Just') {
			return {
				ctor: '::',
				_0: _p0._0,
				_1: {ctor: '[]'}
			};
		} else {
			return {ctor: '[]'};
		}
	};
	return _elm_lang$core$List$concat(
		A2(_elm_lang$core$List$map, toSingleton, maybeList));
};
var _danielnarey$elm_toolkit$Toolkit_Maybe$zipList = function (maybeList) {
	var toSingleton = function (maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return {
				ctor: '::',
				_0: _p1._0,
				_1: {ctor: '[]'}
			};
		} else {
			return {ctor: '[]'};
		}
	};
	var _p2 = A2(_elm_lang$core$List$member, _elm_lang$core$Maybe$Nothing, maybeList);
	if (_p2 === true) {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			_elm_lang$core$List$concat(
				A2(_elm_lang$core$List$map, toSingleton, maybeList)));
	}
};
var _danielnarey$elm_toolkit$Toolkit_Maybe$zip4 = function (tuple) {
	var _p3 = tuple;
	if (((((_p3.ctor === '_Tuple4') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) && (_p3._2.ctor === 'Just')) && (_p3._3.ctor === 'Just')) {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple4', _0: _p3._0._0, _1: _p3._1._0, _2: _p3._2._0, _3: _p3._3._0});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _danielnarey$elm_toolkit$Toolkit_Maybe$zip3 = function (tuple) {
	var _p4 = tuple;
	if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple3', _0: _p4._0._0, _1: _p4._1._0, _2: _p4._2._0});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _danielnarey$elm_toolkit$Toolkit_Maybe$zip = function (tuple) {
	var _p5 = tuple;
	if (((_p5.ctor === '_Tuple2') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p5._0._0, _1: _p5._1._0});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};

var _danielnarey$elm_toolkit$Toolkit_List$zip4 = function (_p0) {
	var _p1 = _p0;
	return A5(
		_elm_lang$core$List$map4,
		F4(
			function (a, b, c, d) {
				return {ctor: '_Tuple4', _0: a, _1: b, _2: c, _3: d};
			}),
		_p1._0,
		_p1._1,
		_p1._2,
		_p1._3);
};
var _danielnarey$elm_toolkit$Toolkit_List$zip3 = function (_p2) {
	var _p3 = _p2;
	return A4(
		_elm_lang$core$List$map3,
		F3(
			function (a, b, c) {
				return {ctor: '_Tuple3', _0: a, _1: b, _2: c};
			}),
		_p3._0,
		_p3._1,
		_p3._2);
};
var _danielnarey$elm_toolkit$Toolkit_List$zip = function (_p4) {
	var _p5 = _p4;
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		_p5._0,
		_p5._1);
};
var _danielnarey$elm_toolkit$Toolkit_List$unzip4 = function (quads) {
	var step = F2(
		function (_p7, _p6) {
			var _p8 = _p7;
			var _p9 = _p6;
			return {
				ctor: '_Tuple4',
				_0: {ctor: '::', _0: _p8._0, _1: _p9._0},
				_1: {ctor: '::', _0: _p8._1, _1: _p9._1},
				_2: {ctor: '::', _0: _p8._2, _1: _p9._2},
				_3: {ctor: '::', _0: _p8._3, _1: _p9._3}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple4',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'},
			_2: {ctor: '[]'},
			_3: {ctor: '[]'}
		},
		quads);
};
var _danielnarey$elm_toolkit$Toolkit_List$unzip3 = function (triples) {
	var step = F2(
		function (_p11, _p10) {
			var _p12 = _p11;
			var _p13 = _p10;
			return {
				ctor: '_Tuple3',
				_0: {ctor: '::', _0: _p12._0, _1: _p13._0},
				_1: {ctor: '::', _0: _p12._1, _1: _p13._1},
				_2: {ctor: '::', _0: _p12._2, _1: _p13._2}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple3',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'},
			_2: {ctor: '[]'}
		},
		triples);
};
var _danielnarey$elm_toolkit$Toolkit_List$from4Tuple = function (_p14) {
	var _p15 = _p14;
	return {
		ctor: '::',
		_0: _p15._0,
		_1: {
			ctor: '::',
			_0: _p15._1,
			_1: {
				ctor: '::',
				_0: _p15._2,
				_1: {
					ctor: '::',
					_0: _p15._3,
					_1: {ctor: '[]'}
				}
			}
		}
	};
};
var _danielnarey$elm_toolkit$Toolkit_List$from3Tuple = function (_p16) {
	var _p17 = _p16;
	return {
		ctor: '::',
		_0: _p17._0,
		_1: {
			ctor: '::',
			_0: _p17._1,
			_1: {
				ctor: '::',
				_0: _p17._2,
				_1: {ctor: '[]'}
			}
		}
	};
};
var _danielnarey$elm_toolkit$Toolkit_List$from2Tuple = function (_p18) {
	var _p19 = _p18;
	return {
		ctor: '::',
		_0: _p19._0,
		_1: {
			ctor: '::',
			_0: _p19._1,
			_1: {ctor: '[]'}
		}
	};
};
var _danielnarey$elm_toolkit$Toolkit_List$unique = function (_p20) {
	return _elm_lang$core$Set$toList(
		_elm_lang$core$Set$fromList(_p20));
};
var _danielnarey$elm_toolkit$Toolkit_List$getNth = F2(
	function (n, list) {
		return (_elm_lang$core$Native_Utils.cmp(n, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, n, list));
	});
var _danielnarey$elm_toolkit$Toolkit_List$take2Tuple = function (list) {
	return _danielnarey$elm_toolkit$Toolkit_Maybe$zip(
		A2(
			_danielnarey$elm_toolkit$Toolkit_Function$apply2,
			{
				ctor: '_Tuple2',
				_0: _danielnarey$elm_toolkit$Toolkit_List$getNth(0),
				_1: _danielnarey$elm_toolkit$Toolkit_List$getNth(1)
			},
			list));
};
var _danielnarey$elm_toolkit$Toolkit_List$take3Tuple = function (list) {
	return _danielnarey$elm_toolkit$Toolkit_Maybe$zip3(
		A2(
			_danielnarey$elm_toolkit$Toolkit_Function$apply3,
			{
				ctor: '_Tuple3',
				_0: _danielnarey$elm_toolkit$Toolkit_List$getNth(0),
				_1: _danielnarey$elm_toolkit$Toolkit_List$getNth(1),
				_2: _danielnarey$elm_toolkit$Toolkit_List$getNth(2)
			},
			list));
};
var _danielnarey$elm_toolkit$Toolkit_List$take4Tuple = function (list) {
	return _danielnarey$elm_toolkit$Toolkit_Maybe$zip4(
		A2(
			_danielnarey$elm_toolkit$Toolkit_Function$apply4,
			{
				ctor: '_Tuple4',
				_0: _danielnarey$elm_toolkit$Toolkit_List$getNth(0),
				_1: _danielnarey$elm_toolkit$Toolkit_List$getNth(1),
				_2: _danielnarey$elm_toolkit$Toolkit_List$getNth(2),
				_3: _danielnarey$elm_toolkit$Toolkit_List$getNth(3)
			},
			list));
};
var _danielnarey$elm_toolkit$Toolkit_List$isOneOf = F2(
	function (list, value) {
		return A2(_elm_lang$core$List$member, value, list);
	});

var _danielnarey$elm_toolkit$Toolkit_Result$filter = function (resultList) {
	var toSingleton = function (resultValue) {
		var _p0 = resultValue;
		if (_p0.ctor === 'Ok') {
			return {
				ctor: '::',
				_0: _p0._0,
				_1: {ctor: '[]'}
			};
		} else {
			return {ctor: '[]'};
		}
	};
	return _elm_lang$core$List$concat(
		A2(_elm_lang$core$List$map, toSingleton, resultList));
};
var _danielnarey$elm_toolkit$Toolkit_Result$zipList = F2(
	function (error, resultList) {
		var toSingleton = function (resultValue) {
			var _p1 = resultValue;
			if (_p1.ctor === 'Ok') {
				return {
					ctor: '::',
					_0: _p1._0,
					_1: {ctor: '[]'}
				};
			} else {
				return {ctor: '[]'};
			}
		};
		var singletonList = A2(_elm_lang$core$List$map, toSingleton, resultList);
		var _p2 = A2(
			_elm_lang$core$List$member,
			{ctor: '[]'},
			singletonList);
		if (_p2 === true) {
			return _elm_lang$core$Result$Err(error);
		} else {
			return _elm_lang$core$Result$Ok(
				_elm_lang$core$List$concat(singletonList));
		}
	});
var _danielnarey$elm_toolkit$Toolkit_Result$zip4 = F2(
	function (error, tuple) {
		var _p3 = tuple;
		if (((((_p3.ctor === '_Tuple4') && (_p3._0.ctor === 'Ok')) && (_p3._1.ctor === 'Ok')) && (_p3._2.ctor === 'Ok')) && (_p3._3.ctor === 'Ok')) {
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple4', _0: _p3._0._0, _1: _p3._1._0, _2: _p3._2._0, _3: _p3._3._0});
		} else {
			return _elm_lang$core$Result$Err(error);
		}
	});
var _danielnarey$elm_toolkit$Toolkit_Result$zip3 = F2(
	function (error, tuple) {
		var _p4 = tuple;
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Ok')) && (_p4._1.ctor === 'Ok')) && (_p4._2.ctor === 'Ok')) {
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple3', _0: _p4._0._0, _1: _p4._1._0, _2: _p4._2._0});
		} else {
			return _elm_lang$core$Result$Err(error);
		}
	});
var _danielnarey$elm_toolkit$Toolkit_Result$zip = F2(
	function (error, tuple) {
		var _p5 = tuple;
		if (((_p5.ctor === '_Tuple2') && (_p5._0.ctor === 'Ok')) && (_p5._1.ctor === 'Ok')) {
			return _elm_lang$core$Result$Ok(
				{ctor: '_Tuple2', _0: _p5._0._0, _1: _p5._1._0});
		} else {
			return _elm_lang$core$Result$Err(error);
		}
	});
var _danielnarey$elm_toolkit$Toolkit_Result$try = F2(
	function (resultFunction, initialValue) {
		var _p6 = resultFunction(initialValue);
		if (_p6.ctor === 'Ok') {
			return _p6._0;
		} else {
			return initialValue;
		}
	});

var _elm_lang$core$Color$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_lang$core$Color$rgbToHsl = F3(
	function (red, green, blue) {
		var b = _elm_lang$core$Basics$toFloat(blue) / 255;
		var g = _elm_lang$core$Basics$toFloat(green) / 255;
		var r = _elm_lang$core$Basics$toFloat(red) / 255;
		var cMax = A2(
			_elm_lang$core$Basics$max,
			A2(_elm_lang$core$Basics$max, r, g),
			b);
		var cMin = A2(
			_elm_lang$core$Basics$min,
			A2(_elm_lang$core$Basics$min, r, g),
			b);
		var c = cMax - cMin;
		var lightness = (cMax + cMin) / 2;
		var saturation = _elm_lang$core$Native_Utils.eq(lightness, 0) ? 0 : (c / (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)));
		var hue = _elm_lang$core$Basics$degrees(60) * (_elm_lang$core$Native_Utils.eq(cMax, r) ? A2(_elm_lang$core$Color$fmod, (g - b) / c, 6) : (_elm_lang$core$Native_Utils.eq(cMax, g) ? (((b - r) / c) + 2) : (((r - g) / c) + 4)));
		return {ctor: '_Tuple3', _0: hue, _1: saturation, _2: lightness};
	});
var _elm_lang$core$Color$hslToRgb = F3(
	function (hue, saturation, lightness) {
		var normHue = hue / _elm_lang$core$Basics$degrees(60);
		var chroma = (1 - _elm_lang$core$Basics$abs((2 * lightness) - 1)) * saturation;
		var x = chroma * (1 - _elm_lang$core$Basics$abs(
			A2(_elm_lang$core$Color$fmod, normHue, 2) - 1));
		var _p0 = (_elm_lang$core$Native_Utils.cmp(normHue, 0) < 0) ? {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 1) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: x, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 2) < 0) ? {ctor: '_Tuple3', _0: x, _1: chroma, _2: 0} : ((_elm_lang$core$Native_Utils.cmp(normHue, 3) < 0) ? {ctor: '_Tuple3', _0: 0, _1: chroma, _2: x} : ((_elm_lang$core$Native_Utils.cmp(normHue, 4) < 0) ? {ctor: '_Tuple3', _0: 0, _1: x, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 5) < 0) ? {ctor: '_Tuple3', _0: x, _1: 0, _2: chroma} : ((_elm_lang$core$Native_Utils.cmp(normHue, 6) < 0) ? {ctor: '_Tuple3', _0: chroma, _1: 0, _2: x} : {ctor: '_Tuple3', _0: 0, _1: 0, _2: 0}))))));
		var r = _p0._0;
		var g = _p0._1;
		var b = _p0._2;
		var m = lightness - (chroma / 2);
		return {ctor: '_Tuple3', _0: r + m, _1: g + m, _2: b + m};
	});
var _elm_lang$core$Color$toRgb = function (color) {
	var _p1 = color;
	if (_p1.ctor === 'RGBA') {
		return {red: _p1._0, green: _p1._1, blue: _p1._2, alpha: _p1._3};
	} else {
		var _p2 = A3(_elm_lang$core$Color$hslToRgb, _p1._0, _p1._1, _p1._2);
		var r = _p2._0;
		var g = _p2._1;
		var b = _p2._2;
		return {
			red: _elm_lang$core$Basics$round(255 * r),
			green: _elm_lang$core$Basics$round(255 * g),
			blue: _elm_lang$core$Basics$round(255 * b),
			alpha: _p1._3
		};
	}
};
var _elm_lang$core$Color$toHsl = function (color) {
	var _p3 = color;
	if (_p3.ctor === 'HSLA') {
		return {hue: _p3._0, saturation: _p3._1, lightness: _p3._2, alpha: _p3._3};
	} else {
		var _p4 = A3(_elm_lang$core$Color$rgbToHsl, _p3._0, _p3._1, _p3._2);
		var h = _p4._0;
		var s = _p4._1;
		var l = _p4._2;
		return {hue: h, saturation: s, lightness: l, alpha: _p3._3};
	}
};
var _elm_lang$core$Color$HSLA = F4(
	function (a, b, c, d) {
		return {ctor: 'HSLA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$hsla = F4(
	function (hue, saturation, lightness, alpha) {
		return A4(
			_elm_lang$core$Color$HSLA,
			hue - _elm_lang$core$Basics$turns(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$floor(hue / (2 * _elm_lang$core$Basics$pi)))),
			saturation,
			lightness,
			alpha);
	});
var _elm_lang$core$Color$hsl = F3(
	function (hue, saturation, lightness) {
		return A4(_elm_lang$core$Color$hsla, hue, saturation, lightness, 1);
	});
var _elm_lang$core$Color$complement = function (color) {
	var _p5 = color;
	if (_p5.ctor === 'HSLA') {
		return A4(
			_elm_lang$core$Color$hsla,
			_p5._0 + _elm_lang$core$Basics$degrees(180),
			_p5._1,
			_p5._2,
			_p5._3);
	} else {
		var _p6 = A3(_elm_lang$core$Color$rgbToHsl, _p5._0, _p5._1, _p5._2);
		var h = _p6._0;
		var s = _p6._1;
		var l = _p6._2;
		return A4(
			_elm_lang$core$Color$hsla,
			h + _elm_lang$core$Basics$degrees(180),
			s,
			l,
			_p5._3);
	}
};
var _elm_lang$core$Color$grayscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$greyscale = function (p) {
	return A4(_elm_lang$core$Color$HSLA, 0, 0, 1 - p, 1);
};
var _elm_lang$core$Color$RGBA = F4(
	function (a, b, c, d) {
		return {ctor: 'RGBA', _0: a, _1: b, _2: c, _3: d};
	});
var _elm_lang$core$Color$rgba = _elm_lang$core$Color$RGBA;
var _elm_lang$core$Color$rgb = F3(
	function (r, g, b) {
		return A4(_elm_lang$core$Color$RGBA, r, g, b, 1);
	});
var _elm_lang$core$Color$lightRed = A4(_elm_lang$core$Color$RGBA, 239, 41, 41, 1);
var _elm_lang$core$Color$red = A4(_elm_lang$core$Color$RGBA, 204, 0, 0, 1);
var _elm_lang$core$Color$darkRed = A4(_elm_lang$core$Color$RGBA, 164, 0, 0, 1);
var _elm_lang$core$Color$lightOrange = A4(_elm_lang$core$Color$RGBA, 252, 175, 62, 1);
var _elm_lang$core$Color$orange = A4(_elm_lang$core$Color$RGBA, 245, 121, 0, 1);
var _elm_lang$core$Color$darkOrange = A4(_elm_lang$core$Color$RGBA, 206, 92, 0, 1);
var _elm_lang$core$Color$lightYellow = A4(_elm_lang$core$Color$RGBA, 255, 233, 79, 1);
var _elm_lang$core$Color$yellow = A4(_elm_lang$core$Color$RGBA, 237, 212, 0, 1);
var _elm_lang$core$Color$darkYellow = A4(_elm_lang$core$Color$RGBA, 196, 160, 0, 1);
var _elm_lang$core$Color$lightGreen = A4(_elm_lang$core$Color$RGBA, 138, 226, 52, 1);
var _elm_lang$core$Color$green = A4(_elm_lang$core$Color$RGBA, 115, 210, 22, 1);
var _elm_lang$core$Color$darkGreen = A4(_elm_lang$core$Color$RGBA, 78, 154, 6, 1);
var _elm_lang$core$Color$lightBlue = A4(_elm_lang$core$Color$RGBA, 114, 159, 207, 1);
var _elm_lang$core$Color$blue = A4(_elm_lang$core$Color$RGBA, 52, 101, 164, 1);
var _elm_lang$core$Color$darkBlue = A4(_elm_lang$core$Color$RGBA, 32, 74, 135, 1);
var _elm_lang$core$Color$lightPurple = A4(_elm_lang$core$Color$RGBA, 173, 127, 168, 1);
var _elm_lang$core$Color$purple = A4(_elm_lang$core$Color$RGBA, 117, 80, 123, 1);
var _elm_lang$core$Color$darkPurple = A4(_elm_lang$core$Color$RGBA, 92, 53, 102, 1);
var _elm_lang$core$Color$lightBrown = A4(_elm_lang$core$Color$RGBA, 233, 185, 110, 1);
var _elm_lang$core$Color$brown = A4(_elm_lang$core$Color$RGBA, 193, 125, 17, 1);
var _elm_lang$core$Color$darkBrown = A4(_elm_lang$core$Color$RGBA, 143, 89, 2, 1);
var _elm_lang$core$Color$black = A4(_elm_lang$core$Color$RGBA, 0, 0, 0, 1);
var _elm_lang$core$Color$white = A4(_elm_lang$core$Color$RGBA, 255, 255, 255, 1);
var _elm_lang$core$Color$lightGrey = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$grey = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGrey = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightGray = A4(_elm_lang$core$Color$RGBA, 238, 238, 236, 1);
var _elm_lang$core$Color$gray = A4(_elm_lang$core$Color$RGBA, 211, 215, 207, 1);
var _elm_lang$core$Color$darkGray = A4(_elm_lang$core$Color$RGBA, 186, 189, 182, 1);
var _elm_lang$core$Color$lightCharcoal = A4(_elm_lang$core$Color$RGBA, 136, 138, 133, 1);
var _elm_lang$core$Color$charcoal = A4(_elm_lang$core$Color$RGBA, 85, 87, 83, 1);
var _elm_lang$core$Color$darkCharcoal = A4(_elm_lang$core$Color$RGBA, 46, 52, 54, 1);
var _elm_lang$core$Color$Radial = F5(
	function (a, b, c, d, e) {
		return {ctor: 'Radial', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Color$radial = _elm_lang$core$Color$Radial;
var _elm_lang$core$Color$Linear = F3(
	function (a, b, c) {
		return {ctor: 'Linear', _0: a, _1: b, _2: c};
	});
var _elm_lang$core$Color$linear = _elm_lang$core$Color$Linear;

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _danielnarey$elm_color_math$ColorMath_Hex$toColor = function (hexCode) {
	var errorMsg = A2(
		_elm_lang$core$Basics_ops['++'],
		'\'',
		A2(_elm_lang$core$Basics_ops['++'], hexCode, '\' is not a valid 3- or 6-digit hexadecimal color code'));
	var hexToInt = function (_p0) {
		return A2(
			_elm_lang$core$Basics$uncurry,
			F2(
				function (x, y) {
					return x + y;
				}),
			A2(
				_elm_lang$core$Tuple$mapFirst,
				F2(
					function (x, y) {
						return x * y;
					})(16),
				_p0));
	};
	var separateRgb = function (_p1) {
		return _danielnarey$elm_toolkit$Toolkit_Maybe$zip3(
			A2(
				_danielnarey$elm_toolkit$Toolkit_Function$apply3,
				{
					ctor: '_Tuple3',
					_0: _danielnarey$elm_toolkit$Toolkit_List$take2Tuple,
					_1: function (_p2) {
						return _danielnarey$elm_toolkit$Toolkit_List$take2Tuple(
							A2(_elm_lang$core$List$drop, 2, _p2));
					},
					_2: function (_p3) {
						return _danielnarey$elm_toolkit$Toolkit_List$take2Tuple(
							A2(_elm_lang$core$List$drop, 4, _p3));
					}
				},
				_p1));
	};
	var fromBase16 = function (keyCode) {
		return A2(
			_elm_lang$core$Array$get,
			keyCode - 65,
			_elm_lang$core$Array$fromList(
				{
					ctor: '::',
					_0: 10,
					_1: {
						ctor: '::',
						_0: 11,
						_1: {
							ctor: '::',
							_0: 12,
							_1: {
								ctor: '::',
								_0: 13,
								_1: {
									ctor: '::',
									_0: 14,
									_1: {
										ctor: '::',
										_0: 15,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}));
	};
	var charToInt = function ($char) {
		var _p4 = _elm_lang$core$Char$isDigit($char);
		if (_p4 === true) {
			return _elm_lang$core$Result$toMaybe(
				_elm_lang$core$String$toInt(
					_elm_lang$core$String$fromChar($char)));
		} else {
			return fromBase16(
				_elm_lang$core$Char$toCode($char));
		}
	};
	var checkDigits = function (charList) {
		var _p5 = _elm_lang$core$List$length(charList);
		switch (_p5) {
			case 3:
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$List$concat(
						A2(
							_elm_lang$core$List$map,
							function (c) {
								return {
									ctor: '::',
									_0: c,
									_1: {
										ctor: '::',
										_0: c,
										_1: {ctor: '[]'}
									}
								};
							},
							charList)));
			case 6:
				return _elm_lang$core$Maybe$Just(charList);
			default:
				return _elm_lang$core$Maybe$Nothing;
		}
	};
	var dropFirstChar = function (charList) {
		var _p6 = _elm_lang$core$List$head(charList);
		if ((_p6.ctor === 'Just') && (_p6._0.valueOf() === '#')) {
			return A2(_elm_lang$core$List$drop, 1, charList);
		} else {
			return charList;
		}
	};
	return A2(
		_elm_lang$core$Result$fromMaybe,
		errorMsg,
		A2(
			_elm_lang$core$Maybe$map,
			function (_p7) {
				return A2(
					_danielnarey$elm_toolkit$Toolkit_Function$uncurry3,
					_elm_lang$core$Color$rgb,
					A2(_danielnarey$elm_toolkit$Toolkit_Tuple3$map, hexToInt, _p7));
			},
			A2(
				_elm_lang$core$Maybe$andThen,
				separateRgb,
				A2(
					_elm_lang$core$Maybe$andThen,
					function (_p8) {
						return _danielnarey$elm_toolkit$Toolkit_Maybe$zipList(
							A2(_elm_lang$core$List$map, charToInt, _p8));
					},
					checkDigits(
						dropFirstChar(
							_elm_lang$core$String$toList(
								_elm_lang$core$String$toUpper(hexCode))))))));
};
var _danielnarey$elm_color_math$ColorMath_Hex$fromInt = function ($int) {
	var clamped = A3(_elm_lang$core$Basics$clamp, 0, 255, $int);
	var toBase16 = function ($int) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'!',
			A2(
				_elm_lang$core$Array$get,
				$int,
				_elm_lang$core$Array$fromList(
					{
						ctor: '::',
						_0: '0',
						_1: {
							ctor: '::',
							_0: '1',
							_1: {
								ctor: '::',
								_0: '2',
								_1: {
									ctor: '::',
									_0: '3',
									_1: {
										ctor: '::',
										_0: '4',
										_1: {
											ctor: '::',
											_0: '5',
											_1: {
												ctor: '::',
												_0: '6',
												_1: {
													ctor: '::',
													_0: '7',
													_1: {
														ctor: '::',
														_0: '8',
														_1: {
															ctor: '::',
															_0: '9',
															_1: {
																ctor: '::',
																_0: 'A',
																_1: {
																	ctor: '::',
																	_0: 'B',
																	_1: {
																		ctor: '::',
																		_0: 'C',
																		_1: {
																			ctor: '::',
																			_0: 'D',
																			_1: {
																				ctor: '::',
																				_0: 'E',
																				_1: {
																					ctor: '::',
																					_0: 'F',
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					})));
	};
	return A2(
		_elm_lang$core$Basics$uncurry,
		_elm_lang$core$String$append,
		A2(
			_danielnarey$elm_toolkit$Toolkit_Tuple$map,
			toBase16,
			{
				ctor: '_Tuple2',
				_0: (clamped / 16) | 0,
				_1: A2(_elm_lang$core$Basics$rem, clamped, 16)
			}));
};
var _danielnarey$elm_color_math$ColorMath_Hex$fromColor = function (_p9) {
	return _elm_lang$core$String$concat(
		A2(
			_elm_lang$core$List$map,
			_danielnarey$elm_color_math$ColorMath_Hex$fromInt,
			A2(
				_danielnarey$elm_toolkit$Toolkit_Function$applyList,
				{
					ctor: '::',
					_0: function (_) {
						return _.red;
					},
					_1: {
						ctor: '::',
						_0: function (_) {
							return _.green;
						},
						_1: {
							ctor: '::',
							_0: function (_) {
								return _.blue;
							},
							_1: {ctor: '[]'}
						}
					}
				},
				_elm_lang$core$Color$toRgb(_p9))));
};

var _danielnarey$elm_toolkit$Toolkit_Tuple4$map = F2(
	function (f, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple4',
			_0: f(_p1._0),
			_1: f(_p1._1),
			_2: f(_p1._2),
			_3: f(_p1._3)
		};
	});
var _danielnarey$elm_toolkit$Toolkit_Tuple4$fourth = function (_p2) {
	var _p3 = _p2;
	return _p3._3;
};
var _danielnarey$elm_toolkit$Toolkit_Tuple4$third = function (_p4) {
	var _p5 = _p4;
	return _p5._2;
};
var _danielnarey$elm_toolkit$Toolkit_Tuple4$second = function (_p6) {
	var _p7 = _p6;
	return _p7._1;
};
var _danielnarey$elm_toolkit$Toolkit_Tuple4$first = function (_p8) {
	var _p9 = _p8;
	return _p9._0;
};

var _danielnarey$elm_color_math$ColorMath_Hex8$toColor = function (hexCode) {
	var errorMsg = A2(
		_elm_lang$core$Basics_ops['++'],
		'\'',
		A2(_elm_lang$core$Basics_ops['++'], hexCode, '\' is not a valid 4- or 8-digit hexadecimal color code'));
	var normalizeAlpha = function (_p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple4',
			_0: _p1._0,
			_1: _p1._1,
			_2: _p1._2,
			_3: A3(
				_elm_lang$core$Basics$flip,
				F2(
					function (x, y) {
						return x / y;
					}),
				255,
				_elm_lang$core$Basics$toFloat(_p1._3))
		};
	};
	var hexToInt = function (_p2) {
		return A2(
			_elm_lang$core$Basics$uncurry,
			F2(
				function (x, y) {
					return x + y;
				}),
			A2(
				_elm_lang$core$Tuple$mapFirst,
				F2(
					function (x, y) {
						return x * y;
					})(16),
				_p2));
	};
	var separateRgb = function (_p3) {
		return _danielnarey$elm_toolkit$Toolkit_Maybe$zip4(
			A2(
				_danielnarey$elm_toolkit$Toolkit_Function$apply4,
				{
					ctor: '_Tuple4',
					_0: _danielnarey$elm_toolkit$Toolkit_List$take2Tuple,
					_1: function (_p4) {
						return _danielnarey$elm_toolkit$Toolkit_List$take2Tuple(
							A2(_elm_lang$core$List$drop, 2, _p4));
					},
					_2: function (_p5) {
						return _danielnarey$elm_toolkit$Toolkit_List$take2Tuple(
							A2(_elm_lang$core$List$drop, 4, _p5));
					},
					_3: function (_p6) {
						return _danielnarey$elm_toolkit$Toolkit_List$take2Tuple(
							A2(_elm_lang$core$List$drop, 6, _p6));
					}
				},
				_p3));
	};
	var fromBase16 = function (keyCode) {
		return A2(
			_elm_lang$core$Array$get,
			keyCode - 65,
			_elm_lang$core$Array$fromList(
				{
					ctor: '::',
					_0: 10,
					_1: {
						ctor: '::',
						_0: 11,
						_1: {
							ctor: '::',
							_0: 12,
							_1: {
								ctor: '::',
								_0: 13,
								_1: {
									ctor: '::',
									_0: 14,
									_1: {
										ctor: '::',
										_0: 15,
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}));
	};
	var charToInt = function ($char) {
		var _p7 = _elm_lang$core$Char$isDigit($char);
		if (_p7 === true) {
			return _elm_lang$core$Result$toMaybe(
				_elm_lang$core$String$toInt(
					_elm_lang$core$String$fromChar($char)));
		} else {
			return fromBase16(
				_elm_lang$core$Char$toCode($char));
		}
	};
	var checkDigits = function (charList) {
		var _p8 = _elm_lang$core$List$length(charList);
		switch (_p8) {
			case 4:
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$List$concat(
						A2(
							_elm_lang$core$List$map,
							function (c) {
								return {
									ctor: '::',
									_0: c,
									_1: {
										ctor: '::',
										_0: c,
										_1: {ctor: '[]'}
									}
								};
							},
							charList)));
			case 8:
				return _elm_lang$core$Maybe$Just(charList);
			default:
				return _elm_lang$core$Maybe$Nothing;
		}
	};
	var dropFirstChar = function (charList) {
		var _p9 = _elm_lang$core$List$head(charList);
		if ((_p9.ctor === 'Just') && (_p9._0.valueOf() === '#')) {
			return A2(_elm_lang$core$List$drop, 1, charList);
		} else {
			return charList;
		}
	};
	return A2(
		_elm_lang$core$Result$fromMaybe,
		errorMsg,
		A2(
			_elm_lang$core$Maybe$map,
			function (_p10) {
				return A2(
					_danielnarey$elm_toolkit$Toolkit_Function$uncurry4,
					_elm_lang$core$Color$rgba,
					normalizeAlpha(
						A2(_danielnarey$elm_toolkit$Toolkit_Tuple4$map, hexToInt, _p10)));
			},
			A2(
				_elm_lang$core$Maybe$andThen,
				separateRgb,
				A2(
					_elm_lang$core$Maybe$andThen,
					function (_p11) {
						return _danielnarey$elm_toolkit$Toolkit_Maybe$zipList(
							A2(_elm_lang$core$List$map, charToInt, _p11));
					},
					checkDigits(
						dropFirstChar(
							_elm_lang$core$String$toList(
								_elm_lang$core$String$toUpper(hexCode))))))));
};
var _danielnarey$elm_color_math$ColorMath_Hex8$fromColor = function (_p12) {
	return _elm_lang$core$String$concat(
		A2(
			_elm_lang$core$List$map,
			_danielnarey$elm_color_math$ColorMath_Hex$fromInt,
			A2(
				_danielnarey$elm_toolkit$Toolkit_Function$applyList,
				{
					ctor: '::',
					_0: function (_) {
						return _.red;
					},
					_1: {
						ctor: '::',
						_0: function (_) {
							return _.green;
						},
						_1: {
							ctor: '::',
							_0: function (_) {
								return _.blue;
							},
							_1: {
								ctor: '::',
								_0: function (_p13) {
									return _elm_lang$core$Basics$round(
										A2(
											F2(
												function (x, y) {
													return x * y;
												}),
											255,
											function (_) {
												return _.alpha;
											}(_p13)));
								},
								_1: {ctor: '[]'}
							}
						}
					}
				},
				_elm_lang$core$Color$toRgb(_p12))));
};

var _danielnarey$elm_color_math$ColorMath_Hsla$getAlpha = function (_p0) {
	return function (_) {
		return _.alpha;
	}(
		_elm_lang$core$Color$toHsl(_p0));
};
var _danielnarey$elm_color_math$ColorMath_Hsla$getLightness = function (_p1) {
	return function (_) {
		return _.lightness;
	}(
		_elm_lang$core$Color$toHsl(_p1));
};
var _danielnarey$elm_color_math$ColorMath_Hsla$checkForNaN = function (value) {
	var _p2 = _elm_lang$core$Basics$isNaN(value);
	if (_p2 === true) {
		return 0;
	} else {
		return value;
	}
};
var _danielnarey$elm_color_math$ColorMath_Hsla$getHue = function (_p3) {
	return A2(
		F2(
			function (x, y) {
				return x * y;
			}),
		180 / _elm_lang$core$Basics$pi,
		_danielnarey$elm_color_math$ColorMath_Hsla$checkForNaN(
			function (_) {
				return _.hue;
			}(
				_elm_lang$core$Color$toHsl(_p3))));
};
var _danielnarey$elm_color_math$ColorMath_Hsla$getSaturation = function (_p4) {
	return _danielnarey$elm_color_math$ColorMath_Hsla$checkForNaN(
		function (_) {
			return _.saturation;
		}(
			_elm_lang$core$Color$toHsl(_p4)));
};
var _danielnarey$elm_color_math$ColorMath_Hsla$toColor = function (_p5) {
	return A2(
		_danielnarey$elm_toolkit$Toolkit_Function$uncurry4,
		_elm_lang$core$Color$hsla,
		A2(
			_danielnarey$elm_toolkit$Toolkit_Function$apply4,
			{
				ctor: '_Tuple4',
				_0: function (_p6) {
					return A3(
						_elm_lang$core$Basics$clamp,
						_elm_lang$core$Basics$degrees(0),
						_elm_lang$core$Basics$degrees(360),
						_danielnarey$elm_color_math$ColorMath_Hsla$checkForNaN(
							function (_) {
								return _.hue;
							}(_p6)));
				},
				_1: function (_p7) {
					return A3(
						_elm_lang$core$Basics$clamp,
						0,
						1,
						_danielnarey$elm_color_math$ColorMath_Hsla$checkForNaN(
							function (_) {
								return _.saturation;
							}(_p7)));
				},
				_2: function (_p8) {
					return A3(
						_elm_lang$core$Basics$clamp,
						0,
						1,
						function (_) {
							return _.lightness;
						}(_p8));
				},
				_3: function (_p9) {
					return A3(
						_elm_lang$core$Basics$clamp,
						0,
						1,
						function (_) {
							return _.alpha;
						}(_p9));
				}
			},
			_p5));
};
var _danielnarey$elm_color_math$ColorMath_Hsla$setHue = function (value) {
	var updateHue = F2(
		function (h, hsla) {
			return _elm_lang$core$Native_Utils.update(
				hsla,
				{hue: h});
		});
	return function (_p10) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				updateHue,
				_elm_lang$core$Basics$degrees(
					A3(_elm_lang$core$Basics$clamp, 0, 360, value)),
				_elm_lang$core$Color$toHsl(_p10)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Hsla$setSaturation = function (value) {
	var updateSaturation = F2(
		function (s, hsla) {
			return _elm_lang$core$Native_Utils.update(
				hsla,
				{saturation: s});
		});
	return function (_p11) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				updateSaturation,
				A3(_elm_lang$core$Basics$clamp, 0, 1, value),
				_elm_lang$core$Color$toHsl(_p11)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Hsla$setLightness = function (value) {
	var updateLightness = F2(
		function (l, hsla) {
			return _elm_lang$core$Native_Utils.update(
				hsla,
				{lightness: l});
		});
	return function (_p12) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				updateLightness,
				A3(_elm_lang$core$Basics$clamp, 0, 1, value),
				_elm_lang$core$Color$toHsl(_p12)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Hsla$setAlpha = function (value) {
	var updateAlpha = F2(
		function (a, hsla) {
			return _elm_lang$core$Native_Utils.update(
				hsla,
				{alpha: a});
		});
	return function (_p13) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				updateAlpha,
				A3(_elm_lang$core$Basics$clamp, 0, 1, value),
				_elm_lang$core$Color$toHsl(_p13)));
	};
};

var _danielnarey$elm_color_math$ColorMath_Rgba$toColor = function (_p0) {
	return A2(
		_danielnarey$elm_toolkit$Toolkit_Function$uncurry4,
		_elm_lang$core$Color$rgba,
		A2(
			_danielnarey$elm_toolkit$Toolkit_Function$apply4,
			{
				ctor: '_Tuple4',
				_0: function (_p1) {
					return A3(
						_elm_lang$core$Basics$clamp,
						0,
						255,
						function (_) {
							return _.red;
						}(_p1));
				},
				_1: function (_p2) {
					return A3(
						_elm_lang$core$Basics$clamp,
						0,
						255,
						function (_) {
							return _.green;
						}(_p2));
				},
				_2: function (_p3) {
					return A3(
						_elm_lang$core$Basics$clamp,
						0,
						255,
						function (_) {
							return _.blue;
						}(_p3));
				},
				_3: function (_p4) {
					return A3(
						_elm_lang$core$Basics$clamp,
						0,
						1,
						function (_) {
							return _.alpha;
						}(_p4));
				}
			},
			_p0));
};
var _danielnarey$elm_color_math$ColorMath_Rgba$setAlpha = function (value) {
	var updateAlpha = F2(
		function (a, hsla) {
			return _elm_lang$core$Native_Utils.update(
				hsla,
				{alpha: a});
		});
	return function (_p5) {
		return _danielnarey$elm_color_math$ColorMath_Rgba$toColor(
			A2(
				updateAlpha,
				A3(_elm_lang$core$Basics$clamp, 0, 1, value),
				_elm_lang$core$Color$toRgb(_p5)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Rgba$getAlpha = function (_p6) {
	return function (_) {
		return _.alpha;
	}(
		_elm_lang$core$Color$toRgb(_p6));
};
var _danielnarey$elm_color_math$ColorMath_Rgba$setBlue = function (value) {
	var updateBlue = F2(
		function (b, rgba) {
			return _elm_lang$core$Native_Utils.update(
				rgba,
				{blue: b});
		});
	return function (_p7) {
		return _danielnarey$elm_color_math$ColorMath_Rgba$toColor(
			A2(
				updateBlue,
				A3(_elm_lang$core$Basics$clamp, 0, 255, value),
				_elm_lang$core$Color$toRgb(_p7)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Rgba$getBlue = function (_p8) {
	return function (_) {
		return _.blue;
	}(
		_elm_lang$core$Color$toRgb(_p8));
};
var _danielnarey$elm_color_math$ColorMath_Rgba$setGreen = function (value) {
	var updateGreen = F2(
		function (g, rgba) {
			return _elm_lang$core$Native_Utils.update(
				rgba,
				{green: g});
		});
	return function (_p9) {
		return _danielnarey$elm_color_math$ColorMath_Rgba$toColor(
			A2(
				updateGreen,
				A3(_elm_lang$core$Basics$clamp, 0, 255, value),
				_elm_lang$core$Color$toRgb(_p9)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Rgba$getGreen = function (_p10) {
	return function (_) {
		return _.green;
	}(
		_elm_lang$core$Color$toRgb(_p10));
};
var _danielnarey$elm_color_math$ColorMath_Rgba$setRed = function (value) {
	var updateRed = F2(
		function (r, rgba) {
			return _elm_lang$core$Native_Utils.update(
				rgba,
				{red: r});
		});
	return function (_p11) {
		return _danielnarey$elm_color_math$ColorMath_Rgba$toColor(
			A2(
				updateRed,
				A3(_elm_lang$core$Basics$clamp, 0, 255, value),
				_elm_lang$core$Color$toRgb(_p11)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Rgba$getRed = function (_p12) {
	return function (_) {
		return _.red;
	}(
		_elm_lang$core$Color$toRgb(_p12));
};

var _danielnarey$elm_color_math$ColorMath_Scaling$scaleToAqua = function (amount) {
	var scaleFunction = F2(
		function (amount, hsl) {
			return _elm_lang$core$Native_Utils.update(
				hsl,
				{
					hue: (_elm_lang$core$Native_Utils.cmp(
						hsl.hue,
						_elm_lang$core$Basics$degrees(180)) < 1) ? A2(
						F2(
							function (x, y) {
								return x + y;
							}),
						hsl.hue,
						A2(
							F2(
								function (x, y) {
									return x * y;
								}),
							amount,
							_elm_lang$core$Basics$degrees(180) - hsl.hue)) : A2(
						F2(
							function (x, y) {
								return x - y;
							}),
						hsl.hue,
						A2(
							F2(
								function (x, y) {
									return x * y;
								}),
							amount,
							hsl.hue - _elm_lang$core$Basics$degrees(180)))
				});
		});
	return function (_p0) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				scaleFunction,
				A3(_elm_lang$core$Basics$clamp, 0, 1, amount),
				_elm_lang$core$Color$toHsl(_p0)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Scaling$scaleToRed = function (amount) {
	var scaleFunction = F2(
		function (amount, hsl) {
			return _elm_lang$core$Native_Utils.update(
				hsl,
				{
					hue: (_elm_lang$core$Native_Utils.cmp(
						hsl.hue,
						_elm_lang$core$Basics$degrees(180)) > -1) ? A2(
						F2(
							function (x, y) {
								return x + y;
							}),
						hsl.hue,
						A2(
							F2(
								function (x, y) {
									return x * y;
								}),
							amount,
							_elm_lang$core$Basics$degrees(360) - hsl.hue)) : A2(
						F2(
							function (x, y) {
								return x - y;
							}),
						hsl.hue,
						A2(
							F2(
								function (x, y) {
									return x * y;
								}),
							amount,
							hsl.hue))
				});
		});
	return function (_p1) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				scaleFunction,
				A3(_elm_lang$core$Basics$clamp, 0, 1, amount),
				_elm_lang$core$Color$toHsl(_p1)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Scaling$rotateHue = function (amount) {
	var shiftHue = F2(
		function (amount, hsl) {
			return _elm_lang$core$Native_Utils.update(
				hsl,
				{
					hue: (_elm_lang$core$Native_Utils.cmp(hsl.hue + amount, 0) < 0) ? A2(
						F2(
							function (x, y) {
								return x + y;
							}),
						_elm_lang$core$Basics$degrees(360),
						hsl.hue + amount) : ((_elm_lang$core$Native_Utils.cmp(
						hsl.hue + amount,
						_elm_lang$core$Basics$degrees(360)) > 0) ? A3(
						_elm_lang$core$Basics$flip,
						F2(
							function (x, y) {
								return x - y;
							}),
						_elm_lang$core$Basics$degrees(360),
						hsl.hue + amount) : (hsl.hue + amount))
				});
		});
	return function (_p2) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				shiftHue,
				_elm_lang$core$Basics$turns(
					A3(_elm_lang$core$Basics$clamp, -1, 1, amount)),
				_elm_lang$core$Color$toHsl(_p2)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Scaling$moreTransparent = function (amount) {
	var scaleFunction = F2(
		function (amount, hsl) {
			return _elm_lang$core$Native_Utils.update(
				hsl,
				{
					alpha: A2(
						F2(
							function (x, y) {
								return x - y;
							}),
						hsl.alpha,
						A2(
							F2(
								function (x, y) {
									return x * y;
								}),
							amount,
							hsl.alpha))
				});
		});
	return function (_p3) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				scaleFunction,
				A3(_elm_lang$core$Basics$clamp, 0, 1, amount),
				_elm_lang$core$Color$toHsl(_p3)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Scaling$moreOpaque = function (amount) {
	var scaleFunction = F2(
		function (amount, hsl) {
			return _elm_lang$core$Native_Utils.update(
				hsl,
				{
					alpha: A2(
						F2(
							function (x, y) {
								return x + y;
							}),
						hsl.alpha,
						A2(
							F2(
								function (x, y) {
									return x * y;
								}),
							amount,
							1 - hsl.alpha))
				});
		});
	return function (_p4) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				scaleFunction,
				A3(_elm_lang$core$Basics$clamp, 0, 1, amount),
				_elm_lang$core$Color$toHsl(_p4)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Scaling$desaturate = function (amount) {
	var scaleFunction = F2(
		function (amount, hsl) {
			return _elm_lang$core$Native_Utils.update(
				hsl,
				{
					saturation: A2(
						F2(
							function (x, y) {
								return x - y;
							}),
						hsl.saturation,
						A2(
							F2(
								function (x, y) {
									return x * y;
								}),
							amount,
							hsl.saturation))
				});
		});
	return function (_p5) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				scaleFunction,
				A3(_elm_lang$core$Basics$clamp, 0, 1, amount),
				_elm_lang$core$Color$toHsl(_p5)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Scaling$saturate = function (amount) {
	var scaleFunction = F2(
		function (amount, hsl) {
			return _elm_lang$core$Native_Utils.update(
				hsl,
				{
					saturation: A2(
						F2(
							function (x, y) {
								return x + y;
							}),
						hsl.saturation,
						A2(
							F2(
								function (x, y) {
									return x * y;
								}),
							amount,
							1 - hsl.saturation))
				});
		});
	return function (_p6) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				scaleFunction,
				A3(_elm_lang$core$Basics$clamp, 0, 1, amount),
				_elm_lang$core$Color$toHsl(_p6)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Scaling$darken = function (amount) {
	var scaleFunction = F2(
		function (amount, hsl) {
			return _elm_lang$core$Native_Utils.update(
				hsl,
				{
					lightness: A2(
						F2(
							function (x, y) {
								return x - y;
							}),
						hsl.lightness,
						A2(
							F2(
								function (x, y) {
									return x * y;
								}),
							amount,
							hsl.lightness))
				});
		});
	return function (_p7) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				scaleFunction,
				A3(_elm_lang$core$Basics$clamp, 0, 1, amount),
				_elm_lang$core$Color$toHsl(_p7)));
	};
};
var _danielnarey$elm_color_math$ColorMath_Scaling$lighten = function (amount) {
	var scaleFunction = F2(
		function (amount, hsl) {
			return _elm_lang$core$Native_Utils.update(
				hsl,
				{
					lightness: A2(
						F2(
							function (x, y) {
								return x + y;
							}),
						hsl.lightness,
						A2(
							F2(
								function (x, y) {
									return x * y;
								}),
							amount,
							1 - hsl.lightness))
				});
		});
	return function (_p8) {
		return _danielnarey$elm_color_math$ColorMath_Hsla$toColor(
			A2(
				scaleFunction,
				A3(_elm_lang$core$Basics$clamp, 0, 1, amount),
				_elm_lang$core$Color$toHsl(_p8)));
	};
};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _danielnarey$elm_semantic_dom$Dom$Element = F8(
	function (a, b, c, d, e, f, g, h) {
		return {tag: a, id: b, attributes: c, classes: d, children: e, text: f, namespace: g, keys: h};
	});

var _danielnarey$elm_semantic_dom$Dom_Element$hasClass = F2(
	function (name, element) {
		return A2(_elm_lang$core$List$member, name, element.classes);
	});
var _danielnarey$elm_semantic_dom$Dom_Element$hasText = function (element) {
	var _p0 = element.text;
	if (_p0 === '') {
		return false;
	} else {
		return true;
	}
};
var _danielnarey$elm_semantic_dom$Dom_Element$hasChildren = function (element) {
	var _p1 = element.children;
	if (_p1.ctor === '[]') {
		return false;
	} else {
		return true;
	}
};
var _danielnarey$elm_semantic_dom$Dom_Element$setNamespace = F2(
	function (url, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{namespace: url});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$withChildNodes = F2(
	function (nodeList, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{children: nodeList});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$prependText = F2(
	function (moreText, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				text: A2(_elm_lang$core$String$append, moreText, n.text)
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$appendText = F2(
	function (moreText, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				text: A2(_elm_lang$core$String$append, n.text, moreText)
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$withText = F2(
	function (someText, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{text: someText});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$addAttribute = F2(
	function (newAttribute, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				attributes: A2(
					_elm_lang$core$List$append,
					n.attributes,
					{
						ctor: '::',
						_0: newAttribute,
						_1: {ctor: '[]'}
					})
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$withAttributes = F2(
	function (attributeList, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{attributes: attributeList});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$removeClass = F2(
	function (classToRemove, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				classes: A2(
					_elm_lang$core$List$filter,
					F2(
						function (x, y) {
							return !_elm_lang$core$Native_Utils.eq(x, y);
						})(classToRemove),
					n.classes)
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$addClass = F2(
	function (newClass, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				classes: {ctor: '::', _0: newClass, _1: n.classes}
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$withClasses = F2(
	function (classList, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{classes: classList});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$setId = F2(
	function (idString, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{id: idString});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$toNode = function (element) {
	var consTextKeyed = function (keyedList) {
		var _p2 = element.text;
		if (_p2 === '') {
			return keyedList;
		} else {
			return {
				ctor: '::',
				_0: A2(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					'internal-text',
					_elm_lang$virtual_dom$VirtualDom$text(element.text)),
				_1: keyedList
			};
		}
	};
	var consText = function (childList) {
		var _p3 = element.text;
		if (_p3 === '') {
			return childList;
		} else {
			return {
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom$text(element.text),
				_1: childList
			};
		}
	};
	var consNamespace = function (attributeList) {
		var _p4 = element.namespace;
		if (_p4 === '') {
			return attributeList;
		} else {
			return {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom$property,
					'namespace',
					_elm_lang$core$Json_Encode$string(element.namespace)),
				_1: attributeList
			};
		}
	};
	var consClassName = function (attributeList) {
		var _p5 = element.classes;
		if (_p5.ctor === '[]') {
			return attributeList;
		} else {
			return {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom$property,
					'className',
					_elm_lang$core$Json_Encode$string(
						_elm_lang$core$String$trim(
							A2(_elm_lang$core$String$join, ' ', element.classes)))),
				_1: attributeList
			};
		}
	};
	var consId = function (attributeList) {
		var _p6 = element.id;
		if (_p6 === '') {
			return attributeList;
		} else {
			return {
				ctor: '::',
				_0: A2(
					_elm_lang$virtual_dom$VirtualDom$property,
					'id',
					_elm_lang$core$Json_Encode$string(element.id)),
				_1: attributeList
			};
		}
	};
	var _p7 = element.keys;
	if (_p7.ctor === '[]') {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			element.tag,
			consNamespace(
				consClassName(
					consId(element.attributes))),
			consText(element.children));
	} else {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$keyedNode,
			element.tag,
			consNamespace(
				consClassName(
					consId(element.attributes))),
			consTextKeyed(
				A3(
					_elm_lang$core$List$map2,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					element.keys,
					element.children)));
	}
};
var _danielnarey$elm_semantic_dom$Dom_Element$withChildren = F2(
	function (childList, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				children: A2(_elm_lang$core$List$map, _danielnarey$elm_semantic_dom$Dom_Element$toNode, childList)
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$appendChild = F2(
	function (newChild, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				children: A2(
					_elm_lang$core$List$append,
					n.children,
					{
						ctor: '::',
						_0: _danielnarey$elm_semantic_dom$Dom_Element$toNode(newChild),
						_1: {ctor: '[]'}
					})
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$prependChild = F2(
	function (newChild, n) {
		return _elm_lang$core$Native_Utils.update(
			n,
			{
				children: {
					ctor: '::',
					_0: _danielnarey$elm_semantic_dom$Dom_Element$toNode(newChild),
					_1: n.children
				}
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Element$wrapNodes = F2(
	function (htmlTag, childNodes) {
		return {
			tag: htmlTag,
			id: '',
			attributes: {ctor: '[]'},
			classes: {ctor: '[]'},
			children: childNodes,
			text: '',
			namespace: '',
			keys: {ctor: '[]'}
		};
	});
var _danielnarey$elm_semantic_dom$Dom_Element$container = F2(
	function (htmlTag, childList) {
		return {
			tag: htmlTag,
			id: '',
			attributes: {ctor: '[]'},
			classes: {ctor: '[]'},
			children: A2(_elm_lang$core$List$map, _danielnarey$elm_semantic_dom$Dom_Element$toNode, childList),
			text: '',
			namespace: '',
			keys: {ctor: '[]'}
		};
	});
var _danielnarey$elm_semantic_dom$Dom_Element$textWrapper = F2(
	function (htmlTag, someText) {
		return {
			tag: htmlTag,
			id: '',
			attributes: {ctor: '[]'},
			classes: {ctor: '[]'},
			children: {ctor: '[]'},
			text: someText,
			namespace: '',
			keys: {ctor: '[]'}
		};
	});
var _danielnarey$elm_semantic_dom$Dom_Element$leaf = function (htmlTag) {
	return {
		tag: htmlTag,
		id: '',
		attributes: {ctor: '[]'},
		classes: {ctor: '[]'},
		children: {ctor: '[]'},
		text: '',
		namespace: '',
		keys: {ctor: '[]'}
	};
};

var _danielnarey$elm_modular_ui$Ui$render = _danielnarey$elm_semantic_dom$Dom_Element$toNode;
var _danielnarey$elm_modular_ui$Ui$setId = _danielnarey$elm_semantic_dom$Dom_Element$setId;
var _danielnarey$elm_modular_ui$Ui$container = _danielnarey$elm_semantic_dom$Dom_Element$container;
var _danielnarey$elm_modular_ui$Ui$textWrapper = _danielnarey$elm_semantic_dom$Dom_Element$textWrapper;
var _danielnarey$elm_modular_ui$Ui$leaf = _danielnarey$elm_semantic_dom$Dom_Element$leaf;

var _danielnarey$elm_modular_ui$Ui_Modifier$conditional = function (_p0) {
	var _p1 = _p0;
	var _p2 = _p1._1;
	if (_p2 === true) {
		return _danielnarey$elm_semantic_dom$Dom_Element$addClass(_p1._0);
	} else {
		return _elm_lang$core$Basics$identity;
	}
};
var _danielnarey$elm_modular_ui$Ui_Modifier$addList = F2(
	function (modifiers, element) {
		return _elm_lang$core$Native_Utils.update(
			element,
			{
				classes: A2(_elm_lang$core$Basics_ops['++'], element.classes, modifiers)
			});
	});
var _danielnarey$elm_modular_ui$Ui_Modifier$add = _danielnarey$elm_semantic_dom$Dom_Element$addClass;

var _danielnarey$elm_semantic_dom$Dom_Property$float = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$property,
			key,
			_elm_lang$core$Json_Encode$float(value));
	});
var _danielnarey$elm_semantic_dom$Dom_Property$int = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$property,
			key,
			_elm_lang$core$Json_Encode$int(value));
	});
var _danielnarey$elm_semantic_dom$Dom_Property$string = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$property,
			key,
			_elm_lang$core$Json_Encode$string(value));
	});
var _danielnarey$elm_semantic_dom$Dom_Property$bool = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$property,
			key,
			_elm_lang$core$Json_Encode$bool(value));
	});

var _danielnarey$elm_semantic_dom$Dom_Attribute$namespaced = F3(
	function (_p0, value, key) {
		var _p1 = _p0;
		return A3(
			_elm_lang$virtual_dom$VirtualDom$attributeNS,
			_p1._1,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p1._0,
				A2(_elm_lang$core$Basics_ops['++'], ':', key)),
			value);
	});
var _danielnarey$elm_semantic_dom$Dom_Attribute$float = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$attribute,
			key,
			_elm_lang$core$Basics$toString(value));
	});
var _danielnarey$elm_semantic_dom$Dom_Attribute$int = F2(
	function (value, key) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$attribute,
			key,
			_elm_lang$core$Basics$toString(value));
	});
var _danielnarey$elm_semantic_dom$Dom_Attribute$string = F2(
	function (value, key) {
		return A2(_elm_lang$virtual_dom$VirtualDom$attribute, key, value);
	});

var _danielnarey$elm_modular_ui$Ui_Attribute$ariaHidden = _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
	A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, 'true', 'aria-hidden'));
var _danielnarey$elm_modular_ui$Ui_Attribute$ariaDescribedBy = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, value, 'aria-describedby'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$ariaLabelledBy = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, value, 'aria-labelledby'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$ariaLabel = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, value, 'aria-label'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$role = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Attribute$string, value, 'role'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$hidden = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Property$bool, value, 'hidden'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$title = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Property$string, value, 'title'));
};
var _danielnarey$elm_modular_ui$Ui_Attribute$addList = F2(
	function (tupleList, element) {
		var toAttribute = function (_p0) {
			var _p1 = _p0;
			return _p1._1(_p1._0);
		};
		var newAttributes = A2(_elm_lang$core$List$map, toAttribute, tupleList);
		return _elm_lang$core$Native_Utils.update(
			element,
			{
				attributes: A2(_elm_lang$core$Basics_ops['++'], element.attributes, newAttributes)
			});
	});
var _danielnarey$elm_modular_ui$Ui_Attribute$add = function (_p2) {
	var _p3 = _p2;
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_p3._1(_p3._0));
};

var _danielnarey$elm_color_math$Component_Form$horizontal = function (args) {
	var withLabelModifiers = function () {
		var _p0 = args.size;
		if (_p0 === '') {
			return _danielnarey$elm_modular_ui$Ui_Modifier$add('field-body');
		} else {
			return _danielnarey$elm_modular_ui$Ui_Modifier$addList(
				{
					ctor: '::',
					_0: 'field-body',
					_1: {
						ctor: '::',
						_0: args.size,
						_1: {ctor: '[]'}
					}
				});
		}
	}();
	var idString = A2(
		_elm_lang$core$String$append,
		'label-fields-',
		_elm_lang$core$Basics$toString(args.id));
	var fieldLabel = withLabelModifiers(
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui$setId,
					idString,
					A2(
						_danielnarey$elm_modular_ui$Ui_Modifier$add,
						'label',
						A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'p', args.label))),
				_1: {ctor: '[]'}
			}));
	var fieldBody = A2(
		_danielnarey$elm_modular_ui$Ui_Attribute$ariaLabelledBy,
		idString,
		A2(
			_danielnarey$elm_modular_ui$Ui_Attribute$role,
			'group',
			A2(
				_danielnarey$elm_modular_ui$Ui_Modifier$add,
				'field-body',
				A2(_danielnarey$elm_modular_ui$Ui$container, 'div', args.fields))));
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$addList,
		{
			ctor: '::',
			_0: 'field',
			_1: {
				ctor: '::',
				_0: 'is-horizontal',
				_1: {ctor: '[]'}
			}
		},
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			{
				ctor: '::',
				_0: fieldLabel,
				_1: {
					ctor: '::',
					_0: fieldBody,
					_1: {ctor: '[]'}
				}
			}));
};
var _danielnarey$elm_color_math$Component_Form$fieldAddons = function (args) {
	var idString = A2(
		_elm_lang$core$String$append,
		'label-controls-',
		_elm_lang$core$Basics$toString(args.id));
	var prependLabel = function () {
		var _p1 = args.label;
		if (_p1 === '') {
			return _elm_lang$core$Basics$identity;
		} else {
			return function (_p2) {
				return A2(
					_danielnarey$elm_modular_ui$Ui_Attribute$ariaLabelledBy,
					idString,
					_danielnarey$elm_semantic_dom$Dom_Element$prependChild(
						A2(
							_danielnarey$elm_modular_ui$Ui$setId,
							idString,
							A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'p', args.label)))(_p2));
			};
		}
	}();
	return A2(
		_danielnarey$elm_modular_ui$Ui_Attribute$role,
		'group',
		A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$addList,
			{
				ctor: '::',
				_0: 'field',
				_1: {
					ctor: '::',
					_0: 'has-addons',
					_1: {ctor: '[]'}
				}
			},
			prependLabel(
				A2(_danielnarey$elm_modular_ui$Ui$container, 'div', args.controls))));
};
var _danielnarey$elm_color_math$Component_Form$fieldGroup = function (args) {
	var idString = A2(
		_elm_lang$core$String$append,
		'label-controls-',
		_elm_lang$core$Basics$toString(args.id));
	var prependLabel = function () {
		var _p3 = args.label;
		if (_p3 === '') {
			return _elm_lang$core$Basics$identity;
		} else {
			return function (_p4) {
				return A2(
					_danielnarey$elm_modular_ui$Ui_Attribute$ariaLabelledBy,
					idString,
					_danielnarey$elm_semantic_dom$Dom_Element$prependChild(
						A2(
							_danielnarey$elm_modular_ui$Ui$setId,
							idString,
							A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'p', args.label)))(_p4));
			};
		}
	}();
	return A2(
		_danielnarey$elm_modular_ui$Ui_Attribute$role,
		'group',
		A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$addList,
			{
				ctor: '::',
				_0: 'field',
				_1: {
					ctor: '::',
					_0: 'is-grouped',
					_1: {ctor: '[]'}
				}
			},
			prependLabel(
				A2(_danielnarey$elm_modular_ui$Ui$container, 'div', args.controls))));
};
var _danielnarey$elm_color_math$Component_Form$fieldSet = function (args) {
	var idString = A2(
		_elm_lang$core$String$append,
		'label-controls-',
		_elm_lang$core$Basics$toString(args.id));
	var prependLabel = function () {
		var _p5 = args.label;
		if (_p5 === '') {
			return _elm_lang$core$Basics$identity;
		} else {
			return function (_p6) {
				return A2(
					_danielnarey$elm_modular_ui$Ui_Attribute$ariaLabelledBy,
					idString,
					_danielnarey$elm_semantic_dom$Dom_Element$prependChild(
						A2(
							_danielnarey$elm_modular_ui$Ui$setId,
							idString,
							A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'p', args.label)))(_p6));
			};
		}
	}();
	return A2(
		_danielnarey$elm_modular_ui$Ui_Attribute$role,
		'group',
		A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$add,
			'field',
			prependLabel(
				A2(_danielnarey$elm_modular_ui$Ui$container, 'div', args.controls))));
};
var _danielnarey$elm_color_math$Component_Form$withHelpText = function (textElement) {
	return _danielnarey$elm_semantic_dom$Dom_Element$appendChild(
		A2(_danielnarey$elm_modular_ui$Ui_Modifier$add, 'help', textElement));
};
var _danielnarey$elm_color_math$Component_Form$withIconRight = function (iconElement) {
	return function (_p7) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$appendChild,
			A2(_danielnarey$elm_modular_ui$Ui_Modifier$add, 'is-right', iconElement),
			A2(_danielnarey$elm_modular_ui$Ui_Modifier$add, 'has-icons-right', _p7));
	};
};
var _danielnarey$elm_color_math$Component_Form$withIconLeft = function (iconElement) {
	return function (_p8) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$appendChild,
			A2(_danielnarey$elm_modular_ui$Ui_Modifier$add, 'is-left', iconElement),
			A2(_danielnarey$elm_modular_ui$Ui_Modifier$add, 'has-icons-left', _p8));
	};
};
var _danielnarey$elm_color_math$Component_Form$field = function (args) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'field',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			{
				ctor: '::',
				_0: args.label,
				_1: {
					ctor: '::',
					_0: args.control,
					_1: {ctor: '[]'}
				}
			}));
};
var _danielnarey$elm_color_math$Component_Form$control = function (_p9) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'control',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			_elm_lang$core$List$singleton(_p9)));
};

var _danielnarey$elm_color_math$Component_Grid$singleColumn = function (_p0) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'columns',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			_elm_lang$core$List$singleton(
				A2(_danielnarey$elm_modular_ui$Ui_Modifier$add, 'column', _p0))));
};
var _danielnarey$elm_color_math$Component_Grid$column = _danielnarey$elm_modular_ui$Ui_Modifier$add('column');
var _danielnarey$elm_color_math$Component_Grid$columns = function (_p1) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'columns',
		A2(_danielnarey$elm_modular_ui$Ui$container, 'div', _p1));
};

var _danielnarey$elm_modular_ui$Ui_Heading$subtitle = function (htmlTag) {
	return function (_p0) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
			{
				ctor: '::',
				_0: 'subtitle',
				_1: {ctor: '[]'}
			},
			A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, htmlTag, _p0));
	};
};
var _danielnarey$elm_modular_ui$Ui_Heading$title = function (htmlTag) {
	return function (_p1) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
			{
				ctor: '::',
				_0: 'title',
				_1: {ctor: '[]'}
			},
			A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, htmlTag, _p1));
	};
};

var _danielnarey$elm_color_math$Component_Layout$footer = function (content) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'footer',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Modifier$add,
					'container',
					A2(
						_danielnarey$elm_modular_ui$Ui$container,
						'div',
						{
							ctor: '::',
							_0: content,
							_1: {ctor: '[]'}
						})),
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_color_math$Component_Layout$level = function (args) {
	var withRight = function () {
		var _p0 = args.right;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Basics$identity;
		} else {
			return A2(
				_elm_lang$core$Basics$flip,
				_elm_lang$core$List$append,
				_elm_lang$core$List$singleton(
					A2(
						_danielnarey$elm_modular_ui$Ui_Modifier$add,
						'level-left',
						A2(
							_danielnarey$elm_modular_ui$Ui$container,
							'div',
							A2(
								_elm_lang$core$List$map,
								function (_p1) {
									return A2(
										_danielnarey$elm_modular_ui$Ui_Modifier$add,
										'level-item',
										A2(
											_danielnarey$elm_modular_ui$Ui$container,
											'div',
											_elm_lang$core$List$singleton(_p1)));
								},
								args.right)))));
		}
	}();
	var withCentered = A2(
		_elm_lang$core$Basics$flip,
		_elm_lang$core$List$append,
		A2(
			_elm_lang$core$List$map,
			function (_p2) {
				return A2(
					_danielnarey$elm_modular_ui$Ui_Modifier$add,
					'level-item',
					A2(
						_danielnarey$elm_modular_ui$Ui$container,
						'div',
						_elm_lang$core$List$singleton(_p2)));
			},
			args.centered));
	var withLeft = function () {
		var _p3 = args.left;
		if (_p3.ctor === '[]') {
			return _elm_lang$core$Basics$identity;
		} else {
			return F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				})(
				A2(
					_danielnarey$elm_modular_ui$Ui_Modifier$add,
					'level-left',
					A2(
						_danielnarey$elm_modular_ui$Ui$container,
						'div',
						A2(
							_elm_lang$core$List$map,
							function (_p4) {
								return A2(
									_danielnarey$elm_modular_ui$Ui_Modifier$add,
									'level-item',
									A2(
										_danielnarey$elm_modular_ui$Ui$container,
										'div',
										_elm_lang$core$List$singleton(_p4)));
							},
							args.left))));
		}
	}();
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'level',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'nav',
			withRight(
				withCentered(
					withLeft(
						{ctor: '[]'})))));
};
var _danielnarey$elm_color_math$Component_Layout$hero = function (args) {
	var withFoot = function () {
		var _p5 = args.foot;
		if (_p5.ctor === 'Just') {
			return A2(
				_elm_lang$core$Basics$flip,
				_elm_lang$core$List$append,
				{
					ctor: '::',
					_0: _p5._0,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Basics$identity;
		}
	}();
	var withHead = function () {
		var _p6 = args.head;
		if (_p6.ctor === 'Just') {
			return F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				})(_p6._0);
		} else {
			return _elm_lang$core$Basics$identity;
		}
	}();
	var body = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'hero-body',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			{
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Modifier$add,
					'container',
					A2(
						_danielnarey$elm_modular_ui$Ui$container,
						'div',
						{
							ctor: '::',
							_0: A2(_danielnarey$elm_modular_ui$Ui_Heading$title, 'h1', args.title),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_modular_ui$Ui_Heading$subtitle, 'h2', args.subtitle),
								_1: {ctor: '[]'}
							}
						})),
				_1: {ctor: '[]'}
			}));
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'hero',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'section',
			withFoot(
				withHead(
					{
						ctor: '::',
						_0: body,
						_1: {ctor: '[]'}
					}))));
};
var _danielnarey$elm_color_math$Component_Layout$container = function (_p7) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'container',
		A2(_danielnarey$elm_modular_ui$Ui$container, 'div', _p7));
};
var _danielnarey$elm_color_math$Component_Layout$section = function (_p8) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'section',
		A2(_danielnarey$elm_modular_ui$Ui$container, 'section', _p8));
};

var _danielnarey$elm_color_math$Component_Panel$insertBlocks = F3(
	function (startIndex, blockList, panelElement) {
		var nodeList = _elm_lang$core$List$concat(
			{
				ctor: '::',
				_0: A2(_elm_lang$core$List$take, startIndex, panelElement.children),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$List$map,
						_danielnarey$elm_semantic_dom$Dom_Element$toNode,
						A2(
							_elm_lang$core$List$map,
							_danielnarey$elm_semantic_dom$Dom_Element$addClass('panel-block'),
							blockList)),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$core$List$drop, startIndex, panelElement.children),
						_1: {ctor: '[]'}
					}
				}
			});
		return A2(_danielnarey$elm_semantic_dom$Dom_Element$withChildNodes, nodeList, panelElement);
	});
var _danielnarey$elm_color_math$Component_Panel$container = function (args) {
	var withTabs = function () {
		var _p0 = args.tabs;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Basics$identity;
		} else {
			return F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				})(
				A2(
					_danielnarey$elm_modular_ui$Ui_Modifier$add,
					'panel-tabs',
					A2(_danielnarey$elm_modular_ui$Ui$container, 'p', args.tabs)));
		}
	}();
	var withHeading = function () {
		var _p1 = args.heading;
		if (_p1 === '') {
			return _elm_lang$core$Basics$identity;
		} else {
			return F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				})(
				A2(
					_danielnarey$elm_modular_ui$Ui_Modifier$add,
					'panel-heading',
					A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'p', args.heading)));
		}
	}();
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'panel',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'nav',
			withHeading(
				withTabs(
					A2(
						_elm_lang$core$List$map,
						_danielnarey$elm_modular_ui$Ui_Modifier$add('panel-block'),
						args.blocks)))));
};

var _danielnarey$elm_color_math$Control$Html5 = function (a) {
	return {ctor: 'Html5', _0: a};
};
var _danielnarey$elm_color_math$Control$Hex8 = function (a) {
	return {ctor: 'Hex8', _0: a};
};
var _danielnarey$elm_color_math$Control$Hex6 = function (a) {
	return {ctor: 'Hex6', _0: a};
};
var _danielnarey$elm_color_math$Control$RgbAlpha = function (a) {
	return {ctor: 'RgbAlpha', _0: a};
};
var _danielnarey$elm_color_math$Control$Blue = function (a) {
	return {ctor: 'Blue', _0: a};
};
var _danielnarey$elm_color_math$Control$Green = function (a) {
	return {ctor: 'Green', _0: a};
};
var _danielnarey$elm_color_math$Control$Red = function (a) {
	return {ctor: 'Red', _0: a};
};
var _danielnarey$elm_color_math$Control$HslAlpha = function (a) {
	return {ctor: 'HslAlpha', _0: a};
};
var _danielnarey$elm_color_math$Control$Lightness = function (a) {
	return {ctor: 'Lightness', _0: a};
};
var _danielnarey$elm_color_math$Control$Saturation = function (a) {
	return {ctor: 'Saturation', _0: a};
};
var _danielnarey$elm_color_math$Control$Hue = function (a) {
	return {ctor: 'Hue', _0: a};
};
var _danielnarey$elm_color_math$Control$ScaleToAqua = function (a) {
	return {ctor: 'ScaleToAqua', _0: a};
};
var _danielnarey$elm_color_math$Control$ScaleToRed = function (a) {
	return {ctor: 'ScaleToRed', _0: a};
};
var _danielnarey$elm_color_math$Control$RotateHue = function (a) {
	return {ctor: 'RotateHue', _0: a};
};
var _danielnarey$elm_color_math$Control$MoreTransparent = function (a) {
	return {ctor: 'MoreTransparent', _0: a};
};
var _danielnarey$elm_color_math$Control$MoreOpaque = function (a) {
	return {ctor: 'MoreOpaque', _0: a};
};
var _danielnarey$elm_color_math$Control$Desaturate = function (a) {
	return {ctor: 'Desaturate', _0: a};
};
var _danielnarey$elm_color_math$Control$Saturate = function (a) {
	return {ctor: 'Saturate', _0: a};
};
var _danielnarey$elm_color_math$Control$Darken = function (a) {
	return {ctor: 'Darken', _0: a};
};
var _danielnarey$elm_color_math$Control$Lighten = function (a) {
	return {ctor: 'Lighten', _0: a};
};

var _danielnarey$elm_color_math$Tab$Adjustments = {ctor: 'Adjustments'};
var _danielnarey$elm_color_math$Tab$BaseColor = {ctor: 'BaseColor'};
var _danielnarey$elm_color_math$Tab$toggle = function (current) {
	var _p0 = current;
	if (_p0.ctor === 'BaseColor') {
		return _danielnarey$elm_color_math$Tab$Adjustments;
	} else {
		return _danielnarey$elm_color_math$Tab$BaseColor;
	}
};

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$window$Native_Window = function()
{

var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
	callback(_elm_lang$core$Native_Scheduler.succeed({
		width: window.innerWidth,
		height: window.innerHeight
	}));
});

return {
	size: size
};

}();
//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$window$Window_ops = _elm_lang$window$Window_ops || {};
_elm_lang$window$Window_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$window$Window$onSelfMsg = F3(
	function (router, dimensions, state) {
		var _p1 = state;
		if (_p1.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (_p2) {
				var _p3 = _p2;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p3._0(dimensions));
			};
			return A2(
				_elm_lang$window$Window_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p1._0.subs)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$window$Window$init = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
var _elm_lang$window$Window$size = _elm_lang$window$Native_Window.size;
var _elm_lang$window$Window$width = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.width;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$height = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.height;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$onEffects = F3(
	function (router, newSubs, oldState) {
		var _p4 = {ctor: '_Tuple2', _0: oldState, _1: newSubs};
		if (_p4._0.ctor === 'Nothing') {
			if (_p4._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					function (pid) {
						return _elm_lang$core$Task$succeed(
							_elm_lang$core$Maybe$Just(
								{subs: newSubs, pid: pid}));
					},
					_elm_lang$core$Process$spawn(
						A3(
							_elm_lang$dom$Dom_LowLevel$onWindow,
							'resize',
							_elm_lang$core$Json_Decode$succeed(
								{ctor: '_Tuple0'}),
							function (_p5) {
								return A2(
									_elm_lang$core$Task$andThen,
									_elm_lang$core$Platform$sendToSelf(router),
									_elm_lang$window$Window$size);
							})));
			}
		} else {
			if (_p4._1.ctor === '[]') {
				return A2(
					_elm_lang$window$Window_ops['&>'],
					_elm_lang$core$Process$kill(_p4._0._0.pid),
					_elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing));
			} else {
				return _elm_lang$core$Task$succeed(
					_elm_lang$core$Maybe$Just(
						{subs: newSubs, pid: _p4._0._0.pid}));
			}
		}
	});
var _elm_lang$window$Window$subscription = _elm_lang$core$Native_Platform.leaf('Window');
var _elm_lang$window$Window$Size = F2(
	function (a, b) {
		return {width: a, height: b};
	});
var _elm_lang$window$Window$MySub = function (a) {
	return {ctor: 'MySub', _0: a};
};
var _elm_lang$window$Window$resizes = function (tagger) {
	return _elm_lang$window$Window$subscription(
		_elm_lang$window$Window$MySub(tagger));
};
var _elm_lang$window$Window$subMap = F2(
	function (func, _p6) {
		var _p7 = _p6;
		return _elm_lang$window$Window$MySub(
			function (_p8) {
				return func(
					_p7._0(_p8));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Window'] = {pkg: 'elm-lang/window', init: _elm_lang$window$Window$init, onEffects: _elm_lang$window$Window$onEffects, onSelfMsg: _elm_lang$window$Window$onSelfMsg, tag: 'sub', subMap: _elm_lang$window$Window$subMap};

var _danielnarey$elm_color_math$Model$resetAdjustments = function (output) {
	return _elm_lang$core$Native_Utils.update(
		output,
		{
			adjustments: {rotateHue: 0, scaleToRed: 0, scaleToAqua: 0, saturate: 0, desaturate: 0, lighten: 0, darken: 0, moreOpaque: 0, moreTransparent: 0}
		});
};
var _danielnarey$elm_color_math$Model$recalculateResult = function (current) {
	var batchProcess = function (adjustments) {
		return function (_p0) {
			return A2(
				_danielnarey$elm_color_math$ColorMath_Scaling$moreOpaque,
				adjustments.moreOpaque,
				A2(
					_danielnarey$elm_color_math$ColorMath_Scaling$moreTransparent,
					adjustments.moreTransparent,
					A2(
						_danielnarey$elm_color_math$ColorMath_Scaling$darken,
						adjustments.darken,
						A2(
							_danielnarey$elm_color_math$ColorMath_Scaling$lighten,
							adjustments.lighten,
							A2(
								_danielnarey$elm_color_math$ColorMath_Scaling$desaturate,
								adjustments.desaturate,
								A2(
									_danielnarey$elm_color_math$ColorMath_Scaling$saturate,
									adjustments.saturate,
									A2(
										_danielnarey$elm_color_math$ColorMath_Scaling$scaleToAqua,
										adjustments.scaleToAqua,
										A2(
											_danielnarey$elm_color_math$ColorMath_Scaling$scaleToRed,
											adjustments.scaleToRed,
											A2(_danielnarey$elm_color_math$ColorMath_Scaling$rotateHue, adjustments.rotateHue, _p0)))))))));
		};
	};
	return _elm_lang$core$Native_Utils.update(
		current,
		{
			resultColor: A2(batchProcess, current.adjustments, current.baseColor)
		});
};
var _danielnarey$elm_color_math$Model$setAdjustment = F2(
	function (input, current) {
		var tryUpdate = function (adjustments) {
			var _p1 = input;
			switch (_p1.ctor) {
				case 'Lighten':
					return _elm_lang$core$Native_Utils.update(
						adjustments,
						{lighten: _p1._0});
				case 'Darken':
					return _elm_lang$core$Native_Utils.update(
						adjustments,
						{darken: _p1._0});
				case 'Saturate':
					return _elm_lang$core$Native_Utils.update(
						adjustments,
						{saturate: _p1._0});
				case 'Desaturate':
					return _elm_lang$core$Native_Utils.update(
						adjustments,
						{desaturate: _p1._0});
				case 'MoreOpaque':
					return _elm_lang$core$Native_Utils.update(
						adjustments,
						{moreOpaque: _p1._0});
				case 'MoreTransparent':
					return _elm_lang$core$Native_Utils.update(
						adjustments,
						{moreTransparent: _p1._0});
				case 'RotateHue':
					return _elm_lang$core$Native_Utils.update(
						adjustments,
						{rotateHue: _p1._0});
				case 'ScaleToRed':
					return _elm_lang$core$Native_Utils.update(
						adjustments,
						{scaleToRed: _p1._0});
				default:
					return _elm_lang$core$Native_Utils.update(
						adjustments,
						{scaleToAqua: _p1._0});
			}
		};
		return _elm_lang$core$Native_Utils.update(
			current,
			{
				adjustments: tryUpdate(current.adjustments)
			});
	});
var _danielnarey$elm_color_math$Model$updateBaseColor = F2(
	function (input, current) {
		var tryUpdate = F2(
			function (transform, maybeValue) {
				var _p2 = maybeValue;
				if (_p2.ctor === 'Just') {
					return _elm_lang$core$Native_Utils.update(
						current,
						{
							baseColor: A2(transform, _p2._0, current.baseColor)
						});
				} else {
					return current;
				}
			});
		var _p3 = input;
		switch (_p3.ctor) {
			case 'Hue':
				return A2(tryUpdate, _danielnarey$elm_color_math$ColorMath_Hsla$setHue, _p3._0);
			case 'Saturation':
				return A2(tryUpdate, _danielnarey$elm_color_math$ColorMath_Hsla$setSaturation, _p3._0);
			case 'Lightness':
				return A2(tryUpdate, _danielnarey$elm_color_math$ColorMath_Hsla$setLightness, _p3._0);
			case 'HslAlpha':
				return A2(tryUpdate, _danielnarey$elm_color_math$ColorMath_Hsla$setAlpha, _p3._0);
			case 'Red':
				return A2(tryUpdate, _danielnarey$elm_color_math$ColorMath_Rgba$setRed, _p3._0);
			case 'Green':
				return A2(tryUpdate, _danielnarey$elm_color_math$ColorMath_Rgba$setGreen, _p3._0);
			case 'Blue':
				return A2(tryUpdate, _danielnarey$elm_color_math$ColorMath_Rgba$setBlue, _p3._0);
			case 'RgbAlpha':
				return A2(tryUpdate, _danielnarey$elm_color_math$ColorMath_Rgba$setAlpha, _p3._0);
			case 'Hex6':
				return A2(tryUpdate, _elm_lang$core$Basics$always, _p3._0);
			case 'Hex8':
				return A2(tryUpdate, _elm_lang$core$Basics$always, _p3._0);
			default:
				return A2(
					tryUpdate,
					_elm_lang$core$Basics$always,
					_elm_lang$core$Result$toMaybe(
						_danielnarey$elm_color_math$ColorMath_Hex$toColor(_p3._0)));
		}
	});
var _danielnarey$elm_color_math$Model$toggleVisibleTab = function (current) {
	return _elm_lang$core$Native_Utils.update(
		current,
		{
			visibleTab: _danielnarey$elm_color_math$Tab$toggle(current.visibleTab)
		});
};
var _danielnarey$elm_color_math$Model$toggleIsScrolled = function (current) {
	return _elm_lang$core$Native_Utils.update(
		current,
		{isScrolled: !current.isScrolled});
};
var _danielnarey$elm_color_math$Model$updateWindowSize = F2(
	function (size, current) {
		return _elm_lang$core$Native_Utils.update(
			current,
			{windowSize: size});
	});
var _danielnarey$elm_color_math$Model$initial = function (color) {
	return {
		windowSize: {width: 320, height: 568},
		isScrolled: false,
		visibleTab: _danielnarey$elm_color_math$Tab$BaseColor,
		baseColor: color,
		resultColor: color,
		adjustments: {rotateHue: 0, scaleToRed: 0, scaleToAqua: 0, saturate: 0, desaturate: 0, lighten: 0, darken: 0, moreOpaque: 0, moreTransparent: 0}
	};
};
var _danielnarey$elm_color_math$Model$Output = F6(
	function (a, b, c, d, e, f) {
		return {windowSize: a, isScrolled: b, visibleTab: c, baseColor: d, resultColor: e, adjustments: f};
	});
var _danielnarey$elm_color_math$Model$Adjustments = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {lighten: a, darken: b, saturate: c, desaturate: d, moreOpaque: e, moreTransparent: f, rotateHue: g, scaleToRed: h, scaleToAqua: i};
	});

var _danielnarey$elm_color_math$Msg$ResetAdjustments = {ctor: 'ResetAdjustments'};
var _danielnarey$elm_color_math$Msg$RecalculateResult = {ctor: 'RecalculateResult'};
var _danielnarey$elm_color_math$Msg$SetAdjustment = function (a) {
	return {ctor: 'SetAdjustment', _0: a};
};
var _danielnarey$elm_color_math$Msg$UpdateBaseColor = function (a) {
	return {ctor: 'UpdateBaseColor', _0: a};
};
var _danielnarey$elm_color_math$Msg$ToggleVisibleTab = {ctor: 'ToggleVisibleTab'};
var _danielnarey$elm_color_math$Msg$UpdateIsScrolled = function (a) {
	return {ctor: 'UpdateIsScrolled', _0: a};
};
var _danielnarey$elm_color_math$Msg$GetScrollPosition = {ctor: 'GetScrollPosition'};
var _danielnarey$elm_color_math$Msg$UpdateWindowSize = function (a) {
	return {ctor: 'UpdateWindowSize', _0: a};
};

var _elm_lang$dom$Dom$blur = _elm_lang$dom$Native_Dom.blur;
var _elm_lang$dom$Dom$focus = _elm_lang$dom$Native_Dom.focus;
var _elm_lang$dom$Dom$NotFound = function (a) {
	return {ctor: 'NotFound', _0: a};
};

var _danielnarey$elm_semantic_effects$Effect$onWindow = _elm_lang$dom$Dom_LowLevel$onWindow;
var _danielnarey$elm_semantic_effects$Effect$onDocument = _elm_lang$dom$Dom_LowLevel$onDocument;

var _elm_lang$dom$Dom_Size$width = _elm_lang$dom$Native_Dom.width;
var _elm_lang$dom$Dom_Size$height = _elm_lang$dom$Native_Dom.height;
var _elm_lang$dom$Dom_Size$VisibleContentWithBordersAndMargins = {ctor: 'VisibleContentWithBordersAndMargins'};
var _elm_lang$dom$Dom_Size$VisibleContentWithBorders = {ctor: 'VisibleContentWithBorders'};
var _elm_lang$dom$Dom_Size$VisibleContent = {ctor: 'VisibleContent'};
var _elm_lang$dom$Dom_Size$Content = {ctor: 'Content'};

var _elm_lang$dom$Dom_Scroll$toX = _elm_lang$dom$Native_Dom.setScrollLeft;
var _elm_lang$dom$Dom_Scroll$x = _elm_lang$dom$Native_Dom.getScrollLeft;
var _elm_lang$dom$Dom_Scroll$toRight = _elm_lang$dom$Native_Dom.toRight;
var _elm_lang$dom$Dom_Scroll$toLeft = function (id) {
	return A2(_elm_lang$dom$Dom_Scroll$toX, id, 0);
};
var _elm_lang$dom$Dom_Scroll$toY = _elm_lang$dom$Native_Dom.setScrollTop;
var _elm_lang$dom$Dom_Scroll$y = _elm_lang$dom$Native_Dom.getScrollTop;
var _elm_lang$dom$Dom_Scroll$toBottom = _elm_lang$dom$Native_Dom.toBottom;
var _elm_lang$dom$Dom_Scroll$toTop = function (id) {
	return A2(_elm_lang$dom$Dom_Scroll$toY, id, 0);
};

var _danielnarey$elm_semantic_effects$Effect_Scroll$getX = _elm_lang$dom$Dom_Scroll$x;
var _danielnarey$elm_semantic_effects$Effect_Scroll$getY = _elm_lang$dom$Dom_Scroll$y;
var _danielnarey$elm_semantic_effects$Effect_Scroll$toX = _elm_lang$dom$Dom_Scroll$toX;
var _danielnarey$elm_semantic_effects$Effect_Scroll$toRight = _elm_lang$dom$Dom_Scroll$toRight;
var _danielnarey$elm_semantic_effects$Effect_Scroll$toLeft = _elm_lang$dom$Dom_Scroll$toLeft;
var _danielnarey$elm_semantic_effects$Effect_Scroll$toY = _elm_lang$dom$Dom_Scroll$toY;
var _danielnarey$elm_semantic_effects$Effect_Scroll$toBottom = _elm_lang$dom$Dom_Scroll$toBottom;
var _danielnarey$elm_semantic_effects$Effect_Scroll$toTop = _elm_lang$dom$Dom_Scroll$toTop;

var _danielnarey$elm_color_math$Update$update = F2(
	function (msg, current) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'UpdateWindowSize':
				return {
					ctor: '_Tuple2',
					_0: A2(_danielnarey$elm_color_math$Model$updateWindowSize, _p0._0, current),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'GetScrollPosition':
				return {
					ctor: '_Tuple2',
					_0: current,
					_1: A2(
						_elm_lang$core$Task$attempt,
						function (_p1) {
							return _danielnarey$elm_color_math$Msg$UpdateIsScrolled(
								A2(
									F2(
										function (x, y) {
											return _elm_lang$core$Native_Utils.cmp(x, y) < 1;
										}),
									213,
									A2(_elm_lang$core$Result$withDefault, 0, _p1)));
						},
						_danielnarey$elm_semantic_effects$Effect_Scroll$getY('main-container'))
				};
			case 'UpdateIsScrolled':
				return {
					ctor: '_Tuple2',
					_0: function () {
						var _p2 = _elm_lang$core$Native_Utils.eq(current.isScrolled, _p0._0);
						if (_p2 === true) {
							return current;
						} else {
							return _danielnarey$elm_color_math$Model$toggleIsScrolled(current);
						}
					}(),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ToggleVisibleTab':
				return {
					ctor: '_Tuple2',
					_0: _danielnarey$elm_color_math$Model$toggleVisibleTab(current),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'UpdateBaseColor':
				return {
					ctor: '_Tuple2',
					_0: A2(_danielnarey$elm_color_math$Model$updateBaseColor, _p0._0, current),
					_1: A2(
						_elm_lang$core$Task$perform,
						_elm_lang$core$Basics$identity,
						_elm_lang$core$Task$succeed(_danielnarey$elm_color_math$Msg$RecalculateResult))
				};
			case 'SetAdjustment':
				return {
					ctor: '_Tuple2',
					_0: A2(_danielnarey$elm_color_math$Model$setAdjustment, _p0._0, current),
					_1: A2(
						_elm_lang$core$Task$perform,
						_elm_lang$core$Basics$identity,
						_elm_lang$core$Task$succeed(_danielnarey$elm_color_math$Msg$RecalculateResult))
				};
			case 'RecalculateResult':
				return {
					ctor: '_Tuple2',
					_0: _danielnarey$elm_color_math$Model$recalculateResult(current),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				return {
					ctor: '_Tuple2',
					_0: _danielnarey$elm_color_math$Model$resetAdjustments(current),
					_1: A2(
						_elm_lang$core$Task$perform,
						_elm_lang$core$Basics$identity,
						_elm_lang$core$Task$succeed(_danielnarey$elm_color_math$Msg$RecalculateResult))
				};
		}
	});

var _danielnarey$elm_semantic_dom$Dom_Style$toProperty = _elm_lang$virtual_dom$VirtualDom$style;

var _danielnarey$elm_modular_ui$Ui_Style$toRgbaString = function (colorValue) {
	var roundTo2 = function (number) {
		return A3(
			_elm_lang$core$Basics$flip,
			F2(
				function (x, y) {
					return x / y;
				}),
			100,
			_elm_lang$core$Basics$toFloat(
				_elm_lang$core$Basics$round(number * 100)));
	};
	var rgba = _elm_lang$core$Color$toRgb(colorValue);
	return _elm_lang$core$String$concat(
		{
			ctor: '::',
			_0: 'rgba(',
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(rgba.red),
				_1: {
					ctor: '::',
					_0: ',',
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(rgba.green),
						_1: {
							ctor: '::',
							_0: ',',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(rgba.blue),
								_1: {
									ctor: '::',
									_0: ',',
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$toString(
											roundTo2(rgba.alpha)),
										_1: {
											ctor: '::',
											_0: ')',
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _danielnarey$elm_modular_ui$Ui_Style$boxShadow = function (args) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'box-shadow',
					_1: function () {
						var _p0 = args.inset;
						if (_p0 === true) {
							return A2(_elm_lang$core$Basics$flip, _elm_lang$core$String$append, ' inset');
						} else {
							return _elm_lang$core$Basics$identity;
						}
					}()(
						_elm_lang$core$String$concat(
							{
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(
									_elm_lang$core$Tuple$first(args.offset)),
								_1: {
									ctor: '::',
									_0: 'px ',
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$toString(
											_elm_lang$core$Tuple$second(args.offset)),
										_1: {
											ctor: '::',
											_0: 'px ',
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Basics$toString(args.blur),
												_1: {
													ctor: '::',
													_0: 'px ',
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Basics$toString(args.spread),
														_1: {
															ctor: '::',
															_0: 'px ',
															_1: {
																ctor: '::',
																_0: _danielnarey$elm_modular_ui$Ui_Style$toRgbaString(args.color),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								}
							}))
				},
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Style$borderRadius = function (value) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'border-radius',
					_1: A3(
						_elm_lang$core$Basics$flip,
						_elm_lang$core$String$append,
						'px',
						_elm_lang$core$Basics$toString(value))
				},
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Style$border = function (_p1) {
	var _p2 = _p1;
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'border',
					_1: _elm_lang$core$String$concat(
						{
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(_p2._0),
							_1: {
								ctor: '::',
								_0: 'px ',
								_1: {
									ctor: '::',
									_0: _p2._1,
									_1: {
										ctor: '::',
										_0: ' ',
										_1: {
											ctor: '::',
											_0: _danielnarey$elm_modular_ui$Ui_Style$toRgbaString(_p2._2),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						})
				},
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Style$backgroundColor = function (colorValue) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'background-color',
					_1: _danielnarey$elm_modular_ui$Ui_Style$toRgbaString(colorValue)
				},
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Style$color = function (colorValue) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'color',
					_1: _danielnarey$elm_modular_ui$Ui_Style$toRgbaString(colorValue)
				},
				_1: {ctor: '[]'}
			}));
};
var _danielnarey$elm_modular_ui$Ui_Style$addList = function (keyValueList) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(keyValueList));
};
var _danielnarey$elm_modular_ui$Ui_Style$add = function (keyValue) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		_danielnarey$elm_semantic_dom$Dom_Style$toProperty(
			{
				ctor: '::',
				_0: keyValue,
				_1: {ctor: '[]'}
			}));
};

var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'] = F2(
	function (a, f) {
		return f(
			{
				ctor: '::',
				_0: a,
				_1: {ctor: '[]'}
			});
	});
var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'] = F2(
	function (list, f) {
		return A2(_elm_lang$core$List$map, f, list);
	});
var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|::'] = F2(
	function (a, b) {
		return {
			ctor: '::',
			_0: a,
			_1: {
				ctor: '::',
				_0: b,
				_1: {ctor: '[]'}
			}
		};
	});
var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|++'] = F2(
	function (a, list) {
		return {ctor: '::', _0: a, _1: list};
	});
var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['|::'] = F2(
	function (list, a) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			list,
			{
				ctor: '::',
				_0: a,
				_1: {ctor: '[]'}
			});
	});
var _danielnarey$elm_toolkit$Toolkit_List_Operators_ops = _danielnarey$elm_toolkit$Toolkit_List_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['|++'] = F2(
	function (a, b) {
		return A2(_elm_lang$core$Basics_ops['++'], a, b);
	});

var _danielnarey$elm_color_math$View_Sticky$twoColumns = function (output) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-fixed-top',
		A2(
			_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
			A2(
				_danielnarey$elm_modular_ui$Ui_Modifier$add,
				'is-centered',
				_danielnarey$elm_color_math$Component_Grid$columns(
					A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
						A2(
							_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
							A2(
								_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
								{
									ctor: '::',
									_0: A2(
										_danielnarey$elm_modular_ui$Ui_Style$backgroundColor,
										output.baseColor,
										A2(
											_danielnarey$elm_modular_ui$Ui_Style$add,
											{ctor: '_Tuple2', _0: 'height', _1: '48px'},
											_danielnarey$elm_modular_ui$Ui$leaf('div'))),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_modular_ui$Ui_Style$backgroundColor,
											output.resultColor,
											A2(
												_danielnarey$elm_modular_ui$Ui_Style$add,
												{ctor: '_Tuple2', _0: 'height', _1: '48px'},
												_danielnarey$elm_modular_ui$Ui$leaf('div'))),
										_1: {ctor: '[]'}
									}
								},
								_danielnarey$elm_color_math$Component_Grid$column),
							_danielnarey$elm_modular_ui$Ui_Modifier$addList(
								{
									ctor: '::',
									_0: 'is-half',
									_1: {
										ctor: '::',
										_0: 'panel-block',
										_1: {ctor: '[]'}
									}
								})),
						_danielnarey$elm_modular_ui$Ui_Style$add(
							{ctor: '_Tuple2', _0: 'margin', _1: '0 0.25rem'})))),
			_danielnarey$elm_modular_ui$Ui$container('div')));
};
var _danielnarey$elm_color_math$View_Sticky$oneColumn = function (output) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$addList,
		{
			ctor: '::',
			_0: 'is-mobile',
			_1: {
				ctor: '::',
				_0: 'is-marginless',
				_1: {
					ctor: '::',
					_0: 'is-centered',
					_1: {
						ctor: '::',
						_0: 'is-fixed-top',
						_1: {ctor: '[]'}
					}
				}
			}
		},
		_danielnarey$elm_color_math$Component_Grid$singleColumn(
			A2(
				_danielnarey$elm_modular_ui$Ui_Modifier$addList,
				{
					ctor: '::',
					_0: 'is-mobile',
					_1: {
						ctor: '::',
						_0: 'is-paddingless',
						_1: {
							ctor: '::',
							_0: 'panel-block',
							_1: {ctor: '[]'}
						}
					}
				},
				_danielnarey$elm_color_math$Component_Grid$columns(
					A2(
						_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
						A2(
							_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
							{
								ctor: '::',
								_0: A2(
									_danielnarey$elm_modular_ui$Ui_Style$backgroundColor,
									output.baseColor,
									A2(
										_danielnarey$elm_modular_ui$Ui_Style$add,
										{ctor: '_Tuple2', _0: 'height', _1: '48px'},
										_danielnarey$elm_modular_ui$Ui$leaf('div'))),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_modular_ui$Ui_Style$backgroundColor,
										output.resultColor,
										A2(
											_danielnarey$elm_modular_ui$Ui_Style$add,
											{ctor: '_Tuple2', _0: 'height', _1: '48px'},
											_danielnarey$elm_modular_ui$Ui$leaf('div'))),
									_1: {ctor: '[]'}
								}
							},
							_danielnarey$elm_color_math$Component_Grid$column),
						_danielnarey$elm_modular_ui$Ui_Modifier$add('is-half'))))));
};

var _danielnarey$elm_color_math$View_Header$component = A2(
	_danielnarey$elm_modular_ui$Ui_Modifier$add,
	'is-dark',
	_danielnarey$elm_color_math$Component_Layout$hero(
		{title: 'Color Math', subtitle: 'Relative Color Scaling for Elm', head: _elm_lang$core$Maybe$Nothing, foot: _elm_lang$core$Maybe$Nothing}));

var _danielnarey$elm_semantic_dom$Dom_Node$container = _elm_lang$virtual_dom$VirtualDom$node;
var _danielnarey$elm_semantic_dom$Dom_Node$textWrapper = F3(
	function (htmlTag, attributeList, someText) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			htmlTag,
			attributeList,
			{
				ctor: '::',
				_0: _elm_lang$virtual_dom$VirtualDom$text(someText),
				_1: {ctor: '[]'}
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Node$leaf = F2(
	function (htmlTag, attributeList) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			htmlTag,
			attributeList,
			{ctor: '[]'});
	});

var _danielnarey$elm_semantic_dom$Dom_Event$customWithOptions = F3(
	function (decoder, options, string) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, string, options, decoder);
	});
var _danielnarey$elm_semantic_dom$Dom_Event$custom = F2(
	function (decoder, string) {
		return A2(_elm_lang$virtual_dom$VirtualDom$on, string, decoder);
	});
var _danielnarey$elm_semantic_dom$Dom_Event$submit = F2(
	function (captureKey, idList) {
		var mapDictInsert = F2(
			function (dict, _p0) {
				var _p1 = _p0;
				return A4(_elm_lang$core$Json_Decode$map3, _elm_lang$core$Dict$insert, _p1._0, _p1._1, dict);
			});
		var inputDecoder = function (idString) {
			return A2(
				_elm_lang$core$Json_Decode$at,
				{
					ctor: '::',
					_0: 'target',
					_1: {
						ctor: '::',
						_0: 'elements',
						_1: {
							ctor: '::',
							_0: idString,
							_1: {
								ctor: '::',
								_0: 'value',
								_1: {ctor: '[]'}
							}
						}
					}
				},
				_elm_lang$core$Json_Decode$string);
		};
		var buildDecoder = F2(
			function (idList, dictDecoder) {
				buildDecoder:
				while (true) {
					var _p2 = idList;
					if (_p2.ctor === '[]') {
						return dictDecoder;
					} else {
						var _p3 = _p2._0;
						var _v2 = _p2._1,
							_v3 = A2(
							mapDictInsert,
							dictDecoder,
							{
								ctor: '_Tuple2',
								_0: _elm_lang$core$Json_Decode$succeed(_p3),
								_1: inputDecoder(_p3)
							});
						idList = _v2;
						dictDecoder = _v3;
						continue buildDecoder;
					}
				}
			});
		return A3(
			_elm_lang$virtual_dom$VirtualDom$onWithOptions,
			'submit',
			{stopPropagation: false, preventDefault: true},
			A2(
				_elm_lang$core$Json_Decode$map,
				captureKey,
				A2(
					buildDecoder,
					idList,
					_elm_lang$core$Json_Decode$succeed(_elm_lang$core$Dict$empty))));
	});
var _danielnarey$elm_semantic_dom$Dom_Event$capture = F2(
	function (captureKey, event) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$on,
			event,
			A2(
				_elm_lang$core$Json_Decode$map,
				captureKey,
				A2(
					_elm_lang$core$Json_Decode$at,
					{
						ctor: '::',
						_0: 'target',
						_1: {
							ctor: '::',
							_0: 'value',
							_1: {ctor: '[]'}
						}
					},
					_elm_lang$core$Json_Decode$string)));
	});
var _danielnarey$elm_semantic_dom$Dom_Event$action = F2(
	function (msg, event) {
		return A2(
			_elm_lang$virtual_dom$VirtualDom$on,
			event,
			_elm_lang$core$Json_Decode$succeed(msg));
	});
var _danielnarey$elm_semantic_dom$Dom_Event$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _danielnarey$elm_semantic_dom$Dom_Text$node = _elm_lang$virtual_dom$VirtualDom$text;

var _danielnarey$elm_modular_ui$Ui_Input$colorPicker = F2(
	function (token, args) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'color-picker',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'color', 'type'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.value, 'value'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$capture, token, 'input'),
								_1: {ctor: '[]'}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$floatSlider = F2(
	function (token, args) {
		var failOnErr = function (result) {
			var _p0 = result;
			if (_p0.ctor === 'Ok') {
				return _elm_lang$core$Json_Decode$succeed(
					token(_p0._0));
			} else {
				return _elm_lang$core$Json_Decode$fail('not a Float');
			}
		};
		var captureString = A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'target',
				_1: {
					ctor: '::',
					_0: 'value',
					_1: {ctor: '[]'}
				}
			},
			_elm_lang$core$Json_Decode$string);
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'slider',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'range', 'type'),
						_1: {
							ctor: '::',
							_0: A2(
								_danielnarey$elm_semantic_dom$Dom_Property$string,
								_elm_lang$core$Basics$toString(args.value),
								'value'),
							_1: {
								ctor: '::',
								_0: A2(
									_danielnarey$elm_semantic_dom$Dom_Property$float,
									function (_p1) {
										var _p2 = _p1;
										return _p2._0;
									}(args.minMaxStep),
									'min'),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_semantic_dom$Dom_Property$float,
										function (_p3) {
											var _p4 = _p3;
											return _p4._1;
										}(args.minMaxStep),
										'max'),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_semantic_dom$Dom_Property$float,
											function (_p5) {
												var _p6 = _p5;
												return _p6._2;
											}(args.minMaxStep),
											'step'),
										_1: {
											ctor: '::',
											_0: A2(
												_danielnarey$elm_semantic_dom$Dom_Event$custom,
												A2(
													_elm_lang$core$Json_Decode$andThen,
													function (_p7) {
														return failOnErr(
															_elm_lang$core$String$toFloat(_p7));
													},
													captureString),
												'input'),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$intSlider = F2(
	function (token, args) {
		var failOnErr = function (result) {
			var _p8 = result;
			if (_p8.ctor === 'Ok') {
				return _elm_lang$core$Json_Decode$succeed(
					token(_p8._0));
			} else {
				return _elm_lang$core$Json_Decode$fail('not an Int');
			}
		};
		var captureString = A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'target',
				_1: {
					ctor: '::',
					_0: 'value',
					_1: {ctor: '[]'}
				}
			},
			_elm_lang$core$Json_Decode$string);
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'slider',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'range', 'type'),
						_1: {
							ctor: '::',
							_0: A2(
								_danielnarey$elm_semantic_dom$Dom_Property$string,
								_elm_lang$core$Basics$toString(args.value),
								'value'),
							_1: {
								ctor: '::',
								_0: A2(
									_danielnarey$elm_semantic_dom$Dom_Property$int,
									function (_p9) {
										var _p10 = _p9;
										return _p10._0;
									}(args.minMaxStep),
									'min'),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_semantic_dom$Dom_Property$int,
										function (_p11) {
											var _p12 = _p11;
											return _p12._1;
										}(args.minMaxStep),
										'max'),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_semantic_dom$Dom_Property$int,
											function (_p13) {
												var _p14 = _p13;
												return _p14._2;
											}(args.minMaxStep),
											'step'),
										_1: {
											ctor: '::',
											_0: A2(
												_danielnarey$elm_semantic_dom$Dom_Event$custom,
												A2(
													_elm_lang$core$Json_Decode$andThen,
													function (_p15) {
														return failOnErr(
															_elm_lang$core$String$toInt(_p15));
													},
													captureString),
												'input'),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$custom = F2(
	function (token, args) {
		var nothingOnErr = function (_p16) {
			return _elm_lang$core$Json_Decode$succeed(
				token(
					_elm_lang$core$Result$toMaybe(_p16)));
		};
		var failOnErr = function (result) {
			var _p17 = result;
			if (_p17.ctor === 'Ok') {
				return _elm_lang$core$Json_Decode$succeed(
					token(
						_elm_lang$core$Maybe$Just(_p17._0)));
			} else {
				return _elm_lang$core$Json_Decode$fail('not vaild input');
			}
		};
		var captureString = A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'target',
				_1: {
					ctor: '::',
					_0: 'value',
					_1: {ctor: '[]'}
				}
			},
			_elm_lang$core$Json_Decode$string);
		var displayedValue = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$andThen,
				function (_p18) {
					return _elm_lang$core$Result$toMaybe(
						args.decoder(_p18));
				},
				args.value));
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'input',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'text', 'type'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, displayedValue, 'value'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.placeholder, 'placeholder'),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_semantic_dom$Dom_Event$custom,
										A2(
											_elm_lang$core$Json_Decode$andThen,
											function (_p19) {
												return failOnErr(
													args.encoder(_p19));
											},
											captureString),
										'input'),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_semantic_dom$Dom_Event$custom,
											A2(
												_elm_lang$core$Json_Decode$andThen,
												function (_p20) {
													return nothingOnErr(
														args.encoder(_p20));
												},
												captureString),
											'change'),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$float = F2(
	function (token, args) {
		var nothingOnErr = function (_p21) {
			return _elm_lang$core$Json_Decode$succeed(
				token(
					_elm_lang$core$Result$toMaybe(_p21)));
		};
		var failOnIncompleteOrInvalid = function (input) {
			var _p22 = _elm_lang$core$Native_Utils.eq(input, '0.');
			if (_p22 === true) {
				return _elm_lang$core$Json_Decode$fail('ends with decimal point');
			} else {
				return function (result) {
					var _p23 = result;
					if (_p23.ctor === 'Ok') {
						return _elm_lang$core$Json_Decode$succeed(
							token(
								_elm_lang$core$Maybe$Just(_p23._0)));
					} else {
						return _elm_lang$core$Json_Decode$fail('not a Float');
					}
				}(
					_elm_lang$core$String$toFloat(input));
			}
		};
		var captureString = A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'target',
				_1: {
					ctor: '::',
					_0: 'value',
					_1: {ctor: '[]'}
				}
			},
			_elm_lang$core$Json_Decode$string);
		var displayedValue = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(_elm_lang$core$Maybe$map, _elm_lang$core$Basics$toString, args.value));
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'input',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'number', 'type'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, displayedValue, 'value'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.placeholder, 'placeholder'),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_semantic_dom$Dom_Property$float,
										function (_p24) {
											var _p25 = _p24;
											return _p25._0;
										}(args.minMaxStep),
										'min'),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_semantic_dom$Dom_Property$float,
											function (_p26) {
												var _p27 = _p26;
												return _p27._1;
											}(args.minMaxStep),
											'max'),
										_1: {
											ctor: '::',
											_0: A2(
												_danielnarey$elm_semantic_dom$Dom_Property$float,
												function (_p28) {
													var _p29 = _p28;
													return _p29._2;
												}(args.minMaxStep),
												'step'),
											_1: {
												ctor: '::',
												_0: A2(
													_danielnarey$elm_semantic_dom$Dom_Event$custom,
													A2(_elm_lang$core$Json_Decode$andThen, failOnIncompleteOrInvalid, captureString),
													'input'),
												_1: {
													ctor: '::',
													_0: A2(
														_danielnarey$elm_semantic_dom$Dom_Event$custom,
														A2(
															_elm_lang$core$Json_Decode$andThen,
															function (_p30) {
																return nothingOnErr(
																	_elm_lang$core$String$toFloat(_p30));
															},
															captureString),
														'change'),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$int = F2(
	function (token, args) {
		var nothingOnErr = function (_p31) {
			return _elm_lang$core$Json_Decode$succeed(
				token(
					_elm_lang$core$Result$toMaybe(_p31)));
		};
		var failOnErr = function (result) {
			var _p32 = result;
			if (_p32.ctor === 'Ok') {
				return _elm_lang$core$Json_Decode$succeed(
					token(
						_elm_lang$core$Maybe$Just(_p32._0)));
			} else {
				return _elm_lang$core$Json_Decode$fail('not an Int');
			}
		};
		var captureString = A2(
			_elm_lang$core$Json_Decode$at,
			{
				ctor: '::',
				_0: 'target',
				_1: {
					ctor: '::',
					_0: 'value',
					_1: {ctor: '[]'}
				}
			},
			_elm_lang$core$Json_Decode$string);
		var displayedValue = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(_elm_lang$core$Maybe$map, _elm_lang$core$Basics$toString, args.value));
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'input',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'number', 'type'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, displayedValue, 'value'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.placeholder, 'placeholder'),
								_1: {
									ctor: '::',
									_0: A2(
										_danielnarey$elm_semantic_dom$Dom_Property$int,
										function (_p33) {
											var _p34 = _p33;
											return _p34._0;
										}(args.minMaxStep),
										'min'),
									_1: {
										ctor: '::',
										_0: A2(
											_danielnarey$elm_semantic_dom$Dom_Property$int,
											function (_p35) {
												var _p36 = _p35;
												return _p36._1;
											}(args.minMaxStep),
											'max'),
										_1: {
											ctor: '::',
											_0: A2(
												_danielnarey$elm_semantic_dom$Dom_Property$int,
												function (_p37) {
													var _p38 = _p37;
													return _p38._2;
												}(args.minMaxStep),
												'step'),
											_1: {
												ctor: '::',
												_0: A2(
													_danielnarey$elm_semantic_dom$Dom_Event$custom,
													A2(
														_elm_lang$core$Json_Decode$andThen,
														function (_p39) {
															return failOnErr(
																_elm_lang$core$String$toInt(_p39));
														},
														captureString),
													'input'),
												_1: {
													ctor: '::',
													_0: A2(
														_danielnarey$elm_semantic_dom$Dom_Event$custom,
														A2(
															_elm_lang$core$Json_Decode$andThen,
															function (_p40) {
																return nothingOnErr(
																	_elm_lang$core$String$toInt(_p40));
															},
															captureString),
														'change'),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$labelFor = function (id) {
	return function (_p41) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
			{
				ctor: '::',
				_0: 'label',
				_1: {ctor: '[]'}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_semantic_dom$Dom_Attribute$string,
						A2(
							_elm_lang$core$String$append,
							'input-',
							_elm_lang$core$Basics$toString(id)),
						'for'),
					_1: {ctor: '[]'}
				},
				A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'label', _p41)));
	};
};
var _danielnarey$elm_modular_ui$Ui_Input$textArea = F2(
	function (token, args) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'textarea',
					_1: {ctor: '[]'}
				},
				function () {
					var _p42 = args.rows;
					if (_p42.ctor === 'Just') {
						return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
							A2(_danielnarey$elm_semantic_dom$Dom_Property$int, _p42._0, 'rows'));
					} else {
						return _elm_lang$core$Basics$identity;
					}
				}()(
					A2(
						_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
						{
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.placeholder, 'placeholder'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.value, 'value'),
								_1: {
									ctor: '::',
									_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$capture, token, 'input'),
									_1: {ctor: '[]'}
								}
							}
						},
						_danielnarey$elm_semantic_dom$Dom_Element$leaf('textarea')))));
	});
var _danielnarey$elm_modular_ui$Ui_Input$string = F2(
	function (token, args) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$setId,
			A2(
				_elm_lang$core$String$append,
				'input-',
				_elm_lang$core$Basics$toString(args.id)),
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'input',
					_1: {ctor: '[]'}
				},
				A2(
					_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
					{
						ctor: '::',
						_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, 'text', 'type'),
						_1: {
							ctor: '::',
							_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.placeholder, 'placeholder'),
							_1: {
								ctor: '::',
								_0: A2(_danielnarey$elm_semantic_dom$Dom_Property$string, args.value, 'value'),
								_1: {
									ctor: '::',
									_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$capture, token, 'input'),
									_1: {ctor: '[]'}
								}
							}
						}
					},
					_danielnarey$elm_semantic_dom$Dom_Element$leaf('input'))));
	});

var _danielnarey$elm_toolkit$Toolkit_Float$roundTo = F2(
	function (place, number) {
		var multiplier = _elm_lang$core$Basics$toFloat(
			A2(
				F2(
					function (x, y) {
						return Math.pow(x, y);
					}),
				10,
				place));
		return A3(
			_elm_lang$core$Basics$flip,
			F2(
				function (x, y) {
					return x / y;
				}),
			multiplier,
			_elm_lang$core$Basics$toFloat(
				_elm_lang$core$Basics$round(
					A2(
						F2(
							function (x, y) {
								return x * y;
							}),
						multiplier,
						number))));
	});

var _danielnarey$elm_color_math$View_Panels_BaseColor$html5 = function (output) {
	return A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: A2(
				_danielnarey$elm_modular_ui$Ui_Modifier$add,
				'input',
				A2(
					_danielnarey$elm_modular_ui$Ui_Input$colorPicker,
					function (_p0) {
						return _danielnarey$elm_color_math$Msg$UpdateBaseColor(
							_danielnarey$elm_color_math$Control$Html5(_p0));
					},
					{
						id: 11,
						value: A2(
							_elm_lang$core$String$append,
							'#',
							_danielnarey$elm_color_math$ColorMath_Hex$fromColor(output.baseColor))
					})),
			_1: {ctor: '[]'}
		});
};
var _danielnarey$elm_color_math$View_Panels_BaseColor$wrapColumns = function (_p1) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$addList,
		{
			ctor: '::',
			_0: 'is-mobile',
			_1: {
				ctor: '::',
				_0: 'is-centered',
				_1: {
					ctor: '::',
					_0: 'is-gapless',
					_1: {
						ctor: '::',
						_0: 'is-marginless',
						_1: {ctor: '[]'}
					}
				}
			}
		},
		_danielnarey$elm_color_math$Component_Grid$columns(
			A2(_elm_lang$core$List$map, _danielnarey$elm_color_math$Component_Grid$column, _p1)));
};
var _danielnarey$elm_color_math$View_Panels_BaseColor$addLabelModifiers = _danielnarey$elm_modular_ui$Ui_Modifier$addList(
	{
		ctor: '::',
		_0: 'is-block',
		_1: {
			ctor: '::',
			_0: 'has-text-centered',
			_1: {
				ctor: '::',
				_0: 'has-text-weight-semibold',
				_1: {
					ctor: '::',
					_0: 'is-uppercase',
					_1: {
						ctor: '::',
						_0: 'is-size-7',
						_1: {ctor: '[]'}
					}
				}
			}
		}
	});
var _danielnarey$elm_color_math$View_Panels_BaseColor$hsla = function (output) {
	var alpha = A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: _danielnarey$elm_color_math$View_Panels_BaseColor$addLabelModifiers(
				A2(_danielnarey$elm_modular_ui$Ui_Input$labelFor, 4, 'Alpha')),
			_1: {
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Input$float,
					function (_p2) {
						return _danielnarey$elm_color_math$Msg$UpdateBaseColor(
							_danielnarey$elm_color_math$Control$HslAlpha(_p2));
					},
					{
						id: 4,
						placeholder: '',
						value: _elm_lang$core$Maybe$Just(
							A2(
								_danielnarey$elm_toolkit$Toolkit_Float$roundTo,
								2,
								_danielnarey$elm_color_math$ColorMath_Hsla$getAlpha(output.baseColor))),
						minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
					}),
				_1: {ctor: '[]'}
			}
		});
	var lightness = A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: _danielnarey$elm_color_math$View_Panels_BaseColor$addLabelModifiers(
				A2(_danielnarey$elm_modular_ui$Ui_Input$labelFor, 3, 'Lightness')),
			_1: {
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Input$float,
					function (_p3) {
						return _danielnarey$elm_color_math$Msg$UpdateBaseColor(
							_danielnarey$elm_color_math$Control$Lightness(_p3));
					},
					{
						id: 3,
						placeholder: '',
						value: _elm_lang$core$Maybe$Just(
							A2(
								_danielnarey$elm_toolkit$Toolkit_Float$roundTo,
								2,
								_danielnarey$elm_color_math$ColorMath_Hsla$getLightness(output.baseColor))),
						minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
					}),
				_1: {ctor: '[]'}
			}
		});
	var saturation = A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: _danielnarey$elm_color_math$View_Panels_BaseColor$addLabelModifiers(
				A2(_danielnarey$elm_modular_ui$Ui_Input$labelFor, 2, 'Saturation')),
			_1: {
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Input$float,
					function (_p4) {
						return _danielnarey$elm_color_math$Msg$UpdateBaseColor(
							_danielnarey$elm_color_math$Control$Saturation(_p4));
					},
					{
						id: 2,
						placeholder: '',
						value: _elm_lang$core$Maybe$Just(
							A2(
								_danielnarey$elm_toolkit$Toolkit_Float$roundTo,
								2,
								_danielnarey$elm_color_math$ColorMath_Hsla$getSaturation(output.baseColor))),
						minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
					}),
				_1: {ctor: '[]'}
			}
		});
	var hue = A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: _danielnarey$elm_color_math$View_Panels_BaseColor$addLabelModifiers(
				A2(_danielnarey$elm_modular_ui$Ui_Input$labelFor, 1, 'Hue')),
			_1: {
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Input$float,
					function (_p5) {
						return _danielnarey$elm_color_math$Msg$UpdateBaseColor(
							_danielnarey$elm_color_math$Control$Hue(_p5));
					},
					{
						id: 1,
						placeholder: '',
						value: _elm_lang$core$Maybe$Just(
							A2(
								_danielnarey$elm_toolkit$Toolkit_Float$roundTo,
								0,
								_danielnarey$elm_color_math$ColorMath_Hsla$getHue(output.baseColor))),
						minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 360, _2: 1}
					}),
				_1: {ctor: '[]'}
			}
		});
	return _danielnarey$elm_color_math$View_Panels_BaseColor$wrapColumns(
		{
			ctor: '::',
			_0: hue,
			_1: {
				ctor: '::',
				_0: saturation,
				_1: {
					ctor: '::',
					_0: lightness,
					_1: {
						ctor: '::',
						_0: alpha,
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _danielnarey$elm_color_math$View_Panels_BaseColor$rgba = function (output) {
	var alpha = A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: _danielnarey$elm_color_math$View_Panels_BaseColor$addLabelModifiers(
				A2(_danielnarey$elm_modular_ui$Ui_Input$labelFor, 8, 'Alpha')),
			_1: {
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Input$float,
					function (_p6) {
						return _danielnarey$elm_color_math$Msg$UpdateBaseColor(
							_danielnarey$elm_color_math$Control$RgbAlpha(_p6));
					},
					{
						id: 8,
						placeholder: '',
						value: _elm_lang$core$Maybe$Just(
							A2(
								_danielnarey$elm_toolkit$Toolkit_Float$roundTo,
								2,
								_danielnarey$elm_color_math$ColorMath_Rgba$getAlpha(output.baseColor))),
						minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
					}),
				_1: {ctor: '[]'}
			}
		});
	var blue = A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: _danielnarey$elm_color_math$View_Panels_BaseColor$addLabelModifiers(
				A2(_danielnarey$elm_modular_ui$Ui_Input$labelFor, 7, 'Blue')),
			_1: {
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Input$int,
					function (_p7) {
						return _danielnarey$elm_color_math$Msg$UpdateBaseColor(
							_danielnarey$elm_color_math$Control$Blue(_p7));
					},
					{
						id: 7,
						placeholder: '',
						value: _elm_lang$core$Maybe$Just(
							_danielnarey$elm_color_math$ColorMath_Rgba$getBlue(output.baseColor)),
						minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 255, _2: 1}
					}),
				_1: {ctor: '[]'}
			}
		});
	var green = A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: _danielnarey$elm_color_math$View_Panels_BaseColor$addLabelModifiers(
				A2(_danielnarey$elm_modular_ui$Ui_Input$labelFor, 6, 'Green')),
			_1: {
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Input$int,
					function (_p8) {
						return _danielnarey$elm_color_math$Msg$UpdateBaseColor(
							_danielnarey$elm_color_math$Control$Green(_p8));
					},
					{
						id: 6,
						placeholder: '',
						value: _elm_lang$core$Maybe$Just(
							_danielnarey$elm_color_math$ColorMath_Rgba$getGreen(output.baseColor)),
						minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 255, _2: 1}
					}),
				_1: {ctor: '[]'}
			}
		});
	var red = A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: _danielnarey$elm_color_math$View_Panels_BaseColor$addLabelModifiers(
				A2(_danielnarey$elm_modular_ui$Ui_Input$labelFor, 5, 'Red')),
			_1: {
				ctor: '::',
				_0: A2(
					_danielnarey$elm_modular_ui$Ui_Input$int,
					function (_p9) {
						return _danielnarey$elm_color_math$Msg$UpdateBaseColor(
							_danielnarey$elm_color_math$Control$Red(_p9));
					},
					{
						id: 5,
						placeholder: '',
						value: _elm_lang$core$Maybe$Just(
							_danielnarey$elm_color_math$ColorMath_Rgba$getRed(output.baseColor)),
						minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 255, _2: 1}
					}),
				_1: {ctor: '[]'}
			}
		});
	return _danielnarey$elm_color_math$View_Panels_BaseColor$wrapColumns(
		{
			ctor: '::',
			_0: red,
			_1: {
				ctor: '::',
				_0: green,
				_1: {
					ctor: '::',
					_0: blue,
					_1: {
						ctor: '::',
						_0: alpha,
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _danielnarey$elm_color_math$View_Panels_BaseColor$hex = function (output) {
	var allowedInputLength = F2(
		function (numChars, inputString) {
			var _p10 = A2(
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					}),
				numChars,
				_elm_lang$core$String$length(inputString));
			if (_p10 === true) {
				return _elm_lang$core$Result$Ok(inputString);
			} else {
				return _elm_lang$core$Result$Err(
					_elm_lang$core$String$concat(
						{
							ctor: '::',
							_0: 'not ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(numChars),
								_1: {
									ctor: '::',
									_0: ' chars',
									_1: {ctor: '[]'}
								}
							}
						}));
			}
		});
	var hex6 = A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: _danielnarey$elm_color_math$View_Panels_BaseColor$addLabelModifiers(
				A2(_danielnarey$elm_modular_ui$Ui_Input$labelFor, 9, 'Hex-6')),
			_1: {
				ctor: '::',
				_0: A2(
					_danielnarey$elm_color_math$Component_Form$withIconLeft,
					A2(
						_danielnarey$elm_modular_ui$Ui_Modifier$add,
						'icon',
						A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'span', '#')),
					_danielnarey$elm_color_math$Component_Form$control(
						A2(
							_danielnarey$elm_modular_ui$Ui_Input$custom,
							function (_p11) {
								return _danielnarey$elm_color_math$Msg$UpdateBaseColor(
									_danielnarey$elm_color_math$Control$Hex6(_p11));
							},
							{
								id: 9,
								placeholder: '',
								value: _elm_lang$core$Maybe$Just(output.baseColor),
								encoder: function (_p12) {
									return A2(
										_elm_lang$core$Result$andThen,
										_danielnarey$elm_color_math$ColorMath_Hex$toColor,
										A2(allowedInputLength, 6, _p12));
								},
								decoder: function (_p13) {
									return _elm_lang$core$Result$Ok(
										_danielnarey$elm_color_math$ColorMath_Hex$fromColor(_p13));
								}
							}))),
				_1: {ctor: '[]'}
			}
		});
	var hex8 = A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: _danielnarey$elm_color_math$View_Panels_BaseColor$addLabelModifiers(
				A2(_danielnarey$elm_modular_ui$Ui_Input$labelFor, 10, 'Hex-8')),
			_1: {
				ctor: '::',
				_0: A2(
					_danielnarey$elm_color_math$Component_Form$withIconLeft,
					A2(
						_danielnarey$elm_modular_ui$Ui_Modifier$add,
						'icon',
						A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'span', '#')),
					_danielnarey$elm_color_math$Component_Form$control(
						A2(
							_danielnarey$elm_modular_ui$Ui_Input$custom,
							function (_p14) {
								return _danielnarey$elm_color_math$Msg$UpdateBaseColor(
									_danielnarey$elm_color_math$Control$Hex8(_p14));
							},
							{
								id: 10,
								placeholder: '',
								value: _elm_lang$core$Maybe$Just(output.baseColor),
								encoder: function (_p15) {
									return A2(
										_elm_lang$core$Result$andThen,
										_danielnarey$elm_color_math$ColorMath_Hex8$toColor,
										A2(allowedInputLength, 8, _p15));
								},
								decoder: function (_p16) {
									return _elm_lang$core$Result$Ok(
										_danielnarey$elm_color_math$ColorMath_Hex8$fromColor(_p16));
								}
							}))),
				_1: {ctor: '[]'}
			}
		});
	return _danielnarey$elm_color_math$View_Panels_BaseColor$wrapColumns(
		{
			ctor: '::',
			_0: hex6,
			_1: {
				ctor: '::',
				_0: hex8,
				_1: {ctor: '[]'}
			}
		});
};

var _danielnarey$elm_modular_ui$Ui_Button$delete = function (msg) {
	return A2(
		_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
		{
			ctor: '::',
			_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'click'),
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
			{
				ctor: '::',
				_0: 'delete',
				_1: {ctor: '[]'}
			},
			_danielnarey$elm_semantic_dom$Dom_Element$leaf('button')));
};
var _danielnarey$elm_modular_ui$Ui_Button$navigation = F2(
	function (msg, label) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'click'),
				_1: {ctor: '[]'}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'button',
					_1: {ctor: '[]'}
				},
				A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'button', label)));
	});
var _danielnarey$elm_modular_ui$Ui_Button$action = F2(
	function (msg, label) {
		return A2(
			_danielnarey$elm_semantic_dom$Dom_Element$withAttributes,
			{
				ctor: '::',
				_0: A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'click'),
				_1: {ctor: '[]'}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Element$withClasses,
				{
					ctor: '::',
					_0: 'button',
					_1: {ctor: '[]'}
				},
				A2(_danielnarey$elm_semantic_dom$Dom_Element$textWrapper, 'button', label)));
	});

var _danielnarey$elm_color_math$View_Panels_Adjustments$reset = A2(
	_danielnarey$elm_modular_ui$Ui_Modifier$add,
	'panel-button',
	A2(
		_danielnarey$elm_modular_ui$Ui$container,
		'div',
		{
			ctor: '::',
			_0: A2(
				_danielnarey$elm_modular_ui$Ui_Modifier$add,
				'has-text-weight-semibold',
				A2(_danielnarey$elm_modular_ui$Ui_Button$action, _danielnarey$elm_color_math$Msg$ResetAdjustments, 'Reset Adjustments')),
			_1: {ctor: '[]'}
		}));
var _danielnarey$elm_color_math$View_Panels_Adjustments$singleColumnWrapper = function (_p0) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$addList,
		{
			ctor: '::',
			_0: 'is-gapless',
			_1: {
				ctor: '::',
				_0: 'is-marginless',
				_1: {ctor: '[]'}
			}
		},
		_danielnarey$elm_color_math$Component_Grid$columns(
			_elm_lang$core$List$singleton(
				_danielnarey$elm_color_math$Component_Grid$column(
					A2(_danielnarey$elm_modular_ui$Ui$container, 'div', _p0)))));
};
var _danielnarey$elm_color_math$View_Panels_Adjustments$controlWidget = function (_p1) {
	var _p2 = _p1;
	var _p3 = _p2._1;
	var controlValue = _danielnarey$elm_color_math$Component_Form$control(
		A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$addList,
			{
				ctor: '::',
				_0: 'button',
				_1: {
					ctor: '::',
					_0: 'has-text-weight-semibold',
					_1: {
						ctor: '::',
						_0: 'is-size-6',
						_1: {
							ctor: '::',
							_0: 'slider-value',
							_1: {ctor: '[]'}
						}
					}
				}
			},
			A2(
				_danielnarey$elm_modular_ui$Ui$textWrapper,
				'p',
				_elm_lang$core$Basics$toString(_p2._2))));
	var controlSlider = A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-expanded',
		_danielnarey$elm_color_math$Component_Form$control(_p3));
	var controlLabel = _danielnarey$elm_color_math$Component_Form$control(
		A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$addList,
			{
				ctor: '::',
				_0: 'button',
				_1: {
					ctor: '::',
					_0: 'has-text-weight-semibold',
					_1: {
						ctor: '::',
						_0: 'is-uppercase',
						_1: {
							ctor: '::',
							_0: 'is-size-7',
							_1: {
								ctor: '::',
								_0: 'slider-label',
								_1: {ctor: '[]'}
							}
						}
					}
				}
			},
			A2(
				_danielnarey$elm_modular_ui$Ui_Attribute$add,
				{
					ctor: '_Tuple2',
					_0: 'for',
					_1: _danielnarey$elm_semantic_dom$Dom_Attribute$string(_p3.id)
				},
				A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'label', _p2._0))));
	return _danielnarey$elm_color_math$Component_Form$fieldAddons(
		{
			id: -1,
			label: '',
			controls: {
				ctor: '::',
				_0: controlLabel,
				_1: {
					ctor: '::',
					_0: controlSlider,
					_1: {
						ctor: '::',
						_0: controlValue,
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _danielnarey$elm_color_math$View_Panels_Adjustments$hue = function (output) {
	var scaleToAqua = {
		ctor: '_Tuple3',
		_0: 'Scale to Aqua',
		_1: A2(
			_danielnarey$elm_modular_ui$Ui_Input$floatSlider,
			function (_p4) {
				return _danielnarey$elm_color_math$Msg$SetAdjustment(
					_danielnarey$elm_color_math$Control$ScaleToAqua(_p4));
			},
			{
				id: 14,
				value: output.adjustments.scaleToAqua,
				minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
			}),
		_2: output.adjustments.scaleToAqua
	};
	var scaleToRed = {
		ctor: '_Tuple3',
		_0: 'Scale to Red',
		_1: A2(
			_danielnarey$elm_modular_ui$Ui_Input$floatSlider,
			function (_p5) {
				return _danielnarey$elm_color_math$Msg$SetAdjustment(
					_danielnarey$elm_color_math$Control$ScaleToRed(_p5));
			},
			{
				id: 13,
				value: output.adjustments.scaleToRed,
				minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
			}),
		_2: output.adjustments.scaleToRed
	};
	var rotate = {
		ctor: '_Tuple3',
		_0: 'Rotate Hue',
		_1: A2(
			_danielnarey$elm_modular_ui$Ui_Input$floatSlider,
			function (_p6) {
				return _danielnarey$elm_color_math$Msg$SetAdjustment(
					_danielnarey$elm_color_math$Control$RotateHue(_p6));
			},
			{
				id: 12,
				value: output.adjustments.rotateHue,
				minMaxStep: {ctor: '_Tuple3', _0: -1, _1: 1, _2: 1.0e-2}
			}),
		_2: output.adjustments.rotateHue
	};
	return _danielnarey$elm_color_math$View_Panels_Adjustments$singleColumnWrapper(
		A2(
			_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
			{
				ctor: '::',
				_0: rotate,
				_1: {
					ctor: '::',
					_0: scaleToRed,
					_1: {
						ctor: '::',
						_0: scaleToAqua,
						_1: {ctor: '[]'}
					}
				}
			},
			_danielnarey$elm_color_math$View_Panels_Adjustments$controlWidget));
};
var _danielnarey$elm_color_math$View_Panels_Adjustments$saturation = function (output) {
	var desaturate = {
		ctor: '_Tuple3',
		_0: 'Desaturate',
		_1: A2(
			_danielnarey$elm_modular_ui$Ui_Input$floatSlider,
			function (_p7) {
				return _danielnarey$elm_color_math$Msg$SetAdjustment(
					_danielnarey$elm_color_math$Control$Desaturate(_p7));
			},
			{
				id: 16,
				value: output.adjustments.desaturate,
				minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
			}),
		_2: output.adjustments.desaturate
	};
	var saturate = {
		ctor: '_Tuple3',
		_0: 'Saturate',
		_1: A2(
			_danielnarey$elm_modular_ui$Ui_Input$floatSlider,
			function (_p8) {
				return _danielnarey$elm_color_math$Msg$SetAdjustment(
					_danielnarey$elm_color_math$Control$Saturate(_p8));
			},
			{
				id: 15,
				value: output.adjustments.saturate,
				minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
			}),
		_2: output.adjustments.saturate
	};
	return _danielnarey$elm_color_math$View_Panels_Adjustments$singleColumnWrapper(
		A2(
			_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
			{
				ctor: '::',
				_0: saturate,
				_1: {
					ctor: '::',
					_0: desaturate,
					_1: {ctor: '[]'}
				}
			},
			_danielnarey$elm_color_math$View_Panels_Adjustments$controlWidget));
};
var _danielnarey$elm_color_math$View_Panels_Adjustments$lightness = function (output) {
	var darken = {
		ctor: '_Tuple3',
		_0: 'Darken',
		_1: A2(
			_danielnarey$elm_modular_ui$Ui_Input$floatSlider,
			function (_p9) {
				return _danielnarey$elm_color_math$Msg$SetAdjustment(
					_danielnarey$elm_color_math$Control$Darken(_p9));
			},
			{
				id: 18,
				value: output.adjustments.darken,
				minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
			}),
		_2: output.adjustments.darken
	};
	var lighten = {
		ctor: '_Tuple3',
		_0: 'Lighten',
		_1: A2(
			_danielnarey$elm_modular_ui$Ui_Input$floatSlider,
			function (_p10) {
				return _danielnarey$elm_color_math$Msg$SetAdjustment(
					_danielnarey$elm_color_math$Control$Lighten(_p10));
			},
			{
				id: 17,
				value: output.adjustments.lighten,
				minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
			}),
		_2: output.adjustments.lighten
	};
	return _danielnarey$elm_color_math$View_Panels_Adjustments$singleColumnWrapper(
		A2(
			_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
			{
				ctor: '::',
				_0: lighten,
				_1: {
					ctor: '::',
					_0: darken,
					_1: {ctor: '[]'}
				}
			},
			_danielnarey$elm_color_math$View_Panels_Adjustments$controlWidget));
};
var _danielnarey$elm_color_math$View_Panels_Adjustments$alpha = function (output) {
	var moreOpaque = {
		ctor: '_Tuple3',
		_0: 'More Opaque',
		_1: A2(
			_danielnarey$elm_modular_ui$Ui_Input$floatSlider,
			function (_p11) {
				return _danielnarey$elm_color_math$Msg$SetAdjustment(
					_danielnarey$elm_color_math$Control$MoreOpaque(_p11));
			},
			{
				id: 20,
				value: output.adjustments.moreOpaque,
				minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
			}),
		_2: output.adjustments.moreOpaque
	};
	var moreTransparent = {
		ctor: '_Tuple3',
		_0: 'More Transparent',
		_1: A2(
			_danielnarey$elm_modular_ui$Ui_Input$floatSlider,
			function (_p12) {
				return _danielnarey$elm_color_math$Msg$SetAdjustment(
					_danielnarey$elm_color_math$Control$MoreTransparent(_p12));
			},
			{
				id: 19,
				value: output.adjustments.moreTransparent,
				minMaxStep: {ctor: '_Tuple3', _0: 0, _1: 1, _2: 1.0e-2}
			}),
		_2: output.adjustments.moreTransparent
	};
	return _danielnarey$elm_color_math$View_Panels_Adjustments$singleColumnWrapper(
		A2(
			_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
			{
				ctor: '::',
				_0: moreTransparent,
				_1: {
					ctor: '::',
					_0: moreOpaque,
					_1: {ctor: '[]'}
				}
			},
			_danielnarey$elm_color_math$View_Panels_Adjustments$controlWidget));
};

var _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops = _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['||>'] = F2(
	function (a, f) {
		return f(a);
	});
var _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops = _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['#'] = F2(
	function (f, b) {
		return A2(_elm_lang$core$Basics$flip, f, b);
	});
var _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops = _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['@@|>'] = F2(
	function (params, f) {
		return A2(_elm_lang$core$Basics$uncurry, f, params);
	});
var _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops = _danielnarey$elm_toolkit$Toolkit_Function_Operators_ops || {};
_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['|>.'] = F2(
	function (data, fList) {
		var _p0 = fList;
		if (_p0.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p0._0(data),
				_1: A2(_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['|>.'], data, _p0._1)
			};
		}
	});

var _danielnarey$elm_color_math$View_Panels_Output$resultHsla = function (output) {
	var numericOutput = function (_p0) {
		var _p1 = _p0;
		return A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$add,
			'has-text-centered',
			A2(
				_danielnarey$elm_modular_ui$Ui$container,
				'div',
				{
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$Ui_Style$add,
						{ctor: '_Tuple2', _0: 'margin', _1: '6px'},
						A2(
							_danielnarey$elm_modular_ui$Ui_Modifier$addList,
							{
								ctor: '::',
								_0: 'is-block',
								_1: {
									ctor: '::',
									_0: 'has-text-weight-semibold',
									_1: {
										ctor: '::',
										_0: 'is-uppercase',
										_1: {
											ctor: '::',
											_0: 'is-size-7',
											_1: {ctor: '[]'}
										}
									}
								}
							},
							A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'label', _p1._0))),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$Ui_Modifier$add,
							'is-size-5',
							A2(
								_danielnarey$elm_modular_ui$Ui$textWrapper,
								'p',
								_elm_lang$core$Basics$toString(_p1._1))),
						_1: {ctor: '[]'}
					}
				}));
	};
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$addList,
		{
			ctor: '::',
			_0: 'is-mobile',
			_1: {
				ctor: '::',
				_0: 'is-centered',
				_1: {
					ctor: '::',
					_0: 'is-gapless',
					_1: {
						ctor: '::',
						_0: 'is-marginless',
						_1: {ctor: '[]'}
					}
				}
			}
		},
		_danielnarey$elm_color_math$Component_Grid$columns(
			A2(
				_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
				A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'Hue',
							_1: A2(
								_danielnarey$elm_toolkit$Toolkit_Float$roundTo,
								0,
								_danielnarey$elm_color_math$ColorMath_Hsla$getHue(output.resultColor))
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'Saturation',
								_1: A2(
									_danielnarey$elm_toolkit$Toolkit_Float$roundTo,
									2,
									_danielnarey$elm_color_math$ColorMath_Hsla$getSaturation(output.resultColor))
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'Lightness',
									_1: A2(
										_danielnarey$elm_toolkit$Toolkit_Float$roundTo,
										2,
										_danielnarey$elm_color_math$ColorMath_Hsla$getLightness(output.resultColor))
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'Alpha',
										_1: A2(
											_danielnarey$elm_toolkit$Toolkit_Float$roundTo,
											2,
											_danielnarey$elm_color_math$ColorMath_Hsla$getAlpha(output.resultColor))
									},
									_1: {ctor: '[]'}
								}
							}
						}
					},
					numericOutput),
				_danielnarey$elm_color_math$Component_Grid$column)));
};
var _danielnarey$elm_color_math$View_Panels_Output$resultColor = function (output) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Style$backgroundColor,
		output.resultColor,
		A2(
			_danielnarey$elm_modular_ui$Ui_Style$add,
			{ctor: '_Tuple2', _0: 'height', _1: '48px'},
			_danielnarey$elm_modular_ui$Ui$leaf('div')));
};
var _danielnarey$elm_color_math$View_Panels_Output$baseColor = function (output) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Style$backgroundColor,
		output.baseColor,
		A2(
			_danielnarey$elm_modular_ui$Ui_Style$add,
			{ctor: '_Tuple2', _0: 'height', _1: '48px'},
			_danielnarey$elm_modular_ui$Ui$leaf('div')));
};
var _danielnarey$elm_color_math$View_Panels_Output$splitColor = function (output) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$addList,
		{
			ctor: '::',
			_0: 'is-mobile',
			_1: {
				ctor: '::',
				_0: 'is-paddingless',
				_1: {
					ctor: '::',
					_0: 'is-marginless',
					_1: {ctor: '[]'}
				}
			}
		},
		_danielnarey$elm_color_math$Component_Grid$columns(
			A2(
				_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
				A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
					A2(
						_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['|>.'],
						output,
						{
							ctor: '::',
							_0: _danielnarey$elm_color_math$View_Panels_Output$baseColor,
							_1: {
								ctor: '::',
								_0: _danielnarey$elm_color_math$View_Panels_Output$resultColor,
								_1: {ctor: '[]'}
							}
						}),
					_danielnarey$elm_color_math$Component_Grid$column),
				_danielnarey$elm_modular_ui$Ui_Modifier$add('is-half'))));
};

var _danielnarey$elm_modular_ui$Ui_Action$onKeyUp = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._0;
	var customDecoder = A2(
		_elm_lang$core$Json_Decode$andThen,
		function (pressed) {
			var _p2 = _elm_lang$core$Native_Utils.eq(pressed, _p3);
			if (_p2 === true) {
				return _elm_lang$core$Json_Decode$succeed(_p1._1);
			} else {
				return _elm_lang$core$Json_Decode$fail(
					A2(_elm_lang$core$Basics_ops['++'], 'not ', _p3));
			}
		},
		A2(_elm_lang$core$Json_Decode$field, 'key', _elm_lang$core$Json_Decode$string));
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$custom, customDecoder, 'keyup'));
};
var _danielnarey$elm_modular_ui$Ui_Action$onKeyPress = function (_p4) {
	var _p5 = _p4;
	var _p7 = _p5._0;
	var customDecoder = A2(
		_elm_lang$core$Json_Decode$andThen,
		function (pressed) {
			var _p6 = _elm_lang$core$Native_Utils.eq(pressed, _p7);
			if (_p6 === true) {
				return _elm_lang$core$Json_Decode$succeed(_p5._1);
			} else {
				return _elm_lang$core$Json_Decode$fail(
					A2(_elm_lang$core$Basics_ops['++'], 'not ', _p7));
			}
		},
		A2(_elm_lang$core$Json_Decode$field, 'key', _elm_lang$core$Json_Decode$string));
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$custom, customDecoder, 'keypress'));
};
var _danielnarey$elm_modular_ui$Ui_Action$onKeyDown = function (_p8) {
	var _p9 = _p8;
	var _p11 = _p9._0;
	var customDecoder = A2(
		_elm_lang$core$Json_Decode$andThen,
		function (pressed) {
			var _p10 = _elm_lang$core$Native_Utils.eq(pressed, _p11);
			if (_p10 === true) {
				return _elm_lang$core$Json_Decode$succeed(_p9._1);
			} else {
				return _elm_lang$core$Json_Decode$fail(
					A2(_elm_lang$core$Basics_ops['++'], 'not ', _p11));
			}
		},
		A2(_elm_lang$core$Json_Decode$field, 'key', _elm_lang$core$Json_Decode$string));
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$custom, customDecoder, 'keydown'));
};
var _danielnarey$elm_modular_ui$Ui_Action$onMouseOut = function (msg) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'mouseout'));
};
var _danielnarey$elm_modular_ui$Ui_Action$onMouseOver = function (msg) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'mouseover'));
};
var _danielnarey$elm_modular_ui$Ui_Action$onClick = function (msg) {
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$action, msg, 'click'));
};
var _danielnarey$elm_modular_ui$Ui_Action$addList = F2(
	function (tupleList, element) {
		var toAttribute = function (_p12) {
			var _p13 = _p12;
			return A2(_danielnarey$elm_semantic_dom$Dom_Event$action, _p13._1, _p13._0);
		};
		var newAttributes = A2(_elm_lang$core$List$map, toAttribute, tupleList);
		return _elm_lang$core$Native_Utils.update(
			element,
			{
				attributes: A2(_elm_lang$core$Basics_ops['++'], element.attributes, newAttributes)
			});
	});
var _danielnarey$elm_modular_ui$Ui_Action$add = function (_p14) {
	var _p15 = _p14;
	return _danielnarey$elm_semantic_dom$Dom_Element$addAttribute(
		A2(_danielnarey$elm_semantic_dom$Dom_Event$action, _p15._1, _p15._0));
};

var _danielnarey$elm_color_math$View_Panels$controlGroupLabel = function (_p0) {
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'panel-label',
		A2(
			_danielnarey$elm_modular_ui$Ui$container,
			'div',
			_elm_lang$core$List$singleton(
				A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'p', _p0))));
};
var _danielnarey$elm_color_math$View_Panels$oneColumn = function (output) {
	var displayedControls = A2(
		_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['|>.'],
		output,
		function () {
			var _p1 = output.visibleTab;
			if (_p1.ctor === 'BaseColor') {
				return {
					ctor: '::',
					_0: _elm_lang$core$Basics$always(
						_danielnarey$elm_color_math$View_Panels$controlGroupLabel('HSLA Input')),
					_1: {
						ctor: '::',
						_0: _danielnarey$elm_color_math$View_Panels_BaseColor$hsla,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$always(
								_danielnarey$elm_color_math$View_Panels$controlGroupLabel('RGBA Input')),
							_1: {
								ctor: '::',
								_0: _danielnarey$elm_color_math$View_Panels_BaseColor$rgba,
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Basics$always(
										_danielnarey$elm_color_math$View_Panels$controlGroupLabel('Hex Code Input')),
									_1: {
										ctor: '::',
										_0: _danielnarey$elm_color_math$View_Panels_BaseColor$hex,
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Basics$always(
												_danielnarey$elm_color_math$View_Panels$controlGroupLabel('HTML5 Color Picker')),
											_1: {
												ctor: '::',
												_0: _danielnarey$elm_color_math$View_Panels_BaseColor$html5,
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				};
			} else {
				return {
					ctor: '::',
					_0: _elm_lang$core$Basics$always(
						_danielnarey$elm_color_math$View_Panels$controlGroupLabel('HSLA Output')),
					_1: {
						ctor: '::',
						_0: _danielnarey$elm_color_math$View_Panels_Output$resultHsla,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$always(
								_danielnarey$elm_color_math$View_Panels$controlGroupLabel('Adjust Hue')),
							_1: {
								ctor: '::',
								_0: _danielnarey$elm_color_math$View_Panels_Adjustments$hue,
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Basics$always(
										_danielnarey$elm_color_math$View_Panels$controlGroupLabel('Adjust Saturation')),
									_1: {
										ctor: '::',
										_0: _danielnarey$elm_color_math$View_Panels_Adjustments$saturation,
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Basics$always(
												_danielnarey$elm_color_math$View_Panels$controlGroupLabel('Adjust Lightness')),
											_1: {
												ctor: '::',
												_0: _danielnarey$elm_color_math$View_Panels_Adjustments$lightness,
												_1: {
													ctor: '::',
													_0: _elm_lang$core$Basics$always(
														_danielnarey$elm_color_math$View_Panels$controlGroupLabel('Adjust Alpha')),
													_1: {
														ctor: '::',
														_0: _danielnarey$elm_color_math$View_Panels_Adjustments$alpha,
														_1: {
															ctor: '::',
															_0: _elm_lang$core$Basics$always(_danielnarey$elm_color_math$View_Panels_Adjustments$reset),
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				};
			}
		}());
	var panel = A3(
		_danielnarey$elm_color_math$Component_Panel$insertBlocks,
		1,
		{
			ctor: '::',
			_0: _danielnarey$elm_color_math$View_Panels_Output$splitColor(output),
			_1: {ctor: '[]'}
		},
		_danielnarey$elm_color_math$Component_Panel$container(
			{
				heading: 'Demo',
				tabs: {
					ctor: '::',
					_0: A2(
						_danielnarey$elm_modular_ui$Ui_Action$onClick,
						_danielnarey$elm_color_math$Msg$ToggleVisibleTab,
						A2(
							_danielnarey$elm_modular_ui$Ui_Modifier$conditional,
							{
								ctor: '_Tuple2',
								_0: 'is-active',
								_1: _elm_lang$core$Native_Utils.eq(output.visibleTab, _danielnarey$elm_color_math$Tab$BaseColor)
							},
							A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'a', 'Base Color'))),
					_1: {
						ctor: '::',
						_0: A2(
							_danielnarey$elm_modular_ui$Ui_Action$onClick,
							_danielnarey$elm_color_math$Msg$ToggleVisibleTab,
							A2(
								_danielnarey$elm_modular_ui$Ui_Modifier$conditional,
								{
									ctor: '_Tuple2',
									_0: 'is-active',
									_1: _elm_lang$core$Native_Utils.eq(output.visibleTab, _danielnarey$elm_color_math$Tab$Adjustments)
								},
								A2(_danielnarey$elm_modular_ui$Ui$textWrapper, 'a', 'Adjustments'))),
						_1: {ctor: '[]'}
					}
				},
				blocks: displayedControls
			}));
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$addList,
		{
			ctor: '::',
			_0: 'is-mobile',
			_1: {
				ctor: '::',
				_0: 'is-centered',
				_1: {ctor: '[]'}
			}
		},
		_danielnarey$elm_color_math$Component_Grid$singleColumn(panel));
};
var _danielnarey$elm_color_math$View_Panels$twoColumns = function (output) {
	var panelRight = _danielnarey$elm_color_math$Component_Panel$container(
		{
			heading: 'Adjustments',
			tabs: {ctor: '[]'},
			blocks: A2(
				_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['|>.'],
				output,
				{
					ctor: '::',
					_0: _danielnarey$elm_color_math$View_Panels_Output$resultColor,
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$always(
							_danielnarey$elm_color_math$View_Panels$controlGroupLabel('HSLA Output')),
						_1: {
							ctor: '::',
							_0: _danielnarey$elm_color_math$View_Panels_Output$resultHsla,
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$always(
									_danielnarey$elm_color_math$View_Panels$controlGroupLabel('Adjust Hue')),
								_1: {
									ctor: '::',
									_0: _danielnarey$elm_color_math$View_Panels_Adjustments$hue,
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$always(
											_danielnarey$elm_color_math$View_Panels$controlGroupLabel('Adjust Saturation')),
										_1: {
											ctor: '::',
											_0: _danielnarey$elm_color_math$View_Panels_Adjustments$saturation,
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Basics$always(
													_danielnarey$elm_color_math$View_Panels$controlGroupLabel('Adjust Lightness')),
												_1: {
													ctor: '::',
													_0: _danielnarey$elm_color_math$View_Panels_Adjustments$lightness,
													_1: {
														ctor: '::',
														_0: _elm_lang$core$Basics$always(
															_danielnarey$elm_color_math$View_Panels$controlGroupLabel('Adjust Alpha')),
														_1: {
															ctor: '::',
															_0: _danielnarey$elm_color_math$View_Panels_Adjustments$alpha,
															_1: {
																ctor: '::',
																_0: _elm_lang$core$Basics$always(_danielnarey$elm_color_math$View_Panels_Adjustments$reset),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				})
		});
	var panelLeft = _danielnarey$elm_color_math$Component_Panel$container(
		{
			heading: 'Base Color',
			tabs: {ctor: '[]'},
			blocks: A2(
				_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['|>.'],
				output,
				{
					ctor: '::',
					_0: _danielnarey$elm_color_math$View_Panels_Output$baseColor,
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$always(
							_danielnarey$elm_color_math$View_Panels$controlGroupLabel('HSLA Input')),
						_1: {
							ctor: '::',
							_0: _danielnarey$elm_color_math$View_Panels_BaseColor$hsla,
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$always(
									_danielnarey$elm_color_math$View_Panels$controlGroupLabel('RGBA Input')),
								_1: {
									ctor: '::',
									_0: _danielnarey$elm_color_math$View_Panels_BaseColor$rgba,
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$always(
											_danielnarey$elm_color_math$View_Panels$controlGroupLabel('Hex Code Input')),
										_1: {
											ctor: '::',
											_0: _danielnarey$elm_color_math$View_Panels_BaseColor$hex,
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Basics$always(
													_danielnarey$elm_color_math$View_Panels$controlGroupLabel('HTML5 Color Picker')),
												_1: {
													ctor: '::',
													_0: _danielnarey$elm_color_math$View_Panels_BaseColor$html5,
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				})
		});
	return A2(
		_danielnarey$elm_modular_ui$Ui_Modifier$add,
		'is-centered',
		_danielnarey$elm_color_math$Component_Grid$columns(
			A2(
				_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
				A2(
					_danielnarey$elm_toolkit$Toolkit_List_Operators_ops['.|>'],
					{
						ctor: '::',
						_0: panelLeft,
						_1: {
							ctor: '::',
							_0: panelRight,
							_1: {ctor: '[]'}
						}
					},
					_danielnarey$elm_color_math$Component_Grid$column),
				_danielnarey$elm_modular_ui$Ui_Modifier$add('is-half'))));
};

var _danielnarey$elm_color_math$View_Footer$component = function () {
	var footerText = A2(
		_danielnarey$elm_modular_ui$Ui$textWrapper,
		'p',
		_elm_lang$core$String$concat(
			{
				ctor: '::',
				_0: _elm_lang$core$String$fromChar(
					_elm_lang$core$Char$fromCode(169)),
				_1: {
					ctor: '::',
					_0: ' 2018 Daniel C. Narey',
					_1: {ctor: '[]'}
				}
			}));
	return _danielnarey$elm_color_math$Component_Layout$footer(
		A2(
			_danielnarey$elm_modular_ui$Ui_Modifier$addList,
			{
				ctor: '::',
				_0: 'content',
				_1: {
					ctor: '::',
					_0: 'has-text-centered',
					_1: {
						ctor: '::',
						_0: 'has-text-light',
						_1: {ctor: '[]'}
					}
				}
			},
			A2(
				_danielnarey$elm_toolkit$Toolkit_List_Operators_ops[':|>'],
				footerText,
				_danielnarey$elm_modular_ui$Ui$container('div'))));
}();

var _danielnarey$elm_color_math$Responsive$Landscape = {ctor: 'Landscape'};
var _danielnarey$elm_color_math$Responsive$Portrait = {ctor: 'Portrait'};
var _danielnarey$elm_color_math$Responsive$orientation = function (window) {
	var ratio = A2(
		_elm_lang$core$Basics$uncurry,
		F2(
			function (x, y) {
				return x / y;
			}),
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Basics$toFloat(window.width),
			_1: _elm_lang$core$Basics$toFloat(window.height)
		});
	return (_elm_lang$core$Native_Utils.cmp(ratio, 1) < 0) ? _danielnarey$elm_color_math$Responsive$Portrait : _danielnarey$elm_color_math$Responsive$Landscape;
};
var _danielnarey$elm_color_math$Responsive$LandscapeWide = {ctor: 'LandscapeWide'};
var _danielnarey$elm_color_math$Responsive$LandscapeTall = {ctor: 'LandscapeTall'};
var _danielnarey$elm_color_math$Responsive$PortraitWide = {ctor: 'PortraitWide'};
var _danielnarey$elm_color_math$Responsive$PortraitTall = {ctor: 'PortraitTall'};
var _danielnarey$elm_color_math$Responsive$aspectRatioCustom = F2(
	function (args, window) {
		var ratio = A2(
			_elm_lang$core$Basics$uncurry,
			F2(
				function (x, y) {
					return x / y;
				}),
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Basics$toFloat(window.width),
				_1: _elm_lang$core$Basics$toFloat(window.height)
			});
		return (_elm_lang$core$Native_Utils.cmp(ratio, args.portrait) < 0) ? _danielnarey$elm_color_math$Responsive$PortraitTall : (((_elm_lang$core$Native_Utils.cmp(ratio, args.portrait) > -1) && (_elm_lang$core$Native_Utils.cmp(ratio, 1) < 0)) ? _danielnarey$elm_color_math$Responsive$PortraitWide : (((_elm_lang$core$Native_Utils.cmp(ratio, 1) > -1) && (_elm_lang$core$Native_Utils.cmp(ratio, args.landscape) < 1)) ? _danielnarey$elm_color_math$Responsive$LandscapeTall : _danielnarey$elm_color_math$Responsive$LandscapeWide));
	});
var _danielnarey$elm_color_math$Responsive$aspectRatio = _danielnarey$elm_color_math$Responsive$aspectRatioCustom(
	{portrait: 3 / 4, landscape: 4 / 3});
var _danielnarey$elm_color_math$Responsive$Large = {ctor: 'Large'};
var _danielnarey$elm_color_math$Responsive$Medium = {ctor: 'Medium'};
var _danielnarey$elm_color_math$Responsive$Small = {ctor: 'Small'};
var _danielnarey$elm_color_math$Responsive$pixelWidthCustom = F2(
	function (args, window) {
		var _p0 = _danielnarey$elm_color_math$Responsive$orientation(window);
		if (_p0.ctor === 'Portrait') {
			return (_elm_lang$core$Native_Utils.cmp(
				window.width,
				_elm_lang$core$Tuple$first(args.portrait)) < 1) ? _danielnarey$elm_color_math$Responsive$Small : ((_elm_lang$core$Native_Utils.cmp(
				window.width,
				_elm_lang$core$Tuple$second(args.portrait)) < 1) ? _danielnarey$elm_color_math$Responsive$Medium : _danielnarey$elm_color_math$Responsive$Large);
		} else {
			return (_elm_lang$core$Native_Utils.cmp(
				window.width,
				_elm_lang$core$Tuple$first(args.landscape)) < 1) ? _danielnarey$elm_color_math$Responsive$Small : ((_elm_lang$core$Native_Utils.cmp(
				window.width,
				_elm_lang$core$Tuple$second(args.landscape)) < 1) ? _danielnarey$elm_color_math$Responsive$Medium : _danielnarey$elm_color_math$Responsive$Large);
		}
	});
var _danielnarey$elm_color_math$Responsive$pixelWidth = _danielnarey$elm_color_math$Responsive$pixelWidthCustom(
	{
		portrait: {ctor: '_Tuple2', _0: 640, _1: 960},
		landscape: {ctor: '_Tuple2', _0: 1138, _1: 1707}
	});

var _danielnarey$elm_semantic_dom$Dom_Lazy$eval = _elm_lang$virtual_dom$VirtualDom$lazy;
var _danielnarey$elm_semantic_dom$Dom_Lazy$toNode = _elm_lang$virtual_dom$VirtualDom$lazy(_danielnarey$elm_semantic_dom$Dom_Element$toNode);
var _danielnarey$elm_semantic_dom$Dom_Lazy$container = F2(
	function (htmlTag, childList) {
		return {
			tag: htmlTag,
			id: '',
			attributes: {ctor: '[]'},
			classes: {ctor: '[]'},
			children: A2(_elm_lang$core$List$map, _danielnarey$elm_semantic_dom$Dom_Lazy$toNode, childList),
			text: '',
			namespace: '',
			keys: {ctor: '[]'}
		};
	});

var _danielnarey$elm_color_math$View$view = function (output) {
	var setVisibility = function () {
		var _p0 = output.isScrolled;
		if (_p0 === false) {
			return _danielnarey$elm_modular_ui$Ui_Modifier$add('is-invisible');
		} else {
			return _elm_lang$core$Basics$identity;
		}
	}();
	var responsiveLayout = function () {
		var _p1 = A2(
			_danielnarey$elm_color_math$Responsive$pixelWidthCustom,
			{
				portrait: {ctor: '_Tuple2', _0: 769, _1: 1154},
				landscape: {ctor: '_Tuple2', _0: 960, _1: 1440}
			},
			output.windowSize);
		if (_p1.ctor === 'Small') {
			return {
				ctor: '::',
				_0: function (_p2) {
					return setVisibility(
						_danielnarey$elm_color_math$View_Sticky$oneColumn(_p2));
				},
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$always(_danielnarey$elm_color_math$View_Header$component),
					_1: {
						ctor: '::',
						_0: _danielnarey$elm_color_math$View_Panels$oneColumn,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$always(_danielnarey$elm_color_math$View_Footer$component),
							_1: {ctor: '[]'}
						}
					}
				}
			};
		} else {
			return {
				ctor: '::',
				_0: function (_p3) {
					return setVisibility(
						_danielnarey$elm_color_math$View_Sticky$twoColumns(_p3));
				},
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$always(_danielnarey$elm_color_math$View_Header$component),
					_1: {
						ctor: '::',
						_0: _danielnarey$elm_color_math$View_Panels$twoColumns,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$always(_danielnarey$elm_color_math$View_Footer$component),
							_1: {ctor: '[]'}
						}
					}
				}
			};
		}
	}();
	return _danielnarey$elm_modular_ui$Ui$render(
		A2(
			_danielnarey$elm_modular_ui$Ui$setId,
			'main-container',
			A2(
				_danielnarey$elm_modular_ui$Ui_Action$add,
				{ctor: '_Tuple2', _0: 'scroll', _1: _danielnarey$elm_color_math$Msg$GetScrollPosition},
				A2(
					_danielnarey$elm_modular_ui$Ui_Style$addList,
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'max-height', _1: '100vh'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'overflow-y', _1: 'scroll'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'overflow-x', _1: 'hidden'},
								_1: {ctor: '[]'}
							}
						}
					},
					A2(
						_danielnarey$elm_semantic_dom$Dom_Lazy$container,
						'div',
						A2(_danielnarey$elm_toolkit$Toolkit_Function_Operators_ops['|>.'], output, responsiveLayout))))));
};

var _danielnarey$elm_semantic_dom$Dom_Program$customWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _danielnarey$elm_semantic_dom$Dom_Program$runWithFlags = F2(
	function (initializer, programSetup) {
		var _p0 = programSetup.init;
		var initialModel = _p0._0;
		var loadCmd = _p0._1;
		return _elm_lang$virtual_dom$VirtualDom$programWithFlags(
			{
				init: function (_p1) {
					return A3(
						_elm_lang$core$Basics$flip,
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							}),
						loadCmd,
						A2(
							_elm_lang$core$Maybe$withDefault,
							initialModel,
							initializer(_p1)));
				},
				update: programSetup.update,
				subscriptions: programSetup.subscriptions,
				view: programSetup.view
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$subscribeWithParams = F2(
	function (subFunction, programSetup) {
		return _elm_lang$core$Native_Utils.update(
			programSetup,
			{subscriptions: subFunction});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$subscribe = F2(
	function (subs, programSetup) {
		return _elm_lang$core$Native_Utils.update(
			programSetup,
			{
				subscriptions: _elm_lang$core$Basics$always(
					_elm_lang$core$Platform_Sub$batch(subs))
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$updateWithCmds = F2(
	function (updateFunction, programSetup) {
		return _elm_lang$core$Native_Utils.update(
			programSetup,
			{update: updateFunction});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$onLoad = F2(
	function (cmds, programSetup) {
		return _elm_lang$core$Native_Utils.update(
			programSetup,
			{
				init: A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_elm_lang$core$Platform_Cmd$batch(cmds),
					_elm_lang$core$Tuple$first(programSetup.init))
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$run = _elm_lang$virtual_dom$VirtualDom$program;
var _danielnarey$elm_semantic_dom$Dom_Program$update = F2(
	function (updateFunction, programSetup) {
		return _elm_lang$core$Native_Utils.update(
			programSetup,
			{
				update: F2(
					function (msg, model) {
						return A3(
							_elm_lang$core$Basics$flip,
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							_elm_lang$core$Platform_Cmd$none,
							A2(updateFunction, msg, model));
					})
			});
	});
var _danielnarey$elm_semantic_dom$Dom_Program$setup = F2(
	function (viewFunction, initialModel) {
		return {
			init: {ctor: '_Tuple2', _0: initialModel, _1: _elm_lang$core$Platform_Cmd$none},
			update: _elm_lang$core$Basics$always(
				A2(
					_elm_lang$core$Basics$flip,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_elm_lang$core$Platform_Cmd$none)),
			subscriptions: _elm_lang$core$Basics$always(_elm_lang$core$Platform_Sub$none),
			view: viewFunction
		};
	});
var _danielnarey$elm_semantic_dom$Dom_Program$Setup = F4(
	function (a, b, c, d) {
		return {init: a, update: b, subscriptions: c, view: d};
	});

var _danielnarey$elm_color_math$Main$main = _danielnarey$elm_semantic_dom$Dom_Program$run(
	A2(
		_danielnarey$elm_semantic_dom$Dom_Program$subscribe,
		{
			ctor: '::',
			_0: _elm_lang$window$Window$resizes(_danielnarey$elm_color_math$Msg$UpdateWindowSize),
			_1: {ctor: '[]'}
		},
		A2(
			_danielnarey$elm_semantic_dom$Dom_Program$onLoad,
			{
				ctor: '::',
				_0: A2(_elm_lang$core$Task$perform, _danielnarey$elm_color_math$Msg$UpdateWindowSize, _elm_lang$window$Window$size),
				_1: {ctor: '[]'}
			},
			A2(
				_danielnarey$elm_semantic_dom$Dom_Program$updateWithCmds,
				_danielnarey$elm_color_math$Update$update,
				A2(
					_danielnarey$elm_semantic_dom$Dom_Program$setup,
					_danielnarey$elm_color_math$View$view,
					_danielnarey$elm_color_math$Model$initial(
						A3(_elm_lang$core$Color$rgb, 128, 217, 38)))))))();

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _danielnarey$elm_color_math$Main$main !== 'undefined') {
    _danielnarey$elm_color_math$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

