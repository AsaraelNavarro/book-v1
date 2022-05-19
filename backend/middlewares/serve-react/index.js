'use strict';

/**
 * Module dependencies
 */

// Node.js core.
const fs = require('fs');
const path = require('path');
const koaStatic = require('koa-static');

/**
 * Serve react hook
 */

module.exports = strapi => {

    return {
        /**
         * Initialize the hook
         */

        async initialize() {
            const { maxAge, path: publicPath } = strapi.config.middleware.settings.public;
            const staticDir = path.resolve(strapi.dir, publicPath || strapi.config.paths.static);

            strapi.router.get(
                '/*',
                async (ctx, next) => {
                    const parse = path.parse(ctx.url);
                    ctx.url = path.join(parse.dir, parse.base);

                    await next();
                },
                koaStatic(staticDir, {
                    maxage: maxAge,
                    defer: false, // do not allow other middleware to serve content before this one
                })
            );

            // if no resource is matched by koa-static, just default to serve index file
            // useful for SPA routes
            strapi.router.get('*', ctx => {
                ctx.type = 'html';
                ctx.body = fs.createReadStream(path.join(staticDir + '/index.html'));
            });
        },
    };
};
