console.log(((e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,o)=>e+=(o&=63)<36?o.toString(36):o<62?(o-26).toString(36).toUpperCase():o>62?"-":"_"),""))());
//# sourceMappingURL=index.71608d9c.js.map
