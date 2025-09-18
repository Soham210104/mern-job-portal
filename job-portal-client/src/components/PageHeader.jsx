
import React from 'react'

const PageHeader = ({ title, path }) => {
  return (
    <header className="py-16 mt-3 bg-gradient-to-r from-blue/10 to-blue/5 rounded flex items-center justify-center shadow">
      <div>
        <h2 className="text-4xl text-blue font-bold mb-2 text-center drop-shadow-lg">{title}</h2>
        <nav aria-label="Breadcrumb">
          <p className="text-sm text-center text-primary/80">
            <a href="/" className="hover:underline text-blue font-semibold">Home</a> / <span>{path}</span>
          </p>
        </nav>
      </div>
    </header>
  )
}

export default PageHeader