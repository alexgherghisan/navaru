const withCSS = require("@zeit/next-css");
const isProduction = process.env.NODE_ENV === "production";

const repository = "navaru";
const publicURL = isProduction
	? `https://alexgherghisan.github.io/${repository}`
	: "";
const staticURL = isProduction ? `${publicURL}/static` : "/static";
const base = isProduction ? "/navaru" : "";

const routes = {
	"/": { page: "/" },
	// "/simple": { page: "/simple" },
};

const config = {
	assetPrefix: publicURL,
	publicRuntimeConfig: {
		url: publicURL,
		static: staticURL,
		base: base,
	},
	exportPathMap: () => routes,
	webpack(config, options) {
		config.resolve.alias["~"] = config.context;
		config.output.publicPath = isProduction ? `/${repository}` : "/";

		return config;
	},
};

const cssModules = {
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: "[local]_[hash:base64:5]",
	},
};

module.exports = withCSS({
	...cssModules,
	...config,
});
