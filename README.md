# UWChoose

UWChoose is a course planning app for University of Waterloo Math students. It helps students search courses, understand prerequisites, record completed courses through the planner, check course eligibility, track a sample program, and plan future terms. The frontend still stores student plans in the browser, with optional backend share-code save/load for planner backups.

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
- Node.js + Express backend API
- Docker + Nginx for production static serving

The backend exposes course/program data and optional share-code planner save/load. It does not have accounts or automatic cloud sync yet.

## Environment Variables

Frontend:

```bash
VITE_API_BASE_URL=http://localhost:3000
```

Backend:

```bash
PORT=3000
CORS_ORIGINS=http://localhost:5173
PLAN_STORE_PATH=./data/plans.json
```

For production, set `VITE_API_BASE_URL` to the deployed backend URL, set `CORS_ORIGINS` to the deployed frontend URL, and set `PLAN_STORE_PATH` to a persistent storage path.

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
- Interactive prerequisite graph with a local prerequisite/proceeding-course tree
- Data validation script for course and program data integrity
- Backend API for courses, programs, and shareable planner backups

## Run Locally

Install frontend dependencies:

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

Install backend dependencies:

```bash
cd backend
npm install
```

Start the backend API:

```bash
npm run dev
```

Start the backend with the production command:

```bash
npm run start
```

Open:

```text
http://localhost:3000/health
```

Saved planner backups are written under `backend/data/plans.json` during local backend use. This file is intentionally ignored by git.

## Verification

Run the full frontend check:

```bash
cd frontend
npm run lint
npm run test
npm run validate:data
npm run build
```

Run the backend check:

```bash
cd backend
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

## Deploy Beta

Deploy the backend first, then deploy the frontend with the backend URL.

### Backend On Render

Use the root `render.yaml` blueprint, or create a Render web service manually:

- Root directory: `backend`
- Build command: `npm ci`
- Start command: `npm run start`
- Runtime: Node 22
- Persistent disk: mount `/var/data`

Set backend environment variables:

```bash
PLAN_STORE_PATH=/var/data/plans.json
CORS_ORIGINS=https://your-uwchoose-frontend.vercel.app
```

After deployment, open:

```text
https://your-render-service.onrender.com/health
```

Expected response:

```json
{"status":"ok","courses":38,"programs":1}
```

### Frontend On Vercel

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

5. Set the environment variable:

```bash
VITE_API_BASE_URL=https://your-render-service.onrender.com
```

After deployment, update Render `CORS_ORIGINS` with the final Vercel URL and add the production URL to the **Live Demo** section.

### Beta Smoke Test

After both services are deployed:

- Open the Render `/health` endpoint and confirm status is `ok`.
- Open the deployed frontend and confirm no local-catalog fallback banner appears.
- Search courses and open a course detail page.
- Add a term in the planner and save online.
- Refresh the browser, load the returned share code, and confirm the planner restores.
- Restart or redeploy the backend and confirm the same share code still loads.
- Try an unknown Origin against the backend and confirm CORS blocks it.

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

The backend imports these same catalog files, so frontend and backend catalog data stay in sync while there is no database.

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
- No user accounts or cloud sync yet.
- User data is stored in browser localStorage.
- Online planner save/load uses unguessable share codes, not accounts or authenticated privacy.
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

- Account-backed plan sync
- Program data API
- Database-backed course data
- Backend with PostgreSQL and Prisma
- Google login
- Cloud sync
- Admin course editing
