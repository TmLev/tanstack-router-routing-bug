import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/project/$projectId/(manage)')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/project/$projectId/(manage)"!</div>
}
