# ❄ Next.js && TypeScript starter template ❄

### Dev Dependencies

- **ESLint** — Configured TS and TSX linter.
- **Prettier** — Configured on save code formatter.
- **Tailwind CSS** — Utility-first CSS framework packed with classes > Integrated with Prettier for classes sorting.
- **Tailwind Styled Components** — Tailwind like styled components with classes name on multiple lines > Integrated with Prettier for classes sorting.
- **Husky** — Scripts for pre-commmits > Running ESLint + Prettier - /src
- **Jest** — JavaScript Testing Framework, focusing mainly on unit testing.
- **React Testing Library** — React DOM testing utilities that helps writing tests.

### Additional Features

- **Shadcn/UI** — Accessible and customizable components that you can copy and paste into your apps.  
  You can start adding components to your project by running `npx shadcn-ui@latest add (component)` or `pnpm dlx shadcn-ui@latest add (component)`  
  Visit https://ui.shadcn.com/docs to view the documentation and get access to the available components.
- **Light/Dark Mode** — Switch between light and dark mode in your next application.  
   To use this feature you need to import the `useTheme` from `"next-themes"` and define it as a constant in your component.  
   Then, place a mode toggle on your site to toggle between light and dark mode.  
   It must countain the property `onClick={() => setTheme("light")}` or `onClick={() => setTheme("dark")}`.  
  Here is an example:

  ```
  import { useTheme } from "next-themes"

  export function ModeToggle() {

    const { setTheme } = useTheme()

    return (
      <>
        <button
          onClick={() => {
            setTheme("light");
          }}
        >
          light mode
        </button>
      </>
    )
  }
  ```

  Visit https://ui.shadcn.com/docs/dark-mode/next for more information.

- **React Icons** — Include popular icons in your React projects easily using ES6 imports that allows you to include only the icons that your project is using.  
  For example, to use an icon from Material Design, your import would be:  
  `import { ICON_NAME } from 'react-icons/md'`.  
  After importing the icon, you can use it as a simple react component:  
  `<Icon_NAME />`.  
  Visit https://react-icons.github.io/react-icons/ to get access to the available icons.

### File Conventions

- **Error Handling** — error files that defines an error UI boundary for a route segment, allowing you to gracefully handle unexpected runtime errors. There are two types of error files available in the repository:  
  `error.tsx` > Single page error handling file.  
  `global-error.tsx` > Layout level error handling file.  
  Check out https://nextjs.org/docs/app/api-reference/file-conventions/error for more details.

### Settings Customization

- **Visual Studio Code recommended extensions** — You can see the recommended extensions by going to .vscode/extensions.json.
- **Tailwind** — You can choose between _Tailwind CSS_ and _Tailwind Styled Components_ by going to .prettierrc and modifying the Schema with the available plugins: `prettier-plugin-tailwindcss` or `prettier-plugin-tailwind-styled-components`

## Getting started

You can use this template running the following `create-next-app` command.

```
npx create-next-app *project-name or .* -e https://github.com/Gustavo-Brun/Next_Template
```

If you prefer you can clone this repository and run one of the following commands inside the project folder:

`npm install` or `pnpm install`

To view the project open `http://localhost:3000`.

Made with 💙 by Gustavo Brun
