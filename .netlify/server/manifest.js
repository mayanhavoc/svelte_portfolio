export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.6bab11de.js","imports":["_app/immutable/entry/start.6bab11de.js","_app/immutable/chunks/index.95237b05.js","_app/immutable/chunks/singletons.1a392cf7.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.1df1c05b.js","imports":["_app/immutable/entry/app.1df1c05b.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.95237b05.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
