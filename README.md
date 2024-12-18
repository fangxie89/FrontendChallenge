# Frontend Challenge

## Update backend api point 

Use a self created backend, you can find it in https://github.com/fangxie89/frontendChallengeServer, it's more stable and easier than restapiexample to management.

## Project Directory Structure

```
├── CONTRIBUTING.md
├── README.md
├── commitlint.config.js
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── src
│   ├── app
│   │   ├── employee
│   │   │   ├── [employeeId]
│   │   │   │   ├── default.tsx
│   │   │   │   ├── edit            
│   │   │   │   │   └── page.tsx        //edit page
│   │   │   │   ├── not-found.tsx       // not found page
│   │   │   │   └── page.tsx            // detail page
│   │   │   ├── create
│   │   │   │   └── page.tsx            // create page
│   │   │   └── layout.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx                    // list page
│   ├── core
│   │   └── formatters
│   │       └── employee.formatter.ts
│   ├── data
│   │   └── datasources
│   │       └── employee.datasource.ts
│   ├── domain
│   │   ├── contracts
│   │   │   └── employeeDatasource.contract.ts
│   │   ├── hooks
│   │   │   └── useGetEmployeeList.hook.ts
│   │   ├── models
│   │   │   └── employee.model.ts
│   │   ├── params
│   │   │   └── employee.param.ts
│   │   └── services
│   │       ├── actions.ts                  // server actions
│   │       └── employee.service.ts
│   └── ui
│       └── components                      // ui components
│           ├── CreateForm.tsx
│           ├── EditForm.tsx
│           ├── EmployeeCard.tsx
│           ├── EmployeeList.tsx
│           ├── EmployeeListTable.tsx
│           └── buttons.tsx
├── tailwind.config.ts
└── tsconfig.json
```

## Project Description

This project is a frontend challenge for a job application. It is a Next.js application that provides a list of employees and allows users to create, edit, and delete employees. The application uses TypeScript and Tailwind CSS for styling.

### Optimization details:

- Use Next.js server actions to handle form submissions. 
- Place client-side components as much as possible at the leaf nodes, and move requests to client-side components.
- Optimize the employee.datasource.ts file by extracting common fetch functionality into private methods.