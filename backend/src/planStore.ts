import { randomUUID } from 'node:crypto'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { SavedPlanProfile, StudentPlanBackup } from '../../frontend/src/types/student.ts'

export type SavedPlan = {
  id: string
  plan: StudentPlanBackup
  profile?: SavedPlanProfile
  createdAt: string
  updatedAt: string
}

type PlanStoreFile = {
  plans: Record<string, SavedPlan>
}

function getDefaultPlanFilePath() {
  return process.env.PLAN_STORE_PATH?.trim() ||
    resolve(dirname(fileURLToPath(import.meta.url)), '..', 'data', 'plans.json')
}

export type PlanStore = {
  createPlan: (plan: StudentPlanBackup, profile?: SavedPlanProfile) => Promise<SavedPlan>
  getPlan: (id: string) => Promise<SavedPlan | undefined>
  updatePlan: (
    id: string,
    plan: StudentPlanBackup,
    profile?: SavedPlanProfile,
  ) => Promise<SavedPlan | undefined>
}

function createEmptyStoreFile(): PlanStoreFile {
  return { plans: {} }
}

async function readStoreFile(filePath: string): Promise<PlanStoreFile> {
  try {
    const rawFile = await readFile(filePath, 'utf8')
    const parsed = JSON.parse(rawFile) as Partial<PlanStoreFile>

    if (!parsed || typeof parsed !== 'object' || !parsed.plans || typeof parsed.plans !== 'object') {
      return createEmptyStoreFile()
    }

    return {
      plans: parsed.plans,
    }
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return createEmptyStoreFile()
    }

    throw error
  }
}

async function writeStoreFile(filePath: string, storeFile: PlanStoreFile) {
  await mkdir(dirname(filePath), { recursive: true })
  await writeFile(filePath, `${JSON.stringify(storeFile, null, 2)}\n`, 'utf8')
}

export function createFilePlanStore(
  filePath = getDefaultPlanFilePath(),
): PlanStore {
  return {
    async createPlan(plan, profile) {
      const storeFile = await readStoreFile(filePath)
      const now = new Date().toISOString()
      const savedPlan: SavedPlan = {
        id: randomUUID(),
        plan,
        profile,
        createdAt: now,
        updatedAt: now,
      }

      storeFile.plans[savedPlan.id] = savedPlan
      await writeStoreFile(filePath, storeFile)

      return savedPlan
    },

    async getPlan(id) {
      const storeFile = await readStoreFile(filePath)

      return storeFile.plans[id]
    },

    async updatePlan(id, plan, profile) {
      const storeFile = await readStoreFile(filePath)
      const existingPlan = storeFile.plans[id]

      if (!existingPlan) {
        return undefined
      }

      const savedPlan: SavedPlan = {
        ...existingPlan,
        plan,
        profile: profile ?? existingPlan.profile,
        updatedAt: new Date().toISOString(),
      }

      storeFile.plans[id] = savedPlan
      await writeStoreFile(filePath, storeFile)

      return savedPlan
    },
  }
}
