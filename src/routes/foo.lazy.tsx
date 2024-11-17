import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/foo')({
  component: Foo,
})

function Foo() {
  return (
    <div className="p-2">
      <h3>FOO</h3>
    </div>
  )
}
