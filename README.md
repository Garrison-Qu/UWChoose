# UWChoose

UWChoose is a browser-only course planning app for University of Waterloo Math students. It helps students search courses, understand prerequisites, record completed courses through the planner, check course eligibility, track a sample program, and plan future terms before a backend exists.

## Live Demo

Not deployed yet.

Recommended deployment target: Vercel. Deploy the `frontend/` folder and use `dist/` as the build output.

## Tech Stack

- React
- Vite
- TypeScript
- TailwindCSS
- React Router
- Zustand
- localStorage persistence
- Vitest
- Docker + Nginx for production static serving

No backend is included yet.

## Main Features

- Course search by code or name
- Course detail pages with prerequisite trees
- Recursive prerequisite evaluator using `allOf` / `anyOf` logic
- Completed course tracking through planner terms with localStorage persistence
- Courses page showing available, blocked, planned, completed, overridden, and already-covered courses
- Blocked reason explanations for missing prerequisites and antirequisites
- Path-to-take guidance for blocked courses
- Term planner with current term, future terms, completed tags, prerequisite overrides, PDF export, prerequisite status, and warnings
- Program progress tracker for a sample Math program
- Interactive prerequisite graph with full catalog, focused course, prerequisite, and unlocked-course views
- Data validation script for course and program data integrity

## Run Locally

Install dependencies:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local Vite URL, usually:

```text
http://localhost:5173
```

## Verification

Run the full frontend check:

```bash
cd frontend
npm run lint
npm run test
npm run validate:data
npm run build
```

Build the production Docker image from the repo root:

```bash
docker build -t uwchoose .
```

Run the Docker image:

```bash
docker run --rm -p 8080:80 uwchoose
```

Open:

```text
http://localhost:8080
```

## Deploy Frontend

For Vercel:

1. Import the GitHub repo.
2. Set the project root to `frontend`.
3. Use the build command:

```bash
npm run build
```

4. Use the output directory:

```text
dist
```

After deployment, add the production URL to the **Live Demo** section.

## Screenshots

Add screenshots after deployment or after running locally.

Suggested screenshots:

- Home page with course search
- Courses page with filters
- Course detail page showing prerequisites and path-to-take
- Prerequisite graph page
- Planner page with warnings
- Program progress page

Suggested folder:

```text
docs/screenshots/
```

Example Markdown once screenshots are added:

```md
![Home page](docs/screenshots/home.png)
![Course detail](docs/screenshots/course-detail.png)
![Planner](docs/screenshots/planner.png)
```

## Data

Course and program data is currently stored locally in TypeScript files:

- `frontend/src/data/courses.ts`
- `frontend/src/data/programs.ts`

Before adding larger batches of course data, run:

```bash
cd frontend
npm run validate:data
```

The validator checks:

- Course codes are unique
- Prerequisite course codes exist
- Antirequisite course codes exist
- Program requirement course codes exist
- Terms are only `Fall`, `Winter`, or `Spring`
- Courses do not require themselves
- Courses do not list themselves as antirequisites
- Requirement groups do not contain duplicate direct course codes

## Known Limitations

- Course data is a small manually-written sample, not the full Waterloo calendar.
- Program requirements are sample data, not official degree audits.
- No backend, user accounts, or cloud sync yet.
- User data is stored in browser localStorage.
- Path planning is a heuristic planner, not a full academic advising engine.
- Course offering terms are simplified.

## Future Plans

Near-term:

- Expand course data in small validated batches
- Improve one real-ish program tracker
- Improve PDF export and reset plan actions
- Polish planner warnings and path-to-take output
- Add more tests for edge cases

Later:

- Backend with Node.js, NestJS, PostgreSQL, and Prisma
- Save and load user plans
- Course data API
- Program data API
- Google login
- Cloud sync
- Admin course editing
