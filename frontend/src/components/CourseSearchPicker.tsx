import { useEffect, useMemo, useState } from 'react'
import { formatCourseCode, normalizeCourseCode } from '../lib/courseCodes'
import type { Course } from '../types/course'

export function getCoursePickerLabel(course: Pick<Course, 'code' | 'name'>) {
  return `${formatCourseCode(course.code)} - ${course.name}`
}

export function filterCourseOptions(courses: Course[], query: string, limit = 8) {
  const normalizedQuery = normalizeCourseCode(query)

  return courses
    .filter((course) => {
      const courseText = normalizeCourseCode(
        `${course.code} ${formatCourseCode(course.code)} ${course.name} ${getCoursePickerLabel(course)}`,
      )

      return normalizedQuery === '' || courseText.includes(normalizedQuery)
    })
    .slice(0, limit)
}

type CourseSearchPickerProps = {
  allowEmptyChoose?: boolean
  courses: Course[]
  inputId: string
  label: string
  listboxId: string
  onChange: (value: string) => void
  onChoose: (courseCode: string) => void
  placeholder: string
  value: string
  selectedCourseCode?: string
}

export function CourseSearchPicker({
  allowEmptyChoose = true,
  courses,
  inputId,
  label,
  listboxId,
  onChange,
  onChoose,
  placeholder,
  selectedCourseCode,
  value,
}: CourseSearchPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const filteredCourseOptions = useMemo(
    () => filterCourseOptions(courses, value),
    [courses, value],
  )

  useEffect(() => {
    setHighlightedIndex((currentIndex) =>
      filteredCourseOptions.length === 0
        ? 0
        : Math.min(currentIndex, filteredCourseOptions.length - 1),
    )
  }, [filteredCourseOptions.length])

  function chooseCourse(courseCode: string) {
    if (!allowEmptyChoose && !value.trim()) {
      return
    }

    onChoose(courseCode)
    setIsOpen(false)
    setHighlightedIndex(0)
  }

  return (
    <div
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false)
        }
      }}
    >
      <label className="text-sm font-medium text-slate-600" htmlFor={inputId}>
        {label}
      </label>
      <input
        autoComplete="off"
        className="mt-1 h-11 w-full rounded-xl border border-slate-300 bg-white px-3 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        id={inputId}
        onChange={(event) => {
          onChange(event.target.value)
          setIsOpen(true)
          setHighlightedIndex(0)
        }}
        onFocus={(event) => {
          setIsOpen(true)
          event.currentTarget.select()
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault()
            setIsOpen(true)
            setHighlightedIndex((currentIndex) =>
              filteredCourseOptions.length === 0
                ? 0
                : (currentIndex + 1) % filteredCourseOptions.length,
            )
          }

          if (event.key === 'ArrowUp') {
            event.preventDefault()
            setIsOpen(true)
            setHighlightedIndex((currentIndex) =>
              filteredCourseOptions.length === 0
                ? 0
                : (currentIndex - 1 + filteredCourseOptions.length) %
                  filteredCourseOptions.length,
            )
          }

          if (event.key === 'Enter') {
            event.preventDefault()
            const course = filteredCourseOptions[highlightedIndex] ?? filteredCourseOptions[0]

            if (course) {
              chooseCourse(course.code)
            }
          }

          if (event.key === 'Escape') {
            event.preventDefault()
            setIsOpen(false)
          }
        }}
        placeholder={placeholder}
        role="combobox"
        aria-autocomplete="list"
        aria-controls={listboxId}
        aria-expanded={isOpen}
        value={value}
      />
      {isOpen ? (
        <div
          className="absolute z-20 mt-2 max-h-80 w-full overflow-y-auto rounded-xl border border-slate-200 bg-white py-2 shadow-lg"
          id={listboxId}
          role="listbox"
        >
          {filteredCourseOptions.length === 0 ? (
            <div className="px-3 py-2 text-sm text-slate-500">No courses match your search.</div>
          ) : (
            filteredCourseOptions.map((course, index) => (
              <button
                className={`flex w-full items-start gap-3 px-3 py-2 text-left transition ${
                  index === highlightedIndex
                    ? 'bg-emerald-50 text-emerald-950'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                key={course.code}
                onMouseDown={(event) => {
                  event.preventDefault()
                  chooseCourse(course.code)
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
                role="option"
                aria-selected={course.code === selectedCourseCode}
                type="button"
              >
                <span className="min-w-16 text-sm font-semibold text-emerald-700">
                  {formatCourseCode(course.code)}
                </span>
                <span className="text-sm">{course.name}</span>
              </button>
            ))
          )}
        </div>
      ) : null}
    </div>
  )
}
