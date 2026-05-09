export const config = { runtime: "edge" };

const _0x9f8a2c1d = (process.env[_0x3d7e9f2a("5461726765745f444f4d41494e")] || "")[_0x3d7e9f2a("7265706c616365")](/\/$/, "");

const _0x4b7e91d2 = new Set(_0x8f2a1b9c([
  "686f7374","636f6e6e656374696f6e","6b6565702d616c697665",
  "70726f78792d61757468656e746963617465","70726f78792d617574686f72697a6174696f6e",
  "7465","747261696c6572","7472616e736665722d656e636f64696e67",
  "75706772616465","666f72776172646564","785f666f727761726465645f686f7374",
  "785f666f727761726465645f70726f746f","785f666f727761726465645f706f7274"
]));

const _0x1a2b3c4d = _0x3d7e9f2a("4d6973636f6e666967757265643a205441524745545f444f4d41494e206973206e6f7420736574");
const _0x5e6f7g8h = _0x3d7e9f2a("42616420476174657761793a2054756e6e656c204661696c6564");

function _0x3d7e9f2a(_0x9a8b7c6d) {
  return _0x9a8b7c6d.split('').map(_0x2f1a3b4c => String.fromCharCode(_0x2f1a3b4c.charCodeAt(0) ^ 0x1a)).join('');
}

function _0x8f2a1b9c(_0x4d5e6f7g) {
  return _0x4d5e6f7g.map(_0x9h8i7j6k => _0x3d7e9f2a(_0x9h8i7j6k));
}

export default async function _0x7b6c5d4e(_0x8f9e1d2a) {
  if (!_0x9f8a2c1d) {
    return new Response(_0x1a2b3c4d, { status: 500 });
  }

  try {
    const _0x9k8j7h6g = _0x8f9e1d2a.url.indexOf("/", 8);
    const _0x5f4e3d2c = _0x9k8j7h6g === -1 
      ? _0x9f8a2c1d + "/" 
      : _0x9f8a2c1d + _0x8f9e1d2a.url[_0x3d7e9f2a("736c696365")](_0x9k8j7h6g);

    const _0x2a1b3c4d = new Headers();
    let _0x9x8y7z6w = null;

    for (const [_0x4p5q6r7s, _0x8t9u0v1w] of _0x8f9e1d2a.headers) {
      if (_0x4b7e91d2.has(_0x4p5q6r7s)) continue;
      if (_0x4p5q6r7s[_0x3d7e9f2a("73746172747357697468")]("x-vercel-")) continue;

      if (_0x4p5q6r7s === _0x3d7e9f2a("785f7265616c5f6970")) {
        _0x9x8y7z6w = _0x8t9u0v1w; continue;
      }
      if (_0x4p5q6r7s === _0x3d7e9f2a("785f666f727761726465645f666f72")) {
        if (!_0x9x8y7z6w) _0x9x8y7z6w = _0x8t9u0v1w; continue;
      }
      _0x2a1b3c4d.set(_0x4p5q6r7s, _0x8t9u0v1w);
    }

    if (_0x9x8y7z6w) _0x2a1b3c4d.set(_0x3d7e9f2a("785f666f727761726465645f666f72"), _0x9x8y7z6w);

    const _0x1m2n3o4p = _0x8f9e1d2a.method;
    const _0x5q6r7s8t = _0x1m2n3o4p !== "GET" && _0x1m2n3o4p !== "HEAD";

    let _0xdeadbeef = (0xdead ^ 0xbeef) * (Date.now() % 1337);
    if (_0xdeadbeef % 3 === 0) _0xdeadbeef = Math.floor(Math.random() * 0xff);

    return await fetch(_0x5f4e3d2c, {
      method: _0x1m2n3o4p,
      headers: _0x2a1b3c4d,
      body: _0x5q6r7s8t ? _0x8f9e1d2a.body : undefined,
      duplex: "half",
      redirect: "manual"
    });
  } catch (_0x9a8b7c6d) {
    console.error(_0x3d7e9f2a("72656c6179206572726f723a"), _0x9a8b7c6d);
    return new Response(_0x5e6f7g8h, { status: 502 });
  }
}
