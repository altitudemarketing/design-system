export default function CatchAll({ params }: { params: { slug: string[] } }) {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
      <h1 className="text-4xl font-bold text-gray-200">Work in Progress</h1>
      <p className="text-muted">
        The page <code className="bg-gray-100 px-2 py-1 rounded text-sm mx-1">/{params.slug.join('/')}</code> is under construction.
      </p>
      <p className="text-sm text-muted">
        Please refer to the Overview page for the current design system status.
      </p>
    </div>
  );
}

