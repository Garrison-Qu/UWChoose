import { formatCourseCode } from '../lib/courseCodes'
import type { Prerequisite } from '../types/course'

type PrerequisiteTreeProps = {
  prerequisite?: Prerequisite
}

function requirementLabel(prerequisite: Prerequisite): string {
  if (prerequisite.type === 'course') {
    const gradeLabel =
      prerequisite.minGrade === undefined ? '' : ` with grade at least ${prerequisite.minGrade}%`

    return `${formatCourseCode(prerequisite.courseCode)}${gradeLabel}`
  }

  return prerequisite.type === 'allOf' ? 'All of:' : 'One of:'
}

function TreeNode({ prerequisite }: { prerequisite: Prerequisite }) {
  if (prerequisite.type === 'course') {
    return <li>{requirementLabel(prerequisite)}</li>
  }

  return (
    <li>
      <span className="font-medium text-slate-800">{requirementLabel(prerequisite)}</span>
      <ul className="mt-2 ml-5 list-disc space-y-1 text-slate-700">
        {prerequisite.requirements.map((child, index) => (
          <TreeNode key={`${child.type}-${index}`} prerequisite={child} />
        ))}
      </ul>
    </li>
  )
}

export function PrerequisiteTree({ prerequisite }: PrerequisiteTreeProps) {
  if (!prerequisite) {
    return <p className="text-slate-600">No prerequisites.</p>
  }

  if (prerequisite.type === 'allOf') {
    return (
      <ol className="list-decimal space-y-3 pl-5 text-slate-700">
        {prerequisite.requirements.map((child, index) => (
          <TreeNode key={`${child.type}-${index}`} prerequisite={child} />
        ))}
      </ol>
    )
  }

  return (
    <ul className="list-disc space-y-2 pl-5 text-slate-700">
      <TreeNode prerequisite={prerequisite} />
    </ul>
  )
}
