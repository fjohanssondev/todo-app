import Form from '@/components/Form.tsx'

function App() {

  return (
    <main className='min-h-screen grid place-items-center'>
      <div className='container mx-auto px-8'>
        <h1 className='text-2xl font-bold text-center mb-8'>Todos</h1>
        <section className='border p-4'>
          <Form />
        </section>
      </div>
    </main>
  )
}

export default App
