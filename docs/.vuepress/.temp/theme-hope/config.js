import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/InSUEP/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "D:/InSUEP/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, SocialMedias, Timeline, setupBlog } from "D:/InSUEP/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "D:/InSUEP/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";

import "D:/InSUEP/node_modules/vuepress-theme-hope/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/InSUEP/node_modules/vuepress-theme-hope/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/InSUEP/node_modules/vuepress-theme-hope/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/InSUEP/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("BloggerInfo", BloggerInfo);
    app.component("SocialMedias", SocialMedias);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
  }
};
