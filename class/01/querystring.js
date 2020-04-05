const querystring = require('querystring');
const url = require('url');

let jd_qs = "keyword=空气净化器&enc=utf-8&qrst=1&rt=1&stop=1&vt=2&psort=3&stock=1&wtype=1&cod=1&click=2";

let str = querystring.parse(jd_qs);

let jd_url = "https://search.jd.com/Search?keyword=空气净化器&enc=utf-8&qrst=1&rt=1&stop=1&vt=2&psort=3&stock=1&wtype=1&cod=1&click=2";


let url_str = querystring.parse(jd_url);

let url_string = url.parse(jd_url, true);


const { query, pathname } = url.parse(jd_url, true);

console.log(query, pathname);