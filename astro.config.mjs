import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Емеля",
	  locales: {
		root: {
			label: 'Русский',
			lang: 'ru'
		}
	  },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Инструкции для водителей",
          autogenerate: { directory: "drivers" },
        },
        {
          label: "Инструкции для операторов",
          autogenerate: { directory: "operators" },
        },
        {
          label: "Общее",
          autogenerate: { directory: "all" },
        },
      ],
    }),
  ],
});
